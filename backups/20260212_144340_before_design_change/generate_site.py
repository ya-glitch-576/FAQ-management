import json
import os
import html

# Configuration
SOURCE_FILE = 'faq_source.json'
OUTPUT_DIR = 'site'
BRAND_COLOR = '#5582af'

# Create output directory
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Load source data
try:
    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error: {e}")
    exit(1)

# Grouping logic
items = data.get('items', [])
# Structure: hierarchy[service][category] = [item1, item2, ...]
hierarchy = {}

for item in items:
    sid = item.get('id')
    if not sid or sid.startswith("LINE-"):
        continue
    
    target_services = set()
    for tag in [item.get('service_tag_a'), item.get('service_tag_b')]:
        if not tag: continue
        if tag in ["すべて", "ALL", "All"]:
            target_services.update(["寮内ネット", "Sun-Net光", "SIMカード"])
        else:
            target_services.add(tag)
    
    if not target_services and item.get('service'):
        target_services.add(item.get('service'))
    
    if not target_services:
        target_services.add("その他")
    
    category = item.get('category') or "未分類"
        
    for svc in target_services:
        if svc not in hierarchy:
            hierarchy[svc] = {}
        if category not in hierarchy[svc]:
            hierarchy[svc][category] = []
        hierarchy[svc][category].append(item)

# Normalization and Search Index Generation
SYNONYMS = {
    "wifi": ["無線lan", "wi-fi", "ワイファイ"],
    "wi-fi": ["無線lan", "wifi", "ワイファイ"],
    "ネット": ["インターネット", "接続"],
    "インターネット": ["ネット", "接続"],
    "ルーター": ["ルータ"],
    "ルータ": ["ルーター"],
    "pc": ["パソコン", "コンピュータ"],
    "パソコン": ["pc", "コンピュータ"]
}

def normalize_text(text):
    if not text: return ""
    import unicodedata
    # Convert to half-width, lowercase
    text = unicodedata.normalize('NFKC', text).lower()
    # Hiragana to Katakana
    text = "".join([chr(ord(c) + 96) if 0x3041 <= ord(c) <= 0x3096 else c for c in text])
    return text

search_items = []
for item in items:
    sid = item.get('id')
    if not sid or sid.startswith("LINE-"):
        continue
    
    q_text = item.get("question") or ""
    tags = item.get("tags") or []
    normalized_q = normalize_text(q_text)
    
    # Expand with synonyms
    expanded_text = normalized_q
    for key, syns in SYNONYMS.items():
        if key in normalized_q:
            expanded_text += " " + " ".join(syns)
    
    search_items.append({
        "id": sid,
        "question": q_text,
        "normalized": expanded_text,
        "tags": tags,
        "is_popular": item.get('is_popular', False)
    })

# Write search index to JS file
with open(os.path.join(OUTPUT_DIR, "search_index.js"), 'w', encoding='utf-8') as f:
    f.write(f"const SEARCH_INDEX = {json.dumps(search_items, ensure_ascii=False)};")

# HTML Templates
BASE_STYLE = f"""
body {{
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
}}
header {{
    background-color: {BRAND_COLOR};
    color: white;
    padding: 2.5rem 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    position: relative;
    overflow: hidden;
}}
header::after {{
    content: '';
    position: absolute;
    top: 0; right: 0;
    width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    pointer-events: none;
}}
h1 {{ margin: 0; font-size: 1.8rem; font-weight: 700; }}
.search-container {{
    margin-top: 1.5rem;
    position: relative;
    z-index: 10;
}}
#search-input {{
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 30px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    outline: none;
    box-sizing: border-box;
}}
.suggest-box {{
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-radius: 12px;
    margin-top: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    display: none;
    z-index: 200;
    overflow: hidden;
}}
.suggest-item {{
    padding: 12px 20px;
    border-bottom: 1px solid #f0f0f0;
    cursor: pointer;
    font-size: 0.95rem;
    color: #444;
    transition: background 0.2s;
}}
.suggest-item:hover {{ background: #f8f9fa; color: {BRAND_COLOR}; }}
.suggest-item:last-child {{ border-bottom: none; }}
#search-results-title {{
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #555;
    display: none;
}}
.service-section {{
    margin-bottom: 3rem;
}}
.popular-section {{
    background: #fffbe6;
    border: 1px solid #ffe58f;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}}
.popular-title {{
    font-size: 1.1rem;
    color: #856404;
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    align-items: center;
}}
.popular-title span {{ margin-right: 8px; font-size: 1.3rem; }}
.service-title {{
    font-size: 1.6rem;
    color: #333;
    border-bottom: 3px solid {BRAND_COLOR};
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
}}
.service-title::before {{
    content: '■';
    color: {BRAND_COLOR};
    margin-right: 10px;
    font-size: 0.8em;
}}
.category-card {{
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: transform 0.2s;
}}
.category-card:hover {{
    transform: translateY(-2px);
}}
.category-title {{
    color: {BRAND_COLOR};
    font-size: 1.1rem;
    padding-left: 12px;
    margin-top: 0;
    margin-bottom: 1rem;
    border-left: 5px solid {BRAND_COLOR};
    font-weight: 600;
}}
.faq-list {{ list-style: none; padding: 0; }}
.faq-item {{ 
    border-bottom: 1px solid #f0f0f0; 
    padding: 12px 0;
    transition: padding-left 0.2s;
}}
.faq-item:hover {{
    padding-left: 5px;
}}
.faq-item:last-child {{ border-bottom: none; }}
.faq-link {{ 
    text-decoration: none; 
    color: #444; 
    display: block; 
    font-size: 0.95rem;
}}
.faq-link:hover {{ color: {BRAND_COLOR}; }}
.answer-content {{
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}}
.back-link {{
    display: inline-block;
    margin-top: 2rem;
    color: {BRAND_COLOR};
    text-decoration: none;
    font-weight: bold;
    padding: 8px 16px;
    border: 2px solid {BRAND_COLOR};
    border-radius: 8px;
    transition: all 0.2s;
}}
.back-link:hover {{
    background-color: {BRAND_COLOR};
    color: white;
}}
.highlight {{
    background: #ffff00;
    padding: 1px 3px;
    border-radius: 3px;
    font-weight: bold;
    color: #000;
    mix-blend-mode: multiply;
}}
"""

