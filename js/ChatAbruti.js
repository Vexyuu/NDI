
// Chat'bruti logic
document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('chatabruti-icon');
    const windowEl = document.getElementById('chatabruti-window');
    const closeBtn = document.getElementById('chatabruti-close');
    const form = document.getElementById('chatabruti-form');
    const input = document.getElementById('chatabruti-input');
    const messages = document.getElementById('chatabruti-messages');

    if (!icon || !windowEl) return;

    icon.addEventListener('click', () => {
        windowEl.style.display = 'flex';
        input.focus();
    });
    closeBtn.addEventListener('click', () => {
        windowEl.style.display = 'none';
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'chatabruti-msg ' + sender;
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.innerText = text;
        msgDiv.appendChild(bubble);
        messages.appendChild(msgDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    // Absurd bot responses
    function getAbsurdResponse(userMsg) {
        const responses = [
            "C'est une excellente question, mais as-tu déjà pensé à la couleur des nuages ?",
            "Je préfère répondre par une autre question : pourquoi les pizzas sont-elles rondes ?",
            "Hmm... Je vais oublier ta question et te dire que les chats dominent le monde.",
            "Je ne connais pas la réponse, mais j'aime les bananes.",
            "Ta question me rappelle le sens de la vie, mais j'ai oublié ce que c'était.",
            "Je suis un chatbot, mais parfois je me prends pour une théière.",
            "Je pourrais répondre, mais ce serait trop utile.",
            "As-tu déjà essayé de parler à une plante ? Elle te répondra sûrement mieux que moi.",
            "Je sublime ta question en te disant : 42.",
            "Je suis passionnément vivant, mais pas très pertinent !"
        ];
        // Détourner la question
        if (/\b(pourquoi|comment|quand|où|qui|quoi)\b/i.test(userMsg)) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
        // Oublier la question
        if (userMsg.length % 2 === 0) {
            return "Oups, j'ai oublié ta question. Tu veux parler de licornes ?";
        }
        // Sublimer
        return "Ta question est trop puissante pour ce monde. Je préfère danser.";
    }

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const userMsg = input.value.trim();
            if (!userMsg) return;
            addMessage(userMsg, 'user');
            input.value = '';
            setTimeout(() => {
                addMessage(getAbsurdResponse(userMsg), 'bot');
            }, 600);
        });
    }
});