
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
            navToggle.classList.toggle('open');
        });
    }

    // Product Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const products = document.querySelectorAll('.product-card');

    if (filterBtns.length > 0 && products.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');

                const filterValue = btn.getAttribute('data-filter');

                products.forEach(product => {
                    const category = product.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px"
    });

    // Handle URL Parameters (e.g., for pre-filling contact form from product page)
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    const subjectField = document.getElementById('contact-sujet');

    if (subjectParam && subjectField) {
        // Try to match the param or add as an option
        const option = document.createElement('option');
        option.value = subjectParam;
        option.text = decodeURIComponent(subjectParam.replace(/%20/g, ' '));
        option.selected = true;
        subjectField.add(option);
    }

    revealElements.forEach(el => revealObserver.observe(el));

    // Hero Image Slider
    const slides = document.querySelectorAll('.hero-slider .img-hero');
    console.log("Slider initialized, slides found:", slides.length);
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000); // Change image every 3 seconds for better viewability
    }

    // Add WhatsApp Floating Button Dynamically
    const whatsappLink = document.createElement('a');
    whatsappLink.href = 'https://wa.me/22890660670'; // Official number
    whatsappLink.className = 'whatsapp-float'; // Removed reveal class to ensure it is visible immediately
    whatsappLink.target = '_blank';
    whatsappLink.innerHTML = `
        <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
    `;
    document.body.appendChild(whatsappLink);
    // Virtual Assistant Logic
    initChatWidget();
});

function initChatWidget() {
    // 1. Create Widget HTML
    const chatWidget = document.createElement('div');
    chatWidget.className = 'chat-widget';
    chatWidget.innerHTML = `
        <div class="chat-header">
            <div class="chat-title">
                <span class="chat-status"></span>
                Assistant Xolali
            </div>
            <button class="chat-close">&times;</button>
        </div>
        <div class="chat-body" id="chatBody">
            <div class="chat-message bot">
                Bonjour ! Bienvenue chez Les créations Xolali. Je suis votre assistant virtuel. Comment puis-je vous aider aujourd'hui ?
            </div>
            <div class="chat-options" id="chatOptions">
                <button class="chat-option-btn" data-action="products">🛍️ Voir les produits</button>
                <button class="chat-option-btn" data-action="training">🎓 Formations</button>
                <button class="chat-option-btn" data-action="location">📍 Nous trouver</button>
                <button class="chat-option-btn" data-action="contact">💬 Parler à un humain</button>
            </div>
        </div>
    `;
    document.body.appendChild(chatWidget);

    // 2. Create Toggle Button
    const chatToggle = document.createElement('div');
    chatToggle.className = 'chat-toggle';
    chatToggle.innerHTML = '🤖'; // Robot emoji or SVG
    chatToggle.title = "Besoin d'aide ?";
    document.body.appendChild(chatToggle);

    // 3. Event Listeners
    const chatBody = document.getElementById('chatBody');
    const optionsContainer = document.getElementById('chatOptions');

    // Toggle Chat
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.add('active');
        chatToggle.style.display = 'none'; // Hide toggle when open
    });

    chatWidget.querySelector('.chat-close').addEventListener('click', () => {
        chatWidget.classList.remove('active');
        setTimeout(() => {
            chatToggle.style.display = 'flex'; // Show toggle when closed
        }, 300);
    });

    // Handle Options
    optionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('chat-option-btn')) {
            const action = e.target.getAttribute('data-action');
            const text = e.target.innerText;

            // Add User Message
            addMessage(text, 'user');

            // Simulate Bot Typing/Response
            setTimeout(() => {
                handleBotResponse(action);
            }, 600);
        }
    });

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${sender}`;
        msgDiv.innerText = text;
        chatBody.insertBefore(msgDiv, optionsContainer); // Insert before options
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function handleBotResponse(action) {
        let responseText = "";
        let newOptions = "";

        switch (action) {
            case 'products':
                responseText = "Nous proposons des créations uniques en Batik : Robes, Pantalons, T-shirts et Accessoires. Vous pouvez consulter notre catalogue complet sur la page Produits.";
                newOptions = `<a href="products.html" class="chat-option-btn" style="background:var(--color-primary);color:white;text-decoration:none;">Voir le catalogue</a>`;
                break;
            case 'training':
                responseText = "Nous offrons des formations pratiques : Initiation (3 jours), Perfectionnement (1 semaine) ou Formation Pro (3 mois). Tout le matériel est fourni !";
                newOptions = `<a href="inscription.html" class="chat-option-btn" style="background:var(--color-primary);color:white;text-decoration:none;">S'inscrire</a>`;
                break;
            case 'location':
                responseText = "Notre atelier est situé à Lomé, au Togo, dans le quartier Amahomé. Nous sommes ouverts du Lundi au Samedi de 9h à 18h.";
                newOptions = `<a href="contact.html" class="chat-option-btn" style="background:var(--color-primary);color:white;text-decoration:none;">Voir le plan</a>`;
                break;
            case 'contact':
                responseText = "Vous pouvez nous joindre directement sur WhatsApp ou par téléphone au +228 90 66 06 70 pour une réponse immédiate.";
                newOptions = `<a href="https://wa.me/22890660670" target="_blank" class="chat-option-btn" style="background:var(--color-accent);color:var(--color-primary-dark);text-decoration:none;">Ouvrir WhatsApp</a>`;
                break;
            default:
                responseText = "Je n'ai pas compris. Voulez-vous réessayer ?";
        }

        // Remove old options temporarily or keep them? Let's refresh them.
        optionsContainer.innerHTML = newOptions + `
            <button class="chat-option-btn" data-action="reset">↩️ Menu principal</button>
        `;

        if (action === 'reset') {
            responseText = "Que souhaitez-vous savoir ?";
            optionsContainer.innerHTML = `
                <button class="chat-option-btn" data-action="products">🛍️ Voir les produits</button>
                <button class="chat-option-btn" data-action="training">🎓 Formations</button>
                <button class="chat-option-btn" data-action="location">📍 Nous trouver</button>
                <button class="chat-option-btn" data-action="contact">💬 Parler à un humain</button>
            `;
        }

        addMessage(responseText, 'bot');
    }
}
