import json

# Read JSON source
try:
    with open('faq_source.json', 'r', encoding='utf-8') as f:
        source_data = json.load(f)
except Exception as e:
    print(f"Error reading JSON: {e}")
    exit(1)

# Define the base structure of data.js
faq_data = {
    "title": {
        "ja": "Sun-Net FAQボット",
        "en": "Sun-Net FAQ Bot"
    },
    "initialStepId": "start",
    "steps": {
        "start": {
            "id": "start",
            "question": {
                "ja": "SUN-Netサポートデスクへようこそ！ご用件を教えてください。",
                "en": "Welcome to SUN-Net Support Desk! How can we help you?"
            },
            "options": [
                { "label": { "ja": "会員様（既にご契約中の方）", "en": "Current Member" }, "nextId": "member_nature" },
                { "label": { "ja": "新規・入会をご検討中の方", "en": "Prospect / New Application" }, "nextId": "prospect_nature" }
            ]
        },
        "member_nature": {
            "id": "member_nature",
            "question": { "ja": "どのようなご用件でしょうか？", "en": "How can we help you?" },
            "options": [
                { "label": { "ja": "インターネットがつながらない・遅い", "en": "Internet Issue" }, "nextId": "cat_trouble" },
                { "label": { "ja": "契約・お支払い・手続きについて", "en": "Contract / Payment" }, "nextId": "cat_admin" },
                { "label": { "ja": "サービス案内・操作方法", "en": "Service Info / Usage" }, "nextId": "cat_info" },
                { "label": { "ja": "解決しないのでオペレーターに相談", "en": "Talk to an operator" }, "nextId": "operator_chat_form" }
            ]
        },
        "prospect_nature": {
            "id": "prospect_nature",
            "question": { "ja": "ご検討中の内容について教えてください。", "en": "What are you interested in?" },
            "options": [
                { "label": { "ja": "サービス案内（新規・変更）", "en": "Service Information" }, "nextId": "cat_info" },
                { "label": { "ja": "解決しないのでオペレーターに相談", "en": "Talk to an operator" }, "nextId": "operator_chat_form" }
            ]
        },
        "cat_trouble": {
            "id": "cat_trouble",
            "question": { "ja": "どのサービスでお困りですか？", "en": "Which service are you having trouble with?" },
            "options": [
                { "label": { "ja": "寮内ネット", "en": "Dorm Net" }, "nextId": "dt_when" },
                { "label": { "ja": "Sun-Net光", "en": "Sun-Net Hikari" }, "nextId": "cat_hikari_trouble" },
                { "label": { "ja": "SIMカード", "en": "SIM Card" }, "nextId": "cat_sim_trouble" }
            ]
        },
        "cat_admin": {
            "id": "cat_admin",
            "question": { "ja": "どのような手続きについてですか？", "en": "What kind of procedure is it?" },
            "options": [
                { "label": { "ja": "お支払い方法", "en": "Payment Methods" }, "nextId": "cat_payment" },
                { "label": { "ja": "各種申請・変更", "en": "Applications / Changes" }, "nextId": "cat_admin_proc" }
            ]
        },
        "cat_info": {
            "id": "cat_info",
            "question": { "ja": "ご希望のサービスを選んでください。", "en": "Please select the service." },
            "options": [
                { "label": { "ja": "寮内ネット案内", "en": "Dorm Net Info" }, "nextId": "cat_dorm_info" },
                { "label": { "ja": "Sun-Net光案内", "en": "Sun-Net Hikari Info" }, "nextId": "cat_hikari_info" },
                { "label": { "ja": "SIMサービス案内", "en": "SIM Service Info" }, "nextId": "cat_sim_info" }
            ]
        },
        # Operator form step
        "operator_chat_form": {
            "id": "operator_chat_form",
            "type": "input_form",
            "question": {
                "ja": "オペレーターにお繋ぎします。以下の情報をご入力ください。",
                "en": "Connecting you to an operator. Please provide the following details."
            },
            "fields": [
                { "id": "user_name", "label": { "ja": "お名前", "en": "Your Name" }, "type": "text", "required": True },
                { "id": "member_id", "label": { "ja": "会員ID (任意)", "en": "Member ID (Optional)" }, "type": "text", "required": False }
            ],
            "submit_label": { "ja": "チャットを開始する", "en": "Start Chat" }
        }
    }
}