# Generate Detail Pages
for item in items:
    sid = item.get('id')
    if not sid or sid.startswith("LINE-"):
        continue
    
    q_ja = item.get('question') or ""
    q_en = item.get('question_en') or q_ja
    a_ja = (item.get('answer') or "").replace('\n', '<br>')
    a_en = (item.get('answer_en') or a_ja).replace('\n', '<br>')
    
    detail_html = f"""
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{html.escape(q_ja)} - Sun-Net FAQ</title>
    <style>{BASE_STYLE}</style>
</head>
<body>
    <header>
        <h1><a href="index.html" style="color:white; text-decoration:none;">Sun-Net FAQ</a></h1>
    </header>
    <div class="answer-content">
        <div class="lang-selector" style="text-align: right; margin-bottom: 1rem;">
            <button onclick="toggleLang('ja')" id="btn-ja" style="font-weight: bold; cursor: pointer;">JP</button>
            <button onclick="toggleLang('en')" id="btn-en" style="cursor: pointer;">EN</button>
        </div>
        <div id="content-ja">
            <h2 class="category-title" style="font-size: 1.4rem;">Q: {html.escape(q_ja)}</h2>
            <div class="answer-text" style="font-size: 1.1rem; color: #444;">
                {a_ja}
            </div>
        </div>
        <div id="content-en" style="display: none;">
            <h2 class="category-title" style="font-size: 1.4rem;">Q: {html.escape(q_en)}</h2>
            <div class="answer-text" style="font-size: 1.1rem; color: #444;">
                {a_en}
            </div>
        </div>
    </div>
    <script>
    function toggleLang(lang) {{
        document.getElementById('content-ja').style.display = lang === 'ja' ? 'block' : 'none';
        document.getElementById('content-en').style.display = lang === 'en' ? 'block' : 'none';
        document.getElementById('btn-ja').style.fontWeight = lang === 'ja' ? 'bold' : 'normal';
        document.getElementById('btn-en').style.fontWeight = lang === 'en' ? 'bold' : 'normal';
    }}
    </script>
    <a href="index.html" class="back-link">← FAQトップへ戻る</a>
</body>
</html>
"""
    with open(os.path.join(OUTPUT_DIR, f"{sid}.html"), 'w', encoding='utf-8') as f:
        f.write(detail_html)

# Popular Section HTML
popular_items = [i for i in search_items if i.get('is_popular')]
popular_html = ""
if popular_items:
    pop_list = "".join([f'<li class="faq-item"><a class="faq-link" href="{i["id"]}.html">{html.escape(i["question"])}</a></li>' for i in popular_items])
    popular_html = f"""
    <div class="popular-section">
        <h2 class="popular-title"><span>🔥</span>みなさまからよく調べられている質問</h2>
        <ul class="faq-list">
            {pop_list}
        </ul>
    </div>
    """

# Sort services: Dorm Net first, then Hikari, then SIM, then Others
svc_order = ["寮内ネット", "Sun-Net光", "SIMカード", "SIM", "SM"]
def sort_svc(s):
    try:
        return svc_order.index(s)
    except:
        return 999

# Generate Index Page
content_html = ""
sorted_services = sorted(hierarchy.keys(), key=sort_svc)

for svc_name in sorted_services:
    svc_html = f'<div class="service-section"><h2 class="service-title">{html.escape(svc_name)}</h2>'
    
    service_hierarchy = hierarchy[svc_name]
    sorted_categories = sorted(service_hierarchy.keys())
    
    for cat_name in sorted_categories:
        list_items = ""
        cat_items = sorted(service_hierarchy[cat_name], key=lambda x: x.get('question') or "")
        
        for item in cat_items:
            q_text = item.get("question") or ""
            list_items += f'<li class="faq-item"><a class="faq-link" href="{item["id"]}.html">{html.escape(q_text)}</a></li>'
        
        svc_html += f"""
<div class="category-card">
    <h3 class="category-title">{html.escape(cat_name)}</h3>
    <ul class="faq-list">
        {list_items}
    </ul>
</div>
"""
    svc_html += "</div>"
    content_html += svc_html

