import json
import csv
import os

SOURCE_JSON = '../faq_source.json'
INPUT_CSV = '../faq_master.csv'

def import_csv_to_json():
    if not os.path.exists(INPUT_CSV):
        print(f"Error: {INPUT_CSV} not found.")
        return

    # 既存のJSONをバックアップ的に読み込み（メタデータ保持のため）
    existing_items = {}
    if os.path.exists(SOURCE_JSON):
        with open(SOURCE_JSON, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for item in data.get('items', []):
                existing_items[item['id']] = item

    new_items = []
    with open(INPUT_CSV, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            item_id = row['id']
            
            # デフォルト値の設定（新規追加対応）
            item_data = {
                "id": item_id,
                "source": "FAQ",
                "service": row.get('service'),
                "section": None,
                "question": row['question'],
                "answer": row['answer'],
                "tags": row['tags'].split(',') if row['tags'] else [],
                "meta": {
                    "iconType": None,
                    "partsType": 2,
                    "youtubeCode": "",
                    "youtubeWidth": 0,
                    "youtubeHeight": 0,
                    "originalLine": 0
                },
                "service_tag_a": row.get('service') or "ALL",
                "service_tag_b": None,
                "category": row['category'],
                "is_popular": row['is_popular'].lower() == 'true',
                "answer_en": row['answer_en'] or row['answer'],
                "category_en": row['category_en'],
                "question_en": row['question_en'] or row['question']
            }

            # 既存データがある場合は非CSVフィールド（meta等）を引き継ぐ
            if item_id in existing_items:
                orig = existing_items[item_id]
                item_data['meta'] = orig.get('meta', item_data['meta'])
                item_data['source'] = orig.get('source', item_data['source'])
                item_data['service_tag_b'] = orig.get('service_tag_b', item_data['service_tag_b'])

            new_items.append(item_data)

    # JSON出力
    output_data = {
        "title": "Sun-Net FAQ Source",
        "items": new_items
    }

    with open(SOURCE_JSON, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"Success: Imported {len(new_items)} items from {INPUT_CSV} to {SOURCE_JSON}")

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    import_csv_to_json()
