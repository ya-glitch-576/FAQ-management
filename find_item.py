import json
try:
    with open('faq_source.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
        for item in data['items']:
            s = str(item)
            if "未接続" in s or "インターネット未接続" in s or "申し訳" in s:
                print(f"ID: {item.get('id')}")
                print(f"Q: {item.get('question')}")
                # print(f"A: {item.get('answer')}") # Skip answer to save space
                print("-" * 20)
except Exception as e:
    print(e)