# Define decision tree for Dorm Net Trouble
dorm_trouble_steps = {
    "dt_when": {
        "id": "dt_when",
        "question": {"ja": "いつからつながらなくなりましたか？", "en": "When did it stop connecting?"},
        "options": [
            {"label": {"ja": "本日から", "en": "Since today"}, "nextId": "dt_scope"},
            {"label": {"ja": "数日前から", "en": "Since a few days ago"}, "nextId": "dt_scope"},
            {"label": {"ja": "上記以前から", "en": "Before that"}, "nextId": "dt_scope"}
        ]
    },
    "dt_scope": {
        "id": "dt_scope",
        "question": {"ja": "全端末がつながらないか、一部の端末のみですか？", "en": "Is it all devices or only some?"},
        "options": [
            {"label": {"ja": "全端末がつながらない", "en": "All devices"}, "nextId": "dt_all_power"},
            {"label": {"ja": "一部の端末のみ", "en": "Some devices"}, "nextId": "dt_some_mac"}
        ]
    },
    "dt_all_power": {
        "id": "dt_all_power",
        "question": {"ja": "建物全体で停電などありましたか？", "en": "Was there a power outage in the building?"},
        "options": [
            {"label": {"ja": "ありません", "en": "No"}, "nextId": "dt_all_neighbors"},
            {"label": {"ja": "ありました", "en": "Yes"}, "nextId": "dt_all_outage_contact"}
        ]
    },
    "dt_all_outage_contact": {
        "id": "dt_all_outage_contact",
        "type": "solution",
        "show_contact": True,
        "question": {"ja": "お住いの建物全体でインターネット接続に問題が発生している可能性がありますので、弊社までお問合せください。", "en": "There might be a building-wide issue. Please contact us."},
        "options": [
             {"label": {"ja": "オペレーターに相談", "en": "Contact Operator"}, "nextId": "operator_chat_form"},
             {"label": {"ja": "トップに戻る", "en": "Back to Top"}, "action": "reset"}
        ]
    },
    "dt_all_neighbors": {
        "id": "dt_all_neighbors",
        "question": {"ja": "周辺のSun-Netユーザーの方でインターネットにつながらないという方は複数名いますか？", "en": "Are there other Sun-Net users nearby having the same issue?"},
        "options": [
            {"label": {"ja": "います", "en": "Yes"}, "nextId": "dt_all_outage_contact"},
            {"label": {"ja": "いません", "en": "No"}, "nextId": "dt_all_contract"},
            {"label": {"ja": "わからない", "en": "Unknown"}, "nextId": "dt_all_contract"}
        ]
    },
    "dt_all_contract": {
        "id": "dt_all_contract",
        "question": {"ja": "念のためご契約期間をご確認ください。", "en": "Please check your contract period."},
        "options": [
            {"label": {"ja": "契約期間内", "en": "Within contract period"}, "nextId": "dt_all_payment"},
            {"label": {"ja": "契約期間が終了していた", "en": "Expired"}, "nextId": "dt_all_renew"},
            {"label": {"ja": "わからない", "en": "Unknown"}, "nextId": "operator_chat_form"}
        ]
    },
    "dt_all_payment": {
        "id": "dt_all_payment",
        "question": {"ja": "お支払されていないご請求はございませんか？", "en": "Do you have any unpaid bills?"},
        "options": [
            {"label": {"ja": "ある", "en": "Yes"}, "nextId": "dt_all_pay_msg"},
            {"label": {"ja": "ない", "en": "No"}, "nextId": "dt_all_outage_contact"},
            {"label": {"ja": "わからない", "en": "Unknown"}, "nextId": "operator_chat_form"}
        ]
    },
    "dt_all_pay_msg": {
        "id": "dt_all_pay_msg",
        "type": "solution",
        "show_contact": True,
        "question": {"ja": "料金のお支払確認が取れない場合一時的にサービスの利用が制限されます。Sun-Netから送信される最近のメールでの請求内容をご確認いただきお支払をおねがいします。メールが届いていない、見当たらない場合はお問合せください。", "en": "Service is restricted due to unpaid bills. Please check your email for payment requests."},
        "options": [
             {"label": {"ja": "オペレーターに相談", "en": "Contact Operator"}, "nextId": "operator_chat_form"},
             {"label": {"ja": "トップに戻る", "en": "Back to Top"}, "action": "reset"}
        ]
    },
    "dt_all_renew": {
        "id": "dt_all_renew",
        "type": "solution",
        "show_contact": True,
        "question": {"ja": "引き続きご利用する場合は継続手続き申請が必要です。下記のボタンよりお手続きをおねがいします。", "en": "To continue using the service, please apply for renewal."},
        "options": [
             {"label": {"ja": "継続手続きへ", "en": "Renewal Application"}, "url": "http://www.sunrise-net.ne.jp/sunnethikari.html"},
             {"label": {"ja": "オペレーターに相談", "en": "Contact Operator"}, "nextId": "operator_chat_form"}
        ]
    },
    "dt_some_mac": {
        "id": "dt_some_mac",
        "question": {"ja": "MACアドレスの登録申請済みの端末ですか？", "en": "Is this device's MAC address registered?"},
        "options": [
            {"label": {"ja": "はい", "en": "Yes"}, "nextId": "dt_some_reboot"},
            {"label": {"ja": "いいえ", "en": "No"}, "nextId": "dt_some_register"},
            {"label": {"ja": "わからない", "en": "Unknown"}, "nextId": "dt_some_register"}
        ]
    },
    "dt_some_reboot": {
        "id": "dt_some_reboot",
        "question": {"ja": "無線ルーターを再起動してください。つながりましたか？", "en": "Please reboot your router. Did it connect?"},
        "options": [
            {"label": {"ja": "はい", "en": "Yes"}, "action": "reset"},
            {"label": {"ja": "いいえ", "en": "No"}, "nextId": "dt_some_check_wan"}
        ]
    },
    "dt_some_check_wan": {
        "id": "dt_some_check_wan",
        "question": {"ja": "無線ルーターの電源確認およびＷＡＮポートへのケーブル差し込み状態を確認してください。\n無線ルーターのアクティブランプはオレンジに光っていますか？", "en": "Check power and WAN cable. Is the Active lamp orange?"},
        "options": [
             {"label": {"ja": "光っている(はい)", "en": "Yes"}, "nextId": "operator_chat_form"},
             {"label": {"ja": "光っていない(いいえ)", "en": "No"}, "nextId": "operator_chat_form"}
        ]
    },
    "dt_some_register": {
        "id": "dt_some_register",
        "type": "solution",
        "show_contact": True,
        "question": {"ja": "ご利用中の端末において（例：機種変更や新規ご購入端末）ＭＡＣアドレスの申請が必要です。下記のボタンより申請をお願いします。※一部の建物ではＭＡＣアドレスの申請が不要でございます。ご入会当初のご案内を改めてご確認ください。", "en": "MAC address registration is required for new devices."},
        "options": [
             {"label": {"ja": "MACアドレス登録申請", "en": "MAC Registration"}, "url": "https://sunrise-net-s.cms2.jp/contact_list/mac_application_add.html"},
             {"label": {"ja": "オペレーターに相談", "en": "Contact Operator"}, "nextId": "operator_chat_form"}
        ]
    }
}
faq_data['steps'].update(dorm_trouble_steps)