index_html = f"""
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sun-Net FAQ情報サイト</title>
    <style>{BASE_STYLE}</style>
    <script src="search_index.js"></script>
</head>
<body>
    <header>
        <h1>Sun-Net FAQ情報サイト</h1>
        <div class="search-container">
            <input type="text" id="search-input" placeholder="質問やキーワードを入力してください (例: wifi, 支払い)..." autocomplete="off">
            <div id="suggest-box" class="suggest-box"></div>
        </div>
    </header>
    
    <div id="search-results-area" style="display: none;">
        <h2 id="search-results-title">検索結果</h2>
        <div class="category-card">
            <ul class="faq-list" id="search-results-list"></ul>
        </div>
    </div>

    <div id="main-content">
        {popular_html}
        {content_html}
    </div>

    <script>
    const searchInput = document.getElementById('search-input');
    const suggestBox = document.getElementById('suggest-box');
    const searchArea = document.getElementById('search-results-area');
    const searchList = document.getElementById('search-results-list');
    const searchTitle = document.getElementById('search-results-title');
    const mainContent = document.getElementById('main-content');

    function normalizeText(text) {{
        return text.normalize('NFKC').toLowerCase()
            .replace(/[\u3041-\u3096]/g, function(s) {{
                return String.fromCharCode(s.charCodeAt(0) + 0x60);
            }});
    }}

    function highlightText(text, query) {{
        if (!query) return text;
        const normalizedText = normalizeText(text);
        const normalizedQuery = normalizeText(query);
        let result = '';
        let lastIdx = 0;
        let idx = normalizedText.indexOf(normalizedQuery);

        while (idx !== -1) {{
            result += text.substring(lastIdx, idx);
            const match = text.substring(idx, idx + normalizedQuery.length);
            result += `<span class="highlight">${{match}}</span>`;
            lastIdx = idx + normalizedQuery.length;
            idx = normalizedText.indexOf(normalizedQuery, lastIdx);
        }}
        result += text.substring(lastIdx);
        return result;
    }}

    searchInput.addEventListener('input', (e) => {{
        const rawInput = e.target.value.trim();
        const query = normalizeText(rawInput);
        
        if (query.length < 1) {{
            suggestBox.style.display = 'none';
            searchArea.style.display = 'none';
            mainContent.style.display = 'block';
            return;
        }}

        const results = SEARCH_INDEX.filter(item => {{
            return item.normalized.includes(query) || 
                   item.tags.some(t => normalizeText(t).includes(query));
        }});

        // Show suggestions (Max 8)
        suggestBox.innerHTML = '';
        if (results.length > 0) {{
            results.slice(0, 8).forEach(item => {{
                const div = document.createElement('div');
                div.className = 'suggest-item';
                div.innerHTML = highlightText(item.question, rawInput);
                div.onclick = () => {{ window.location.href = `${{item.id}}.html`; }};
                suggestBox.appendChild(div);
            }});
            suggestBox.style.display = 'block';
        }} else {{
            suggestBox.style.display = 'none';
        }}

        searchList.innerHTML = '';
        if (results.length > 0) {{
            searchTitle.style.display = 'block';
            searchTitle.textContent = `検索結果: ${{results.length}}件`;
            results.forEach(item => {{
                const li = document.createElement('li');
                li.className = 'faq-item';
                const highlighted = highlightText(item.question, rawInput);
                li.innerHTML = `<a class="faq-link" href="${{item.id}}.html">${{highlighted}}</a>`;
                searchList.appendChild(li);
            }});
        }} else {{
            searchTitle.style.display = 'block';
            searchTitle.textContent = '該当する結果が見つかりませんでした。';
        }}
    }});

    // Close suggest box on click outside
    document.addEventListener('click', (e) => {{
        if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {{
            suggestBox.style.display = 'none';
        }}
    }});

    // Handle Enter key
    searchInput.addEventListener('keydown', (e) => {{
        if (e.key === 'Enter') {{
            suggestBox.style.display = 'none';
            searchArea.style.display = 'block';
            mainContent.style.display = 'none';
        }}
    }});

    // Close suggest box on click outside
    document.addEventListener('click', (e) => {{
        if (!searchInput.contains(e.target) && !suggestBox.contains(e.target)) {{
            suggestBox.style.display = 'none';
        }}
    }});

    // Press Enter to show persistent search results
    searchInput.addEventListener('keydown', (e) => {{
        if (e.key === 'Enter') {{
            suggestBox.style.display = 'none';
            searchArea.style.display = 'block';
            mainContent.style.display = 'none';
        }}
    }});
    </script>
</body>
</html>
"""

with open(os.path.join(OUTPUT_DIR, "index.html"), 'w', encoding='utf-8') as f:
    f.write(index_html)

print(f"Successfully generated FAQ site with search features.")
