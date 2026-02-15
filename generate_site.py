import json
import os
import html

# Configuration
SOURCE_FILE = 'faq_source.json'
OUTPUT_DIR = '../sunnet-renewal/faq'

# Create output directory
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Load source data
try:
    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
except Exception as e:
    print(f"Error loading source file: {e}")
    exit(1)

items = data.get('items', [])
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

# Search Index Generation
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
    text = unicodedata.normalize('NFKC', text).lower()
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

with open(os.path.join(OUTPUT_DIR, "search_index.js"), 'w', encoding='utf-8') as f:
    f.write(f"const SEARCH_INDEX = {json.dumps(search_items, ensure_ascii=False)};")

# TAILWIND_SETUP revised for sunnet-renewal
TAILWIND_SETUP = """
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        sunnet: {
                            DEFAULT: '#2563eb',
                            light: '#3b82f6',
                            dark: '#1d4ed8',
                        }
                    },
                    fontFamily: {
                        'sans': ['Inter', 'Noto Sans JP', 'sans-serif'],
                        'manga': ['Dela Gothic One', 'cursive'],
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Inter:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', 'Noto Sans JP', sans-serif; }
        .manga-font { font-family: 'Dela Gothic One', cursive; }
        .text-outline {
            text-shadow: 
                -2px -2px 0 #fff,  
                 2px -2px 0 #fff,
                -2px  2px 0 #fff,
                 2px  2px 0 #fff,
                 3px  3px 0 rgba(0,0,0,0.2);
        }
        .google-shadow {
            box-shadow: 0 1px 6px rgba(32,33,36,0.28);
        }
        .google-shadow:focus-within {
            box-shadow: 0 1px 8px rgba(32,33,36,0.35);
        }
        .mascot-left { transform: scaleX(-1) scale(2.0); }
        .mascot-right { transform: scale(1.5); }
        .mascot-blend { mix-blend-mode: multiply; }
        
        .nav-link {
            color: rgba(255, 255, 255, .85);
            text-decoration: none;
            font-weight: 500;
            font-size: .9rem;
            transition: color .2s;
        }
        .nav-link:hover { color: #fff; }
        
        @keyframes float-left {
            0%, 100% { transform: translateY(0px) scaleX(-1) scale(2.0); }
            50% { transform: translateY(-20px) scaleX(-1) scale(2.0); }
        }
        @keyframes float-right {
            0%, 100% { transform: translateY(0px) scale(1.5); }
            50% { transform: translateY(-15px) scale(1.5); }
        }
        .animate-float-left { animation: float-left 4s ease-in-out infinite; }
        .animate-float-right { animation: float-right 3.5s ease-in-out infinite; }
        
        @media (max-width: 1024px) {
            .mascot-left { transform: scaleX(-1) scale(1.2); }
            .mascot-right { transform: scale(0.8); }
            .animate-float-left, .animate-float-right { animation: none; }
        }
        
        .lang-btn {
            padding: 6px 14px;
            border-radius: 6px;
            border: 1px solid rgba(255, 255, 255, .3);
            color: #fff;
            cursor: pointer;
            transition: all .2s;
            font-size: .875rem;
            font-weight: 600;
            background: transparent;
        }
        .lang-btn.active { background: #fff; color: #2563eb; border-color: #fff; }
        .lang-btn:hover:not(.active) { background: rgba(255, 255, 255, .15); }
    </style>
"""

HEADER_HTML = """
    <header class="bg-gradient-to-r from-blue-700 to-blue-500 sticky top-0 z-50 shadow-lg mb-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="../index.html" class="flex items-center gap-3">
                <img src="http://sunrise-net.sakura.ne.jp/img/sunnetlogo.png" alt="Sun-Net"
                    class="h-8 brightness-0 invert">
            </a>
            <nav class="hidden md:flex items-center gap-6">
                <a href="../index.html#steps" class="nav-link">接続手順</a>
                <a href="../index.html#videos" class="nav-link">動画ガイド</a>
                <a href="../index.html#support" class="nav-link">サポート</a>
                <a href="index.html" class="nav-link font-bold text-white underline underline-offset-4">FAQ</a>
            </nav>
            <div class="flex gap-2">
                <button id="btn-ja" class="lang-btn active">JP</button>
                <button id="btn-en" class="lang-btn">EN</button>
            </div>
        </div>
    </header>
"""

