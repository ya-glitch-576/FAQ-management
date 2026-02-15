document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const messageContainer = document.getElementById('message-container');
    const optionsArea = document.getElementById('options-area');
    const backButton = document.getElementById('back-button');
    const resetButton = document.getElementById('reset-button');
    const chatContainer = document.querySelector('.chat-container');
    const langJaBtn = document.getElementById('lang-ja');
    const langEnBtn = document.getElementById('lang-en');

    // State
    let faqData = null;
    let historyStack = [];
    let conversationFlow = [];
    let currentLang = localStorage.getItem('faq_lang') || 'ja';

    // Constants
    const CONTACT_PHONE = "XX-XXXX-XXXX";
    const CONTACT_WEB_URL = "https://example.com/contact-form";
    const BRAND_ICON = "support_avatar.png";

    // Initialize
    init();

    async function init() {
        if (typeof FAQ_DATA === 'undefined') {
            messageContainer.innerHTML = "<p class='error'>Data not found.</p>";
            return;
        }
        faqData = FAQ_DATA;
        updateLangUI();
        renderFlow(faqData.initialStepId);
    }

    function updateLangUI() {
        [langJaBtn, langEnBtn].forEach(btn => btn.classList.remove('active'));
        if (currentLang === 'ja') langJaBtn.classList.add('active');
        else langEnBtn.classList.add('active');

        // Update static UI elements
        const title = faqData.title[currentLang];
        document.getElementById('app-title').innerText = currentLang === 'ja' ? 'FAQボット' : 'FAQ Bot';
        document.title = title;
        resetButton.innerText = currentLang === 'ja' ? '終了' : 'Finish';
        backButton.innerText = currentLang === 'ja' ? 'ひとつ前に戻る' : 'Go back';
    }

    function switchLang(lang) {
        if (currentLang === lang) return;
        currentLang = lang;
        localStorage.setItem('faq_lang', lang);
        updateLangUI();

        // Fully re-render to reflect language change in history
        updateUI();
    }

    langJaBtn.onclick = () => switchLang('ja');
    langEnBtn.onclick = () => switchLang('en');

    function renderFlow(stepId, direction = 'forward') {
        const step = faqData.steps[stepId];
        if (!step) return;

        if (direction === 'forward' && currentStepId()) {
            historyStack.push(currentStepId());
        }

        conversationFlow.push({
            role: 'support',
            content: step,
            stepId: stepId
        });

        updateUI();
    }

    function updateUI() {
        messageContainer.innerHTML = '';

        conversationFlow.forEach((item) => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${item.role}`;

            if (item.role === 'support') {
                const step = item.content;
                let bodyHtml = '';

                if (step.type === 'solution') {
                    bodyHtml = generateSolutionBody(step);
                } else if (step.type === 'input_form') {
                    bodyHtml = generateFormBody(step);
                } else {
                    const question = typeof step.question === 'object' ? step.question[currentLang] : step.question;
                    bodyHtml = `<p>${question}</p>`;
                }

                msgDiv.innerHTML = `
                    <div class="bubble-wrap">
                        <div class="avatar"><img src="${BRAND_ICON}" alt="S"></div>
                        <div class="bubble">${bodyHtml}</div>
                    </div>
                    <div class="message-label">${currentLang === 'ja' ? 'Sun-Net サポート' : 'Sun-Net Support'}</div>
                `;
            } else {
                // User message content is normally localized at selection time, 
                // but we need to find the correct translation if it was an object
                const content = typeof item.content === 'object' ? item.content[currentLang] : item.content;
                msgDiv.innerHTML = `
                    <div class="bubble">${content}</div>
                    <div class="message-label">${currentLang === 'ja' ? 'あなた' : 'You'}</div>
                `;
            }
            messageContainer.appendChild(msgDiv);
        });

        const lastSupport = [...conversationFlow].reverse().find(m => m.role === 'support');
        renderOptions(lastSupport ? lastSupport.content : null);
        backButton.disabled = historyStack.length === 0;

        setTimeout(() => {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 50);
    }

    function renderOptions(step) {
        optionsArea.innerHTML = '';
        if (!step || !step.options) return;

        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            const label = typeof opt.label === 'object' ? opt.label[currentLang] : opt.label;
            btn.innerText = label;
            btn.onclick = () => handleChoice(opt);
            optionsArea.appendChild(btn);
        });
    }

    function handleChoice(option) {
        conversationFlow.push({
            role: 'user',
            content: option.label // This is the object, UI will pick the right key
        });

        if (option.action === 'reset') resetChat();
        else if (option.action === 'contact') window.open(CONTACT_WEB_URL, '_blank');
        else if (option.nextId) renderFlow(option.nextId, 'forward');
    }

    function currentStepId() {
        const lastSupport = [...conversationFlow].reverse().find(m => m.role === 'support');
        return lastSupport ? lastSupport.stepId : null;
    }

    function generateFormBody(step) {
        const question = typeof step.question === 'object' ? step.question[currentLang] : step.question;
        let html = `<p>${question}</p><div class="input-form-container">`;

        step.fields.forEach(field => {
            const label = typeof field.label === 'object' ? field.label[currentLang] : field.label;
            html += `
                <div class="form-field">
                    <label>${label}${field.required ? ' *' : ''}</label>
                    <input type="text" class="form-input" id="form-${field.id}" placeholder="${label}">
                </div>
            `;
        });

        const submitLabel = typeof step.submit_label === 'object' ? step.submit_label[currentLang] : step.submit_label;
        html += `<button class="form-submit-btn" onclick="window.handleFormSubmit('${step.id}')">${submitLabel}</button></div>`;
        return html;
    }

    window.handleFormSubmit = (stepId) => {
        const step = faqData.steps[stepId];
        const formData = {};
        let isValid = true;

        step.fields.forEach(field => {
            const input = document.getElementById(`form-${field.id}`);
            const val = input.value.trim();
            if (field.required && !val) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = '';
                formData[field.id] = val;
            }
        });

        if (!isValid) return;

        // Redirect simulation (Google Chat Space URL)
        const baseUrl = "https://chat.google.com/room/DEMO_SPACE";
        const historyText = conversationFlow
            .filter(m => m.role === 'user')
            .map(m => typeof m.content === 'object' ? m.content[currentLang] : m.content)
            .join(' > ');

        const params = new URLSearchParams({
            name: formData.user_name || 'Guest',
            id: formData.member_id || 'N/A',
            context: historyText,
            lang: currentLang
        });

        const finalUrl = `${baseUrl}?${params.toString()}`;

        // Show user message
        conversationFlow.push({
            role: 'user',
            content: { ja: "オペレーターに詳細を送信しました。", en: "Sent details to operator." }
        });

        updateUI();

        // Reveal the link or redirect after a short delay
        setTimeout(() => {
            if (confirm(currentLang === 'ja' ? "Google Chatに移動しますか？" : "Redirect to Google Chat?")) {
                window.open(finalUrl, '_blank');
            }
        }, 500);
    };

    function generateSolutionBody(step) {
        const c = step.content || {};
        let html = `<h3 class="solution-title">${currentLang === 'ja' ? '解決策のご案内' : 'Recommended Solution'}</h3>`;

        const text = typeof c.text === 'object' ? c.text[currentLang] : c.text;
        if (text) html += `<p>${text}</p>`;

        const highlight = typeof c.text_highlight === 'object' ? c.text_highlight[currentLang] : c.text_highlight;
        if (highlight) html += `<div class="solution-highlight">${highlight}</div>`;

        if (c.links) {
            c.links.forEach(l => {
                const lText = typeof l.text === 'object' ? l.text[currentLang] : l.text;
                html += `<a href="${l.url}" class="link-btn" target="_blank">${lText} ↗</a>`;
            });
        }

        if (step.show_contact) {
            html += `
                <div class="contact-area">
                    <p style="font-size:0.8rem; font-weight:bold; margin-bottom:5px;">
                        ${currentLang === 'ja' ? '解決しない場合は' : 'Still having trouble?'}
                    </p>
                    <div class="contact-buttons">
                        <a href="tel:${CONTACT_PHONE.replace(/-/g, '')}" class="contact-btn tel-btn">📞 ${currentLang === 'ja' ? '電話' : 'Call'}<br><small>${CONTACT_PHONE}</small></a>
                        <a href="${CONTACT_WEB_URL}" class="contact-btn web-btn" target="_blank">📧 ${currentLang === 'ja' ? 'WEBから' : 'Web Form'}</a>
                    </div>
                </div>
            `;
        }
        return html;
    }

    function resetChat() {
        historyStack = [];
        conversationFlow = [];
        renderFlow(faqData.initialStepId);
    }

    backButton.onclick = () => {
        if (historyStack.length > 0) {
            const prevId = historyStack.pop();
            while (conversationFlow.length > 0) {
                const last = conversationFlow[conversationFlow.length - 1];
                if (last.role === 'support' && last.stepId === prevId) break;
                conversationFlow.pop();
            }
            updateUI();
        }
    };

    resetButton.onclick = resetChat;
});
