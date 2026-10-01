"""Generate the private photo ledger from the displayed photo/post pairs."""
from pathlib import Path
import json

root = Path(__file__).resolve().parents[1]
media = json.loads((root / 'public/data/attraction-media.json').read_text())
rows = []
for place in media['attractions']:
    images = place.get('private_reference_images', [])
    if not images:
        continue
    image = images[0]
    note = next(n for n in place['xhs_notes'] if n['note_id'] == image['note_id'])
    assert note['url'] == image['source_url'] and note['author'] == image['author']
    rows.append({
        'id': place['id'], 'city': place['city'], 'place': place['name'],
        'photo': 'public/' + image['url'], 'title': note['title'], 'author': note['author'],
        'url': note['url'], 'body_read': note.get('current_body_read_verified', False),
        'canonical_readable_logged_in': note['canonical_readable_logged_in'],
        'link_status': note['link_status_label'], 'checked_at': note['link_checked_at'],
        'visual_evidence': image['visual_evidence'], 'sha256': image['sha256'],
    })
target = root / 'research'
(target / 'place-sources.json').write_text(json.dumps(rows, ensure_ascii=False, indent=2) + '\n')
def cell(s):
    return str(s).replace('|', '\\|').replace('\n', ' ')
lines = [
    '# 36处地点的照片与单篇原帖', '',
    f'当前 {len(rows)}/36 处。正文通过本机已登录浏览器的站内搜索入口实际阅读；以下无参数入口另行打开检查。', '',
    '两种入口的结果分别记录。链接当前不可浏览时，卡片提供标题和作者供站内搜索；没有将搜索入口的成功结果套用于无参数链接。未验证匿名访问、真实 iPhone 或 App 内打开。', '',
    '照片为网站正常下载的原始 JPEG，未裁切、移除水印或从视频转帧。民主路与盐河巷沿用 ZIP 已有图片并重核原帖，避免重复下载。餐饮街区使用该街区实吃帖。', '',
    '| 城市 | 地点 / 原图 | 标题 | 作者 | 单篇入口 | 实测状态 / 日期 |',
    '| --- | --- | --- | --- | --- | --- |',
]
for row in rows:
    status = '已登录浏览器可读' if row['canonical_readable_logged_in'] else ('404 / App提示' if '404' in row['link_status'] else '无法浏览 / App提示') + '；按标题作者搜索'
    lines.append('| ' + ' | '.join([
        cell(row['city']), f"[{cell(row['place'])}](../{row['photo']})", cell(row['title']),
        cell(row['author']), f"[原帖]({row['url']})", cell(status + ' · ' + row['checked_at']),
    ]) + ' |')
lines += ['', '逐图地点识别、文件 SHA256 和核对边界见同目录 place-sources.json、collection-evidence 和 final-audit。原图仅用于私人旅行资料，保留原作者权利。', '']
(target / 'place-sources.md').write_text('\n'.join(lines))
print(f'Generated {len(rows)} photo/post pairs.')