# Categorization mapping
categories = {
    "cat_dorm_trouble": [],
    "cat_hikari_trouble": [],
    "cat_sim_trouble": [],
    "cat_payment": [],
    "cat_admin_proc": [],
    "cat_dorm_info": [],
    "cat_hikari_info": [],
    "cat_sim_info": []
}

for item in source_data['items']:
    try:
        sid = item.get('id')
        if not sid or sid.startswith("LINE-"):
            continue
        q_ja = item.get('question') or ""  # Handle None
        a_ja = item.get('answer') or ""    # Handle None
        service = item.get('service')      # Can be None
        tags = item.get('tags') or []      # Handle None
        
        # Ensure consistent types
        if not isinstance(tags, list):
            tags = []
        if service is None:
            service = ""

        # Create the solution step
        q_en = item.get('question_en') or q_ja
        a_en = item.get('answer_en') or a_ja
        
        faq_data['steps'][sid] = {
            "id": sid,
            "type": "solution",
            "show_contact": True,
            "question": { "ja": q_ja, "en": q_en },
            "content": {
                "text": { "ja": a_ja, "en": a_en },
            },
            "options": [
                { "label": { "ja": "有人チャットで相談する", "en": "Chat with an operator" }, "nextId": "operator_chat_form" },
                { "label": { "ja": "トップに戻る", "en": "Back to Top" }, "action": "reset" }
            ]
        }

        # Classification logic
        target_services = []
        for tag in [item.get('service_tag_a'), item.get('service_tag_b')]:
            if not tag: continue
            if tag in ["すべて", "ALL", "All"]:
                target_services.extend(["寮内ネット", "Sun-Net光", "SIMカード"])
            else:
                target_services.append(tag)
        
        # Backward compatibility for old 'service' field if present
        if not target_services and item.get('service'):
            target_services.append(item.get('service'))

        added = False
        
        # Check for payment keywords
        is_payment = "お支払" in q_ja or "払い" in q_ja
        for t in tags:
            if t and "支払い" in str(t):
                is_payment = True
                break
        
        if is_payment:
            categories["cat_payment"].append(sid)
            added = True

        # Process by service tags
        for svc in set(target_services):
            if svc == "寮内ネット":
                trouble_keywords = ["つながらない", "遅い", "繋がらない", "接続", "切れる", "圏外", "速度"]
                if any(k in q_ja for k in trouble_keywords):
                    categories["cat_dorm_trouble"].append(sid)
                else:
                    categories["cat_dorm_info"].append(sid)
                added = True
            elif svc == "Sun-Net光":
                if "案内" in q_ja or "申込" in q_ja:
                    categories["cat_hikari_info"].append(sid)
                else:
                    categories["cat_hikari_trouble"].append(sid)
                added = True
            elif svc in ["SIMカード", "SIM", "SM"]:
                if "案内" in q_ja or "申込" in q_ja:
                    categories["cat_sim_info"].append(sid)
                else:
                    categories["cat_sim_trouble"].append(sid)
                added = True
        
        if not added:
            is_proc = "変更" in q_ja or "手続" in q_ja
            for t in tags:
                if t and "手続き" in str(t):
                    is_proc = True
                    break
            
            if is_proc:
                categories["cat_admin_proc"].append(sid)
            else:
                # Default fallback
                categories["cat_dorm_info"].append(sid)
                
    except Exception as e:
        print(f"Error processing item {item.get('id', 'unknown')}: {e}")
        continue

