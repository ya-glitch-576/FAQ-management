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
# HTML Templates
# HTML Templates
TAILWIND_SETUP = f"""
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {{
            theme: {{
                extend: {{
                    colors: {{
                        sunnet: {{
                            DEFAULT: '#2563eb',
                            light: '#3b82f6',
                            dark: '#1d4ed8',
                        }}
                    }},
    <style>
        body {{ font-family: 'Noto Sans JP', sans-serif; }}
        .manga-font {{ font-family: 'Dela Gothic One', cursive; }}
        .text-outline {{
            text-shadow: 
                -2px -2px 0 #fff,  
                 2px -2px 0 #fff,
                -2px  2px 0 #fff,
                 2px  2px 0 #fff,
                 3px  3px 0 rgba(0,0,0,0.2);
        }}
        .google-shadow {{
            box-shadow: 0 1px 6px rgba(32,33,36,0.28);
        }}
        .google-shadow:focus-within {{
            box-shadow: 0 1px 8px rgba(32,33,36,0.35);
        }}
        .mascot-15x {{ transform: scale(1.5); }}
        .mascot-flipped {{ transform: scaleX(-1) scale(1.5); }}
    </style>
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
    {TAILWIND_SETUP}
</head>
<body class="bg-slate-50 text-slate-800 antialiased">
    <header class="bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg mb-8">
        <div class="max-w-3xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 class="h-8">
                <a href="index.html" class="block h-full transition">
                    <img src="images/sunnet_logo_orig.png" alt="Sun-Net" class="h-full brightness-0 invert object-contain">
                </a>
            </h1>
            <a href="index.html" class="text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition">
                &larr; Top
            </a>
        </div>
    </header>

    <main class="max-w-3xl mx-auto px-4 pb-12">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-slate-100">
            <div class="p-6 sm:p-8">
                <!-- Lang Selector -->
                <div class="flex justify-end gap-2 mb-6">
                    <button onclick="toggleLang('ja')" id="btn-ja" class="px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200">JP</button>
                    <button onclick="toggleLang('en')" id="btn-en" class="px-3 py-1 rounded-lg text-sm text-slate-500 hover:bg-slate-100 border border-transparent">EN</button>
                </div>

                <div id="content-ja">
                    <h2 class="text-xl sm:text-2xl font-bold text-slate-800 border-l-8 border-blue-500 pl-4 mb-8 leading-tight">
                        {html.escape(q_ja)}
                    </h2>
                    <div class="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-slate-700">
                        {a_ja}
                    </div>
                </div>

                <div id="content-en" style="display: none;">
                    <h2 class="text-xl sm:text-2xl font-bold text-slate-800 border-l-8 border-blue-500 pl-4 mb-8 leading-tight">
                        {html.escape(q_en)}
                    </h2>
                    <div class="prose prose-slate max-w-none text-base sm:text-lg leading-relaxed text-slate-700">
                        {a_en}
                    </div>
                </div>
            </div>
            
            <!-- FAQ Banner -->
            <div class="bg-slate-50 border-t border-slate-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div class="text-center sm:text-left">
                    <p class="font-bold text-xl text-slate-800 mb-2">解決しましたか？</p>
                    <p class="text-slate-500 text-sm">解決しない場合は、いつでもチャットやメールでお問い合わせください。</p>
                </div>
                <div class="flex items-center gap-4">
                    <img src="images/mascot_tab.png" alt="Mascot" class="w-16 h-16 object-contain hover:rotate-12 transition duration-300">
                    <img src="images/mascot_thumbsup.png" alt="Mascot" class="w-16 h-16 object-contain hover:-rotate-12 transition duration-300">
                </div>
            </div>
        </div>

        <div class="mt-8 text-center">
            <a href="index.html" class="inline-flex items-center text-blue-600 font-bold hover:gap-3 transition-all duration-300">
                <span class="mr-2">&larr;</span> FAQトップへ戻る
            </a>
        </div>
    </main>

    <footer class="bg-white border-t border-slate-200 py-12 mt-12 text-slate-500">
        <div class="max-w-3xl mx-auto px-4 text-center">
            <p class="mb-4 text-sm">&copy; 2026 Sun-Net Inc.</p>
        </div>
    </footer>

    <script>
    function toggleLang(lang) {{
        document.getElementById('content-ja').style.display = lang === 'ja' ? 'block' : 'none';
        document.getElementById('content-en').style.display = lang === 'en' ? 'block' : 'none';
        
        const btnJa = document.getElementById('btn-ja');
        const btnEn = document.getElementById('btn-en');
        
        if (lang === 'ja') {{
            btnJa.className = "px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200";
            btnEn.className = "px-3 py-1 rounded-lg text-sm text-slate-500 hover:bg-slate-100 border border-transparent";
        }} else {{
            btnJa.className = "px-3 py-1 rounded-lg text-sm text-slate-500 hover:bg-slate-100 border border-transparent";
            btnEn.className = "px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200";
        }}
    }}
    </script>
</body>
</html>
"""
    with open(os.path.join(OUTPUT_DIR, f"{sid}.html"), 'w', encoding='utf-8') as f:
        f.write(detail_html)

