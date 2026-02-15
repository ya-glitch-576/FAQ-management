import json

TARGETS = ["未接続", "ご迷惑", "申し訳", "インターネットがつながらない"]

try:
    with open('faq_source.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open('found.txt', 'w', encoding='utf-8') as out:
        for item in data['items']:
            s_q = str(item.get('question'))
            s_a = str(item.get('answer'))
            s_all = s_q + s_a
            
            for t in TARGETS:
                if t in s_all:
                    out.write(f"ID: {item.get('id')}\n")
                    out.write(f"Matched: {t}\n")
                    out.write(f"Q: {s_q}\n")
                    out.write(f"A: {s_a}\n")
                    out.write("-" * 20 + "\n")
    print("Done")
except Exception as e:
    print(e)
