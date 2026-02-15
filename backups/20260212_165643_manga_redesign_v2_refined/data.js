// FAQデータの定義 (JSONソース統合版)
const FAQ_DATA = {
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
        {
          "label": {
            "ja": "会員様（既にご契約中の方）",
            "en": "Current Member"
          },
          "nextId": "member_nature"
        },
        {
          "label": {
            "ja": "新規・入会をご検討中の方",
            "en": "Prospect / New Application"
          },
          "nextId": "prospect_nature"
        }
      ]
    },
    "member_nature": {
      "id": "member_nature",
      "question": {
        "ja": "どのようなご用件でしょうか？",
        "en": "How can we help you?"
      },
      "options": [
        {
          "label": {
            "ja": "インターネットがつながらない・遅い",
            "en": "Internet Issue"
          },
          "nextId": "cat_trouble"
        },
        {
          "label": {
            "ja": "契約・お支払い・手続きについて",
            "en": "Contract / Payment"
          },
          "nextId": "cat_admin"
        },
        {
          "label": {
            "ja": "サービス案内・操作方法",
            "en": "Service Info / Usage"
          },
          "nextId": "cat_info"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "prospect_nature": {
      "id": "prospect_nature",
      "question": {
        "ja": "ご検討中の内容について教えてください。",
        "en": "What are you interested in?"
      },
      "options": [
        {
          "label": {
            "ja": "サービス案内（新規・変更）",
            "en": "Service Information"
          },
          "nextId": "cat_info"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "cat_trouble": {
      "id": "cat_trouble",
      "question": {
        "ja": "どのサービスでお困りですか？",
        "en": "Which service are you having trouble with?"
      },
      "options": [
        {
          "label": {
            "ja": "寮内ネット",
            "en": "Dorm Net"
          },
          "nextId": "dt_when"
        },
        {
          "label": {
            "ja": "Sun-Net光",
            "en": "Sun-Net Hikari"
          },
          "nextId": "cat_hikari_trouble"
        },
        {
          "label": {
            "ja": "SIMカード",
            "en": "SIM Card"
          },
          "nextId": "cat_sim_trouble"
        }
      ]
    },
    "cat_admin": {
      "id": "cat_admin",
      "question": {
        "ja": "どのような手続きについてですか？",
        "en": "What kind of procedure is it?"
      },
      "options": [
        {
          "label": {
            "ja": "お支払い方法",
            "en": "Payment Methods"
          },
          "nextId": "cat_payment"
        },
        {
          "label": {
            "ja": "各種申請・変更",
            "en": "Applications / Changes"
          },
          "nextId": "cat_admin_proc"
        }
      ]
    },
    "cat_info": {
      "id": "cat_info",
      "question": {
        "ja": "ご希望のサービスを選んでください。",
        "en": "Please select the service."
      },
      "options": [
        {
          "label": {
            "ja": "寮内ネット案内",
            "en": "Dorm Net Info"
          },
          "nextId": "cat_dorm_info"
        },
        {
          "label": {
            "ja": "Sun-Net光案内",
            "en": "Sun-Net Hikari Info"
          },
          "nextId": "cat_hikari_info"
        },
        {
          "label": {
            "ja": "SIMサービス案内",
            "en": "SIM Service Info"
          },
          "nextId": "cat_sim_info"
        }
      ]
    },
    "operator_chat_form": {
      "id": "operator_chat_form",
      "type": "input_form",
      "question": {
        "ja": "オペレーターにお繋ぎします。以下の情報をご入力ください。",
        "en": "Connecting you to an operator. Please provide the following details."
      },
      "fields": [
        {
          "id": "user_name",
          "label": {
            "ja": "お名前",
            "en": "Your Name"
          },
          "type": "text",
          "required": true
        },
        {
          "id": "member_id",
          "label": {
            "ja": "会員ID (任意)",
            "en": "Member ID (Optional)"
          },
          "type": "text",
          "required": false
        }
      ],
      "submit_label": {
        "ja": "チャットを開始する",
        "en": "Start Chat"
      }
    },
    "dt_when": {
      "id": "dt_when",
      "question": {
        "ja": "いつからつながらなくなりましたか？",
        "en": "When did it stop connecting?"
      },
      "options": [
        {
          "label": {
            "ja": "本日から",
            "en": "Since today"
          },
          "nextId": "dt_scope"
        },
        {
          "label": {
            "ja": "数日前から",
            "en": "Since a few days ago"
          },
          "nextId": "dt_scope"
        },
        {
          "label": {
            "ja": "上記以前から",
            "en": "Before that"
          },
          "nextId": "dt_scope"
        }
      ]
    },
    "dt_scope": {
      "id": "dt_scope",
      "question": {
        "ja": "全端末がつながらないか、一部の端末のみですか？",
        "en": "Is it all devices or only some?"
      },
      "options": [
        {
          "label": {
            "ja": "全端末がつながらない",
            "en": "All devices"
          },
          "nextId": "dt_all_power"
        },
        {
          "label": {
            "ja": "一部の端末のみ",
            "en": "Some devices"
          },
          "nextId": "dt_some_mac"
        }
      ]
    },
    "dt_all_power": {
      "id": "dt_all_power",
      "question": {
        "ja": "建物全体で停電などありましたか？",
        "en": "Was there a power outage in the building?"
      },
      "options": [
        {
          "label": {
            "ja": "ありません",
            "en": "No"
          },
          "nextId": "dt_all_neighbors"
        },
        {
          "label": {
            "ja": "ありました",
            "en": "Yes"
          },
          "nextId": "dt_all_outage_contact"
        }
      ]
    },
    "dt_all_outage_contact": {
      "id": "dt_all_outage_contact",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "お住いの建物全体でインターネット接続に問題が発生している可能性がありますので、弊社までお問合せください。",
        "en": "There might be a building-wide issue. Please contact us."
      },
      "options": [
        {
          "label": {
            "ja": "オペレーターに相談",
            "en": "Contact Operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "dt_all_neighbors": {
      "id": "dt_all_neighbors",
      "question": {
        "ja": "周辺のSun-Netユーザーの方でインターネットにつながらないという方は複数名いますか？",
        "en": "Are there other Sun-Net users nearby having the same issue?"
      },
      "options": [
        {
          "label": {
            "ja": "います",
            "en": "Yes"
          },
          "nextId": "dt_all_outage_contact"
        },
        {
          "label": {
            "ja": "いません",
            "en": "No"
          },
          "nextId": "dt_all_contract"
        },
        {
          "label": {
            "ja": "わからない",
            "en": "Unknown"
          },
          "nextId": "dt_all_contract"
        }
      ]
    },
    "dt_all_contract": {
      "id": "dt_all_contract",
      "question": {
        "ja": "念のためご契約期間をご確認ください。",
        "en": "Please check your contract period."
      },
      "options": [
        {
          "label": {
            "ja": "契約期間内",
            "en": "Within contract period"
          },
          "nextId": "dt_all_payment"
        },
        {
          "label": {
            "ja": "契約期間が終了していた",
            "en": "Expired"
          },
          "nextId": "dt_all_renew"
        },
        {
          "label": {
            "ja": "わからない",
            "en": "Unknown"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "dt_all_payment": {
      "id": "dt_all_payment",
      "question": {
        "ja": "お支払されていないご請求はございませんか？",
        "en": "Do you have any unpaid bills?"
      },
      "options": [
        {
          "label": {
            "ja": "ある",
            "en": "Yes"
          },
          "nextId": "dt_all_pay_msg"
        },
        {
          "label": {
            "ja": "ない",
            "en": "No"
          },
          "nextId": "dt_all_outage_contact"
        },
        {
          "label": {
            "ja": "わからない",
            "en": "Unknown"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "dt_all_pay_msg": {
      "id": "dt_all_pay_msg",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "料金のお支払確認が取れない場合一時的にサービスの利用が制限されます。Sun-Netから送信される最近のメールでの請求内容をご確認いただきお支払をおねがいします。メールが届いていない、見当たらない場合はお問合せください。",
        "en": "Service is restricted due to unpaid bills. Please check your email for payment requests."
      },
      "options": [
        {
          "label": {
            "ja": "オペレーターに相談",
            "en": "Contact Operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "dt_all_renew": {
      "id": "dt_all_renew",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "引き続きご利用する場合は継続手続き申請が必要です。下記のボタンよりお手続きをおねがいします。",
        "en": "To continue using the service, please apply for renewal."
      },
      "options": [
        {
          "label": {
            "ja": "継続手続きへ",
            "en": "Renewal Application"
          },
          "url": "http://www.sunrise-net.ne.jp/sunnethikari.html"
        },
        {
          "label": {
            "ja": "オペレーターに相談",
            "en": "Contact Operator"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "dt_some_mac": {
      "id": "dt_some_mac",
      "question": {
        "ja": "MACアドレスの登録申請済みの端末ですか？",
        "en": "Is this device's MAC address registered?"
      },
      "options": [
        {
          "label": {
            "ja": "はい",
            "en": "Yes"
          },
          "nextId": "dt_some_reboot"
        },
        {
          "label": {
            "ja": "いいえ",
            "en": "No"
          },
          "nextId": "dt_some_register"
        },
        {
          "label": {
            "ja": "わからない",
            "en": "Unknown"
          },
          "nextId": "dt_some_register"
        }
      ]
    },
    "dt_some_reboot": {
      "id": "dt_some_reboot",
      "question": {
        "ja": "無線ルーターを再起動してください。つながりましたか？",
        "en": "Please reboot your router. Did it connect?"
      },
      "options": [
        {
          "label": {
            "ja": "はい",
            "en": "Yes"
          },
          "action": "reset"
        },
        {
          "label": {
            "ja": "いいえ",
            "en": "No"
          },
          "nextId": "dt_some_check_wan"
        }
      ]
    },
    "dt_some_check_wan": {
      "id": "dt_some_check_wan",
      "question": {
        "ja": "無線ルーターの電源確認およびＷＡＮポートへのケーブル差し込み状態を確認してください。\n無線ルーターのアクティブランプはオレンジに光っていますか？",
        "en": "Check power and WAN cable. Is the Active lamp orange?"
      },
      "options": [
        {
          "label": {
            "ja": "光っている(はい)",
            "en": "Yes"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "光っていない(いいえ)",
            "en": "No"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "dt_some_register": {
      "id": "dt_some_register",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "ご利用中の端末において（例：機種変更や新規ご購入端末）ＭＡＣアドレスの申請が必要です。下記のボタンより申請をお願いします。※一部の建物ではＭＡＣアドレスの申請が不要でございます。ご入会当初のご案内を改めてご確認ください。",
        "en": "MAC address registration is required for new devices."
      },
      "options": [
        {
          "label": {
            "ja": "MACアドレス登録申請",
            "en": "MAC Registration"
          },
          "url": "https://sunrise-net-s.cms2.jp/contact_list/mac_application_add.html"
        },
        {
          "label": {
            "ja": "オペレーターに相談",
            "en": "Contact Operator"
          },
          "nextId": "operator_chat_form"
        }
      ]
    },
    "FAQ-0002": {
      "id": "FAQ-0002",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "自分の住んでいる学生寮で『寮内ネット』は利用できますか？",
        "en": "自分の住んでいる学生寮で『寮内ネット』は利用できますか？"
      },
      "content": {
        "text": {
          "ja": "Sun-Netサービスが学生寮全体で導入されている場合ご利用いただけます。ご自身の学生寮のご利用可否についてはお手数ですが下記までお問合せください。\nフリーダイヤル：0120-336-326\nメールアドレス：sales@sunrise-net.co.jp",
          "en": "Sun-Netサービスが学生寮全体で導入されている場合ご利用いただけます。ご自身の学生寮のご利用可否についてはお手数ですが下記までお問合せください。\nフリーダイヤル：0120-336-326\nメールアドレス：sales@sunrise-net.co.jp"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0003": {
      "id": "FAQ-0003",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。2年目はまた再契約になりますか？手続きはどのようにすればよいのでしょうか？",
        "en": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。2年目はまた再契約になりますか？手続きはどのようにすればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "契約期間に空白がなければ2年目以降は継続でのご案内となります。継続の際の手数料は発生致しません。契約期間に空白がある場合は再入会扱いとなります。",
          "en": "契約期間に空白がなければ2年目以降は継続でのご案内となります。継続の際の手数料は発生致しません。契約期間に空白がある場合は再入会扱いとなります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0004": {
      "id": "FAQ-0004",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "部屋でネットが必要かまだわからないので、夏までの契約にしたいのですが可能ですか？",
        "en": "部屋でネットが必要かまだわからないので、夏までの契約にしたいのですが可能ですか？"
      },
      "content": {
        "text": {
          "ja": "1ヶ月単位でのご契約が可能です。ご都合のよい契約期間をお選びください。",
          "en": "1ヶ月単位でのご契約が可能です。ご都合のよい契約期間をお選びください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0005": {
      "id": "FAQ-0005",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "退寮等でサービスを辞めたい場合、どのような手続きが必要ですか？",
        "en": "退寮等でサービスを辞めたい場合、どのような手続きが必要ですか？"
      },
      "content": {
        "text": {
          "ja": "お引越し先では引き続き『Sun-Net光』のご利用（プラン変更）が可能です。※一部建物を除く\n以下ページをご確認ください。\nhttp://www.sunrise-net.ne.jp/sunnethikari.html\nプラン変更をされない場合は解約はご解約月の前月末日までに弊社ホームページよりお手続きが必要です。お電話やメールによる解約受付は行っておりません。解約金として月額料金相当の解約金が発生いたしますのでご了承ください。",
          "en": "お引越し先では引き続き『Sun-Net光』のご利用（プラン変更）が可能です。※一部建物を除く\n以下ページをご確認ください。\nhttp://www.sunrise-net.ne.jp/sunnethikari.html\nプラン変更をされない場合は解約はご解約月の前月末日までに弊社ホームページよりお手続きが必要です。お電話やメールによる解約受付は行っておりません。解約金として月額料金相当の解約金が発生いたしますのでご了承ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0006": {
      "id": "FAQ-0006",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "ルーター購入プランで契約しておいて、途中からレンタルプランに変更することはできますか？",
        "en": "ルーター購入プランで契約しておいて、途中からレンタルプランに変更することはできますか？"
      },
      "content": {
        "text": {
          "ja": "はい、可能です。但し購入プランの方がレンタルプランに比べて月額料金の設定を低くしておりますので今後のご利用予定期間と比較しご検討ください。ご希望の際はプラン変更フォームよりお手続きをおねがいします。※別途無線ルーターの送料が発生いたします。",
          "en": "はい、可能です。但し購入プランの方がレンタルプランに比べて月額料金の設定を低くしておりますので今後のご利用予定期間と比較しご検討ください。ご希望の際はプラン変更フォームよりお手続きをおねがいします。※別途無線ルーターの送料が発生いたします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0007": {
      "id": "FAQ-0007",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "自分で購入した無線ルーターを利用することはできますか？",
        "en": "自分で購入した無線ルーターを利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "無線ルータのご使用に関してシステム運営上、一律弊社ルータに限らせて頂いており、無線ルーターを含むお持ち込み機器の利用はご遠慮頂いております。",
          "en": "無線ルータのご使用に関してシステム運営上、一律弊社ルータに限らせて頂いており、無線ルーターを含むお持ち込み機器の利用はご遠慮頂いております。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0008": {
      "id": "FAQ-0008",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "WiFiプラス/レンタルプランと購入プランの違いを教えてください。",
        "en": "WiFiプラス/レンタルプランと購入プランの違いを教えてください。"
      },
      "content": {
        "text": {
          "ja": "購入プランの方がレンタルプランに比べて月額利用料金を低く設定しています。継続して2年以上ご利用の予定がある場合は購入プランがおすすめです。尚、一部プランを除きいずれのプランにおいてもインターネット品質に大きな違いはありません。",
          "en": "購入プランの方がレンタルプランに比べて月額利用料金を低く設定しています。継続して2年以上ご利用の予定がある場合は購入プランがおすすめです。尚、一部プランを除きいずれのプランにおいてもインターネット品質に大きな違いはありません。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0009": {
      "id": "FAQ-0009",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "MACアドレスはどのようなものですか？",
        "en": "MACアドレスはどのようなものですか？"
      },
      "content": {
        "text": {
          "ja": "ネットワーク機器等に付いている固有の識別番号です。有線LANのほかに、無線LANやスマートフォン、プリンターなどにもMACアドレスが割り当てられています。\nMACアドレスは12桁の16進数で「00-00-00-XX-XX-XX」と表される。前半6桁がメーカー固有のアドレスで、後半6桁が製品個々のアドレスとなります。物理アドレスやWiFiアドレス等と表示される場合があります。",
          "en": "ネットワーク機器等に付いている固有の識別番号です。有線LANのほかに、無線LANやスマートフォン、プリンターなどにもMACアドレスが割り当てられています。\nMACアドレスは12桁の16進数で「00-00-00-XX-XX-XX」と表される。前半6桁がメーカー固有のアドレスで、後半6桁が製品個々のアドレスとなります。物理アドレスやWiFiアドレス等と表示される場合があります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0010": {
      "id": "FAQ-0010",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "有線LAN（有線接続）の意味を教えてください。",
        "en": "有線LAN（有線接続）の意味を教えてください。"
      },
      "content": {
        "text": {
          "ja": "LANケーブルを用いた接続方式です。一般的に無線接続に比べて通信や電波状況が安定しています。ご利用いただくにはLAN端子対応の機器及びMACアドレスの登録が必要です。未対応機器の場合有線LANアダプター（MACアドレスの登録が必要）を利用することにより接続が可能です。",
          "en": "LANケーブルを用いた接続方式です。一般的に無線接続に比べて通信や電波状況が安定しています。ご利用いただくにはLAN端子対応の機器及びMACアドレスの登録が必要です。未対応機器の場合有線LANアダプター（MACアドレスの登録が必要）を利用することにより接続が可能です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0011": {
      "id": "FAQ-0011",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "自身で購入した無線ルーターを利用することはできますか？",
        "en": "自身で購入した無線ルーターを利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "弊社システムの仕様上ご利用いただくことはできません。弊社から送られる指定の無線ルーターをご利用ください。",
          "en": "弊社システムの仕様上ご利用いただくことはできません。弊社から送られる指定の無線ルーターをご利用ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0012": {
      "id": "FAQ-0012",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "無線ルーターを買い替えたいのですが可能ですか？",
        "en": "無線ルーターを買い替えたいのですが可能ですか？"
      },
      "content": {
        "text": {
          "ja": "WiFiプラス購入プランご加入の場合は可能です。無線ルーター代金及び送料のご請求となります。",
          "en": "WiFiプラス購入プランご加入の場合は可能です。無線ルーター代金及び送料のご請求となります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0013": {
      "id": "FAQ-0013",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "LANケーブルは必要ですか？",
        "en": "LANケーブルは必要ですか？"
      },
      "content": {
        "text": {
          "ja": "弊社からお送りする無線ルーターに付属のLANケーブルがついています。WiFi接続のみご利用の場合はご用意いただく必要はありません。有線LAN接続をご希望の場合や無線ルーターの設置場所を変更される場合はご用意ください。※弊社でもLANケーブルの販売を行っております。",
          "en": "弊社からお送りする無線ルーターに付属のLANケーブルがついています。WiFi接続のみご利用の場合はご用意いただく必要はありません。有線LAN接続をご希望の場合や無線ルーターの設置場所を変更される場合はご用意ください。※弊社でもLANケーブルの販売を行っております。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0014": {
      "id": "FAQ-0014",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "申込時点ではノートパソコンを持っていませんが申し込むことはできますか？",
        "en": "申込時点ではノートパソコンを持っていませんが申し込むことはできますか？"
      },
      "content": {
        "text": {
          "ja": "はい。お申込は可能です。ノートパソコンが届きましたらMACアドレスをお調べいただき下記フォームよりMACアドレス申請をおねがいします。\nhttps://sunrise-net-s.cms2.jp/contact_list/mac_application_add.html",
          "en": "はい。お申込は可能です。ノートパソコンが届きましたらMACアドレスをお調べいただき下記フォームよりMACアドレス申請をおねがいします。\nhttps://sunrise-net-s.cms2.jp/contact_list/mac_application_add.html"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0015": {
      "id": "FAQ-0015",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "WiFiアドレスをMACアドレスとして申請できますか？",
        "en": "WiFiアドレスをMACアドレスとして申請できますか？"
      },
      "content": {
        "text": {
          "ja": "はい。可能です。MACアドレスを物理アドレスやフィジカルアドレス（physical address）と呼ぶ場合もあります。又、端末によりMACアドレスの名称が異なる場合があります。IOSの場合はWiFiアドレス、Androidの場合はWiFiMACアドレスと表示されます。Windows製品とAPPLE製品でも名称が異なります。",
          "en": "はい。可能です。MACアドレスを物理アドレスやフィジカルアドレス（physical address）と呼ぶ場合もあります。又、端末によりMACアドレスの名称が異なる場合があります。IOSの場合はWiFiアドレス、Androidの場合はWiFiMACアドレスと表示されます。Windows製品とAPPLE製品でも名称が異なります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0016": {
      "id": "FAQ-0016",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "レンタルしていた無線ルーターはいつまでに返却すればよいのでしょうか？",
        "en": "レンタルしていた無線ルーターはいつまでに返却すればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "ご契約終了後1週間以内までにお願いします。契約終了期間前にご退寮・お引越し等ございましたら事前にご返却ください。",
          "en": "ご契約終了後1週間以内までにお願いします。契約終了期間前にご退寮・お引越し等ございましたら事前にご返却ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0017": {
      "id": "FAQ-0017",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "無線ルーターの返却を忘れ、契約終了後1週間が経過しました。どうすればいいでしょうか？",
        "en": "無線ルーターの返却を忘れ、契約終了後1週間が経過しました。どうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "まずは弊社までお問合せを頂きお早目にご返却ください。ご返却がない場合は無線ルーター相当額の弁償金の請求となりますのでご注意ください。",
          "en": "まずは弊社までお問合せを頂きお早目にご返却ください。ご返却がない場合は無線ルーター相当額の弁償金の請求となりますのでご注意ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0018": {
      "id": "FAQ-0018",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "無線ルーターの返却方法について教えてください。",
        "en": "無線ルーターの返却方法について教えてください。"
      },
      "content": {
        "text": {
          "ja": "■ご返却先\n\n株式会社 サンライズ\n〒103-0004 東京都中央区東日本橋2-14-1　DKK東日本橋ビル4F\n\n無線ルータの箱又は袋の中に弊社住所印字済みの伝票がございましたら\nそちらをお使いください。\n\n伝票がない場合はお手数ですがお近くのコンビニエンス等で返却いただきますようお願い致します。\n（※伝票のいずれかに会員ID番号をお書きください）\nご返却時の送料はお客様負担となりますのでご了承ください。",
          "en": "■ご返却先\n\n株式会社 サンライズ\n〒103-0004 東京都中央区東日本橋2-14-1　DKK東日本橋ビル4F\n\n無線ルータの箱又は袋の中に弊社住所印字済みの伝票がございましたら\nそちらをお使いください。\n\n伝票がない場合はお手数ですがお近くのコンビニエンス等で返却いただきますようお願い致します。\n（※伝票のいずれかに会員ID番号をお書きください）\nご返却時の送料はお客様負担となりますのでご了承ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0019": {
      "id": "FAQ-0019",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "登録中の端末（MACアドレス）を忘れてしまいました。",
        "en": "登録中の端末（MACアドレス）を忘れてしまいました。"
      },
      "content": {
        "text": {
          "ja": "弊社カスタマーサポートまでお問合せください。",
          "en": "弊社カスタマーサポートまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0020": {
      "id": "FAQ-0020",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Iphoneを3台所有しています。登録することはできますか？",
        "en": "Iphoneを3台所有しています。登録することはできますか？"
      },
      "content": {
        "text": {
          "ja": "同系統端末の登録は2台までとなります。尚、契約者所有の端末のみ対象です。3台目以降の登録を希望される場合は別途誓約書をご提出いただきます。",
          "en": "同系統端末の登録は2台までとなります。尚、契約者所有の端末のみ対象です。3台目以降の登録を希望される場合は別途誓約書をご提出いただきます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0021": {
      "id": "FAQ-0021",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "友人の端末でMACアドレスの登録を行いたいのですが可能ですか？",
        "en": "友人の端末でMACアドレスの登録を行いたいのですが可能ですか？"
      },
      "content": {
        "text": {
          "ja": "個人契約となり、ご利用は契約者が所有する端末に限ります。ご契約者以外の端末に関する登録及び利用はご遠慮いただいております。",
          "en": "個人契約となり、ご利用は契約者が所有する端末に限ります。ご契約者以外の端末に関する登録及び利用はご遠慮いただいております。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0022": {
      "id": "FAQ-0022",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "教育実習で2年目の夏は寮を離れますがどのようにするのがいいのでしょうか？",
        "en": "教育実習で2年目の夏は寮を離れますがどのようにするのがいいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "まずは1年間でお申込頂き、教育実習が決まるまでは最小単位でのご継続手続きをおすすめしております。尚、寮内ネットサービスに限り、大学公認での一時離寮で且つ弊社契約期間内に同じ寮に戻る予定がある場合は一時休止扱いが可能です。詳しくはカスタマーデスクまでお問合せください。",
          "en": "まずは1年間でお申込頂き、教育実習が決まるまでは最小単位でのご継続手続きをおすすめしております。尚、寮内ネットサービスに限り、大学公認での一時離寮で且つ弊社契約期間内に同じ寮に戻る予定がある場合は一時休止扱いが可能です。詳しくはカスタマーデスクまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0023": {
      "id": "FAQ-0023",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "夏、冬、春休みと帰省することがあります。その期間の料金はどのような扱いになりますか？",
        "en": "夏、冬、春休みと帰省することがあります。その期間の料金はどのような扱いになりますか？"
      },
      "content": {
        "text": {
          "ja": "ご契約期間中となりますのでご利用料金として発生します。",
          "en": "ご契約期間中となりますのでご利用料金として発生します。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0024": {
      "id": "FAQ-0024",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "留学予定がありますが時期は未定です。どのように契約期間を定めればよいのでしょうか？",
        "en": "留学予定がありますが時期は未定です。どのように契約期間を定めればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "まずは短期契約期間にてお申込頂き、留学期間が決まるまでは最小単位でのご継続手続きをおすすめしております。尚、寮内ネットサービスに限り、大学公認の留学で且つ帰国後、弊社契約期間内に同じ寮に戻る予定がある場合は一時休止扱いが可能です。詳しくはカスタマーデスクまでお問合せください。",
          "en": "まずは短期契約期間にてお申込頂き、留学期間が決まるまでは最小単位でのご継続手続きをおすすめしております。尚、寮内ネットサービスに限り、大学公認の留学で且つ帰国後、弊社契約期間内に同じ寮に戻る予定がある場合は一時休止扱いが可能です。詳しくはカスタマーデスクまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0025": {
      "id": "FAQ-0025",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "相部屋になり、部屋には既にSun-Netの無線ルータが置いてありました。無線ルーターの返却は必要ですか？",
        "en": "相部屋になり、部屋には既にSun-Netの無線ルータが置いてありました。無線ルーターの返却は必要ですか？"
      },
      "content": {
        "text": {
          "ja": "ご契約中の方が同室にいるかご確認ください。無線ルーターは個人貸出となりますのでご契約者毎にそれぞれお使いください。その際分配に使用するHUBが必要な場合は弊社よりレンタル品としてお送りしますのでお問合せください。同室にご契約者がいない場合は、前契約者様がご返却されていない可能性がございますので、お手数ですが弊社までお問合せください。",
          "en": "ご契約中の方が同室にいるかご確認ください。無線ルーターは個人貸出となりますのでご契約者毎にそれぞれお使いください。その際分配に使用するHUBが必要な場合は弊社よりレンタル品としてお送りしますのでお問合せください。同室にご契約者がいない場合は、前契約者様がご返却されていない可能性がございますので、お手数ですが弊社までお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0026": {
      "id": "FAQ-0026",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "相部屋でHUBは誰が返却するのでしょうか？",
        "en": "相部屋でHUBは誰が返却するのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "個人貸出となりますので、ご契約者様にてご返却ください。",
          "en": "個人貸出となりますので、ご契約者様にてご返却ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0027": {
      "id": "FAQ-0027",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "相部屋で、無線ルータが2台あり、それぞれが契約者です。差込口が足りないのですがどうすればいいでしょうか？",
        "en": "相部屋で、無線ルータが2台あり、それぞれが契約者です。差込口が足りないのですがどうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "分配に使用するHUBが必要な場合は弊社よりレンタル品としてお送りしますのでお問合せください。",
          "en": "分配に使用するHUBが必要な場合は弊社よりレンタル品としてお送りしますのでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0028": {
      "id": "FAQ-0028",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "引越し先の物件ではインターネットは必要なら自分で契約してくださいと言われました。Sun-Net光を利用することはできますか？",
        "en": "引越し先の物件ではインターネットは必要なら自分で契約してくださいと言われました。Sun-Net光を利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "お引越し先のご住所をお伺いの上、建物のインターネット設備状況や開通工事発生の有無や開通可能日をお調べすることができます。まずはお気軽に弊社までお問合せください。",
          "en": "お引越し先のご住所をお伺いの上、建物のインターネット設備状況や開通工事発生の有無や開通可能日をお調べすることができます。まずはお気軽に弊社までお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0029": {
      "id": "FAQ-0029",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Sun-Net光の契約期間中に長期留学に行くことになりました。留学期間中サービスを停止することはできますか？",
        "en": "Sun-Net光の契約期間中に長期留学に行くことになりました。留学期間中サービスを停止することはできますか？"
      },
      "content": {
        "text": {
          "ja": "サービスの一時停止は可能ですが停止期間中においてもインターネット利用料金は発生します。Sun-Net光サービスお申込前に今後のご予定について弊社までご相談ください。",
          "en": "サービスの一時停止は可能ですが停止期間中においてもインターネット利用料金は発生します。Sun-Net光サービスお申込前に今後のご予定について弊社までご相談ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0030": {
      "id": "FAQ-0030",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "マンション管理会社よりインターネットを開通する際はオーナーの許可が必要と言われました。このような場合でも利用することはできますか？",
        "en": "マンション管理会社よりインターネットを開通する際はオーナーの許可が必要と言われました。このような場合でも利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "まずはお住まいのご住所にてシステム確認を行います。オーナー様への許可に関しては建物によりまちまちではありますが弊社で開通までのご連絡をとる場合もございますのでまずはお気軽にご相談ください。※建物の構造やオーナー様のご意向、NTTサービスの地域的な問題等によりご提供できない場合がございます。",
          "en": "まずはお住まいのご住所にてシステム確認を行います。オーナー様への許可に関しては建物によりまちまちではありますが弊社で開通までのご連絡をとる場合もございますのでまずはお気軽にご相談ください。※建物の構造やオーナー様のご意向、NTTサービスの地域的な問題等によりご提供できない場合がございます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0031": {
      "id": "FAQ-0031",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "現在、別の会社の光サービスを利用していますがSun-Net光に申込することはできますか？",
        "en": "現在、別の会社の光サービスを利用していますがSun-Net光に申込することはできますか？"
      },
      "content": {
        "text": {
          "ja": "●NTT東、西日本が提供する光回線をご契約中の場合→転用手続きによりご利用が可能です。\n●他社光コラボレーション事業者の光回線をご利用の場合→事業者変更手続きによりご利用が可能です。\n※プロバイダ契約については上記手続きによる切替ができませんのでお客様ご自身で解約手続きを行っていただく必要があります。\n※NTT東、西または光コラボレーション事業者が提供する光回線以外のサービスをご利用中の場合は、新規申込としてSun-Net光のご提供となります。",
          "en": "●NTT東、西日本が提供する光回線をご契約中の場合→転用手続きによりご利用が可能です。\n●他社光コラボレーション事業者の光回線をご利用の場合→事業者変更手続きによりご利用が可能です。\n※プロバイダ契約については上記手続きによる切替ができませんのでお客様ご自身で解約手続きを行っていただく必要があります。\n※NTT東、西または光コラボレーション事業者が提供する光回線以外のサービスをご利用中の場合は、新規申込としてSun-Net光のご提供となります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0032": {
      "id": "FAQ-0032",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "プロバイダ契約は必要ですか？",
        "en": "プロバイダ契約は必要ですか？"
      },
      "content": {
        "text": {
          "ja": "Sun-Net光は、回線契約とプロバイダ契約をセットにしたサービスですので別途プロバイダ契約を行う必要はありません。",
          "en": "Sun-Net光は、回線契約とプロバイダ契約をセットにしたサービスですので別途プロバイダ契約を行う必要はありません。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0033": {
      "id": "FAQ-0033",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Sun-Net光契約期間中に引っ越すことになった場合、引越し先でもサービスの継続利用は可能ですか？",
        "en": "Sun-Net光契約期間中に引っ越すことになった場合、引越し先でもサービスの継続利用は可能ですか？"
      },
      "content": {
        "text": {
          "ja": "NTT東西の提供エリアにより違いがあります。同一エリア内でのお引越しの場合は移転手続きを行うことで引き続きご利用可能です。\n・光引越事務手数料・・・3,300円\n・光引越時工事費用・・・4,950円\nお引越し先の建物構造等によりご提供できない場合もありますのでご了承ください。\n尚、NTT西エリアから東エリアへとエリアをまたぐお引越しの場合はご解約手続きおよび新規回線申込が必要です。詳細につきましてはお手数ですが下記までお問合せください。\n\nフリーダイヤル：0120-336-326\nメールアドレス：sales@sunrise-net.co.jp",
          "en": "NTT東西の提供エリアにより違いがあります。同一エリア内でのお引越しの場合は移転手続きを行うことで引き続きご利用可能です。\n・光引越事務手数料・・・3,300円\n・光引越時工事費用・・・4,950円\nお引越し先の建物構造等によりご提供できない場合もありますのでご了承ください。\n尚、NTT西エリアから東エリアへとエリアをまたぐお引越しの場合はご解約手続きおよび新規回線申込が必要です。詳細につきましてはお手数ですが下記までお問合せください。\n\nフリーダイヤル：0120-336-326\nメールアドレス：sales@sunrise-net.co.jp"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0034": {
      "id": "FAQ-0034",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットからSun-Net光への切り替えを検討しています。接続するためにはMACアドレスの申請は必要ですか？",
        "en": "寮内ネットからSun-Net光への切り替えを検討しています。接続するためにはMACアドレスの申請は必要ですか？"
      },
      "content": {
        "text": {
          "ja": "Sun-Net光サービスではMACアドレスの申請は必要ありません。ご利用においては個人所有端末等の制限なくご自由に接続可能です。",
          "en": "Sun-Net光サービスではMACアドレスの申請は必要ありません。ご利用においては個人所有端末等の制限なくご自由に接続可能です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0035": {
      "id": "FAQ-0035",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットからSun-Net光への切り替えを検討しています。利用台数の制限はありますか？毎月の通信量の上限はありますか？",
        "en": "寮内ネットからSun-Net光への切り替えを検討しています。利用台数の制限はありますか？毎月の通信量の上限はありますか？"
      },
      "content": {
        "text": {
          "ja": "Sun-Net光では利用台数の制限はありません。但し一般的には同時にインターネット接続をする端末が多いほど速度は遅くなりますのでご注意ください。毎月の通信量上限は設けておらず使い放題のサービスです。",
          "en": "Sun-Net光では利用台数の制限はありません。但し一般的には同時にインターネット接続をする端末が多いほど速度は遅くなりますのでご注意ください。毎月の通信量上限は設けておらず使い放題のサービスです。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0036": {
      "id": "FAQ-0036",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットからSun-Net光への切り替えを検討しています。いまレンタルの無線ルーターを利用していますが、そのまま利用することはできますか？",
        "en": "寮内ネットからSun-Net光への切り替えを検討しています。いまレンタルの無線ルーターを利用していますが、そのまま利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "毎月200円（税抜）/220円（税込）の料金にてレンタル可能です。尚、光回線ご利用にあたってはレンタル無線ルーターの初期化及び設定を行う必要があります。",
          "en": "毎月200円（税抜）/220円（税込）の料金にてレンタル可能です。尚、光回線ご利用にあたってはレンタル無線ルーターの初期化及び設定を行う必要があります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0037": {
      "id": "FAQ-0037",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットからSun-Net光への切り替えを検討しています。いまSun-Netで購入した無線ルーターを利用していますが、そのまま利用することはできますか？",
        "en": "寮内ネットからSun-Net光への切り替えを検討しています。いまSun-Netで購入した無線ルーターを利用していますが、そのまま利用することはできますか？"
      },
      "content": {
        "text": {
          "ja": "はい、ご利用可能です。光回線ご利用にあたっては無線ルーターの初期化及び設定を行う必要があります。",
          "en": "はい、ご利用可能です。光回線ご利用にあたっては無線ルーターの初期化及び設定を行う必要があります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0038": {
      "id": "FAQ-0038",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットからSun-Net光への切り替えを検討しています。無線ルーターはSun-Net指定のものを利用しなければならないのでしょうか？",
        "en": "寮内ネットからSun-Net光への切り替えを検討しています。無線ルーターはSun-Net指定のものを利用しなければならないのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "弊社指定無線ルーター以外のご利用も可能でございますが、設定についてはお客様ご自身で行っていただきます。無線ルーターの設定サポートについては弊社では対応できかねますので各メーカーにお問い合わせください。",
          "en": "弊社指定無線ルーター以外のご利用も可能でございますが、設定についてはお客様ご自身で行っていただきます。無線ルーターの設定サポートについては弊社では対応できかねますので各メーカーにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0039": {
      "id": "FAQ-0039",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "無料インターネット付き物件に引っ越すことになりました。この場合はSun-Net光へ変更しないほうがいいですか？",
        "en": "無料インターネット付き物件に引っ越すことになりました。この場合はSun-Net光へ変更しないほうがいいですか？"
      },
      "content": {
        "text": {
          "ja": "建物の設備として高品質のインターネットが備わっているのであれば居室でのインターネット利用においては弊社サービスへの変更はおすすめいたしません。引越し先での生活がスタートした後、インターネットの速度等にご不満がありましたらSun-Net光への切り替えをおすすめいたします。",
          "en": "建物の設備として高品質のインターネットが備わっているのであれば居室でのインターネット利用においては弊社サービスへの変更はおすすめいたしません。引越し先での生活がスタートした後、インターネットの速度等にご不満がありましたらSun-Net光への切り替えをおすすめいたします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0040": {
      "id": "FAQ-0040",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "解約したドコモのiphoneはつかえますか？",
        "en": "解約したドコモのiphoneはつかえますか？"
      },
      "content": {
        "text": {
          "ja": "ご利用いただけます。ただしNTT DOCOMOの端末ではテザリング機能を利用出来ない場合がありますのでご注意ください。",
          "en": "ご利用いただけます。ただしNTT DOCOMOの端末ではテザリング機能を利用出来ない場合がありますのでご注意ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0041": {
      "id": "FAQ-0041",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードを紛失しました。どうすればいいですか？",
        "en": "SIMカードを紛失しました。どうすればいいですか？"
      },
      "content": {
        "text": {
          "ja": "弊社まで必ずお問合せください。利用停止の処理を行います。\n併せて警察機関へ紛失・盗難の届け出をお願いします。\nSIMカード（端末等）を拾った第三者からの不正利用を防止する為お客さまご自身で端末ロックをお願いします。\nなお、利用停止後にSIMカードを再発行します。停止中の月額料金についても請求対象です。※カードの再発行費用及び送料を別途請求します。",
          "en": "弊社まで必ずお問合せください。利用停止の処理を行います。\n併せて警察機関へ紛失・盗難の届け出をお願いします。\nSIMカード（端末等）を拾った第三者からの不正利用を防止する為お客さまご自身で端末ロックをお願いします。\nなお、利用停止後にSIMカードを再発行します。停止中の月額料金についても請求対象です。※カードの再発行費用及び送料を別途請求します。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0042": {
      "id": "FAQ-0042",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMフリー端末と思っていましたが、そうではなかったのか利用できません。どうしたら良いでしょうか？",
        "en": "SIMフリー端末と思っていましたが、そうではなかったのか利用できません。どうしたら良いでしょうか？"
      },
      "content": {
        "text": {
          "ja": "お客様ご自身でロック解除の手続きをお願いします。",
          "en": "お客様ご自身でロック解除の手続きをお願いします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0043": {
      "id": "FAQ-0043",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を指定することはできますか？支払いも別々にできますか？また各サービスを解約する際はどうすればいいですか？",
        "en": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を指定することはできますか？支払いも別々にできますか？また各サービスを解約する際はどうすればいいですか？"
      },
      "content": {
        "text": {
          "ja": "2つのサービスの契約期間が異なる場合は各サービス毎にお申込ください。毎月払いでは複数サービスを合算したご請求となります。尚、中途解約の際はそれぞれのサービスにて1ヶ月前の連絡が必要です。",
          "en": "2つのサービスの契約期間が異なる場合は各サービス毎にお申込ください。毎月払いでは複数サービスを合算したご請求となります。尚、中途解約の際はそれぞれのサービスにて1ヶ月前の連絡が必要です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0044": {
      "id": "FAQ-0044",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "海外でSun-NetのSIMカードを使うことはできますか？",
        "en": "海外でSun-NetのSIMカードを使うことはできますか？"
      },
      "content": {
        "text": {
          "ja": "できません。日本国内のみのサービスです。",
          "en": "できません。日本国内のみのサービスです。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0045": {
      "id": "FAQ-0045",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードの通信速度はどのくらいですか？通信制限はありますか？",
        "en": "SIMカードの通信速度はどのくらいですか？通信制限はありますか？"
      },
      "content": {
        "text": {
          "ja": "LTEベストエフォート下り150Mbps(上り50Mbps)になります。通信制限は1ヶ月制限になります。容量を超えた後は速度制限がかかり当月末までの通信速度が最大200kbpsまで低下します。",
          "en": "LTEベストエフォート下り150Mbps(上り50Mbps)になります。通信制限は1ヶ月制限になります。容量を超えた後は速度制限がかかり当月末までの通信速度が最大200kbpsまで低下します。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0046": {
      "id": "FAQ-0046",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SMSは使えますか？送信数などに制限はありますか？",
        "en": "SMSは使えますか？送信数などに制限はありますか？"
      },
      "content": {
        "text": {
          "ja": "SMS機能付きSIMカード及び音声SIMカードは利用することはできます。データ通信のみのSIMカードではSMSは利用できません。一定回数・量以上の国内SMSは有料となる場合があります。また国際SMSに関する送信・受信についても一部有料となります。詳しくは希望するSIMプランの説明をご確認ください。",
          "en": "SMS機能付きSIMカード及び音声SIMカードは利用することはできます。データ通信のみのSIMカードではSMSは利用できません。一定回数・量以上の国内SMSは有料となる場合があります。また国際SMSに関する送信・受信についても一部有料となります。詳しくは希望するSIMプランの説明をご確認ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0047": {
      "id": "FAQ-0047",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードのギガ数を変更したいのですがどのようにすればいいですか？",
        "en": "SIMカードのギガ数を変更したいのですがどのようにすればいいですか？"
      },
      "content": {
        "text": {
          "ja": "容量変更手数料として605円発生します。月に1度のみ変更が可能です。適用は変更希望月の翌月からとなります。※一部容量の変更ができないタイプのSIMプランもございます。",
          "en": "容量変更手数料として605円発生します。月に1度のみ変更が可能です。適用は変更希望月の翌月からとなります。※一部容量の変更ができないタイプのSIMプランもございます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0048": {
      "id": "FAQ-0048",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードの容量超過後はインターネットは使えるのでしょうか？",
        "en": "SIMカードの容量超過後はインターネットは使えるのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "速度が最大200kpbsまで落ちますがご利用は可能です。但し動画視聴など様々なコンテンツは快適にご利用いただけなくなります。",
          "en": "速度が最大200kpbsまで落ちますがご利用は可能です。但し動画視聴など様々なコンテンツは快適にご利用いただけなくなります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0049": {
      "id": "FAQ-0049",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "E-SIMのプランはありますか？",
        "en": "E-SIMのプランはありますか？"
      },
      "content": {
        "text": {
          "ja": "E-SIMによる提供プランはございません。E-SIMのみ利用可能な端末ではSun-NetのSIMカードを利用することはできません。",
          "en": "E-SIMによる提供プランはございません。E-SIMのみ利用可能な端末ではSun-NetのSIMカードを利用することはできません。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0050": {
      "id": "FAQ-0050",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "IPHONEを利用したいのですが、SIMロック端末かどうか確認する方法はありますか？",
        "en": "IPHONEを利用したいのですが、SIMロック端末かどうか確認する方法はありますか？"
      },
      "content": {
        "text": {
          "ja": "■SIMロック解除状況の確認手段（IOS14以降）\n\n?『設定』アイコン→『一般』→『情報』の順にタップ\n\n?ページ中部の「SIMロック」欄を確認\n\n“SIMロックなし“と表示されているか確認してください。\n\nSIMロックと表示されている場合はSun-NetのSIMカードを利用することはできません。ご利用にあたってはご契約中の通信会社へのSIMロック解除申請が必要です。\n\nまた、SIMカード挿入後に表示されたメッセージで確認することができます。\n\n「SIMがロックされています」\n「アクティベーションが必要です」\n「このiPhoneに挿入したSIMカードはサポートされていないようです。iPhoneをアクティベーションするには、サポートされている電話会社の互換性のあるSIMカードしか使用することはできません。」",
          "en": "■SIMロック解除状況の確認手段（IOS14以降）\n\n?『設定』アイコン→『一般』→『情報』の順にタップ\n\n?ページ中部の「SIMロック」欄を確認\n\n“SIMロックなし“と表示されているか確認してください。\n\nSIMロックと表示されている場合はSun-NetのSIMカードを利用することはできません。ご利用にあたってはご契約中の通信会社へのSIMロック解除申請が必要です。\n\nまた、SIMカード挿入後に表示されたメッセージで確認することができます。\n\n「SIMがロックされています」\n「アクティベーションが必要です」\n「このiPhoneに挿入したSIMカードはサポートされていないようです。iPhoneをアクティベーションするには、サポートされている電話会社の互換性のあるSIMカードしか使用することはできません。」"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0051": {
      "id": "FAQ-0051",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Androidのスマートフォンを利用したいのですが、SIMロック端末かどうか確認する方法はありますか？",
        "en": "Androidのスマートフォンを利用したいのですが、SIMロック端末かどうか確認する方法はありますか？"
      },
      "content": {
        "text": {
          "ja": "Androidスマートフォンの場合、機種によってSIMロックが解除されているかを確認する方法はまちまちです。\n\n『設定』『デバイス情報（端末情報）』『SIMカードステータス』『SIMロックステータス』\n\n『許可されています』→ロックが解除されています。\n\n上記の方法で、SIMロックステータスが確認できない場合は、ご購入の販売店やご契約の通信事業者にご確認ください。",
          "en": "Androidスマートフォンの場合、機種によってSIMロックが解除されているかを確認する方法はまちまちです。\n\n『設定』『デバイス情報（端末情報）』『SIMカードステータス』『SIMロックステータス』\n\n『許可されています』→ロックが解除されています。\n\n上記の方法で、SIMロックステータスが確認できない場合は、ご購入の販売店やご契約の通信事業者にご確認ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0052": {
      "id": "FAQ-0052",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "利用料金の振込先を教えてください。",
        "en": "利用料金の振込先を教えてください。"
      },
      "content": {
        "text": {
          "ja": "以下、いずれかの金融機関宛てにお願いします。\n※お振込み時にご自身の会員ID番号をご入力ください。\n\n1.ゆうちょ銀行（Japan Post Bank）\n　口座記号番号　00150-3-611077\n　加入者名\t株式会社サンライズ\n\n2.三菱UFJ銀行/0005（Mitsubishi UFJ bank）\n　浅草橋支店/069（Asakusabashi Branch）\n　普通預金\n　口座番号　0912502\n　口座名義　株式会社サンライズ\n\n3.りそな銀行/0010（Resona bank）\n　秋葉原支店/275（Akihabara Branch）\n　普通預金\n　口座番号　2069388\n　口座名義　株式会社サンライズ",
          "en": "以下、いずれかの金融機関宛てにお願いします。\n※お振込み時にご自身の会員ID番号をご入力ください。\n\n1.ゆうちょ銀行（Japan Post Bank）\n　口座記号番号　00150-3-611077\n　加入者名\t株式会社サンライズ\n\n2.三菱UFJ銀行/0005（Mitsubishi UFJ bank）\n　浅草橋支店/069（Asakusabashi Branch）\n　普通預金\n　口座番号　0912502\n　口座名義　株式会社サンライズ\n\n3.りそな銀行/0010（Resona bank）\n　秋葉原支店/275（Akihabara Branch）\n　普通預金\n　口座番号　2069388\n　口座名義　株式会社サンライズ"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0053": {
      "id": "FAQ-0053",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "払込取扱票にて指定された支払期日が過ぎてしまいました。支払い期日が過ぎた後はどのように支払えばよいのでしょうか？",
        "en": "払込取扱票にて指定された支払期日が過ぎてしまいました。支払い期日が過ぎた後はどのように支払えばよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "期日が過ぎてもお支払いは可能です。但し督促料金が発生している場合は追加のお支払いが必要です。詳しくは弊社カスタマーサポートデスクまでお問い合わせください。",
          "en": "期日が過ぎてもお支払いは可能です。但し督促料金が発生している場合は追加のお支払いが必要です。詳しくは弊社カスタマーサポートデスクまでお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0054": {
      "id": "FAQ-0054",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "クレジットカード決済のメールはいつごろ届きますか？",
        "en": "クレジットカード決済のメールはいつごろ届きますか？"
      },
      "content": {
        "text": {
          "ja": "お申込み情報到着後1週間以内に指定のメールアドレス宛に届きます。アクセス有効期限がありますので期限内の手続きをお願いします。期限切れの際は弊社までお問合せください。\n\nクレジット支払手続きのメールは株式会社ゼウス（https://www.cardservice.co.jp/）のシステムを通じて配信されます。\n\n●件名：[ZEUS]お支払手続きご案内メール\n●差出人：mailinfo@cardservice.co.jp",
          "en": "お申込み情報到着後1週間以内に指定のメールアドレス宛に届きます。アクセス有効期限がありますので期限内の手続きをお願いします。期限切れの際は弊社までお問合せください。\n\nクレジット支払手続きのメールは株式会社ゼウス（https://www.cardservice.co.jp/）のシステムを通じて配信されます。\n\n●件名：[ZEUS]お支払手続きご案内メール\n●差出人：mailinfo@cardservice.co.jp"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0055": {
      "id": "FAQ-0055",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "クレジットカードの領収書はもらえませんか？",
        "en": "クレジットカードの領収書はもらえませんか？"
      },
      "content": {
        "text": {
          "ja": "領収書の発行には対応しておりません。カード会社発行の明細にてご確認をお願いします。",
          "en": "領収書の発行には対応しておりません。カード会社発行の明細にてご確認をお願いします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0056": {
      "id": "FAQ-0056",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "途中から別のクレジットカードにしたい場合はどうすればいいですか？",
        "en": "途中から別のクレジットカードにしたい場合はどうすればいいですか？"
      },
      "content": {
        "text": {
          "ja": "再度こちらからクレジット情報を入力して頂くURLをメールでお送り致します。⇒info@sunrise-net.co.jpまでクレジットURL希望・名前をご記入の上メールをお願いします",
          "en": "再度こちらからクレジット情報を入力して頂くURLをメールでお送り致します。⇒info@sunrise-net.co.jpまでクレジットURL希望・名前をご記入の上メールをお願いします"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0057": {
      "id": "FAQ-0057",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "毎月のクレジットカード決済はいつ頃になりますか？",
        "en": "毎月のクレジットカード決済はいつ頃になりますか？"
      },
      "content": {
        "text": {
          "ja": "毎月10日前後です。但し決済システムによる都合や年末年始、GWなど長期休暇及び長期祝日の際は変更する場合がございますのでご了承ください。",
          "en": "毎月10日前後です。但し決済システムによる都合や年末年始、GWなど長期休暇及び長期祝日の際は変更する場合がございますのでご了承ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0058": {
      "id": "FAQ-0058",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "引落ができなかったと通知と振込請求案内のメールが届きました。次回引落時に引落してもらえませんか？",
        "en": "引落ができなかったと通知と振込請求案内のメールが届きました。次回引落時に引落してもらえませんか？"
      },
      "content": {
        "text": {
          "ja": "再引き落とし（再振替）は受付しておりません。支払い期日までにお振込みいただくようおねがいします。",
          "en": "再引き落とし（再振替）は受付しておりません。支払い期日までにお振込みいただくようおねがいします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0059": {
      "id": "FAQ-0059",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "毎月の銀行引落しはいつですか？",
        "en": "毎月の銀行引落しはいつですか？"
      },
      "content": {
        "text": {
          "ja": "毎月28日です。28日が土・日や祝日の際は翌金融機関営業日が引落日となります。前営業日までに引落金額以上の口座残高となるようご留意ください。",
          "en": "毎月28日です。28日が土・日や祝日の際は翌金融機関営業日が引落日となります。前営業日までに引落金額以上の口座残高となるようご留意ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0060": {
      "id": "FAQ-0060",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "料金支払は親に任せたいのですが、どのようにすればよいのでしょうか？",
        "en": "料金支払は親に任せたいのですが、どのようにすればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "お申込時に実家請求希望欄にチェックをお願い致します。",
          "en": "お申込時に実家請求希望欄にチェックをお願い致します。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0061": {
      "id": "FAQ-0061",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "コンビニエンスストアで支払う事はできますか？",
        "en": "コンビニエンスストアで支払う事はできますか？"
      },
      "content": {
        "text": {
          "ja": "コンビニエンスストアでのお支払いには対応しておりません。コンビニエンスストア設置のATMからのお支払い操作をおねがいします。",
          "en": "コンビニエンスストアでのお支払いには対応しておりません。コンビニエンスストア設置のATMからのお支払い操作をおねがいします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0062": {
      "id": "FAQ-0062",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "契約者以外の銀行口座を引落口座として登録することはできますか？",
        "en": "契約者以外の銀行口座を引落口座として登録することはできますか？"
      },
      "content": {
        "text": {
          "ja": "はい。親権者又は代理人の口座であれば可能でございます。口座振替依頼書下部に契約者情報を記入の上お手続きください。",
          "en": "はい。親権者又は代理人の口座であれば可能でございます。口座振替依頼書下部に契約者情報を記入の上お手続きください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0063": {
      "id": "FAQ-0063",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "契約者以外のクレジットカードでの支払いは可能ですか？",
        "en": "契約者以外のクレジットカードでの支払いは可能ですか？"
      },
      "content": {
        "text": {
          "ja": "はい。親権者又は代理人のクレジットカードであれば可能でございます。",
          "en": "はい。親権者又は代理人のクレジットカードであれば可能でございます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0064": {
      "id": "FAQ-0064",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "引落口座について日本国外の銀行を指定することはできますか？",
        "en": "引落口座について日本国外の銀行を指定することはできますか？"
      },
      "content": {
        "text": {
          "ja": "いいえ。指定することができません。日本国内の金融機関の口座をご指定ください。",
          "en": "いいえ。指定することができません。日本国内の金融機関の口座をご指定ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0065": {
      "id": "FAQ-0065",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "利用できるクレジットカードについて教えてください。",
        "en": "利用できるクレジットカードについて教えてください。"
      },
      "content": {
        "text": {
          "ja": "Visa、Mastercard、JCB、American Express、Diners Clubの国際ブランドに対応しています。",
          "en": "Visa、Mastercard、JCB、American Express、Diners Clubの国際ブランドに対応しています。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0066": {
      "id": "FAQ-0066",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "デビット機能付きクレジットカードは利用できますか？",
        "en": "デビット機能付きクレジットカードは利用できますか？"
      },
      "content": {
        "text": {
          "ja": "カード発行会社や諸条件によりお使いいただけない場合がございます。詳しくはお客様のカード発行会社までお尋ねください。",
          "en": "カード発行会社や諸条件によりお使いいただけない場合がございます。詳しくはお客様のカード発行会社までお尋ねください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0067": {
      "id": "FAQ-0067",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "払込取扱票での支払い方法を教えてください。",
        "en": "払込取扱票での支払い方法を教えてください。"
      },
      "content": {
        "text": {
          "ja": "＜ゆうちょ銀行ATMでの方法＞\n\n---払込取扱票での送金の場合---\n1.「ご送金」を選択します。\n2.「払込書でのご送金」を選択します。\n3.「払込書」を入れます。払込書に住所氏名、会員IDをご記入の上、払込書を入れてください。\n\n---ゆうちょ口座間での送金の場合---\n1.「ゆうちょ口座へのご送金」を選択します。\n2.「通帳、またはカード」を入れます。\n3.「記号番号」を選択します。\n4. 記号に「00150-3」を入力します。\n5. 番号に「611077」を入力します。\n6. 金額を入力してください。\n7. 最後に確認を押せば手続きは完了します。",
          "en": "＜ゆうちょ銀行ATMでの方法＞\n\n---払込取扱票での送金の場合---\n1.「ご送金」を選択します。\n2.「払込書でのご送金」を選択します。\n3.「払込書」を入れます。払込書に住所氏名、会員IDをご記入の上、払込書を入れてください。\n\n---ゆうちょ口座間での送金の場合---\n1.「ゆうちょ口座へのご送金」を選択します。\n2.「通帳、またはカード」を入れます。\n3.「記号番号」を選択します。\n4. 記号に「00150-3」を入力します。\n5. 番号に「611077」を入力します。\n6. 金額を入力してください。\n7. 最後に確認を押せば手続きは完了します。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0068": {
      "id": "FAQ-0068",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "口座開設時に印鑑を必要としないネット銀行を登録する場合、口座振替依頼書の捺印はどうしたらいいですか？",
        "en": "口座開設時に印鑑を必要としないネット銀行を登録する場合、口座振替依頼書の捺印はどうしたらいいですか？"
      },
      "content": {
        "text": {
          "ja": "口座開設時にサインを必要としたネット銀行の場合は捺印欄にサインをおねがいします。捺印・サインなしで口座開設された場合は不要です。詳しくはネット銀行側にお問合せください。",
          "en": "口座開設時にサインを必要としたネット銀行の場合は捺印欄にサインをおねがいします。捺印・サインなしで口座開設された場合は不要です。詳しくはネット銀行側にお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0069": {
      "id": "FAQ-0069",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "口座振替依頼書の手続きをしても内容に不備があり再提出の通知が届きます。どのようにすればよいのでしょうか？",
        "en": "口座振替依頼書の手続きをしても内容に不備があり再提出の通知が届きます。どのようにすればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "再提出のご案内書類にて不備理由が明記されています。よくある不備内容は以下の項目です。\n\n・お届け印のもれ、相違、不鮮明\n・他人名義口座記入\n・預金者名の字体相違、フリガナもれ\n・金融機関名・支店名・口座番号の相違\n・口座番号不明瞭\n・インターネットバンキング手続きの登録未完了\n\n※記入内容を間違えた場合は、二重線で訂正を入れお届け印を押してください。\n※ご印鑑は鮮明に確認がとれる状態に押印ください。不鮮明（にじみ、かすみ等）であれば枠外に追加で押印ください。",
          "en": "再提出のご案内書類にて不備理由が明記されています。よくある不備内容は以下の項目です。\n\n・お届け印のもれ、相違、不鮮明\n・他人名義口座記入\n・預金者名の字体相違、フリガナもれ\n・金融機関名・支店名・口座番号の相違\n・口座番号不明瞭\n・インターネットバンキング手続きの登録未完了\n\n※記入内容を間違えた場合は、二重線で訂正を入れお届け印を押してください。\n※ご印鑑は鮮明に確認がとれる状態に押印ください。不鮮明（にじみ、かすみ等）であれば枠外に追加で押印ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0070": {
      "id": "FAQ-0070",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "口座振替依頼書を紛失してしまいました。どうすればいいでしょうか？",
        "en": "口座振替依頼書を紛失してしまいました。どうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "Sun-NetHP内の『お申込・各種お手続き』ページ内の『【会員様向け】口座振替依頼書ダウンロード』をご利用ください。\nhttp://www.sunrise-net.ne.jp/contact_list.html\n印刷し、必要事項に記入・捺印の上、お客様保管用の複写を取った上で弊社までご郵送ください。\n郵送での発送をご希望の場合は書類再送費用として220円をご請求いたします。郵送希望のお客様は下記メールアドレス宛に、お問合せください。\ninfo@sunrise-net.co.jp",
          "en": "Sun-NetHP内の『お申込・各種お手続き』ページ内の『【会員様向け】口座振替依頼書ダウンロード』をご利用ください。\nhttp://www.sunrise-net.ne.jp/contact_list.html\n印刷し、必要事項に記入・捺印の上、お客様保管用の複写を取った上で弊社までご郵送ください。\n郵送での発送をご希望の場合は書類再送費用として220円をご請求いたします。郵送希望のお客様は下記メールアドレス宛に、お問合せください。\ninfo@sunrise-net.co.jp"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0071": {
      "id": "FAQ-0071",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "携帯番号やメールアドレスが変更になった場合はどうすればよいですか？",
        "en": "携帯番号やメールアドレスが変更になった場合はどうすればよいですか？"
      },
      "content": {
        "text": {
          "ja": "各種お手続きページ内の『変更申請（お客様情報/契約プラン）』よりお手続きをお願いします。https://sunrise-net-s.cms2.jp/contact_list/alteration.html",
          "en": "各種お手続きページ内の『変更申請（お客様情報/契約プラン）』よりお手続きをお願いします。https://sunrise-net-s.cms2.jp/contact_list/alteration.html"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0072": {
      "id": "FAQ-0072",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "途中で部屋が変わるかもしれませんが、どうすればよいのでしょうか？",
        "en": "途中で部屋が変わるかもしれませんが、どうすればよいのでしょうか？"
      },
      "content": {
        "text": {
          "ja": "下記『お部屋番号変更フォーム』よりお手続きをお願いします。\nhttps://sunrise-net-s.cms2.jp/changeroom.html",
          "en": "下記『お部屋番号変更フォーム』よりお手続きをお願いします。\nhttps://sunrise-net-s.cms2.jp/changeroom.html"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0073": {
      "id": "FAQ-0073",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "会員IDを忘れてしまいました。",
        "en": "会員IDを忘れてしまいました。"
      },
      "content": {
        "text": {
          "ja": "弊社カスタマーサポートまでお問合せください。",
          "en": "弊社カスタマーサポートまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0074": {
      "id": "FAQ-0074",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "スマホのWiFiがつかえません。",
        "en": "スマホのWiFiがつかえません。"
      },
      "content": {
        "text": {
          "ja": "【iPhoneの場合】\n”プライベートアドレス設定”を「オフ」してください。\n※プライベートアドレス設定が\n不明な場合は下記サイトを参考にしてください。\nhttps://support.apple.com/ja-jp/guide/iphone/iph6b324bb33/ios\n\n【android端末の場合】\n※android10に関してですが、初期設定でMACアドレスが1つのアドレスに固定されていない設定になっております。\nインターネットに接続するためには、固定MACアドレスに設定していただく必要がございますので、\n以下の手順で設定をお願いいたします。\n\n1）「設定」をタップ\n2）「ネットワークとインターネット」をタップ\n3）「WI-FI」をタップ\n4）現在使用しているWIFIをタップ\n5）「詳細設定」をタップ\n6）「プライバシー」をタップ\n7）”ランダムなMACを使用する”から、”デバイスのMACを使用する”に変更\n8）「保存」をタップ",
          "en": "【iPhoneの場合】\n”プライベートアドレス設定”を「オフ」してください。\n※プライベートアドレス設定が\n不明な場合は下記サイトを参考にしてください。\nhttps://support.apple.com/ja-jp/guide/iphone/iph6b324bb33/ios\n\n【android端末の場合】\n※android10に関してですが、初期設定でMACアドレスが1つのアドレスに固定されていない設定になっております。\nインターネットに接続するためには、固定MACアドレスに設定していただく必要がございますので、\n以下の手順で設定をお願いいたします。\n\n1）「設定」をタップ\n2）「ネットワークとインターネット」をタップ\n3）「WI-FI」をタップ\n4）現在使用しているWIFIをタップ\n5）「詳細設定」をタップ\n6）「プライバシー」をタップ\n7）”ランダムなMACを使用する”から、”デバイスのMACを使用する”に変更\n8）「保存」をタップ"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0075": {
      "id": "FAQ-0075",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "WindowsのパソコンのWiFiが使えません。",
        "en": "WindowsのパソコンのWiFiが使えません。"
      },
      "content": {
        "text": {
          "ja": "弊社のインターネットに接続するためには、固定MACアドレスに設定していただく必要がございます。 \n以下の手順で設定をお願いいたします。\n\n1）「設定」　をクリック\n2）「ネットワークとインターネット」　をクリック\n3）「WI-FI」　をクリック\n4）「ランダムなハードウェアアドレスを使う」をスイッチをクリックし、オフにします。",
          "en": "弊社のインターネットに接続するためには、固定MACアドレスに設定していただく必要がございます。 \n以下の手順で設定をお願いいたします。\n\n1）「設定」　をクリック\n2）「ネットワークとインターネット」　をクリック\n3）「WI-FI」　をクリック\n4）「ランダムなハードウェアアドレスを使う」をスイッチをクリックし、オフにします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0076": {
      "id": "FAQ-0076",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "インターネットがつながらない場合、まず最初に確認すべきことは何ですか？",
        "en": "インターネットがつながらない場合、まず最初に確認すべきことは何ですか？"
      },
      "content": {
        "text": {
          "ja": "1)契約期間内ですか？ご契約期間終了後はインターネットの利用ができません。\n2)端末のMACアドレスの申請はお済ですか？申請がない場合インターネットのご利用はできません。\n3)無線ルーターは正しく設置されていますか？LANケーブルがしっかり刺さっているかどうか確認しましょう。",
          "en": "1)契約期間内ですか？ご契約期間終了後はインターネットの利用ができません。\n2)端末のMACアドレスの申請はお済ですか？申請がない場合インターネットのご利用はできません。\n3)無線ルーターは正しく設置されていますか？LANケーブルがしっかり刺さっているかどうか確認しましょう。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0077": {
      "id": "FAQ-0077",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "APN設定ができない場合はどうすればいいでしょうか？",
        "en": "APN設定ができない場合はどうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "ご入力時の不要なスペースや大文字・小文字の入力違いはございませんか？今一度ご確認をおねがいします。\nhttp://www.sunrise-net.ne.jp/service/simapnsettings.html\n解決しない場合は弊社カスタマーデスクまでお問合せください。",
          "en": "ご入力時の不要なスペースや大文字・小文字の入力違いはございませんか？今一度ご確認をおねがいします。\nhttp://www.sunrise-net.ne.jp/service/simapnsettings.html\n解決しない場合は弊社カスタマーデスクまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0078": {
      "id": "FAQ-0078",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードを破損してしまった。どうすればいいでしょうか？",
        "en": "SIMカードを破損してしまった。どうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "再発行になりますので、新たに発行費用と送料が必要です。",
          "en": "再発行になりますので、新たに発行費用と送料が必要です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0079": {
      "id": "FAQ-0079",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0080": {
      "id": "FAQ-0080",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0081": {
      "id": "FAQ-0081",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "【ios】iphone/ipad",
        "en": "【ios】iphone/ipad"
      },
      "content": {
        "text": {
          "ja": "1. ホーム画面で「設定」アプリを開きます。\n2. 「一般」をタップします。\n3. 「情報」を選択します。\n4. 「Wi-Fiアドレス」の横に表示されている値が、iPhoneの物理アドレス（MACアドレス）です。",
          "en": "1. ホーム画面で「設定」アプリを開きます。\n2. 「一般」をタップします。\n3. 「情報」を選択します。\n4. 「Wi-Fiアドレス」の横に表示されている値が、iPhoneの物理アドレス（MACアドレス）です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0082": {
      "id": "FAQ-0082",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Android OS",
        "en": "Android OS"
      },
      "content": {
        "text": {
          "ja": "※AndroidはOSのバージョンやメーカーよって表示手順が異なります。詳しくはインターネット検索にてお調べください\n1.端末のWiFiを「有効」にします。\n2. ホーム画面で「設定」アプリを開きます。\n3. 「端末情報」を選択します。\n4. 「端末の状態」をタップします。\n5. 「WiFi-MACアドレス」が、Androidデバイスの物理アドレス（MACアドレス）です。",
          "en": "※AndroidはOSのバージョンやメーカーよって表示手順が異なります。詳しくはインターネット検索にてお調べください\n1.端末のWiFiを「有効」にします。\n2. ホーム画面で「設定」アプリを開きます。\n3. 「端末情報」を選択します。\n4. 「端末の状態」をタップします。\n5. 「WiFi-MACアドレス」が、Androidデバイスの物理アドレス（MACアドレス）です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0083": {
      "id": "FAQ-0083",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "無題のコンテンツ",
        "en": "無題のコンテンツ"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQ-0084": {
      "id": "FAQ-0084",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0002": {
      "id": "FAQANOTHER-0002",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。再契約になりますか？",
        "en": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。再契約になりますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0003": {
      "id": "FAQANOTHER-0003",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "夏までの契約にしたいのですが可能ですか？",
        "en": "夏までの契約にしたいのですが可能ですか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0004": {
      "id": "FAQANOTHER-0004",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "引越し先の物件でインターネットは必要なら自分で契約するように言われました。利用できますか？",
        "en": "引越し先の物件でインターネットは必要なら自分で契約するように言われました。利用できますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0005": {
      "id": "FAQANOTHER-0005",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "長期留学中サービスを停止することはできますか？",
        "en": "長期留学中サービスを停止することはできますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0006": {
      "id": "FAQANOTHER-0006",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "解約したドコモのiPhoneは使えますか？",
        "en": "解約したドコモのiPhoneは使えますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0007": {
      "id": "FAQANOTHER-0007",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードを紛失しました。どうすればいいですか？",
        "en": "SIMカードを紛失しました。どうすればいいですか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0008": {
      "id": "FAQANOTHER-0008",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "利用料金の振込先を教えてください。",
        "en": "利用料金の振込先を教えてください。"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0009": {
      "id": "FAQANOTHER-0009",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "支払期日が過ぎた後はどうすればよいですか？",
        "en": "支払期日が過ぎた後はどうすればよいですか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0010": {
      "id": "FAQANOTHER-0010",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "携帯番号やメールアドレスが変更になった場合はどうすればよいですか？",
        "en": "携帯番号やメールアドレスが変更になった場合はどうすればよいですか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0011": {
      "id": "FAQANOTHER-0011",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "途中で部屋が変わるかもしれませんが、どうすればよいでしょうか？",
        "en": "途中で部屋が変わるかもしれませんが、どうすればよいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0012": {
      "id": "FAQANOTHER-0012",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "スマホのWiFiが使えません。",
        "en": "スマホのWiFiが使えません。"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0013": {
      "id": "FAQANOTHER-0013",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "パソコンのWiFiが使えません。",
        "en": "パソコンのWiFiが使えません。"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0014": {
      "id": "FAQANOTHER-0014",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "APN設定ができない場合はどうすればいいでしょうか？",
        "en": "APN設定ができない場合はどうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0015": {
      "id": "FAQANOTHER-0015",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMカードを破損してしまった。どうすればいいでしょうか？",
        "en": "SIMカードを破損してしまった。どうすればいいでしょうか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0016": {
      "id": "FAQANOTHER-0016",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "iPhone/iPadのMACアドレスはどこで確認できますか？",
        "en": "iPhone/iPadのMACアドレスはどこで確認できますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQANOTHER-0017": {
      "id": "FAQANOTHER-0017",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "Android OSのMACアドレスはどこで確認できますか？",
        "en": "Android OSのMACアドレスはどこで確認できますか？"
      },
      "content": {
        "text": {
          "ja": "",
          "en": ""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0016": {
      "id": "FAQSIM-0016",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "eSIMと物理SIMの違いは何ですか？",
        "en": "eSIMと物理SIMの違いは何ですか？"
      },
      "content": {
        "text": {
          "ja": "物理SIMは、スマートフォンに直接挿入して使用するプラスチック製のICカードです。一方、eSIMは、スマートフォン本体に予め埋め込まれたSIMで、オンラインで契約情報を書き換えることで利用を開始できます。SIMカードの到着を待つ必要がないのが大きな特長です。",
          "en": "物理SIMは、スマートフォンに直接挿入して使用するプラスチック製のICカードです。一方、eSIMは、スマートフォン本体に予め埋め込まれたSIMで、オンラインで契約情報を書き換えることで利用を開始できます。SIMカードの到着を待つ必要がないのが大きな特長です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0017": {
      "id": "FAQSIM-0017",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "どちらのSIMを選べばよいですか？",
        "en": "どちらのSIMを選べばよいですか？"
      },
      "content": {
        "text": {
          "ja": "すぐに利用を開始したい方、SIMカードの抜き差しをしたくない方、デュアルSIM（1台のスマホで2つの回線を使う）を利用したい方にはeSIMがおすすめです。SIMカードを入れ替えて複数の端末で利用したい方や、お使いの端末がeSIMに対応していない場合は、物理SIMをお選びください。",
          "en": "すぐに利用を開始したい方、SIMカードの抜き差しをしたくない方、デュアルSIM（1台のスマホで2つの回線を使う）を利用したい方にはeSIMがおすすめです。SIMカードを入れ替えて複数の端末で利用したい方や、お使いの端末がeSIMに対応していない場合は、物理SIMをお選びください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0018": {
      "id": "FAQSIM-0018",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "利用料金やプランに違いはありますか？",
        "en": "利用料金やプランに違いはありますか？"
      },
      "content": {
        "text": {
          "ja": "いいえ、eSIMと物理SIMでご利用いただける料金プランや、通信速度・品質に違いはございません。お客様のご利用スタイルに合わせてお選びいただけます。",
          "en": "いいえ、eSIMと物理SIMでご利用いただける料金プランや、通信速度・品質に違いはございません。お客様のご利用スタイルに合わせてお選びいただけます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0019": {
      "id": "FAQSIM-0019",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "自分のスマートフォンがeSIMに対応しているか確認する方法は？",
        "en": "自分のスマートフォンがeSIMに対応しているか確認する方法は？"
      },
      "content": {
        "text": {
          "ja": "iPhoneの場合は、「設定」>「モバイル通信」と進み、「eSIMを追加」という項目があれば対応しています。Androidの場合は、「設定」>「ネットワークとインターネット」>「SIM」と進み、「SIMをダウンロードしますか？」といった選択肢があれば対応しています。詳細は各メーカーの公式サイトでもご確認いただけます。",
          "en": "iPhoneの場合は、「設定」>「モバイル通信」と進み、「eSIMを追加」という項目があれば対応しています。Androidの場合は、「設定」>「ネットワークとインターネット」>「SIM」と進み、「SIMをダウンロードしますか？」といった選択肢があれば対応しています。詳細は各メーカーの公式サイトでもご確認いただけます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0020": {
      "id": "FAQSIM-0020",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "SIMロックされている端末でも利用できますか？",
        "en": "SIMロックされている端末でも利用できますか？"
      },
      "content": {
        "text": {
          "ja": "いいえ、SIMロックされている端末ではご利用いただけません。事前にご利用の携帯電話会社でSIMロックの解除手続きを行ってください。",
          "en": "いいえ、SIMロックされている端末ではご利用いただけません。事前にご利用の携帯電話会社でSIMロックの解除手続きを行ってください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0021": {
      "id": "FAQSIM-0021",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "eSIMの申し込みから開通までの流れを教えてください。",
        "en": "eSIMの申し込みから開通までの流れを教えてください。"
      },
      "content": {
        "text": {
          "ja": "①当社ウェブサイトからお申し込み ②本人確認書類のアップロード ③審査完了後、メールでeSIMプロファイルダウンロード用のQRコードを受領 ④スマートフォンでQRコードを読み取り、設定完了。最短でお申し込み当日からご利用いただけます。",
          "en": "①当社ウェブサイトからお申し込み ②本人確認書類のアップロード ③審査完了後、メールでeSIMプロファイルダウンロード用のQRコードを受領 ④スマートフォンでQRコードを読み取り、設定完了。最短でお申し込み当日からご利用いただけます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0022": {
      "id": "FAQSIM-0022",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "物理SIMは申し込みから何日で届きますか？",
        "en": "物理SIMは申し込みから何日で届きますか？"
      },
      "content": {
        "text": {
          "ja": "本人確認完了後、通常2〜3営業日で発送いたします。お届け先地域や交通事情により、到着までにかかる日数は異なります。SIMカードが届きましたら、スマートフォンに挿入して開通設定を行ってください。",
          "en": "本人確認完了後、通常2〜3営業日で発送いたします。お届け先地域や交通事情により、到着までにかかる日数は異なります。SIMカードが届きましたら、スマートフォンに挿入して開通設定を行ってください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0023": {
      "id": "FAQSIM-0023",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "機種変更する際はどうすればよいですか？",
        "en": "機種変更する際はどうすればよいですか？"
      },
      "content": {
        "text": {
          "ja": "新しいスマートフォンでeSIMを再発行する必要があります。会員ページよりeSIMの再発行手続きを行ってください。手続き完了後、新しい端末でeSIMプロファイルを再度ダウンロードして設定します。古い端末のeSIMプロファイルは削除してください。",
          "en": "新しいスマートフォンでeSIMを再発行する必要があります。会員ページよりeSIMの再発行手続きを行ってください。手続き完了後、新しい端末でeSIMプロファイルを再度ダウンロードして設定します。古い端末のeSIMプロファイルは削除してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0024": {
      "id": "FAQSIM-0024",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "誤ってeSIMプロファイルを削除してしまいました。",
        "en": "誤ってeSIMプロファイルを削除してしまいました。"
      },
      "content": {
        "text": {
          "ja": "会員ページよりeSIMの再発行手続きが必要です。再発行には手数料がかかる場合がございますので、ご注意ください。",
          "en": "会員ページよりeSIMの再発行手続きが必要です。再発行には手数料がかかる場合がございますので、ご注意ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0025": {
      "id": "FAQSIM-0025",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "デュアルSIMとは何ですか？",
        "en": "デュアルSIMとは何ですか？"
      },
      "content": {
        "text": {
          "ja": "1台のスマートフォンで、2つの異なる電話番号や料金プランを使い分けることができる機能です。例えば、「物理SIMを通話用、eSIMをデータ通信用」といった組み合わせや、「国内用SIMと海外用SIM」の併用が可能です。",
          "en": "1台のスマートフォンで、2つの異なる電話番号や料金プランを使い分けることができる機能です。例えば、「物理SIMを通話用、eSIMをデータ通信用」といった組み合わせや、「国内用SIMと海外用SIM」の併用が可能です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0026": {
      "id": "FAQSIM-0026",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "音声通話とデータ通信を別々のSIMに設定できますか？",
        "en": "音声通話とデータ通信を別々のSIMに設定できますか？"
      },
      "content": {
        "text": {
          "ja": "はい、可能です。スマートフォンの設定画面で、主回線（音声通話）とデータ通信にどちらのSIMを利用するかを個別に設定することができます。",
          "en": "はい、可能です。スマートフォンの設定画面で、主回線（音声通話）とデータ通信にどちらのSIMを利用するかを個別に設定することができます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0027": {
      "id": "FAQSIM-0027",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "物理SIMからeSIMに変更できますか？",
        "en": "物理SIMからeSIMに変更できますか？"
      },
      "content": {
        "text": {
          "ja": "はい、可能です。会員ページからeSIMへの変更手続きをお申し込みください。SIMカードの返却は不要です。手続き完了後、eSIMプロファイルをダウンロードしてご利用を開始できます。",
          "en": "はい、可能です。会員ページからeSIMへの変更手続きをお申し込みください。SIMカードの返却は不要です。手続き完了後、eSIMプロファイルをダウンロードしてご利用を開始できます。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0028": {
      "id": "FAQSIM-0028",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "eSIMから物理SIMに変更できますか？",
        "en": "eSIMから物理SIMに変更できますか？"
      },
      "content": {
        "text": {
          "ja": "はい、可能です。会員ページから物理SIMへの変更手続きをお申し込みください。後日、ご登録の住所へSIMカードを発送いたします。",
          "en": "はい、可能です。会員ページから物理SIMへの変更手続きをお申し込みください。後日、ご登録の住所へSIMカードを発送いたします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0029": {
      "id": "FAQSIM-0029",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "eSIMのQRコードが読み取れません。",
        "en": "eSIMのQRコードが読み取れません。"
      },
      "content": {
        "text": {
          "ja": "QRコードが表示されている画面が暗すぎないか、カメラのレンズが汚れていないかをご確認ください。それでも読み取れない場合は、手動でアクティベーションコードを入力する方法もございます。詳細は設定案内のメールをご確認ください。",
          "en": "QRコードが表示されている画面が暗すぎないか、カメラのレンズが汚れていないかをご確認ください。それでも読み取れない場合は、手動でアクティベーションコードを入力する方法もございます。詳細は設定案内のメールをご確認ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0030": {
      "id": "FAQSIM-0030",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "eSIMを設定した後、通信ができません。",
        "en": "eSIMを設定した後、通信ができません。"
      },
      "content": {
        "text": {
          "ja": "スマートフォンの再起動をお試しください。また、機内モードがオフになっていること、モバイルデータ通信がオンになっていることをご確認ください。それでも改善しない場合は、APN設定（アクセスポイント名）が正しく構成されているかをご確認ください。",
          "en": "スマートフォンの再起動をお試しください。また、機内モードがオフになっていること、モバイルデータ通信がオンになっていることをご確認ください。それでも改善しない場合は、APN設定（アクセスポイント名）が正しく構成されているかをご確認ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0031": {
      "id": "FAQSIM-0031",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "海外でも利用できますか？",
        "en": "海外でも利用できますか？"
      },
      "content": {
        "text": {
          "ja": "はい、当社の国際ローミングサービスをご利用いただくことで、海外でもデータ通信や音声通話が可能です。渡航前に会員ページから国際ローミングの利用設定をご確認ください。ご利用料金は国・地域によって異なります。",
          "en": "はい、当社の国際ローミングサービスをご利用いただくことで、海外でもデータ通信や音声通話が可能です。渡航前に会員ページから国際ローミングの利用設定をご確認ください。ご利用料金は国・地域によって異なります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0032": {
      "id": "FAQSIM-0032",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "スマートフォンを紛失した場合、どうすればよいですか？",
        "en": "スマートフォンを紛失した場合、どうすればよいですか？"
      },
      "content": {
        "text": {
          "ja": "速やかに当社のカスタマーサポートまでご連絡いただき、回線の利用停止手続きを行ってください。eSIMの場合、第三者が端末のロックを解除できない限り、不正利用されるリスクは低いですが、念のためご連絡をお願いします。",
          "en": "速やかに当社のカスタマーサポートまでご連絡いただき、回線の利用停止手続きを行ってください。eSIMの場合、第三者が端末のロックを解除できない限り、不正利用されるリスクは低いですが、念のためご連絡をお願いします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0045": {
      "id": "FAQSIM-0045",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "you will need to get a new activation code. An eSIM can only be active on one device at a time",
        "en": "you will need to get a new activation code. An eSIM can only be active on one device at a time"
      },
      "content": {
        "text": {
          "ja": "so reissuing the code is necessary to activate it on your new phone.",
          "en": "so reissuing the code is necessary to activate it on your new phone."
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0222": {
      "id": "FAQSIM-0222",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "you can use our eSIM service by signing up for a new eSIM plan. Please note that this will incur a separate eSIM issuance fee of 3",
        "en": "you can use our eSIM service by signing up for a new eSIM plan. Please note that this will incur a separate eSIM issuance fee of 3"
      },
      "content": {
        "text": {
          "ja": "300 yen",
          "en": "300 yen"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "FAQSIM-0226": {
      "id": "FAQSIM-0226",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "after making a payment with your credit card",
        "en": "after making a payment with your credit card"
      },
      "content": {
        "text": {
          "ja": "activate the code on your device. A new phone number will be issued.",
          "en": "activate the code on your device. A new phone number will be issued."
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "MAIL-001": {
      "id": "MAIL-001",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "種類\t返信例\t\nMAC追加申請フォーム\t\"会員ID:00000\nAAA　様\n\n平素は弊社インターネットサービスをご利用いただきましてありがとうございます。\n只今お問合せ殺到につきまして、ご連絡が遅くなりまして大変申し訳ございません。\n\nご依頼いただきました機器の登録が完了いたしました。\nインターネットの動作確認を行っていただきますようお願い致します。\n\n確認後に接続が出来ない場合は、大変お手数ですが再度ご連絡いただけますでしょうか。\n※一部の端末は機種やバージョンによって、無線に繋がらないという問題が起こる場合がございます。\nその場合には別方法にてご登録をさせて頂きます。\n※無線と有線ではMACアドレスは異なります。\n※他の方の端末を登録することは禁止となっております。\n\n[現在のご登録状況]\n無線\n・　OS【Windows11】　/MACアドレス  【**:b3:39:c0:ec:1b】\n・　OS【smart TV】　/MACアドレス 【**:93:c3:9d:21:a1】\n・　OS【プリンター】　/MACアドレス 【**:68:74:85:21:a1】\n・　OS【iphone14】　/MACアドレス 【**:9c:78:65:4f:58】\n・　OS【ipad】　/MACアドレス 【**:72:fe:7c:21:3f】\n\nよろしくお願い申し上げます。\n\n────────────────────────\n株式会社サンライズ　　Sun-Net テクニカルサポート\n〒103-0004　東京都中央区東日本橋２－１４－１　DKK東日本橋ビル4F\nTEL:0120-336-326　FAX:03-5822-2342\n※音声ガイダンスに従って\n　①お支払いやご契約に関するお問い合わせは「1#」\n　②技術的なサポートに関するお問い合わせは「2#」\nをダイヤルしてください。\nE-MAIL：network_otoiawase@sunrise-net.co.jp\n営業時間：10:00～18:00（平日:月～金）\n\"\t\"Customer ID:00000\nDear　AAA\n\nThank you for using our internet service.\nWe are sorry to have kept you waiting.\n\nThe physical address of your new device has been registered in our \nsystem. It can use the internet.\nPlease check the connection to the internet. If you have any trouble, \nplease contact us again.\n\n※Important\nIf your device can not connect to the Internet, please check \"\"if your \nMAC address setting is randomized or Privatized\"\" through the links below.\nIf you see it is randomized, please take the process of de-randomize or \nde-privatization.\n・iOS 14 ⇒　https://support.apple.com/en-us/HT211227\n・Android OS (Version 10 and \nbeyond)⇒　https://support.boingo.com/s/article/How-to-Disable-MAC-Randomization-in-Android-13\n・Windows 10 \n⇒　https://support.boingo.com/s/article/How-to-Disable-MAC-Randomization-in-Windows-10\n\n※We need to change the settings of the system, depending on the model or \nversion of your device.\n※The wired mac address and the wireless mac address are different.\n※It is strictly prohibited to register devices other people have.\n\n[Registered MAC address]\nwireless\n・ OS【Windows10】 /MAC address  【**:b3:2f:01:f4:df】\n・ OS【Windows】 /MAC address 【**:e4:2a:fc:32:9e】\n・ OS【android】 /MAC address【**:c9:92:f8:fa:5d】\n\nThank you for your cooperation.\n\nBest regards,\nSun-Net Service\n────────────────────────\nSunrise Corporation===Sun-Net Service\nTEL:0120-336-326　FAX:03-5822-2342\n〒103-0004 DKK Higashi-Nihombashi Build 4F, 2-14-1, Higashi-Nihombashi, \nChuo-ku, Tokyo\nBusiness Hours:  Mon to Fri 10:00am～6:00pm (except Saturdays, Sundays, \nand holidays) \"\n\t\"★ プライベートアドレス・ランダムMACの設定を解除する\n\n     【プライベートアドレス】【ランダムMAC】の設定がONの場合、\n     \n申請頂いたMACアドレスとは異なるアドレスとなる為、インターネットへ接続できません。\n     必ずOFFに変更してください。\n\n     変更方法は、以下の通りです。\n\n        ※ IOS14以上の端末(iPhone・iPad等)\n             1. 設定をタップ\n             2. WI-FIをタップ\n             3. 現在使用しているWIFIをタップ\n             4.「プライベートアドレス」をオフにします。\n\n        ※ Windows10以上\n             1. 設定をタップ\n             2. ネットワークとインターネットをタップ\n             3. WI-FIをタップ\n             4. \n右側に「ランダムなハードウェアアドレスを使う」のスイッチをタップし、\n               オフにします\n\nお手数ですが、上記の設定をお願いいたします。\n\nよろしくお願い申し上げます。\n＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊\n\n★LINE友達追加のお願い★\n\n弊社のLINEアカウントでは、物理アドレスの追加申請などを行う事ができます。\n\n今後もLINEを通してお知らせ情報を更新してまいりますので是非この機会に友達追加お待ちしております♪\n\n【Sun-Net 公式LINEアカウント】\n\nLINEの友達追加からID検索で追加して頂けます。\n\nID：＠616gnwlj\n\n────────────────────────\n株式会社サンライズ　　Sun-Net テクニカルサポート\n〒103-0004　東京都中央区東日本橋２－１４－１　DKK東日本橋ビル4F\nTEL:0120-336-326　FAX:03-5822-2342\n※音声ガイダンスに従って\n　①お支払いやご契約に関するお問い合わせは「1#」\n　②技術的なサポートに関するお問い合わせは「2#」\nをダイヤルしてください。\nE-MAIL：network_otoiawase@sunrise-net.co.jp\n営業時間：10:00～18:00（平日:月～金） \"\t\n\t\"また、android10以上の端末(Android携帯・Tablet等)に関してですが、もともとMACアドレスが1つのアドレスに固定されていない設定になっております。\n\n弊社のインターネットに接続するためには、MACアドレスのランダム化を解除する必要があります。\n\n手順といたしましては、\n①設定をタップ\n②ネットワークとインターネットをタップ\n③Wi-Fiをタップ\n④現在接続しているWi-Fiをタップ\n⑤詳細設定をタップ\n⑥プライバシーをタップ\n⑦”ランダムなMACを使用する”から、”デバイスのMACを使用する”に変更\n⑧保存をタップ\n\nお手数ですが、上記の設定をお願いいたします。\nよろしくお願い申し上げます。 \"\t\n\t\"また、IOS14以上の端末(iPhone・iPad)に関してですが、もともとMACアドレスが1つのアドレスに固定されていない設定になっております。\n\n弊社のインターネットに接続するためには、固定MACアドレスに設定していただく必要がございます。\n\n手順といたしましては、\n①設定をタップ\n②Wi-Fiをタップ\n③現在接続しているWi-Fiをタップ\n④「プライベートアドレス」をオフにします。\n\nお手数ですが、上記の設定をお願いいたします。\nよろしくお願い申し上げます。 \"\t\n\t\"\nAndroid登録のご連絡をいただきましたが、同種の機器登録は2回線までとさせていただいてます。\n（例：2回線携帯【iPhoneとAndroidか　AndroidとAndroid】…等）\nお客様は既に2回線登録されていますので、ご利用にならないものを削除してからの登録となります。 \"\t\n\t\"お客様のご契約ですと、有線･無線通算で5件までMAC(物理)アドレスの登録が可能ですが\n6件目以降は1件に付き月額220円（税込）で追加登録を承っております。\n\nお客様のご利用状況は下記の通りですが有料での追加登録をご希望でしょうか？\nそれとも現在のものをなにか削除して新しくご登録いたしますか？ \"",
          "en": "種類\t返信例\t\nMAC追加申請フォーム\t\"会員ID:00000\nAAA　様\n\n平素は弊社インターネットサービスをご利用いただきましてありがとうございます。\n只今お問合せ殺到につきまして、ご連絡が遅くなりまして大変申し訳ございません。\n\nご依頼いただきました機器の登録が完了いたしました。\nインターネットの動作確認を行っていただきますようお願い致します。\n\n確認後に接続が出来ない場合は、大変お手数ですが再度ご連絡いただけますでしょうか。\n※一部の端末は機種やバージョンによって、無線に繋がらないという問題が起こる場合がございます。\nその場合には別方法にてご登録をさせて頂きます。\n※無線と有線ではMACアドレスは異なります。\n※他の方の端末を登録することは禁止となっております。\n\n[現在のご登録状況]\n無線\n・　OS【Windows11】　/MACアドレス  【**:b3:39:c0:ec:1b】\n・　OS【smart TV】　/MACアドレス 【**:93:c3:9d:21:a1】\n・　OS【プリンター】　/MACアドレス 【**:68:74:85:21:a1】\n・　OS【iphone14】　/MACアドレス 【**:9c:78:65:4f:58】\n・　OS【ipad】　/MACアドレス 【**:72:fe:7c:21:3f】\n\nよろしくお願い申し上げます。\n\n────────────────────────\n株式会社サンライズ　　Sun-Net テクニカルサポート\n〒103-0004　東京都中央区東日本橋２－１４－１　DKK東日本橋ビル4F\nTEL:0120-336-326　FAX:03-5822-2342\n※音声ガイダンスに従って\n　①お支払いやご契約に関するお問い合わせは「1#」\n　②技術的なサポートに関するお問い合わせは「2#」\nをダイヤルしてください。\nE-MAIL：network_otoiawase@sunrise-net.co.jp\n営業時間：10:00～18:00（平日:月～金）\n\"\t\"Customer ID:00000\nDear　AAA\n\nThank you for using our internet service.\nWe are sorry to have kept you waiting.\n\nThe physical address of your new device has been registered in our \nsystem. It can use the internet.\nPlease check the connection to the internet. If you have any trouble, \nplease contact us again.\n\n※Important\nIf your device can not connect to the Internet, please check \"\"if your \nMAC address setting is randomized or Privatized\"\" through the links below.\nIf you see it is randomized, please take the process of de-randomize or \nde-privatization.\n・iOS 14 ⇒　https://support.apple.com/en-us/HT211227\n・Android OS (Version 10 and \nbeyond)⇒　https://support.boingo.com/s/article/How-to-Disable-MAC-Randomization-in-Android-13\n・Windows 10 \n⇒　https://support.boingo.com/s/article/How-to-Disable-MAC-Randomization-in-Windows-10\n\n※We need to change the settings of the system, depending on the model or \nversion of your device.\n※The wired mac address and the wireless mac address are different.\n※It is strictly prohibited to register devices other people have.\n\n[Registered MAC address]\nwireless\n・ OS【Windows10】 /MAC address  【**:b3:2f:01:f4:df】\n・ OS【Windows】 /MAC address 【**:e4:2a:fc:32:9e】\n・ OS【android】 /MAC address【**:c9:92:f8:fa:5d】\n\nThank you for your cooperation.\n\nBest regards,\nSun-Net Service\n────────────────────────\nSunrise Corporation===Sun-Net Service\nTEL:0120-336-326　FAX:03-5822-2342\n〒103-0004 DKK Higashi-Nihombashi Build 4F, 2-14-1, Higashi-Nihombashi, \nChuo-ku, Tokyo\nBusiness Hours:  Mon to Fri 10:00am～6:00pm (except Saturdays, Sundays, \nand holidays) \"\n\t\"★ プライベートアドレス・ランダムMACの設定を解除する\n\n     【プライベートアドレス】【ランダムMAC】の設定がONの場合、\n     \n申請頂いたMACアドレスとは異なるアドレスとなる為、インターネットへ接続できません。\n     必ずOFFに変更してください。\n\n     変更方法は、以下の通りです。\n\n        ※ IOS14以上の端末(iPhone・iPad等)\n             1. 設定をタップ\n             2. WI-FIをタップ\n             3. 現在使用しているWIFIをタップ\n             4.「プライベートアドレス」をオフにします。\n\n        ※ Windows10以上\n             1. 設定をタップ\n             2. ネットワークとインターネットをタップ\n             3. WI-FIをタップ\n             4. \n右側に「ランダムなハードウェアアドレスを使う」のスイッチをタップし、\n               オフにします\n\nお手数ですが、上記の設定をお願いいたします。\n\nよろしくお願い申し上げます。\n＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊\n\n★LINE友達追加のお願い★\n\n弊社のLINEアカウントでは、物理アドレスの追加申請などを行う事ができます。\n\n今後もLINEを通してお知らせ情報を更新してまいりますので是非この機会に友達追加お待ちしております♪\n\n【Sun-Net 公式LINEアカウント】\n\nLINEの友達追加からID検索で追加して頂けます。\n\nID：＠616gnwlj\n\n────────────────────────\n株式会社サンライズ　　Sun-Net テクニカルサポート\n〒103-0004　東京都中央区東日本橋２－１４－１　DKK東日本橋ビル4F\nTEL:0120-336-326　FAX:03-5822-2342\n※音声ガイダンスに従って\n　①お支払いやご契約に関するお問い合わせは「1#」\n　②技術的なサポートに関するお問い合わせは「2#」\nをダイヤルしてください。\nE-MAIL：network_otoiawase@sunrise-net.co.jp\n営業時間：10:00～18:00（平日:月～金） \"\t\n\t\"また、android10以上の端末(Android携帯・Tablet等)に関してですが、もともとMACアドレスが1つのアドレスに固定されていない設定になっております。\n\n弊社のインターネットに接続するためには、MACアドレスのランダム化を解除する必要があります。\n\n手順といたしましては、\n①設定をタップ\n②ネットワークとインターネットをタップ\n③Wi-Fiをタップ\n④現在接続しているWi-Fiをタップ\n⑤詳細設定をタップ\n⑥プライバシーをタップ\n⑦”ランダムなMACを使用する”から、”デバイスのMACを使用する”に変更\n⑧保存をタップ\n\nお手数ですが、上記の設定をお願いいたします。\nよろしくお願い申し上げます。 \"\t\n\t\"また、IOS14以上の端末(iPhone・iPad)に関してですが、もともとMACアドレスが1つのアドレスに固定されていない設定になっております。\n\n弊社のインターネットに接続するためには、固定MACアドレスに設定していただく必要がございます。\n\n手順といたしましては、\n①設定をタップ\n②Wi-Fiをタップ\n③現在接続しているWi-Fiをタップ\n④「プライベートアドレス」をオフにします。\n\nお手数ですが、上記の設定をお願いいたします。\nよろしくお願い申し上げます。 \"\t\n\t\"\nAndroid登録のご連絡をいただきましたが、同種の機器登録は2回線までとさせていただいてます。\n（例：2回線携帯【iPhoneとAndroidか　AndroidとAndroid】…等）\nお客様は既に2回線登録されていますので、ご利用にならないものを削除してからの登録となります。 \"\t\n\t\"お客様のご契約ですと、有線･無線通算で5件までMAC(物理)アドレスの登録が可能ですが\n6件目以降は1件に付き月額220円（税込）で追加登録を承っております。\n\nお客様のご利用状況は下記の通りですが有料での追加登録をご希望でしょうか？\nそれとも現在のものをなにか削除して新しくご登録いたしますか？ \""
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-001": {
      "id": "NEWS-001",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "タイトル\t分類\t質問\t回答",
          "en": "タイトル\t分類\t質問\t回答"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-002": {
      "id": "NEWS-002",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "寮内ネットの利用可否\t寮内ネット\t自分の住んでいる学生寮で『寮内ネット』は利用できますか？\t寮によります。詳細はサポートデスクに確認してください。",
          "en": "寮内ネットの利用可否\t寮内ネット\t自分の住んでいる学生寮で『寮内ネット』は利用できますか？\t寮によります。詳細はサポートデスクに確認してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-003": {
      "id": "NEWS-003",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "再契約手続き\t寮内ネット\t1年間は寮にいる予定がありますが2年目に寮に住むか未定です。再契約になりますか？\t再契約が必要です。手続きはサポートデスクにお問い合わせください。",
          "en": "再契約手続き\t寮内ネット\t1年間は寮にいる予定がありますが2年目に寮に住むか未定です。再契約になりますか？\t再契約が必要です。手続きはサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-004": {
      "id": "NEWS-004",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "短期間の契約可否\t寮内ネット\t夏までの契約にしたいのですが可能ですか？\t可能です。詳細はサポートデスクにお問い合わせください。",
          "en": "短期間の契約可否\t寮内ネット\t夏までの契約にしたいのですが可能ですか？\t可能です。詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-005": {
      "id": "NEWS-005",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "インターネットの契約可否\tSun-Net光\t引越し先の物件でインターネットは必要なら自分で契約するように言われました。利用できますか？\t利用可能です。詳細はサポートデスクにお問い合わせください。",
          "en": "インターネットの契約可否\tSun-Net光\t引越し先の物件でインターネットは必要なら自分で契約するように言われました。利用できますか？\t利用可能です。詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-006": {
      "id": "NEWS-006",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "サービス停止\tSun-Net光\t長期留学中サービスを停止することはできますか？\t可能です。詳細はサポートデスクにお問い合わせください。",
          "en": "サービス停止\tSun-Net光\t長期留学中サービスを停止することはできますか？\t可能です。詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-007": {
      "id": "NEWS-007",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "ドコモのiPhoneの利用可否\tSIMカード\t解約したドコモのiPhoneは使えますか？\t使えますが、SIMカードの再発行が必要です。詳細はサポートデスクにお問い合わせください。",
          "en": "ドコモのiPhoneの利用可否\tSIMカード\t解約したドコモのiPhoneは使えますか？\t使えますが、SIMカードの再発行が必要です。詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-008": {
      "id": "NEWS-008",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "SIMカードの紛失\tSIMカード\tSIMカードを紛失しました。どうすればいいですか？\t直ちにサポートデスクに連絡してください。",
          "en": "SIMカードの紛失\tSIMカード\tSIMカードを紛失しました。どうすればいいですか？\t直ちにサポートデスクに連絡してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-009": {
      "id": "NEWS-009",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "振込先の確認\tお支払い方法\t利用料金の振込先を教えてください。\t振込先情報はご契約内容に記載されています。詳細はサポートデスクにお問い合わせください。",
          "en": "振込先の確認\tお支払い方法\t利用料金の振込先を教えてください。\t振込先情報はご契約内容に記載されています。詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-010": {
      "id": "NEWS-010",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "支払期日の過ぎた後の支払い方法\tお支払い方法\t支払期日が過ぎた後はどうすればよいですか？\t支払期日が過ぎた後は、遅延金が発生する可能性があります。サポートデスクに連絡してください。",
          "en": "支払期日の過ぎた後の支払い方法\tお支払い方法\t支払期日が過ぎた後はどうすればよいですか？\t支払期日が過ぎた後は、遅延金が発生する可能性があります。サポートデスクに連絡してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-011": {
      "id": "NEWS-011",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "連絡先変更手続き\t各種申請手続き\t携帯番号やメールアドレスが変更になった場合はどうすればよいですか？\tサポートデスクに連絡し、変更手続きを行ってください。",
          "en": "連絡先変更手続き\t各種申請手続き\t携帯番号やメールアドレスが変更になった場合はどうすればよいですか？\tサポートデスクに連絡し、変更手続きを行ってください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-012": {
      "id": "NEWS-012",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "部屋の変更手続き\t各種申請手続き\t途中で部屋が変わるかもしれませんが、どうすればよいでしょうか？\tサポートデスクに連絡してください。",
          "en": "部屋の変更手続き\t各種申請手続き\t途中で部屋が変わるかもしれませんが、どうすればよいでしょうか？\tサポートデスクに連絡してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-013": {
      "id": "NEWS-013",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "スマホのWiFi利用不可\tトラブルシューティング/寮内ネット\tスマホのWiFiが使えません。\tルーターの設定を確認してください。それでも解決しない場合はサポートデスクにお問い合わせください。",
          "en": "スマホのWiFi利用不可\tトラブルシューティング/寮内ネット\tスマホのWiFiが使えません。\tルーターの設定を確認してください。それでも解決しない場合はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-014": {
      "id": "NEWS-014",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "パソコンのWiFi利用不可\tトラブルシューティング/寮内ネット\tパソコンのWiFiが使えません。\tルーターの設定を確認してください。それでも解決しない場合はサポートデスクにお問い合わせください。",
          "en": "パソコンのWiFi利用不可\tトラブルシューティング/寮内ネット\tパソコンのWiFiが使えません。\tルーターの設定を確認してください。それでも解決しない場合はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-015": {
      "id": "NEWS-015",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "APN設定不可\tトラブルシューティング/SIMカード\tAPN設定ができない場合はどうすればいいでしょうか？\tAPN設定の詳細はサポートデスクにお問い合わせください。",
          "en": "APN設定不可\tトラブルシューティング/SIMカード\tAPN設定ができない場合はどうすればいいでしょうか？\tAPN設定の詳細はサポートデスクにお問い合わせください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-016": {
      "id": "NEWS-016",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "SIMカード破損\tトラブルシューティング/SIMカード\tSIMカードを破損してしまった。どうすればいいでしょうか？\t直ちにサポートデスクに連絡してください。",
          "en": "SIMカード破損\tトラブルシューティング/SIMカード\tSIMカードを破損してしまった。どうすればいいでしょうか？\t直ちにサポートデスクに連絡してください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-017": {
      "id": "NEWS-017",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "iPhone/iPadのMACアドレス表示方法\t参考/MACアドレス表示方法\tiPhone/iPadのMACアドレスはどこで確認できますか？\t設定 > 一般 > 情報 > Wi-Fiアドレス",
          "en": "iPhone/iPadのMACアドレス表示方法\t参考/MACアドレス表示方法\tiPhone/iPadのMACアドレスはどこで確認できますか？\t設定 > 一般 > 情報 > Wi-Fiアドレス"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-018": {
      "id": "NEWS-018",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "Android OSのMACアドレス表示方法\t参考/MACアドレス表示方法\tAndroid OSのMACアドレスはどこで確認できますか？\t設定 > 端末情報 > 状態 > Wi-Fi MACアドレス",
          "en": "Android OSのMACアドレス表示方法\t参考/MACアドレス表示方法\tAndroid OSのMACアドレスはどこで確認できますか？\t設定 > 端末情報 > 状態 > Wi-Fi MACアドレス"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-019": {
      "id": "NEWS-019",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "クレジットカード支払\t申込をしたのですがクレジットカード支払画面がありません。\t申込フォームではクレジットカード登録の入力欄はありません。お申込後ご指定のメールアドレス宛てにクレジットカード支払リンクを送信いたします。（※株式会社ゼウスのシステムより配信されます）アクセス有効期限が設定されておりますので指定期日までに支払手続を行ってください。",
          "en": "クレジットカード支払\t申込をしたのですがクレジットカード支払画面がありません。\t申込フォームではクレジットカード登録の入力欄はありません。お申込後ご指定のメールアドレス宛てにクレジットカード支払リンクを送信いたします。（※株式会社ゼウスのシステムより配信されます）アクセス有効期限が設定されておりますので指定期日までに支払手続を行ってください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-020": {
      "id": "NEWS-020",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "クレジットカード支払\t契約者はクレジットカードを持っていないので親のクレジットカードにて支払をしたい。\tご家族のクレジットカードによるお支払も可能です。尚、分割払い及び継続更新時においてはお支払いただいたクレジットカードの自動決済となります。",
          "en": "クレジットカード支払\t契約者はクレジットカードを持っていないので親のクレジットカードにて支払をしたい。\tご家族のクレジットカードによるお支払も可能です。尚、分割払い及び継続更新時においてはお支払いただいたクレジットカードの自動決済となります。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-021": {
      "id": "NEWS-021",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "口座振替払い\t契約者に口座ではなく親の銀行口座を登録することはできますか？\tご家族の銀行口座の登録は可能です。",
          "en": "口座振替払い\t契約者に口座ではなく親の銀行口座を登録することはできますか？\tご家族の銀行口座の登録は可能です。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-022": {
      "id": "NEWS-022",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "商品発送（寮内ネット/WiFiプラス）\t申込をしたのですが、料金を支払わないと無線ルーターは発送されませんか？\tお支払の有無に関わらず、お申込後に順次登録作業を行った後に発送いたします。",
          "en": "商品発送（寮内ネット/WiFiプラス）\t申込をしたのですが、料金を支払わないと無線ルーターは発送されませんか？\tお支払の有無に関わらず、お申込後に順次登録作業を行った後に発送いたします。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-023": {
      "id": "NEWS-023",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "クレジットカード支払\tお申込後クレジットカード支払リンクを受け取ったのですがアクセス有効期限が切れ手続ができなくなりました。どうすればよいですか？\tクレジットカード支払リンクを再送いたしますのでSun-Netサポートデスクまでお問合せください。",
          "en": "クレジットカード支払\tお申込後クレジットカード支払リンクを受け取ったのですがアクセス有効期限が切れ手続ができなくなりました。どうすればよいですか？\tクレジットカード支払リンクを再送いたしますのでSun-Netサポートデスクまでお問合せください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-024": {
      "id": "NEWS-024",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "口座振替払い\t口座振替依頼書の印鑑欄に間違って別の印鑑を押してしまった。どうすればよいですか？\t2重の取り消し線を引き、その上に銀行開設印を押印して、用紙の余白部（枠外可）に銀行開設印を押印ください。",
          "en": "口座振替払い\t口座振替依頼書の印鑑欄に間違って別の印鑑を押してしまった。どうすればよいですか？\t2重の取り消し線を引き、その上に銀行開設印を押印して、用紙の余白部（枠外可）に銀行開設印を押印ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "NEWS-025": {
      "id": "NEWS-025",
      "type": "solution",
      "show_contact": true,
      "question": {
        "ja": "",
        "en": ""
      },
      "content": {
        "text": {
          "ja": "口座振替払い\t口座振替依頼書の印鑑欄が陰影がぼやけてしまった。どうすればよいですか？\t2重の取り消し線を引き、その上に銀行開設印を押印して、用紙の余白部（枠外可）に銀行開設印を押印ください。",
          "en": "口座振替払い\t口座振替依頼書の印鑑欄が陰影がぼやけてしまった。どうすればよいですか？\t2重の取り消し線を引き、その上に銀行開設印を押印して、用紙の余白部（枠外可）に銀行開設印を押印ください。"
        }
      },
      "options": [
        {
          "label": {
            "ja": "有人チャットで相談する",
            "en": "Chat with an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_dorm_trouble": {
      "id": "cat_dorm_trouble",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "有線LAN（有線接続）の意味を教えてください。",
            "en": "有線LAN（有線接続）の意味を教えてください。"
          },
          "nextId": "FAQ-0010"
        },
        {
          "label": {
            "ja": "寮内ネットからSun-Net光への切り替えを検討しています。...",
            "en": "寮内ネットからSun-Net光への切り替えを検討しています。..."
          },
          "nextId": "FAQ-0034"
        },
        {
          "label": {
            "ja": "インターネットがつながらない場合、まず最初に確認すべきことは...",
            "en": "インターネットがつながらない場合、まず最初に確認すべきことは..."
          },
          "nextId": "FAQ-0076"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_hikari_trouble": {
      "id": "cat_hikari_trouble",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "引越し先の物件ではインターネットは必要なら自分で契約してくだ...",
            "en": "引越し先の物件ではインターネットは必要なら自分で契約してくだ..."
          },
          "nextId": "FAQ-0028"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_sim_trouble": {
      "id": "cat_sim_trouble",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "解約したドコモのiphoneはつかえますか？",
            "en": "解約したドコモのiphoneはつかえますか？"
          },
          "nextId": "FAQ-0040"
        },
        {
          "label": {
            "ja": "SIMカードを紛失しました。どうすればいいですか？",
            "en": "SIMカードを紛失しました。どうすればいいですか？"
          },
          "nextId": "FAQ-0041"
        },
        {
          "label": {
            "ja": "SIMフリー端末と思っていましたが、そうではなかったのか利用...",
            "en": "SIMフリー端末と思っていましたが、そうではなかったのか利用..."
          },
          "nextId": "FAQ-0042"
        },
        {
          "label": {
            "ja": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を...",
            "en": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を..."
          },
          "nextId": "FAQ-0043"
        },
        {
          "label": {
            "ja": "海外でSun-NetのSIMカードを使うことはできますか？",
            "en": "海外でSun-NetのSIMカードを使うことはできますか？"
          },
          "nextId": "FAQ-0044"
        },
        {
          "label": {
            "ja": "SIMカードの通信速度はどのくらいですか？通信制限はあります...",
            "en": "SIMカードの通信速度はどのくらいですか？通信制限はあります..."
          },
          "nextId": "FAQ-0045"
        },
        {
          "label": {
            "ja": "SIMカードのギガ数を変更したいのですがどのようにすればいい...",
            "en": "SIMカードのギガ数を変更したいのですがどのようにすればいい..."
          },
          "nextId": "FAQ-0047"
        },
        {
          "label": {
            "ja": "SIMカードの容量超過後はインターネットは使えるのでしょうか...",
            "en": "SIMカードの容量超過後はインターネットは使えるのでしょうか..."
          },
          "nextId": "FAQ-0048"
        },
        {
          "label": {
            "ja": "E-SIMのプランはありますか？",
            "en": "E-SIMのプランはありますか？"
          },
          "nextId": "FAQ-0049"
        },
        {
          "label": {
            "ja": "IPHONEを利用したいのですが、SIMロック端末かどうか確...",
            "en": "IPHONEを利用したいのですが、SIMロック端末かどうか確..."
          },
          "nextId": "FAQ-0050"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_payment": {
      "id": "cat_payment",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を...",
            "en": "寮内ネットもSIMサービスも使いたいです。それぞれ契約期間を..."
          },
          "nextId": "FAQ-0043"
        },
        {
          "label": {
            "ja": "払込取扱票にて指定された支払期日が過ぎてしまいました。支払い...",
            "en": "払込取扱票にて指定された支払期日が過ぎてしまいました。支払い..."
          },
          "nextId": "FAQ-0053"
        },
        {
          "label": {
            "ja": "契約者以外のクレジットカードでの支払いは可能ですか？",
            "en": "契約者以外のクレジットカードでの支払いは可能ですか？"
          },
          "nextId": "FAQ-0063"
        },
        {
          "label": {
            "ja": "払込取扱票での支払い方法を教えてください。",
            "en": "払込取扱票での支払い方法を教えてください。"
          },
          "nextId": "FAQ-0067"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_admin_proc": {
      "id": "cat_admin_proc",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。...",
            "en": "1年間は寮にいる予定がありますが2年目に寮に住むか未定です。..."
          },
          "nextId": "FAQ-0003"
        },
        {
          "label": {
            "ja": "退寮等でサービスを辞めたい場合、どのような手続きが必要ですか...",
            "en": "退寮等でサービスを辞めたい場合、どのような手続きが必要ですか..."
          },
          "nextId": "FAQ-0005"
        },
        {
          "label": {
            "ja": "ルーター購入プランで契約しておいて、途中からレンタルプランに...",
            "en": "ルーター購入プランで契約しておいて、途中からレンタルプランに..."
          },
          "nextId": "FAQ-0006"
        },
        {
          "label": {
            "ja": "無料インターネット付き物件に引っ越すことになりました。この場...",
            "en": "無料インターネット付き物件に引っ越すことになりました。この場..."
          },
          "nextId": "FAQ-0039"
        },
        {
          "label": {
            "ja": "口座振替依頼書の手続きをしても内容に不備があり再提出の通知が...",
            "en": "口座振替依頼書の手続きをしても内容に不備があり再提出の通知が..."
          },
          "nextId": "FAQ-0069"
        },
        {
          "label": {
            "ja": "携帯番号やメールアドレスが変更になった場合はどうすればよいで...",
            "en": "携帯番号やメールアドレスが変更になった場合はどうすればよいで..."
          },
          "nextId": "FAQ-0071"
        },
        {
          "label": {
            "ja": "途中で部屋が変わるかもしれませんが、どうすればよいのでしょう...",
            "en": "途中で部屋が変わるかもしれませんが、どうすればよいのでしょう..."
          },
          "nextId": "FAQ-0072"
        },
        {
          "label": {
            "ja": "携帯番号やメールアドレスが変更になった場合はどうすればよいで...",
            "en": "携帯番号やメールアドレスが変更になった場合はどうすればよいで..."
          },
          "nextId": "FAQANOTHER-0010"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_dorm_info": {
      "id": "cat_dorm_info",
      "question": {
        "ja": "具体的な質問を選んでください。",
        "en": "Please select a specific question."
      },
      "options": [
        {
          "label": {
            "ja": "自分の住んでいる学生寮で『寮内ネット』は利用できますか？",
            "en": "自分の住んでいる学生寮で『寮内ネット』は利用できますか？"
          },
          "nextId": "FAQ-0002"
        },
        {
          "label": {
            "ja": "部屋でネットが必要かまだわからないので、夏までの契約にしたい...",
            "en": "部屋でネットが必要かまだわからないので、夏までの契約にしたい..."
          },
          "nextId": "FAQ-0004"
        },
        {
          "label": {
            "ja": "自分で購入した無線ルーターを利用することはできますか？",
            "en": "自分で購入した無線ルーターを利用することはできますか？"
          },
          "nextId": "FAQ-0007"
        },
        {
          "label": {
            "ja": "WiFiプラス/レンタルプランと購入プランの違いを教えてくだ...",
            "en": "WiFiプラス/レンタルプランと購入プランの違いを教えてくだ..."
          },
          "nextId": "FAQ-0008"
        },
        {
          "label": {
            "ja": "MACアドレスはどのようなものですか？",
            "en": "MACアドレスはどのようなものですか？"
          },
          "nextId": "FAQ-0009"
        },
        {
          "label": {
            "ja": "自身で購入した無線ルーターを利用することはできますか？",
            "en": "自身で購入した無線ルーターを利用することはできますか？"
          },
          "nextId": "FAQ-0011"
        },
        {
          "label": {
            "ja": "無線ルーターを買い替えたいのですが可能ですか？",
            "en": "無線ルーターを買い替えたいのですが可能ですか？"
          },
          "nextId": "FAQ-0012"
        },
        {
          "label": {
            "ja": "LANケーブルは必要ですか？",
            "en": "LANケーブルは必要ですか？"
          },
          "nextId": "FAQ-0013"
        },
        {
          "label": {
            "ja": "申込時点ではノートパソコンを持っていませんが申し込むことはで...",
            "en": "申込時点ではノートパソコンを持っていませんが申し込むことはで..."
          },
          "nextId": "FAQ-0014"
        },
        {
          "label": {
            "ja": "WiFiアドレスをMACアドレスとして申請できますか？",
            "en": "WiFiアドレスをMACアドレスとして申請できますか？"
          },
          "nextId": "FAQ-0015"
        },
        {
          "label": {
            "ja": "解決しないのでオペレーターに相談",
            "en": "Talk to an operator"
          },
          "nextId": "operator_chat_form"
        },
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_hikari_info": {
      "id": "cat_hikari_info",
      "question": {
        "ja": "該当する項目が見つかりませんでした。",
        "en": "No items found."
      },
      "options": [
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    },
    "cat_sim_info": {
      "id": "cat_sim_info",
      "question": {
        "ja": "該当する項目が見つかりませんでした。",
        "en": "No items found."
      },
      "options": [
        {
          "label": {
            "ja": "トップに戻る",
            "en": "Back to Top"
          },
          "action": "reset"
        }
      ]
    }
  }
};