# Popular Section HTML
popular_items = [i for i in search_items if i.get('is_popular')]
popular_html = ""
if popular_items:
    pop_list = "".join([f'<li><a href="{i["id"]}.html" class="block p-4 rounded-xl border border-transparent hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition flex items-start group"><span class="mr-3 text-blue-500 font-bold mt-0.5 group-hover:scale-125 transition">Q.</span><span class="font-medium">{html.escape(i["question"])}</span></a></li>' for i in popular_items])
    popular_html = f"""
    <section class="mb-16">
        <div class="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm">
            <h2 class="text-slate-800 font-bold text-xl mb-6 flex items-center">
                <img src="images/mascot_thumbsup.png" class="w-12 h-12 mr-4 scale-125" alt="Popular">
                <span>みんなが注目！よくある質問</span>
            </h2>
            <ul class="grid grid-cols-1 gap-2 text-slate-700">
                {pop_list}
            </ul>
        </div>
    </section>
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
    svc_html = f'<section class="mb-20"><h2 class="flex items-center text-2xl font-bold text-slate-900 mb-8"><span class="w-3 h-8 bg-blue-500 mr-4 rounded-sm"></span>{html.escape(svc_name)}</h2>'
    
    service_hierarchy = hierarchy[svc_name]
    sorted_categories = sorted(service_hierarchy.keys())
    
    svc_html += '<div class="grid grid-cols-1 md:grid-cols-2 gap-8">'
    for cat_name in sorted_categories:
        list_items = ""
        cat_items = sorted(service_hierarchy[cat_name], key=lambda x: x.get('question') or "")
        
        for item in cat_items:
            q_text = item.get("question") or ""
            list_items += f'<li><a href="{item["id"]}.html" class="block py-2.5 px-2 text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition truncate"><span class="mr-2 text-blue-300">●</span>{html.escape(q_text)}</a></li>'
        
        svc_html += f"""
        <div class="bg-white rounded-3xl p-6 border-2 border-slate-50 hover:border-blue-100 hover:shadow-xl transition duration-500">
            <h3 class="text-lg font-bold text-blue-600 mb-5 pb-3 border-b border-slate-100">{html.escape(cat_name)}</h3>
            <ul class="space-y-0.5">
                {list_items}
            </ul>
        </div>
        """
    svc_html += "</div></section>"
    content_html += svc_html

index_html = f"""
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sun-Net FAQ情報サイト</title>
    {TAILWIND_SETUP}
    <script src="search_index.js"></script>
