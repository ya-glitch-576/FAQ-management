document.addEventListener('DOMContentLoaded', () => {
    const faqCard = document.getElementById('faq-card');
    const backButton = document.getElementById('back-button');
    const langJaBtn = document.getElementById('lang-ja');
    const langEnBtn = document.getElementById('lang-en');
    const appSubtitle = document.getElementById('app-subtitle');

    let faqData = null;
    let historyStack = [];
    let currentStepId = null;
    let currentLang = localStorage.getItem('faq_lang') || 'ja';

    const CONTACT_PHONE = "XX-XXXX-XXXX";
    const CONTACT_WEB_URL = "https://example.com/contact-form";

    init();

    async function init() {
        if (typeof FAQ_DATA === 'undefined') return;
        faqData = FAQ_DATA;
        updateLangUI();
        renderStep(faqData.initialStepId);
    }

    function updateLangUI() {
        [langJaBtn, langEnBtn].forEach(btn => btn.classList.remove('active'));
        if (currentLang === 'ja') langJaBtn.classList.add('active');
        else langEnBtn.classList.add('active');

        // Update static UI
        const title = faqData.title[currentLang];
        document.title = title;
        document.getElementById('app-title').innerText = currentLang === 'ja' ? 'FAQボット' : 'FAQ Bot';
        appSubtitle.innerText = currentLang === 'ja' ? 'サポートセンター (カード版)' : 'Support Center (Card View)';
        backButton.innerText = currentLang === 'ja' ? '← 前に戻る' : '← Go back';
    }

    function switchLang(lang) {
        if (currentLang === lang) return;
        currentLang = lang;
        localStorage.setItem('faq_lang', lang);
        updateLangUI();
        if (currentStepId) renderStep(currentStepId, 'reset'); // Re-render current
    }

    langJaBtn.onclick = () => switchLang('ja');
    langEnBtn.onclick = () => switchLang('en');

    function renderStep(stepId, direction = 'forward') {
        const step = faqData.steps[stepId];
        if (!step) return;

        if (direction === 'forward' && currentStepId) historyStack.push(currentStepId);
        currentStepId = stepId;
        backButton.disabled = historyStack.length === 0;

        if (step.type === 'solution') {
            faqCard.innerHTML = generateSolutionHtml(step);
        } else if (step.type === 'input_form') {
            faqCard.innerHTML = generateFormHtml(step);
        } else {
            faqCard.innerHTML = generateQuestionHtml(step);
        }

        bindEvents(step);
    }

    function generateQuestionHtml(step) {
        const question = typeof step.question === 'object' ? step.question[currentLang] : step.question;
        const options = step.options.map(opt => {
            const label = typeof opt.label === 'object' ? opt.label[currentLang] : opt.label;
            return `
                <button class="option-btn" data-next-id="${opt.nextId || ''}" data-action="${opt.action || ''}">
                    ${label}
                </button>
            `;
        }).join('');
        return `<div class="question-section"><h2 class="question-text">${question}</h2><div class="options-container">${options}</div></div>`;
    }

    function generateFormHtml(step) {
        const question = typeof step.question === 'object' ? step.question[currentLang] : step.question;
        let fieldsHtml = step.fields.map(field => {
            const label = typeof field.label === 'object' ? field.label[currentLang] : field.label;
            return `
                <div class="form-field">
                    <label>${label}${field.required ? ' *' : ''}</label>
                    <input type="text" class="form-input" id="form-${field.id}" placeholder="${label}">
                </div>
            `;
        }).join('');

        const submitLabel = typeof step.submit_label === 'object' ? step.submit_label[currentLang] : step.submit_label;

        return `
            <div class="question-section">
                <h2 class="question-text">${question}</h2>
                <div class="input-form-container">
                    ${fieldsHtml}
                    <button class="form-submit-btn" id="form-submit">${submitLabel}</button>
                </div>
            </div>`;
    }

    function handleCardFormSubmit(stepId) {
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

        const baseUrl = "https://chat.google.com/room/DEMO_SPACE";
        const historyText = historyStack
            .map(id => {
                const s = faqData.steps[id];
                if (!s) return '';
                const q = typeof s.question === 'object' ? s.question[currentLang] : s.question;
                return q;
            })
            .filter(t => t)
            .join(' > ');

        const params = new URLSearchParams({
            name: formData.user_name || 'Guest',
            id: formData.member_id || 'N/A',
            context: historyText,
            lang: currentLang
        });

        const finalUrl = `${baseUrl}?${params.toString()}`;

        if (confirm(currentLang === 'ja' ? "情報を送信してGoogle Chatに移動しますか？" : "Send details and redirect to Google Chat?")) {
            window.open(finalUrl, '_blank');
        }
    }

    function generateSolutionHtml(step) {
        const c = step.content || {};
        const text = typeof c.text === 'object' ? c.text[currentLang] : c.text;
        const highlight = typeof c.text_highlight === 'object' ? c.text_highlight[currentLang] : c.text_highlight;

        let links = (c.links || []).map(l => {
            const lText = typeof l.text === 'object' ? l.text[currentLang] : l.text;
            return `<a href="${l.url}" class="link-btn" target="_blank">${lText} ↗</a>`;
        }).join('');

        let contact = step.show_contact ? `
            <div class="contact-area">
                <p>${currentLang === 'ja' ? '解決しない場合はサポートデスクへ' : 'Contact Support Desk'}</p>
                <div class="contact-buttons">
                    <a href="tel:${CONTACT_PHONE.replace(/-/g, '')}" class="contact-btn tel-btn">${currentLang === 'ja' ? '電話' : 'Call'}</a>
                    <a href="${CONTACT_WEB_URL}" class="contact-btn web-btn" target="_blank">${currentLang === 'ja' ? 'WEB' : 'Web Form'}</a>
                </div>
            </div>` : '';

        const resetLabel = currentLang === 'ja' ? 'トップに戻る' : 'Back to Top';

        return `
            <div class="solution-section">
                <h2 class="question-text" style="color:var(--primary-color);">${currentLang === 'ja' ? '解決策のご案内' : 'Recommended Solution'}</h2>
                <div class="solution-content">
                    <p>${text || ''}</p>
                    ${highlight ? `<div class="solution-highlight">${highlight}</div>` : ''}
                    ${links}
                    ${contact}
                </div>
                <div class="options-container" style="margin-top:20px; border-top:1px solid #eee; padding-top:20px;">
                    <button class="option-btn" data-action="reset" style="text-align:center;">${resetLabel}</button>
                </div>
            </div>`;
    }

    function bindEvents(step) {
        faqCard.querySelectorAll('.option-btn').forEach(btn => {
            btn.onclick = () => {
                const nextId = btn.dataset.nextId;
                const action = btn.dataset.action;
                if (action === 'reset') {
                    historyStack = [];
                    renderStep(faqData.initialStepId, 'reset');
                }
                else if (nextId) renderStep(nextId, 'forward');
            };
        });

        const submitBtn = document.getElementById('form-submit');
        if (submitBtn) {
            submitBtn.onclick = () => handleCardFormSubmit(step.id);
        }
    }

    backButton.onclick = () => {
        if (historyStack.length > 0) renderStep(historyStack.pop(), 'back');
    };
});
