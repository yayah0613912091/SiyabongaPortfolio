// Chatbot logic
const responses = {
    "who are you": "Hi! I'm Siyabonga Zulu, a passionate candidate who is dedicated to problem solving situation.",
    "what is your profession": "I'm a versatile individual specializing in web development, created using HTML,CSS,JAVASCRIPT.",
    "where are you from": "I'm from Johannesburg.",
    "what are your skills": "I excel in application lifecycle, software lifecycle, information systems management, data analysis, documentation and computing fundamentals.",
    "how can i contact you": "You can contact me through my LinkedIn or email found in the Contact section.",
};

function handleUserInput(input) {
    const lowerInput = input.toLowerCase();
    return responses[lowerInput] || "Sorry, I don't understand that. Try asking something else!";
}

// Update the chat
function updateChat(sender, message) {
    const messagesContainer = document.getElementById("chatbot-messages");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send user input
document.addEventListener("DOMContentLoaded", () => {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbot = document.getElementById("chatbot");

    // Toggle chatbot visibility
    chatbotIcon.addEventListener("click", () => {
        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block"; // Show chatbot
        } else {
            chatbot.style.display = "none"; // Hide chatbot
        }
    });

    // Chatbot functionality
    const sendButton = document.getElementById("send-btn");
    const chatInput = document.getElementById("chat-input");

    sendButton.addEventListener("click", () => {
        const userInput = chatInput.value.trim();
        if (userInput) {
            updateChat("user", userInput); // Add user's message to the chat
            const botResponse = handleUserInput(userInput); // Get bot's response
            updateChat("bot", botResponse); // Add bot's response to the chat
            chatInput.value = ""; // Clear input field
        }
    });

    // Handle Enter key to send message
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const cancelMenu = document.getElementById("cancel-menu");
    const links = document.querySelector(".links");
    const nav = document.querySelector("nav");

    // Show the menu
    const showMenu = () => {
        links.style.display = "flex";
        hamburgerMenu.style.display = "none";
        cancelMenu.style.display = "block";
    };

    // Hide the menu
    const hideMenu = () => {
        links.style.display = "none";
        cancelMenu.style.display = "none";
        hamburgerMenu.style.display = "block";
    };

    // Add click event listeners
    hamburgerMenu.addEventListener("click", showMenu);
    cancelMenu.addEventListener("click", hideMenu);

    // Close menu when a link is clicked on mobile
    links.addEventListener("click", (event) => {
        if (event.target.tagName === "A" && window.innerWidth < 768) {
            hideMenu();
        }
    });

    // Close menu when clicking outside the navigation
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target)) {
            hideMenu();
        }
    });

    // Adjust menu on window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            links.style.display = "flex"; // Keep menu open on larger screens
            hamburgerMenu.style.display = "none";
            cancelMenu.style.display = "none";
        } else {
            hideMenu(); // Reset to hidden menu on smaller screens
        }
    });
});






