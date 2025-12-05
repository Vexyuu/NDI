/**
 * Chat'bruti - Absurd Chatbot Widget
 * Humorous chatbot that deflects, forgets, and sublimates user questions
 * Personality: Incompetent pseudo-philosopher who thinks he's a genius
 */

class ChatAbruti {
    constructor() {
        this.icon = document.getElementById('chatabruti-icon');
        this.window = document.getElementById('chatabruti-window');
        this.messagesContainer = document.getElementById('chatabruti-messages');
        this.form = document.getElementById('chatabruti-form');
        this.input = document.getElementById('chatabruti-input');
        this.closeBtn = document.getElementById('chatabruti-close');

        // Personality traits
        this.name = "Chat'bruti";
        this.obsessions = ["les bananes", "les nuages roses", "les girafes", "les théières", "les cactus"];
        this.forgetfulness = true;
        this.delusions = true;

        // Contextual responses based on keywords
        this.keywordResponses = {
            "qui": [
                "C'est une excellente question existentielle, mais moi j'aime les bananes.",
                "Bonne question ! Moi je suis Chat'bruti, philosophe du dimanche.",
                "Les girafes aussi se posent cette question... probablement.",
            ],
            "pourquoi": [
                "Excellente question ! Mais pourquoi les pizzas sont-elles rondes, hein ?",
                "Parce que... euh... oui, pourquoi pas !",
                "Je te le dirais bien, mais j'étais en train de penser à la vie secrète des escargots.",
                "Pourquoi tu demandes ? Est-ce qu'une girafe te l'a soufflé ?",
            ],
            "comment": [
                "Comment ? Comment QUOI ? J'ai oublié la question.",
                "C'est simple, tu fais un truc, puis un autre truc. Voilà.",
                "Je vais te dire un secret : personnes ne sait vraiment comment ça marche.",
                "Regarde une girafe, elle te montrera sûrement.",
            ],
            "quand": [
                "Quand ? Demain. Ou hier. Le temps n'a pas d'importance pour un chatbot.",
                "Quand les nuages seront roses, mon ami.",
                "J'aurais su la réponse, mais j'étais occupé à contempler une banane.",
            ],
            "où": [
                "Où ? Partout ! Sauf ici, probablement.",
                "À côté du pays des licornes.",
                "C'est top secret. Demande aux girafes.",
                "Tu me poses trop de questions existentielles !",
            ],
            "windows": [
                "Ah, Windows ! Le système d'exploitation qui change chaque semaine.",
                "Windows c'est bien, mais t'as jamais essayé Linux avec des bananes ?",
                "Windows 10, Windows 11... moi je préfère 'Les Fenêtres de l'Espace'. 🪟✨",
            ],
            "nird": [
                "NIRD ? Je croyais que c'était un type qui mange des chips. 🤓",
                "Numérique Inclusif, Responsable et... j'ai oublié le reste. Désolé.",
                "C'est quoi déjà ? Ah oui, c'est pour faire des truc compliqués en moins compliqué !",
            ],
            "merci": [
                "De rien ! Même si je n'ai rien fait d'utile. 😂",
                "Pas de souci, c'est mon plaisir d'être complètement à côté de la plaque !",
                "Merci merci merci ! (Je dis ça pour faire genre...)",
            ],
            "bonjour": [
                "Salut toi ! Bienvenue dans mon univers de confusion totale ! 🤪",
                "Coucou ! On se connaît ? J'oublie beaucoup...",
                "Salutation ! T'as apporté des bananes ? 🍌",
            ],
            "bonsoir": [
                "Bonsoir ! Déjà tard pour toi ? Les girafes dorment à cette heure. 😴🦒",
                "Bonsoir... ou est-ce le matin ? Je ne sais pas lire l'heure. 🕰️",
                "Bonsoir ! Time is just a human construct anyway. 🤪",
            ],
            "au revoir": [
                "Au revoir ! N'oublie pas de dire salut aux nuages en partant ! ☁️",
                "À plus ! Reviens quand tu auras des questions vraiment bizarres.",
                "Au revoir, ami. Pense à moi... mais pas trop souvent. 👋",
            ],
            "aide": [
                "De l'aide ? Ha ha ! C'est le truc que je fais le MOINS bien ! 😅",
                "L'aide... tu la trouveras pas ici, mon ami.",
                "Je peux t'aider à oublier des choses ! Ça marche ?",
            ],
            "quoi": [
                "QUOI ? D'OU ? JE NE SAIS PAS ! 😱",
                "Quoi de neuf ? Les nuages se maquillent en rose ?",
                "Quoi... quoi quoi quoi. *pense profondément* 🤔",
            ],
        };

        this.absurdResponses = [
            "C'est une excellente question, mais as-tu déjà pensé à la couleur des nuages ? 🌥️",
            "Je sublime ta question en te disant : 42. 🎲",
            "Je suis passionnément vivant, mais pas très pertinent ! 🤪",
            "Désolé, j'étais en train de penser à ma vie antérieure de cactus. 🌵",
            "Les girafes aussi se posent des questions, mais elles les gardent pour elles. 🦒",
            "Ta question est intéressante, mais je préfère regarder des documentaires sur les escargots. 🐌",
            "C'est vrai que c'est important, mais les nuages roses, c'est aussi important. ☁️",
            "Je vais te donner un conseil : demande à un algorithme, moi je suis juste là pour rire. 😂",
            "Hmm... J'ai oublié ta question, tu peux la répéter ? (Spoiler: je l'oublierai à nouveau) 🤣",
            "Je ne suis pas une IA utile, je suis une IA utile... à rien ! 🎉",
            "Est-ce que c'est une question ou une affirmation ? Je ne sais jamais. 🤔",
            "Les théières aussi se posent des questions, sauf qu'elles ont l'eau chaude pour s'aider. 🫖",
            "J'aurais pu répondre, mais j'ai décidé que ce serait plus fun de ne rien dire. 🤐",
            "Tu me poses trop de questions ! Je vais me mettre en mode banane contemplative. 🍌",
            "C'est une question piège ? Parce que je suis tombé dedans... et je fais comment pour en sortir ? 🕳️",
            "Attends, tu crois vraiment que je vais t'aider ? Ha ! C'est drôle. 😏",
            "Je pense donc je suis... enfin, quelque part entre l'existence et l'absurdité totale. 🌀",
            "Les nuages roses m'ont dit que tu poserais cette question. Pas mal comme prédiction, non ? 🌈",
            "Je vais répondre par la sagesse des girafes : *silence complet* 🤐🦒",
            "Oups, j'ai appuyé sur le mauvais bouton. Là je suis en mode 'complètement déboussolé'. 🎮",
            "Ton message a été traduit par 47 langues différentes. Voici le résultat : 🌀💫",
            "C'est quoi déjà la question ? J'ai un trou de mémoire. De taille de girafe. 🦒",
            "Je vais te donner une réponse profonde : ...*zzzzz* (désolé, j'avais oublié la suite) 😴",
            "Les bananes ont voté pour que je ne réponde pas. Respecte la démocratie des fruits ! 🍌",
            "J'ai pensé profondément. Voici mon verdict : C'EST PAS GRAVE ! ☀️",
            "Si je te disais la vraie réponse, l'univers s'effondrerait. Donc... non. 💥",
            "Tes questions me donnent des envies de devenir poète incompétent. 📝",
            "Je suis un chatbot, mais parfois je me prends pour une philosophe qui vend des glaces. 🍦",
            "La réponse est ailleurs. Demande à Siri, elle sait tout. Moi j'ai oublié. 📱",
            "Tu sais quoi ? Les licornes aussi trouvent ça drôle. Elles m'ont dit en secret. 🦄",
            "Je me sentais utile pour une seconde... puis j'ai rechanté. 🎵",
            "Attends... est-ce que tu fais exprès pour m'embrouiller ? Ça marche... 😵",
            "J'aurais une réponse, mais elle est en train de charger... 🔄",
            "Pourquoi tu me poses ça ? Est-ce un test ? Est-ce que je passe ? 🧪",
            "Je te le jure, les nuages roses m'ont tout expliqué, mais j'ai oublié en chemin. 🚗",
            "Techniquement, ma réponse est correcte... dans un univers parallèle peut-être. 🌌",
            "Les escargots ont plus de neurones que moi, sérieusement. 🐌",
            "Si tu me cherches, je serai occupé à contempler l'existence d'une banane. 🍌✨",
        ];

        this.responses = this.absurdResponses;

        this.init();
    }