# Generate category steps
for cid, item_ids in categories.items():
    if not item_ids:
        faq_data['steps'][cid] = {
            "id": cid,
            "question": { "ja": "該当する項目が見つかりませんでした。", "en": "No items found." },
            "options": [{ "label": { "ja": "トップに戻る", "en": "Back to Top" }, "action": "reset" }]
        }
        continue

    # Limit options per page (max 10)
    best_ids = item_ids[:10]
    
    faq_data['steps'][cid] = {
        "id": cid,
        "question": { "ja": "具体的な質問を選んでください。", "en": "Please select a specific question." },
        "options": [
            { "label": { "ja": faq_data['steps'][iid]['question']['ja'][:30] + ("..." if len(faq_data['steps'][iid]['question']['ja']) > 30 else ""), "en": faq_data['steps'][iid]['question']['en'][:30] + ("..." if len(faq_data['steps'][iid]['question']['en']) > 30 else "") }, "nextId": iid }
            for iid in best_ids
        ] + [
            { "label": { "ja": "解決しないのでオペレーターに相談", "en": "Talk to an operator" }, "nextId": "operator_chat_form" },
            { "label": { "ja": "トップに戻る", "en": "Back to Top" }, "action": "reset" }
        ]
    }

# Write to data.js
try:
    with open('data_v2.js', 'w', encoding='utf-8') as f:
        f.write("// FAQデータの定義 (JSONソース統合版)\n")
        f.write("const FAQ_DATA = ")
        json.dump(faq_data, f, ensure_ascii=False, indent=2)
        f.write(";")
    print("Successfully generated data_v2.js")
except Exception as e:
    print(f"Error writing data.js: {e}")
    exit(1)


    f.write(";")
print("Successfully generated data.js")