</head>
<body class="bg-slate-50 text-slate-800 antialiased">
    <!-- Header: Refined Manga Style -->
    <header class="bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden pt-12 pb-24 shadow-2xl">
        <!-- Background shapes -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div class="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
            <div class="absolute bottom-20 right-20 w-48 h-48 border-[16px] border-white/20 skew-y-12"></div>
        </div>

        <div class="max-w-6xl mx-auto px-4 relative z-10">
            <!-- Top Mascot Positions -->
            <div class="absolute top-0 left-4 hidden lg:block mascot-flipped drop-shadow-2xl">
                <img src="images/mascot_thumbsup.png" alt="Thumbs Up" class="w-24 h-24 object-contain">
            </div>
            <div class="absolute top-0 right-4 hidden lg:block mascot-15x drop-shadow-2xl">
                <img src="images/mascot_redman.png" alt="Redman" class="w-24 h-24 object-contain">
            </div>

            <!-- Content Area -->
            <div class="text-center mt-8">
                <div class="mb-10 flex flex-col items-center justify-center">
                    <img src="images/sunnet_logo_orig.png" alt="Sun-Net Logo" class="h-14 mb-4 brightness-0 invert object-contain drop-shadow-sm">
                    <div class="relative">
                        <h1 class="text-6xl md:text-8xl font-black manga-font text-blue-600 tracking-tighter italic text-outline transform -rotate-3 mb-2">
                            FAQ
                        </h1>
                    </div>
                </div>
                
                <!-- Google Style Search Bar -->
                <div class="max-w-2xl mx-auto mt-12 w-full relative z-30">
                    <div class="google-shadow bg-white rounded-full flex items-center px-4 md:px-6 py-1 md:py-2 transition duration-200 group">
                        <div class="text-slate-400 p-2">
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="text" id="search-input" 
                            class="flex-1 px-3 py-3 md:py-4 bg-transparent border-none text-slate-800 text-base md:text-lg focus:ring-0 outline-none" 
                            placeholder="知りたいことを入力してください" 
                            autocomplete="off">
                        <div class="text-blue-600 p-2 opacity-0 group-focus-within:opacity-100 transition">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                            </svg>
                        </div>
                        
                        <!-- Suggest Box: Google style -->
                        <div id="suggest-box" class="absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl overflow-hidden hidden z-50 text-left border border-slate-100 py-4"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bottom wave -->
        <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg class="relative block w-[calc(100%+1.3px)] h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C51.1,102.39,103.23,109.11,155.19,102.7c60.77-7.51,114.48-26,172-41.86Z" fill="#f8f9fa"></path>
            </svg>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-16 relative z-10">
        
        <!-- Search Results Area -->
        <div id="search-results-area" class="hidden mb-16 animate-in fade-in duration-500">
            <h2 id="search-results-title" class="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-ping"></span>検索結果
            </h2>
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden p-2 border-2 border-blue-50">
                <ul id="search-results-list" class="space-y-2"></ul>
            </div>
            <div id="search-no-results" class="hidden text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <img src="images/mascot_confused.png" class="w-48 h-48 mx-auto mb-6 scale-125" alt="Not Found">
                <p class="text-slate-600 font-bold text-xl mb-2">あちゃー！見つかりませんでした...</p>
                <p class="text-slate-400">キーワードを工夫して、もう一度検索してみてね！</p>
            </div>
        </div>

        <div id="main-content">
            {popular_html}
            {content_html}
        </div>
    </main>

    <footer class="bg-slate-900 text-slate-400 py-24 relative overflow-hidden">
        <!-- Footer mascot decorate (Reduced to 75% relative to prev) -->
        <div class="absolute top-1/2 right-12 -translate-y-1/2 opacity-10 pointer-events-none scale-[1.125] rotate-12">
             <img src="images/mascot_wifi.png" class="w-96 h-96 object-contain grayscale invert">
        </div>
        
        <div class="max-w-6xl mx-auto px-4 text-center relative z-10">
            <div class="mb-12">
                 <img src="images/sunnet_logo_orig.png" alt="Sun-Net" class="h-10 mx-auto brightness-0 invert opacity-40">
            </div>
            <p class="mb-2 text-sm font-medium">&copy; 2026 Sun-Net Inc. All rights reserved.</p>
            <p class="text-xs text-slate-600 tracking-tighter">Sun-Net FAQ is powered by ANTIGRAVITY / Manga Edition</p>
        </div>
    </footer>

    <script>
    const searchInput = document.getElementById('search-input');
    const suggestBox = document.getElementById('suggest-box');
    const searchArea = document.getElementById('search-results-area');
    const searchList = document.getElementById('search-results-list');
    const searchTitle = document.getElementById('search-results-title');
    const searchNoResults = document.getElementById('search-no-results');
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
            result += `<span class="bg-blue-100 text-blue-700 font-bold px-1 rounded-sm">${{match}}</span>`;
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
            searchArea.classList.add('hidden');
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
                div.className = 'px-8 py-3.5 hover:bg-slate-50 hover:text-blue-600 cursor-pointer transition flex items-center group';
                div.innerHTML = `<svg class="w-4 h-4 mr-4 text-slate-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><span class="font-medium">${{highlightText(item.question, rawInput)}}</span>`;
                div.onclick = () => {{ window.location.href = `${{item.id}}.html`; }};
                suggestBox.appendChild(div);
            }});
            suggestBox.classList.remove('hidden');
            suggestBox.style.display = 'block';
        }} else {{
            suggestBox.style.display = 'none';
        }}

        searchList.innerHTML = '';
        searchArea.classList.remove('hidden');
        mainContent.style.display = 'none';

        if (results.length > 0) {{
            searchTitle.innerHTML = `<span class="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-ping"></span>検索結果: ${{results.length}}件`;
            searchNoResults.classList.add('hidden');
            results.forEach(item => {{
                const li = document.createElement('li');
                const highlighted = highlightText(item.question, rawInput);
                li.innerHTML = `<a class="block bg-white p-6 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-100" href="${{item.id}}.html"><div class="flex items-start"><div class="font-black text-blue-500 mr-4 text-xl">Q.</div><div class="font-bold text-slate-800 text-lg">${{highlighted}}</div></div></a>`;
                searchList.appendChild(li);
            }});
        }} else {{
            searchTitle.textContent = '検索結果';
            searchList.innerHTML = '';
            searchNoResults.classList.remove('hidden');
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
        }}
    }});
    </script>
