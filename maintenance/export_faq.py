import json
import csv
import os

SOURCE_JSON = '../faq_source.json'
OUTPUT_CSV = '../faq_master.csv'

def export_json_to_csv():
    if not os.path.exists(SOURCE_JSON):
        print(f"Error: {SOURCE_JSON} not found.")
        return

    with open(SOURCE_JSON, 'r', encoding='utf-8') as f:
        data = json.load(f)

    items = data.get('items', [])
    if not items:
        print("No items found in JSON.")
        return

    # CSVのヘッダー定義
    fieldnames = [
        'id', 'service', 'category', 'category_en', 
        'question', 'question_en', 
        'answer', 'answer_en', 
        'is_popular', 'tags'
    ]

    with open(OUTPUT_CSV, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction='ignore')
        writer.writeheader()
        for item in items:
            # tagsはリストなので文字列に変換
            row = item.copy()
            if isinstance(row.get('tags'), list):
                row['tags'] = ','.join(row['tags'])
            writer.writerow(row)

    print(f"Success: Exported {len(items)} items to {OUTPUT_CSV}")

if __name__ == '__main__':
    # メンテナンスディレクトリからの相対パスを調整
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    export_json_to_csv()