FOOTER_HTML = """
    <footer class="bg-gray-900 text-gray-400 py-10 mt-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div class="flex justify-center items-center gap-6 mb-4 text-sm">
                <a href="https://www.sunrise-net.ne.jp/index.html" class="hover:text-white transition">HOME</a>
                <span class="text-gray-700">|</span>
                <a href="https://www.sunrise-net.ne.jp/dormnet_list.html" class="hover:text-white transition">寮内ネットTOP</a>
            </div>
            <p class="text-sm">&copy; 2026 Sun-Net Inc. All Rights Reserved.</p>
        </div>
    </footer>
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
<body class="bg-slate-50 text-slate-800 antialiased font-sans">
    {HEADER_HTML}

    <main class="max-w-3xl mx-auto px-4 pb-12">
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-slate-100">
            <div class="p-6 sm:p-8">
                <div class="flex justify-end gap-2 mb-6">
                    <button onclick="toggleLang('ja')" id="inner-btn-ja" class="px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200">JP</button>
                    <button onclick="toggleLang('en')" id="inner-btn-en" class="px-3 py-1 rounded-lg text-sm text-slate-500 hover:bg-slate-100 border border-transparent">EN</button>
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

    {FOOTER_HTML}

    <script>
    function toggleLang(lang) {{
        document.getElementById('content-ja').style.display = lang === 'ja' ? 'block' : 'none';
        document.getElementById('content-en').style.display = lang === 'en' ? 'block' : 'none';
        
        const btnJa = document.getElementById('inner-btn-ja');
        const btnEn = document.getElementById('inner-btn-en');
        const activeClass = "px-3 py-1 rounded-lg text-sm font-bold bg-blue-50 text-blue-600 border border-blue-200";
        const inactiveClass = "px-3 py-1 rounded-lg text-sm text-slate-500 hover:bg-slate-100 border border-transparent";
        
        if (lang === 'ja') {{
            btnJa.className = activeClass;
            btnEn.className = inactiveClass;
        }} else {{
            btnJa.className = inactiveClass;
            btnEn.className = activeClass;
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
            <h2 class="text-slate-800 font-bold text-xl mb-6 flex items-center font-sans">
                <img src="images/mascot_thumbsup.png" class="w-12 h-12 mr-4 scale-125" alt="Popular">
                <span>みんなが注目！よくある質問</span>
            </h2>
            <ul class="grid grid-cols-1 gap-2 text-slate-700 font-sans">
                {pop_list}
            </ul>
        </div>
    </section>
    """

