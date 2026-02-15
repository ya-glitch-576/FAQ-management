import json
try:
    with open('faq_source.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        with open('dump.txt', 'w', encoding='utf-8') as out:
            for item in data['items']:
                out.write(f"ID: {item.get('id')}\n")
                out.write(f"Q: {item.get('question')}\n")
                out.write(f"A: {item.get('answer')}\n")
                out.write("-" * 20 + "\n")
    print("Dumped.")
except Exception as e:
    print(e)
