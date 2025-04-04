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
    const elements = document.querySelectorAll('.skill-card, .project-category, .platform-card, .section-title, .hero-text, .hero-image');
    
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

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    addNeonEffect();
    addGlitchEffect();
    addMagneticEffect();
    addTypingAnimation();
    smoothScrolling();
    mobileNavToggle();
});