# Sort services
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
    svc_html = f'<section class="mb-20"><h2 class="flex items-center text-2xl font-bold text-slate-900 mb-8 font-sans"><span class="w-3 h-8 bg-blue-500 mr-4 rounded-sm"></span>{html.escape(svc_name)}</h2>'
    
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
            <h3 class="text-lg font-bold text-blue-600 mb-5 pb-3 border-b border-slate-100 font-sans">{html.escape(cat_name)}</h3>
            <ul class="space-y-0.5 font-sans">
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
<body class="bg-slate-50 text-slate-800 antialiased font-sans">
    {HEADER_HTML}

    <main class="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div class="mb-12 text-center">
            <h1 class="text-5xl md:text-7xl font-black manga-font text-blue-600 tracking-tighter italic text-outline transform -rotate-2 mb-2">
                FAQ
            </h1>
            <p class="text-slate-500 font-bold uppercase tracking-widest text-sm">Frequently Asked Questions</p>
        </div>

        <div class="max-w-2xl mx-auto mb-16 w-full relative z-30">
            <div class="google-shadow bg-white rounded-full flex items-center px-4 md:px-6 py-1 md:py-2 transition duration-200 group border-2 border-blue-100">
                <div class="text-slate-400 p-2">
                    <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="text" id="search-input" 
                    class="flex-1 px-3 py-3 md:py-4 bg-transparent border-none text-slate-800 text-base md:text-lg focus:ring-0 outline-none font-sans" 
                    placeholder="知りたいことを入力してください" 
                    autocomplete="off">
            </div>
            <div id="suggest-box" class="absolute top-full left-0 right-0 mt-3 bg-white rounded-3xl shadow-2xl overflow-hidden hidden z-50 text-left border border-slate-100 py-4"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 px-4">
            <a href="chat-style/index.html" class="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-2xl transition duration-500 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl">💬</span>
                        <h3 class="text-2xl font-black text-blue-900 font-sans italic">Chat Style</h3>
                    </div>
                    <p class="text-slate-600 font-medium leading-relaxed">対話形式で問題を切り分けます。<br>チャットボットが最適な回答をガイドします。</p>
                    <div class="mt-6 flex items-center text-blue-600 font-bold">
                        チャットを開始する <span class="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
                <div class="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src="images/mascot_tab.png" class="w-32 h-32 object-contain">
                </div>
            </a>

            <a href="card-style/index.html" class="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-3xl border-2 border-indigo-100 hover:border-indigo-400 hover:shadow-2xl transition duration-500 relative overflow-hidden">
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-4">
                        <span class="text-4xl">🗂️</span>
                        <h3 class="text-2xl font-black text-indigo-900 font-sans italic">Card Style</h3>
                    </div>
                    <p class="text-slate-600 font-medium leading-relaxed">視覚的なカード選択で問題を解決。<br>直感的な操作で原因を特定したい方に。</p>
                    <div class="mt-6 flex items-center text-indigo-600 font-bold">
                        診断を開始する <span class="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                </div>
                <div class="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src="images/mascot_thumbsup.png" class="w-32 h-32 object-contain">
                </div>
            </a>
        </div>

        <div id="search-results-area" class="hidden mb-16 animate-in fade-in duration-500">
            <h2 id="search-results-title" class="text-2xl font-bold text-slate-800 mb-8 flex items-center font-sans">
                <span class="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-ping"></span>検索結果
            </h2>
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden p-2 border-2 border-blue-50">
                <ul id="search-results-list" class="space-y-2"></ul>
            </div>
        </div>

        <div id="main-content">
            {popular_html}
            {content_html}
        </div>
    </main>

    {FOOTER_HTML}

    <script>
    const searchInput = document.getElementById('search-input');
    const suggestBox = document.getElementById('suggest-box');
    const searchArea = document.getElementById('search-results-area');
    const searchList = document.getElementById('search-results-list');
    const searchTitle = document.getElementById('search-results-title');
    const mainContent = document.getElementById('main-content');

    let currentLang = 'ja';

    const translations = {{
        ja: {{
            placeholder: "知りたいことを入力してください",
            results: "検索結果",
            no_results: "見つかりませんでした",
            popular: "みんなが注目！よくある質問"
        }},
        en: {{
            placeholder: "Type what you want to know",
            results: "Search Results",
            no_results: "No results found",
            popular: "Popular FAQs"
        }}
    }};

    function toggleLang(lang) {{
        currentLang = lang;
        // Navigation toggle if needed
        const btnJa = document.getElementById('btn-ja');
        const btnEn = document.getElementById('btn-en');
        if (btnJa && btnEn) {{
            btnJa.classList.toggle('active', lang === 'ja');
            btnEn.classList.toggle('active', lang === 'en');
        }}

        // Update UI Text
        searchInput.placeholder = translations[lang].placeholder;
        const popularTitle = document.querySelector('section h2 span:last-child');
        if (popularTitle) popularTitle.innerText = translations[lang].popular;
    }}

    function normalizeText(text) {{
        if (!text) return "";
        return text.normalize('NFKC').toLowerCase()
            .replace(/[\\u3041-\\u3096]/g, function(s) {{
                return String.fromCharCode(s.charCodeAt(0) + 0x60);
            }});
    }}

    function highlightText(text, query) {{
        if (!query) return text;
        const nText = normalizeText(text);
        const nQuery = normalizeText(query);
        let result = '';
        let lastIdx = 0;
        let idx = nText.indexOf(nQuery);
        while (idx !== -1) {{
            result += text.substring(lastIdx, idx);
            const match = text.substring(idx, idx + nQuery.length);
            result += `<span class="bg-blue-100 text-blue-700 font-bold px-1 rounded-sm">${{match}}</span>`;
            lastIdx = idx + nQuery.length;
            idx = nText.indexOf(nQuery, lastIdx);
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
            return item.normalized.includes(query) || item.tags.some(t => normalizeText(t).includes(query));
        }});

        suggestBox.innerHTML = '';
        if (results.length > 0) {{
            results.slice(0, 8).forEach(item => {{
                const div = document.createElement('div');
                div.className = 'px-8 py-3.5 hover:bg-slate-50 hover:text-blue-600 cursor-pointer transition flex items-center group';
                div.innerHTML = `<span class="font-medium font-sans">${{highlightText(item.question, rawInput)}}</span>`;
                div.onclick = () => {{ window.location.href = item.id + '.html'; }};
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
            searchTitle.innerHTML = `<span class="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-ping"></span>${{translations[currentLang].results}}: ${{results.length}}件`;
            results.forEach(item => {{
                const li = document.createElement('li');
                li.innerHTML = `<a class="block bg-white p-6 rounded-2xl hover:bg-blue-50 transition border border-transparent hover:border-blue-100" href="${{item.id}}.html"><div class="flex items-start"><div class="font-black text-blue-500 mr-4 text-xl font-manga">Q.</div><div class="font-bold text-slate-800 text-lg font-sans">${{highlightText(item.question, rawInput)}}</div></div></a>`;
                searchList.appendChild(li);
            }});
        }}
    }});

    // Initialize Language
    toggleLang('ja');
    </script>
</body>
</html>
"""

with open(os.path.join(OUTPUT_DIR, "index.html"), 'w', encoding='utf-8') as f:
    f.write(index_html)

print("Successfully generated FAQ site with unified design in sunnet-renewal.")