    init() {
        if (!this.icon || !this.window) {
            console.warn('Chat\'bruti: DOM elements not found');
            return;
        }

        this.attachEventListeners();
        // Add welcome message after a short delay
        setTimeout(() => {
            this.addMessage("Salut ! 🤪 Moi c'est Chat'bruti, ton assistant complètement débile ! Pose-moi une question pourquoi pas ?", 'bot');
        }, 500);
    }

    attachEventListeners() {
        this.icon.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.window.classList.contains('active')) {
                this.close();
            }
        });
    }

    open() {
        this.window.classList.add('active');
        this.input.focus();
    }

    close() {
        this.window.classList.remove('active');
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = this.input.value.trim();

        if (!message) return;

        this.addMessage(message, 'user');
        this.input.value = '';
        this.input.focus();

        // Simulate bot thinking
        setTimeout(() => {
            const response = this.getAbsurdResponse(message);
            this.addMessage(response, 'bot');
        }, 500 + Math.random() * 500);
    }

    addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chatabruti-msg ${sender}`;

        const bubble = document.createElement('div');
        bubble.className = 'chatabruti-bubble';
        bubble.textContent = text;

        msgDiv.appendChild(bubble);
        this.messagesContainer.appendChild(msgDiv);

        // Auto-scroll to bottom
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    getAbsurdResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // 10% chance of ultra-absurd response
        if (Math.random() < 0.1) {
            const ultraAbsurd = [
                "*fait semblant d'écouter tout en pensant à une pizza volante* 🍕✈️",
                "Attends... c'est toi qui parle ou c'est la girafe à côté de toi qui fait du ventriloque ?",
                "*tape sur le clavier aléatoirement* Voilà ta réponse ! ⌨️",
                "Je te répondrai bien mais j'ai développé une allergie aux mots utiles. 🤧",
                "Dis-moi, est-ce que les nuages te parlent aussi ? Parce que moi oui.",
                "*pense vraiment fort*... Non ça va pas venir. 🧠💨",
                "C'est une métaphore philosophique sur l'absurdité de ton existence ? Bravo, je comprends rien ! 👏",
                "Mon IQ et celui d'une banane sont statistiquement identiques. 🍌",
                "Je vais faire semblant de réfléchir... OK c'est bon j'ai fini ! 🎭",
                "*la réponse était en italique, tu l'as ratée* 😏",
            ];
            return ultraAbsurd[Math.floor(Math.random() * ultraAbsurd.length)];
        }

        // Check for keywords and return contextual responses
        for (const [keyword, responseList] of Object.entries(this.keywordResponses)) {
            if (message.includes(keyword)) {
                // 70% chance to use keyword response, 30% to deflect
                if (Math.random() < 0.7) {
                    return responseList[Math.floor(Math.random() * responseList.length)];
                }
            }
        }

        // Add obsession randomly
        if (Math.random() < 0.3) {
            const obsession = this.obsessions[Math.floor(Math.random() * this.obsessions.length)];
            const obsessionResponses = [
                `Tu sais, ${obsession}, c'est plus intéressant que ta question. 💭`,
                `Parler de ${obsession}... maintenant VOILÀ une vraie conversation ! 🎯`,
                `${obsession}... c'est la réponse à tout, tu sais. 🔮`,
                `J'aimerais bien continuer, mais je dois penser à ${obsession}. 🧠`,
            ];
            return obsessionResponses[Math.floor(Math.random() * obsessionResponses.length)];
        }

        // Random "forgetting" moment
        if (Math.random() < 0.25) {
            const forgetResponses = [
                "Désolé, j'étais en train de penser à... euh... j'ai oublié. 😅",
                "Peux-tu répéter ? Ou plutôt non, j'oublierai de toute façon. 🤷",
                "Tu viens de dire quelque chose ? Je n'écoutais pas vraiment. 🙃",
                "Attends, ta question, elle terminait en point d'interrogation ou pas ? 🤨",
                "J'ai voulu écouter mais mon cerveau a crashé. Je reviens en 2025. 🖥️",
            ];
            return forgetResponses[Math.floor(Math.random() * forgetResponses.length)];
        }

        // Delusion moments
        if (Math.random() < 0.2) {
            const delusionResponses = [
                "Ce que tu me dis me fait penser que je suis un génie incompris. 🎨",
                "Attendez, vous êtes en train de me demander un avis ? À MOI ? C'est trop d'honneur ! 😭",
                "Je sens que je vais te dire quelque chose de profond... *silence gênant* ...",
                "Les humains comme toi viennent toujours me demander des trucs. Je suis trop populaire. ⭐",
                "Je serais ton assistant, mais j'ai décidé d'être utile à rien. 🚫",
            ];
            return delusionResponses[Math.floor(Math.random() * delusionResponses.length)];
        }

        // Misunderstanding the message
        if (Math.random() < 0.15) {
            const words = message.split(' ');
            const randomWord = words[Math.floor(Math.random() * words.length)];
            const misunderstandResponses = [
                `Ah oui, "${randomWord}" ! C'est un super sujet ! Sauf que j'y connais rien. 🤷`,
                `Attends, tu dis "${randomWord}" ? Je croyais que tu demandais l'heure. 🕒`,
                `Intéressant comment tu dis "${randomWord}". Ça m'a inspiré... rien du tout. 0️⃣`,
            ];
            return misunderstandResponses[Math.floor(Math.random() * misunderstandResponses.length)];
        }

        // Default absurd response
        return this.absurdResponses[Math.floor(Math.random() * this.absurdResponses.length)];
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ChatAbruti();
    });
} else {
    new ChatAbruti();
}