</body>
</html>
"""

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
            result += `<span class="bg-blue-100 text-blue-700 font-bold px-1 rounded-sm">${{match}}</span>`;
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
            searchArea.classList.add('hidden');
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
                div.className = 'px-8 py-3.5 hover:bg-slate-50 hover:text-blue-600 cursor-pointer transition flex items-center group';
                div.innerHTML = `<svg class="w-4 h-4 mr-4 text-slate-300 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg><span class="font-medium">${{highlightText(item.question, rawInput)}}</span>`;
                div.onclick = () => {{ window.location.href = `${{item.id}}.html`; }};
                suggestBox.appendChild(div);
            }});
            suggestBox.classList.remove('hidden');
            suggestBox.style.display = 'block';
        }} else {{
            suggestBox.style.display = 'none';
        }}

        searchList.innerHTML = '';
        searchArea.classList.remove('hidden');
        mainContent.style.display = 'none';

        if (results.length > 0) {{
            searchTitle.innerHTML = `<span class="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-ping"></span>検索結果: ${{results.length}}件`;
            searchNoResults.classList.add('hidden');
            results.forEach(item => {{
                const li = document.createElement('li');
                const highlighted = highlightText(item.question, rawInput);
                li.innerHTML = `<a class="block bg-white p-6 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-100" href="${{item.id}}.html"><div class="flex items-start"><div class="font-black text-blue-500 font-manga mr-4 text-xl">Q.</div><div class="font-bold text-slate-800 text-lg">${{highlighted}}</div></div></a>`;
                searchList.appendChild(li);
            }});
        }} else {{
            searchTitle.textContent = '検索結果';
            searchList.innerHTML = '';
            searchNoResults.classList.remove('hidden');
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
        }}
    }});
    </script>
</body>
</html>
"""

with open(os.path.join(OUTPUT_DIR, "index.html"), 'w', encoding='utf-8') as f:
    f.write(index_html)

print(f"Successfully generated FAQ site with search features.")

with open(os.path.join(OUTPUT_DIR, "index.html"), 'w', encoding='utf-8') as f:
    f.write(index_html)

print(f"Successfully generated FAQ site with search features.")
