// Chatbot logic

const chatbot = {
    hasGreeted: false, // Track if the chatbot has greeted the user

    init() {
        document.getElementById('chatbot-icon').addEventListener('click', () => {
            const chatbot = document.getElementById('chatbot');
            chatbot.style.display = chatbot.style.display === 'none' || !chatbot.style.display ? 'block' : 'none';
            if (!this.hasGreeted) {
                this.addMessage('bot', "Hello! I'm Siyabonga Zulu, your virtual assistant. How can I help you today?");
                this.hasGreeted = true;
            }
        });

        document.getElementById('send-btn').addEventListener('click', () => {
            this.handleUserInput();
        });

        document.getElementById('chat-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });

        document.getElementById('clear-chat').addEventListener('click', () => {
            document.getElementById('chatbot-messages').innerHTML = '';
            this.hasGreeted = false; // Reset greeting flag
        });
    },

    handleUserInput() {
        const inputField = document.getElementById('chat-input');
        const userInput = inputField.value.trim();

        if (userInput) {
            this.addMessage('user', userInput);
            const response = this.generateResponse(userInput.toLowerCase());
            this.addMessage('bot', response);
            inputField.value = '';
        }
    },

    generateResponse(message) {
        // Predefined responses
        const responses = {
            "who are you": "Hi! I'm Siyabonga Zulu, a passionate candidate who is dedicated to problem-solving situations.",
            "what is your profession": "I'm a versatile individual specializing in web development, created using HTML, CSS, and JavaScript.",
            "where are you from": "I'm from Johannesburg.",
            "what are your skills": "I excel in application lifecycle, software lifecycle, information systems management, data analysis, documentation, and computing fundamentals.",
            "how can i contact you": "You can contact me through my LinkedIn or email found in the Contact section.",
            "github": "You can explore my projects on GitHub: <a href='https://github.com/' target='_blank'>https://github.com/</a>.",
            "projects": "I've worked on various projects. Would you like to know about my recent work?",
            "education":"you can browse on the profile foe my educational skills",
        };
       // Keyword detection
       if (message.includes('skills') || message.includes('experience')) {
        return responses['what are your skills'];
    } else if (message.includes('contact')) {
        return responses['how can i contact you'];
    } else if (message.includes('github')) {
        return responses['github'];
    } else if (message.includes('projects')) {
        return responses['projects'];
    } else if (message.includes('education')) {
        return responses['education'];
    }
        // Exact match responses
        return responses[message] || "Sorry, I don't understand that. Try asking something else!";
    },

    addMessage(sender, text) {
        const chatMessages = document.getElementById('chatbot-messages');
        const messageContainer = document.createElement('div');
        messageContainer.className = `message ${sender}`;
        messageContainer.innerHTML = text; // Use innerHTML to support HTML in bot responses
        chatMessages.appendChild(messageContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};

document.addEventListener('DOMContentLoaded', () => chatbot.init());



document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const cancelMenu = document.getElementById("cancel-menu");
    const links = document.querySelector(".links");
    const nav = document.querySelector("nav");

    // Show menu when hamburger is clicked
    hamburgerMenu?.addEventListener("click", () => {
        links.style.display = "flex";
        hamburgerMenu.style.display = "none";
        cancelMenu.style.display = "block";
    });

    // Hide menu when cancel button is clicked
    cancelMenu?.addEventListener("click", () => {
        links.style.display = "none";
        cancelMenu.style.display = "none";
        hamburgerMenu.style.display = "block";
    });

    // Hide menu when clicking outside the nav
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target)) {
            links.style.display = "none";
            cancelMenu.style.display = "none";
            hamburgerMenu.style.display = "block";
        }
    });

    // Reset styles on screen resize
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            links.style.display = "flex"; // Reset to desktop view
            hamburgerMenu.style.display = "none";
            cancelMenu.style.display = "none";
        } else {
            links.style.display = "none"; // Reset to mobile view
            hamburgerMenu.style.display = "block";
            cancelMenu.style.display = "none";
        }
    });
});