// Particle Animation System
const particleCanvas = document.createElement('canvas');
particleCanvas.classList.add('particle-canvas');
document.body.appendChild(particleCanvas);

const ctx = particleCanvas.getContext('2d');
let particles = [];

// Resize canvas to match window size
function resizeCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

// Initialize particles
function initParticles() {
    particles = [];
    const particleCount = Math.floor(window.innerWidth / 10); // Responsive particle count
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            radius: Math.random() * 2 + 0.5,
            color: getRandomColor(0.5),
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            directionChangeTime: Math.random() * 100
        });
    }
}

// Get random color with opacity
function getRandomColor(opacity) {
    const colors = [
        `rgba(37, 99, 235, ${opacity})`, // primary
        `rgba(79, 70, 229, ${opacity})`, // secondary
        `rgba(139, 92, 246, ${opacity})`, // accent
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
    
    particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Change direction randomly
        if (Math.random() < 0.01) {
            particle.speedX = Math.random() * 0.5 - 0.25;
            particle.speedY = Math.random() * 0.5 - 0.25;
        }
        
        // Wrap around edges
        if (particle.x < 0) particle.x = particleCanvas.width;
        if (particle.x > particleCanvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = particleCanvas.height;
        if (particle.y > particleCanvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
    });
    
    // Connect nearby particles with lines
    connectParticles();
    
    requestAnimationFrame(animateParticles);
}

// Connect particles that are close to each other
function connectParticles() {
    const maxDistance = 100;
    
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
                // Calculate opacity based on distance
                const opacity = 1 - (distance / maxDistance);
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

// Initialize canvas and particles
resizeCanvas();
initParticles();
animateParticles();

// Handle window resize
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

// Scroll animations using Intersection Observer
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-category, .platform-card, .section-title, .hero-text, .hero-image, .agent-card, .gallery-item, .about-highlights, .highlight-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Neon glow effect for text
const addNeonEffect = () => {
    const titles = document.querySelectorAll('.section-title, .logo, .hero-text h1');
    
    titles.forEach(title => {
        title.classList.add('neon-text');
    });
};

// Glitch effect on hover for buttons
const addGlitchEffect = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('glitch');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('glitch');
        });
    });
};

