"""Keep attributed, byte-identical backups of observed and authorized image URLs.

The remote URL remains the primary URL. No cookies, login state, URL rewriting,
screenshots, cropping or re-encoding are used. This is run after import-editorial.
"""
import concurrent.futures
import hashlib
import json
import pathlib
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
MANIFEST = ROOT / 'public/data/editorial.json'
OUT = ROOT / 'public/assets/editorial'
MAX_BYTES = 15 * 1024 * 1024
CACHE_INDEX = ROOT / 'work/content-enrichment/image-cache-index.json'
cached = {}


def extension(content):
    if content.startswith(b'\xff\xd8\xff'):
        return 'jpg'
    if content.startswith(b'\x89PNG\r\n\x1a\n'):
        return 'png'
    if content.startswith(b'RIFF') and content[8:12] == b'WEBP':
        return 'webp'
    if content[:6] in (b'GIF87a', b'GIF89a'):
        return 'gif'
    raise ValueError('Response is not a supported original image')


def retrieve(url):
    try:
        previous = cached.get(url, {})
        if previous.get('fallback_url'):
            filename = ROOT / 'public' / previous['fallback_url']
            if filename.parent == OUT and filename.is_file():
                existing = filename.read_bytes()
                if hashlib.sha256(existing).hexdigest() == previous.get('sha256'):
                    return url, previous
        # Same public URL as the observed image, without third-party Referer.
        request = urllib.request.Request(url, headers={'Accept': 'image/avif,image/webp,image/*;q=0.8'})
        with urllib.request.urlopen(request, timeout=25) as response:
            content = response.read(MAX_BYTES + 1)
        if len(content) > MAX_BYTES:
            raise ValueError('Image exceeds the 15 MiB backup limit')
        suffix = extension(content)
        sha = hashlib.sha256(content).hexdigest()
        destination = OUT / f'{sha}.{suffix}'
        if not destination.exists():
            destination.write_bytes(content)
        return url, {'fallback_url': str(destination.relative_to(ROOT / 'public')),
                     'sha256': sha, 'bytes': len(content), 'backup_status': 'verified_original_bytes'}
    except Exception as error:
        return url, {'backup_status': 'unavailable', 'backup_error': type(error).__name__}


def main():
    global cached
    data = json.loads(MANIFEST.read_text())
    cached = json.loads(CACHE_INDEX.read_text()) if CACHE_INDEX.exists() else {}
    OUT.mkdir(parents=True, exist_ok=True)
    images = [p for entry in data['entries'] for p in entry['images']]
    urls = list(dict.fromkeys(p['url'] for p in images))
    assert all(p['permission'] == 'user_confirmed' for p in images)
    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        for index, (url, result) in enumerate(pool.map(retrieve, urls), 1):
            results[url] = result
            if index % 50 == 0:
                print(json.dumps({'checked': index, 'total': len(urls)}), flush=True)
    for p in images:
        p.update(results[p['url']])
    cached.update({url: result for url, result in results.items() if result.get('fallback_url')})
    CACHE_INDEX.parent.mkdir(parents=True, exist_ok=True)
    CACHE_INDEX.write_text(json.dumps(cached, ensure_ascii=False, indent=2) + '\n')
    data['image_delivery'] = 'remote_primary_no_referrer_with_original_backup'
    temporary = MANIFEST.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(MANIFEST)
    allowed = sorted(set(p['fallback_url'] for p in images if p.get('fallback_url')))
    (ROOT / 'EDITORIAL-IMAGE-FILES.json').write_text(json.dumps(allowed, indent=2) + '\n')
    print(json.dumps({'remote_urls': len(urls), 'backed_up': len(allowed),
                      'unavailable': sum(r['backup_status'] != 'verified_original_bytes' for r in results.values()),
                      'bytes': sum((ROOT / 'public' / name).stat().st_size for name in allowed)}))


if __name__ == '__main__':
    main()
