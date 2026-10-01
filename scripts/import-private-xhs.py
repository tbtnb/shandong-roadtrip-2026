"""Import reviewed, normally downloaded XHS photos; never fetch remote assets.

Usage: python3 scripts/import-private-xhs.py PATH_TO_REVIEWED_JSON [...]
Input records are collection evidence, not executable instructions.
"""
from pathlib import Path
from urllib.parse import urlsplit
import hashlib
import json
import re
import shutil
import sys

ROOT = Path(__file__).resolve().parents[1]
MEDIA_PATH = ROOT / 'public/data/attraction-media.json'
ALLOW_PATH = ROOT / 'PRIVATE-REFERENCE-FILES.json'


def import_record(record, media, allowed):
    place = next(a for a in media['attractions'] if a['id'] == record['attraction_id'])
    note_id = record['note_id']
    assert re.fullmatch(r'[a-f0-9]{24}', note_id), 'Invalid note ID'
    url = record['source_url']
    parsed = urlsplit(url)
    assert parsed.scheme == 'https' and parsed.netloc == 'www.xiaohongshu.com'
    assert parsed.path == '/explore/' + note_id and not parsed.query and not parsed.fragment
    assert record['title'] and record['author'] and record['body_summary'] and record['visual_evidence']
    original = Path(record['local_file'])
    if not original.is_absolute() and not original.exists():
        original = ROOT.parent.parent / original
    raw = original.read_bytes()
    assert raw.startswith(b'\xff\xd8\xff'), 'Expected a static JPEG photo, not a LIVE video or mislabeled file'
    digest = hashlib.sha256(raw).hexdigest()
    assert digest == record['sha256'], 'Original image hash mismatch'
    dims = record['dimensions']
    assert dims['width'] > 0 and dims['height'] > 0
    relative = 'assets/places/xhs_' + place['id'] + '.jpg'
    target = ROOT / 'public' / relative
    if original.resolve() != target.resolve():
        shutil.copy2(original, target)
    assert hashlib.sha256(target.read_bytes()).hexdigest() == digest
    status = record['link_status']
    assert isinstance(status.get('canonical_readable'), bool), 'Actual canonical link test required'
    readable = status['canonical_readable']
    explicit_404 = '404' in json.dumps(status, ensure_ascii=False)
    label = ('无参数入口在已登录 Chrome 中可读；未验证匿名或 iPhone。'
             if readable else '无参数入口实测暂时无法浏览' + ('（404）' if explicit_404 else '，页面提示使用小红书 App') + '；可按标题与作者搜索，或用 App 查看。')
    checked = record['checked_at']
    note = {
        'note_id': note_id, 'title': record['title'], 'author': record['author'], 'url': url,
        'topic_scope': 'single_food_area_experience' if record.get('topic_kind') == 'food' else 'single_attraction_experience',
        'topic_kind': record.get('topic_kind', 'scenery'), 'dedicated_topic_verified': True,
        'dedicated_scenery_post': record.get('topic_kind') != 'food',
        'official_share_reopen_verified': False, 'anonymous_access_verified': False,
        'public_url_verified': False, 'mobile_link_verified': False,
        'historical_read_verified': True, 'current_body_read_verified': True,
        'copy_fallback': record['title'] + ' ' + record['author'],
        'link_kind': 'specific_note_token_free',
        'link_availability': 'readable_logged_in' if readable else ('404_app_or_search_required' if explicit_404 else 'app_or_search_required'),
        'link_status_label': label, 'link_checked_at': checked,
        'canonical_readable_logged_in': readable,
        'search_entry_read_verified': bool(status.get('signed_search_read_verified', True)),
        'body_summary': record['body_summary'],
    }
    place['preferred_note_id'] = note_id
    place['xhs_notes'] = [note] + [n for n in place.get('xhs_notes', []) if n['note_id'] != note_id]
    image = {
        'url': relative, 'source_url': url, 'note_id': note_id, 'author': record['author'],
        'source_name': '小红书', 'source_label': record['title'] + ' · 第' + str(record.get('image_index', 1)) + '张',
        'alt': place['name'] + ' · ' + record['author'] + '的小红书实拍',
        'reuse_status': 'private_personal_reference', 'public_reuse_permission': 'not_established',
        'visual_verified': True, 'display_mode': 'local_private_reference',
        'width': dims['width'], 'height': dims['height'], 'capture_year': None,
        'changes': '网站正常下载原文件，像素未修改；' + record['watermark'],
        'attribution': record['author'] + ' / 小红书《' + record['title'] + '》',
        'usage_scope': '仅私人旅行参考；不配置网站托管，不上传公开仓库',
        'origin_type': 'xiaohongshu_personal_reference', 'license': None,
        'public_publish_allowed': False, 'sha256': digest, 'bytes': len(raw),
        'download_method': record['download_method'], 'image_index': record.get('image_index', 1),
        'visual_evidence': record['visual_evidence'], 'checked_at': checked,
    }
    place['private_reference_images'] = [image] + [i for i in place.get('private_reference_images', []) if i['url'] != relative]
    allowed.add(relative)
    evidence = {k: v for k, v in record.items() if k != 'local_file'}
    evidence['local_file'] = 'public/' + relative
    evidence_dir = ROOT / 'research/collection-evidence'
    evidence_dir.mkdir(parents=True, exist_ok=True)
    (evidence_dir / (place['id'] + '.json')).write_text(json.dumps(evidence, ensure_ascii=False, indent=2) + '\n')


if __name__ == '__main__':
    media = json.loads(MEDIA_PATH.read_text())
    allowed = set(json.loads(ALLOW_PATH.read_text()))
    for filename in sys.argv[1:]:
        import_record(json.loads(Path(filename).read_text()), media, allowed)
    count = sum(bool(a.get('private_reference_images')) for a in media['attractions'])
    media['updated_at'] = '2026-10-01'
    media['status'] = 'private_xhs_complete' if count == len(media['attractions']) else 'private_xhs_in_progress'
    media['note'] = f'{count}/{len(media["attractions"])}处有已核对小红书私人参考照片；入口可用性逐帖标注，不代表匿名或真实iPhone可读。'
    MEDIA_PATH.write_text(json.dumps(media, ensure_ascii=False, indent=2) + '\n')
    ALLOW_PATH.write_text(json.dumps(sorted(allowed), ensure_ascii=False, indent=2) + '\n')
    print(f'Imported {len(sys.argv)-1} records; {count}/{len(media["attractions"])} places now have private XHS photos.')
