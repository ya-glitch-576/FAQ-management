import json
import csv

JSON_FILE = 'faq_source.json'
CSV_FILE = 'FAQ_checked_fixed.csv'

CAT_MAP = {
    "接続の基本とトラブルシューティング": "Basic Connection & Troubleshooting",
    "物理アドレス（MACアドレス）と登録": "Physical Address (MAC Address) & Registration",
    "ネットワーク設定": "Network Settings",
    "デバイス別の設定と問題解決": "Device Specific Settings & Troubleshooting",
    "ネットワークのパフォーマンスと最適化": "Network Performance & Optimization",
    "セキュリティとプライバシー": "Security & Privacy",
    "Sun-Net光": "Sun-Net Hikari",
    "SIMサービス": "SIM Service",
    "SIM設定": "SIM Settings",
    "料金支払": "Payment",
    "クレジットカード": "Credit Card",
    "クレジットカード払い": "Credit Card Payment",
    "カスタマーサポートと情報": "Customer Support & Information",
    "相部屋": "Shared Room",
    "エリア判定": "Area Check",
    "SMS": "SMS",
    "払込票払い": "Payment Slip",
    "口座振替": "Bank Transfer",
    "変更手続き": "Change Procedures",
    "トラブルシューティング": "Troubleshooting",
    "無線ルーター|LANケーブル|MACアドレス|契約期間|寮内ネット": "Router|Cable|MAC|Contract|Dorm Net",
    "MACアドレス|寮内ネット|iphone|ipad": "MAC|Dorm Net|iPhone|iPad",
    "MACアドレス|寮内ネット|Android": "MAC|Dorm Net|Android"
}

QA_MAP = {
    "インターネットに接続できません。どうすればよいですか？": {
        "q": "I cannot connect to the internet. What should I do?",
        "a": "First, check if the router is powered on. Next, verify that the Wi-Fi SSID and password are correct. If you still cannot connect, try restarting your device."
    },
    "Wi-Fiのパスワードがわかりません。どうすればよいですか？": {
        "q": "I don't know the Wi-Fi password. What should I do?",
        "a": "The Wi-Fi password (encryption key) is usually located on the back or bottom of the router. If you cannot find it, please contact Sun-Net support."
    },
    "インターネット速度が遅いです。改善方法はありますか？": {
        "q": "The internet speed is slow. Is there a way to improve it?",
        "a": "Try restarting the router or moving closer to it. Also, check the usage status of other devices and optimize network settings if necessary."
    },
    "物理（MAC）アドレスとは何ですか？なぜ登録が必要なのですか？": {
        "q": "What is a physical (MAC) address? Why is registration required?",
        "a": "A physical address is a unique number used to identify a network device. At Sun-Net, registration of each device's MAC address is required for security and management."
    },
    "インターネットが突然切断されます。原因は何でしょうか？": {
        "q": "The internet is suddenly disconnected. What is the cause?",
        "a": "Possible causes include router placement, radio interference, or outdated firmware. Try restarting the router, changing its position, or updating to the latest firmware."
    },
    "物理アドレスの確認方法を教えてください。": {
        "q": "How can I check the physical address?",
        "a": "It varies by device, but generally for a Windows PC, type 'getmac /v' in the command prompt. For Mac OS, check under 'System Preferences' -> 'Network'."
    },
    "新しいデバイスを購入しました。どうすればよいですか？": {
        "q": "I bought a new device. What should I do?",
        "a": "Check the physical address of the new device and follow the procedures via the MAC address addition form: https://sunrise-net-s.cms2.jp/contact_list/mac_application_add.html"
    },
    "登録できるデバイスの数に制限はありますか？": {
        "q": "Is there a limit to the number of devices that can be registered?",
        "a": "Basically, up to 5 devices can be registered. From the 6th device onwards, additional registration is possible for 220 yen (tax included) per month per device."
    },
    "スマートフォンのWi-Fi接続ができません。": {
        "q": "My smartphone cannot connect to Wi-Fi.",
        "a": "If 'Private Address' or 'Random MAC Address' features are ON in your smartphone's Wi-Fi settings, please try turning them OFF."
    }
}

def restore():
    with open(JSON_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    items = data.get('items', [])
    fieldnames = ['サービスタグ', 'カテゴリー', 'カテゴリー_en', '質問', '質問_en', '回答', '回答_en', 'is_popular']
    
    rows = []
    for item in items:
        # Ignore non-FAQ items if any (like news/mail if they are separate)
        # But based on grep, faq_source.json has them all. 
        # Only include items with a category or typical FAQ structure.
        q = item.get('question')
        if not q:
            continue
            
        row = {
            'サービスタグ': item.get('service_tag_a') or item.get('service'),
            'カテゴリー': item.get('category'),
            'カテゴリー_en': '',
            '質問': q,
            '質問_en': '',
            '回答': item.get('answer'),
            '回答_en': '',
            'is_popular': '1' if item.get('is_popular') else ''
        }
        
        # Apply translation logic
        cat = row['カテゴリー']
        if cat in CAT_MAP:
            row['カテゴリー_en'] = CAT_MAP[cat]
        
        if q in QA_MAP:
            row['質問_en'] = QA_MAP[q]['q']
            row['回答_en'] = QA_MAP[q]['a']
        else:
            # Fallback/Default
            row['質問_en'] = q
            row['回答_en'] = row['回答']
            
        rows.append(row)

    with open(CSV_FILE, 'w', encoding='utf-8-sig', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)
    
    print(f"Restored {len(rows)} items to {CSV_FILE}")

if __name__ == "__main__":
    restore()
