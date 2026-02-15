import json
import csv
import os

JSON_FILE = 'faq_source.json'
CSV_FILE = 'FAQ_checked_fixed.csv'

def sync():
    # Load JSON
    if not os.path.exists(JSON_FILE):
        print(f"Error: {JSON_FILE} not found")
        return
    
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        source_data = json.load(f)
    
    items = source_data.get('items', [])
    # Create lookup by question
    lookup = {item.get('question'): item for item in items if item.get('question')}
    
    new_items_count = 0
    updated_items_count = 0
    
    # Load CSV
    if not os.path.exists(CSV_FILE):
        print(f"Error: {CSV_FILE} not found")
        return

    with open(CSV_FILE, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        for row in reader:
            tag_a = row.get('サービスタグ')
            category = row.get('カテゴリー')
            category_en = row.get('カテゴリー_en')
            question = row.get('質問')
            question_en = row.get('質問_en')
            answer = row.get('回答')
            answer_en = row.get('回答_en')
            is_popular = row.get('is_popular') == '1'
            
            if not question:
                continue
                
            if question in lookup:
                # Update existing
                item = lookup[question]
                item['answer'] = answer
                item['answer_en'] = answer_en
                item['service_tag_a'] = tag_a
                item['category'] = category
                item['category_en'] = category_en
                item['question_en'] = question_en
                item['is_popular'] = is_popular
                if 'service_tag_b' not in item:
                    item['service_tag_b'] = None
                # Optionally update category as a tag if not present
                if category:
                    if 'tags' not in item or item['tags'] is None:
                        item['tags'] = []
                    if category not in item['tags']:
                        item['tags'].append(category)
                updated_items_count += 1
            else:
                # Create new
                # Find max ID for FAQ-
                faq_ids = [int(i['id'].split('-')[1]) for i in items if i['id'].startswith('FAQ-') and '-' in i['id'] and i['id'].split('-')[1].isdigit()]
                next_id_num = max(faq_ids) + 1 if faq_ids else 1000
                new_id = f"FAQ-{next_id_num:04d}"
                
                new_item = {
                    "id": new_id,
                    "service_tag_a": tag_a,
                    "service_tag_b": None,
                    "category": category,
                    "category_en": category_en,
                    "question": question,
                    "question_en": question_en,
                    "answer": answer,
                    "answer_en": answer_en,
                    "is_popular": is_popular,
                    "tags": [category] if category else [],
                    "meta": {"source": "CSV_IMPORT"}
                }
                items.append(new_item)
                lookup[question] = new_item
                new_items_count += 1

    # Also migrate existing items that don't have service_tag_a/b
    for item in items:
        if 'service_tag_a' not in item:
            item['service_tag_a'] = item.get('service')
        if 'service_tag_b' not in item:
            item['service_tag_b'] = None
        # Keep 'service' for backward compatibility or remove?
        # Let's keep it for a moment but the scripts will use service_tag_a.

    source_data['items'] = items
    
    with open(JSON_FILE, 'w', encoding='utf-8') as f:
        json.dump(source_data, f, ensure_ascii=False, indent=2)
    
    print(f"Sync complete. Updated: {updated_items_count}, New: {new_items_count}")

if __name__ == "__main__":
    sync()
