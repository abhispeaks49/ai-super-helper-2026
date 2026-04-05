let clickCount = 0;

function navigateTo(screenId) {
    incrementClickCount();

    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        window.scrollTo(0, 0);
    }
}

function incrementClickCount() {
    clickCount++;
    if (clickCount % 3 === 0) {
        showAdPopup();
    }
}

function showAdPopup() {
    const popup = document.getElementById('ad-popup');
    popup.classList.add('show');
}

function closeAdPopup() {
    const popup = document.getElementById('ad-popup');
    popup.classList.remove('show');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message === '') return;

    const chatMessages = document.getElementById('chat-messages');

    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'user-message';
    userMessageDiv.innerHTML = `<div class="message-bubble">${message}</div>`;
    chatMessages.appendChild(userMessageDiv);

    input.value = '';

    setTimeout(() => {
        const aiResponse = getAIResponse(message);
        const aiMessageDiv = document.createElement('div');
        aiMessageDiv.className = 'ai-message';
        aiMessageDiv.innerHTML = `<div class="message-bubble">${aiResponse}</div>`;
        chatMessages.appendChild(aiMessageDiv);

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function getAIResponse(message) {
    const responses = [
        "That's an interesting question! Let me help you with that.",
        "I understand what you're asking. Here's what I think...",
        "Great question! Based on what you've told me, I would suggest...",
        "I'm here to help! Let me provide you with some insights.",
        "That's a good point. From my perspective...",
        "I see what you mean. Here's my take on it...",
        "Thanks for asking! I can definitely help with that.",
        "Interesting! Let me break this down for you.",
        "I've processed your question. Here's what I found...",
        "Absolutely! I can assist you with that."
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

function generateResume() {
    incrementClickCount();

    const name = document.getElementById('resume-name').value || 'Your Name';
    const email = document.getElementById('resume-email').value || 'your.email@example.com';
    const phone = document.getElementById('resume-phone').value || '+1234567890';
    const skills = document.getElementById('resume-skills').value || 'Your skills';
    const education = document.getElementById('resume-education').value || 'Your education details';
    const experience = document.getElementById('resume-experience').value || 'Your work experience';

    const output = document.getElementById('resume-output');
    output.innerHTML = `
        <h3>Professional Resume</h3>
        <div style="margin-top: 20px;">
            <h4 style="color: #00d4ff; font-size: 1.8em; margin-bottom: 10px;">${name}</h4>
            <p style="margin-bottom: 5px;">📧 ${email}</p>
            <p style="margin-bottom: 20px;">📱 ${phone}</p>

            <h4 style="color: #00d4ff; margin-top: 25px; margin-bottom: 10px;">Skills</h4>
            <p>${skills}</p>

            <h4 style="color: #00d4ff; margin-top: 25px; margin-bottom: 10px;">Education</h4>
            <p>${education}</p>

            <h4 style="color: #00d4ff; margin-top: 25px; margin-bottom: 10px;">Experience</h4>
            <p>${experience}</p>
        </div>
    `;
}

function generateCaptions() {
    incrementClickCount();

    const topic = document.getElementById('caption-topic').value || 'life';

    const captions = {
        funny: [
            `When ${topic} gives you lemons, make a meme 🍋😂`,
            `Just ${topic} things... and questionable life choices 😅`,
            `Why be moody when you can shake your ${topic}? 💃`
        ],
        attitude: [
            `Living my ${topic} on my own terms 💯`,
            `Not everyone will understand my ${topic}, and I'm okay with that 😎`,
            `My ${topic}, my rules, my vibe ✨`
        ],
        love: [
            `Finding magic in every ${topic} moment 💖`,
            `Love, laughter, and ${topic} forever ❤️`,
            `Grateful for this beautiful ${topic} journey 🌟`
        ]
    };

    const output = document.getElementById('caption-output');
    output.innerHTML = `
        <div class="caption-item">
            <div class="caption-label">😂 Funny Caption:</div>
            ${captions.funny[Math.floor(Math.random() * captions.funny.length)]}
        </div>
        <div class="caption-item">
            <div class="caption-label">😎 Attitude Caption:</div>
            ${captions.attitude[Math.floor(Math.random() * captions.attitude.length)]}
        </div>
        <div class="caption-item">
            <div class="caption-label">❤️ Love Caption:</div>
            ${captions.love[Math.floor(Math.random() * captions.love.length)]}
        </div>
    `;
}

function solveHomework() {
    incrementClickCount();

    const question = document.getElementById('homework-question').value;

    if (!question.trim()) {
        alert('Please enter a question!');
        return;
    }

    const answers = [
        {
            title: "Understanding the Concept",
            content: "This is a great question! Let me break it down for you in simple terms. The key concept here involves understanding the fundamental principles and how they apply to real-world situations."
        },
        {
            title: "Step-by-Step Solution",
            content: "1. First, identify the main components of the problem\n2. Next, apply the relevant formula or concept\n3. Work through the calculation or reasoning\n4. Finally, verify your answer makes sense"
        },
        {
            title: "Key Takeaways",
            content: "Remember to always check your work and understand the 'why' behind each step. This will help you apply similar concepts to future problems. Practice makes perfect!"
        }
    ];

    const output = document.getElementById('homework-output');
    output.innerHTML = `
        <h3 style="color: #ff00ff;">Your Question:</h3>
        <p style="background: rgba(255, 255, 255, 0.05); padding: 15px; border-radius: 10px; margin-bottom: 20px;">${question}</p>

        <h3>${answers[0].title}</h3>
        <p>${answers[0].content}</p>

        <h3>${answers[1].title}</h3>
        <p style="white-space: pre-line;">${answers[1].content}</p>

        <h3>${answers[2].title}</h3>
        <p>${answers[2].content}</p>
    `;
}

function generateBusinessNames() {
    incrementClickCount();

    const businessType = document.getElementById('business-type').value || 'business';

    const prefixes = ['Smart', 'Pro', 'Elite', 'Prime', 'Next', 'Quantum', 'Digital', 'Tech', 'Blue', 'Swift'];
    const suffixes = ['Hub', 'Solutions', 'Connect', 'Wave', 'Edge', 'Sphere', 'Nexus', 'Labs', 'Works', 'Flow'];

    const names = [];
    for (let i = 0; i < 5; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        names.push(`${prefix}${suffix}`);
    }

    const output = document.getElementById('business-output');
    output.innerHTML = `
        <h3>Business Names for "${businessType}"</h3>
        <ul>
            ${names.map(name => `<li>💼 ${name}</li>`).join('')}
        </ul>
        <p style="margin-top: 20px; color: #aaa; font-style: italic;">
            Tip: Check domain availability before finalizing your business name!
        </p>
    `;
}

function getFarmingTips() {
    incrementClickCount();

    const crop = document.getElementById('crop-name').value.toLowerCase() || 'crops';

    const tipsByType = {
        wheat: {
            tips: [
                "Plant wheat in well-drained soil with pH 6.0-7.0",
                "Optimal temperature for growth is 12-25°C",
                "Apply nitrogen fertilizer in split doses",
                "Ensure adequate irrigation during grain filling stage",
                "Monitor for rust and aphid infestations regularly"
            ]
        },
        rice: {
            tips: [
                "Maintain 2-3 inches of standing water during growing season",
                "Transplant seedlings at 20-25 days after sowing",
                "Apply organic matter before planting",
                "Control weeds in first 30-40 days",
                "Drain fields 10-15 days before harvest"
            ]
        },
        corn: {
            tips: [
                "Plant when soil temperature reaches 50°F",
                "Space plants 8-12 inches apart in rows",
                "Apply nitrogen fertilizer when plants are knee-high",
                "Ensure consistent moisture during silk and tassel stage",
                "Watch for corn borer and armyworm pests"
            ]
        },
        default: {
            tips: [
                "Test your soil pH and nutrient levels regularly",
                "Rotate crops to maintain soil health",
                "Use organic compost to improve soil quality",
                "Implement integrated pest management practices",
                "Monitor weather forecasts and plan irrigation accordingly",
                "Maintain proper spacing for good air circulation",
                "Keep detailed records of planting and harvest dates"
            ]
        }
    };

    const selectedTips = tipsByType[crop] || tipsByType.default;

    const output = document.getElementById('farming-output');
    output.innerHTML = `
        <h3>Farming Tips for ${crop.charAt(0).toUpperCase() + crop.slice(1)}</h3>
        <ul>
            ${selectedTips.tips.map(tip => `<li>🌾 ${tip}</li>`).join('')}
        </ul>
        <p style="margin-top: 20px; color: #aaa; font-style: italic;">
            Always consult with local agricultural experts for region-specific advice.
        </p>
    `;
}