// Magnetic effect for social links
const addMagneticEffect = () => {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.1)`;
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = '';
        });
    });
};

// Typing animation for hero section
const addTypingAnimation = () => {
    const heroSubtitle = document.querySelector('.hero-text h2');
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                heroSubtitle.classList.add('with-cursor');
            }, 500);
        }
    };
    
    setTimeout(typeWriter, 1000);
};

// Smooth scrolling for navigation links
const smoothScrolling = () => {
    const navLinks = document.querySelectorAll('nav a, .hero-buttons a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Mobile navigation toggle
const mobileNavToggle = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
};

// Project Gallery Filtering
const initProjectFilters = () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
};

// Counter animation for highlight numbers
const animateCounters = () => {
    const counterElements = document.querySelectorAll('.highlight-number');
    
    counterElements.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000; // 2 seconds
        const step = target / duration * 10;
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
                if (!counter.textContent.includes('+') && counter.nextElementSibling.textContent.includes('Years')) {
                    counter.textContent += '+';
                }
                if (!counter.textContent.includes('+') && counter.nextElementSibling.textContent.includes('Projects')) {
                    counter.textContent += '+';
                }
            }
        };
        
        // Start counter animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(updateCounter, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(counter);
    });
};

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    addNeonEffect();
    addGlitchEffect();
    addMagneticEffect();
    addTypingAnimation();
    smoothScrolling();
    mobileNavToggle();
    initProjectFilters();
    animateCounters();
});

// Chatbot Functionality
document.addEventListener('DOMContentLoaded', () => {
    const toggleChatbotBtn = document.getElementById('toggle-chatbot-btn');
    const closeChatbotBtn = document.getElementById('close-chatbot-btn');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');

    // --- Configuration ---
    const apiKey = "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"; // WARNING: Insecure to keep API key here!
    const apiUrl = "https://openrouter.ai/api/v1/chat/completions";
    const model = "openai/gpt-4o-mini";
    const systemPrompt = {
        role: "system",
        content: "You are Taha Bakhtari's (طاها باختری) AI assistant on his personal website. Answer questions about Taha, his projects (like FarsiRAG, Subtitle Generator, CAPTCHA Solver, etc.), his skills (AI, CV, NLP, LLMs), and his content (YouTube, Telegram). Be helpful, concise, and friendly. You can answer in Persian or English based on the user's language. If asked about Taha's age, mention he was born May 9, 2009. Refer to the website content for information."
        // content: "تو دستیار هوش مصنوعی طاها بختیاری در وب‌سایت شخصی او هستی. به سوالات درباره طاها، پروژه‌هایش (مانند FarsiRAG، Subtitle Generator، CAPTCHA Solver و غیره)، مهارت‌هایش (هوش مصنوعی، بینایی کامپیوتر، پردازش زبان طبیعی، مدل‌های زبانی بزرگ) و محتوایش (یوتیوب، تلگرام) پاسخ بده. مفید، مختصر و دوستانه باش. می‌توانی بر اساس زبان کاربر به فارسی یا انگلیسی پاسخ دهی. اگر سن طاها پرسیده شد، بگو متولد ۹ اردیبهشت ۱۳۸۸ (May 9, 2009) است. برای اطلاعات به محتوای وب‌سایت مراجعه کن."
    };
    let conversationHistory = [systemPrompt];
    // --- End Configuration ---

    const toggleChatbot = () => {
        chatbotContainer.classList.toggle('hidden');
        if (!chatbotContainer.classList.contains('hidden')) {
            chatbotInput.focus();
        }
    };

    const addMessageToChat = (sender, message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chatbot-message', sender === 'user' ? 'user-message' : 'bot-message');
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        // Scroll to the bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const sendMessage = async () => {
        const userInput = chatbotInput.value.trim();
        if (!userInput) return; // Don't send empty messages

        addMessageToChat('user', userInput);
        conversationHistory.push({ role: "user", content: userInput });
        chatbotInput.value = '';
        chatbotInput.disabled = true;
        chatbotSendBtn.disabled = true;

        // Add typing indicator (optional)
        addMessageToChat('bot', '...');
        const typingIndicator = chatbotMessages.lastChild;

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'https://tahabakhtari.site',
                    'X-Title': 'Taha Bakhtari Site'
                },
                body: JSON.stringify({
                    model: model,
                    messages: conversationHistory
                })
            });

            // Remove typing indicator
            chatbotMessages.removeChild(typingIndicator);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: { message: 'Failed to parse error response.' } }));
                console.error('API Error Response:', errorData);
                throw new Error(`API Error: ${response.status} ${response.statusText}. ${errorData?.error?.message || ''}`);
            }

            const result = await response.json();

            if (result.choices && result.choices.length > 0 && result.choices[0].message) {
                const botReply = result.choices[0].message.content;
                addMessageToChat('bot', botReply);
                conversationHistory.push({ role: "assistant", content: botReply });
            } else {
                console.error('Invalid response structure:', result);
                addMessageToChat('bot', 'Sorry, I received an unexpected response. Please try again.');
            }

        } catch (error) {
            console.error('Error fetching chatbot response:', error);
            // Remove typing indicator if it's still there on error
            if (chatbotMessages.contains(typingIndicator)) {
                 chatbotMessages.removeChild(typingIndicator);
            }
            addMessageToChat('bot', `Sorry, something went wrong. ${error.message}`);
        } finally {
            chatbotInput.disabled = false;
            chatbotSendBtn.disabled = false;
            chatbotInput.focus();
        }
    };

    // Event Listeners
    if (toggleChatbotBtn) {
        toggleChatbotBtn.addEventListener('click', toggleChatbot);
    }
    if (closeChatbotBtn) {
        closeChatbotBtn.addEventListener('click', () => chatbotContainer.classList.add('hidden'));
    }
    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', sendMessage);
    }
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
