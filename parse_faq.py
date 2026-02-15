import json
import collections

with open('faq_source.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

services = collections.defaultdict(lambda: collections.defaultdict(list))
tags_all = set()

for item in data['items']:
    service = item.get('service') or 'General'
    tags = item.get('tags') or []
    for tag in tags:
        services[service][tag].append(item['id'])
        tags_all.add(tag)

print(json.dumps({
    "services": list(services.keys()),
    "service_tags": {s: list(t.keys()) for s, t in services.items()}
}, ensure_ascii=False, indent=2))
