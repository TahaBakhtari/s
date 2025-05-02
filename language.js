// Language switcher functionality
const languages = {
    en: {
        // Navigation
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_content: "Content",
        nav_contact: "Contact",
        nav_language: "فارسی", // Switch to Persian
        
        // Hero section
        hero_title: "Taha Bakhtari",
        hero_subtitle: "AI Specialist & Researcher",
        hero_description: "Programmer, researcher, and content creator specializing in Artificial Intelligence",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        
        // About section
        about_title: "About Me",
        about_text: "Born May 9, 2009, in Tehran, I am a programmer, researcher, and content creator specializing in Artificial Intelligence (AI). I work on cutting-edge topics like Large Language Models (LLMs), Generative AI, Computer Vision, Agentic AI, and Multi-Agent Systems, and have developed several creative and experimental projects in these areas.",
        about_education_title: "Life & Education",
        about_education_text: "I was born in Tehran and developed a passion for programming and technology from an early age. A fully self-taught learner.",
        
        // Projects section
        projects_title: "Professional Activities",
        projects_description: "With over three years of hands-on experience in AI, I have developed a wide range of advanced projects:",
        projects_category1_title: "AI Systems & Infrastructure",
        projects_category1_item1: "Building autonomous and multi-modal agents that interact intelligently with environments and users",
        projects_category1_item2: "Connecting language models to Blender for interactive visual systems",
        projects_category1_item3: "Creating a custom MCP (Multi-Agent Chat Protocol) server to manage communication between multiple agents and language models",
        projects_category2_title: "Applied AI Projects",
        projects_category2_item1: "Iranian license plate recognition",
        projects_category2_item2: "Persian digit OCR",
        projects_category2_item3: "Cancer detection using CNNs",
        projects_category2_item4: "Sentiment analysis in social media",
        projects_category2_item5: "Loan repayment prediction",
        projects_category2_item6: "Auto-correcting subtitles without external APIs",
        
        // Skills section
        skills_title: "Skills & Expertise",
        skills_programming_title: "Programming",
        skills_programming_text: "Proficient in Python and related AI frameworks",
        skills_frameworks_title: "AI Frameworks",
        skills_frameworks_text: "PyTorch, TensorFlow, Transformers, Unsloth, OnFluff",
        skills_agentic_title: "Agentic AI",
        skills_agentic_text: "Designing and implementing Agentic AI and Multi-Agent Systems",
        skills_vision_title: "Computer Vision",
        skills_vision_text: "Computer Vision, NLP, and LLM fine-tuning",
        skills_llm_title: "LLM Systems",
        skills_llm_text: "Developing LLM-based servers and intelligent browser tools",
        skills_content_title: "Content Creation",
        skills_content_text: "Producing specialized, creative, and high-quality AI content",
        
        // Content section
        content_title: "Content Creation",
        content_description: "I produce cutting-edge and highly practical content focused on real-world AI implementations. My goal is to teach advanced and often overlooked topics in the Persian-speaking AI community through educational and experimental videos.",
        content_youtube_title: "YouTube Channel",
        content_youtube_text: "Tutorials and demos on Large Language Models (LLMs), connecting LLMs to Blender and the web, building multi-modal AI agents, exploring complex AI infrastructures, and running creative AI experiments.",
        content_telegram_title: "Telegram Channel",
        content_telegram_text: "Sharing AI news, tips, and educational content.",
        content_github_title: "GitHub",
        content_github_text: "Explore my open-source AI projects.",
        
        // Contact section
        contact_title: "Get In Touch",
        contact_text: "Interested in collaborating on AI projects or have questions about my work? Feel free to reach out through any of my social platforms or email me directly.",
        
        // Footer
        footer_text: "© 2023 Taha Asl Bakhtari. All rights reserved."
    },
    fa: {
        // Navigation
        nav_about: "درباره من",
        nav_projects: "پروژه‌ها",
        nav_skills: "مهارت‌ها",
        nav_content: "محتوا",
        nav_contact: "تماس",
        nav_language: "English", // Switch to English
        
        // Hero section
        hero_title: "طاها باختری",
        hero_subtitle: "متخصص و پژوهشگر هوش مصنوعی",
        hero_description: "برنامه‌نویس، پژوهشگر و تولیدکننده محتوا در زمینه هوش مصنوعی",
        hero_btn_projects: "مشاهده پروژه‌ها",
        hero_btn_contact: "تماس با من",
        
        // About section
        about_title: "درباره من",
        about_text: "متولد ۱۹ اردیبهشت ۱۳۸۸ در تهران، من یک برنامه‌نویس، پژوهشگر و تولیدکننده محتوا در زمینه هوش مصنوعی هستم. من روی موضوعات پیشرفته مانند مدل‌های زبانی بزرگ (LLM)، هوش مصنوعی مولد، بینایی کامپیوتر، هوش مصنوعی عاملی و سیستم‌های چند عاملی کار می‌کنم و چندین پروژه خلاقانه و آزمایشی در این زمینه‌ها توسعه داده‌ام.",
        about_education_title: "زندگی و تحصیلات",
        about_education_text: "من در تهران متولد شدم و از سنین پایین علاقه زیادی به برنامه‌نویسی و فناوری پیدا کردم. به عنوان یک یادگیرنده کاملاً خودآموخته",
        
        // Projects section
        projects_title: "فعالیت‌های حرفه‌ای",
        projects_description: "با بیش از سه سال تجربه عملی در هوش مصنوعی، طیف گسترده‌ای از پروژه‌های پیشرفته را توسعه داده‌ام:",
        projects_category1_title: "سیستم‌ها و زیرساخت‌های هوش مصنوعی",
        projects_category1_item1: "ساخت عامل‌های خودمختار و چندوجهی که به طور هوشمندانه با محیط‌ها و کاربران تعامل می‌کنند",
        projects_category1_item2: "اتصال مدل‌های زبانی به Blender برای سیستم‌های بصری تعاملی",
        projects_category1_item3: "ایجاد یک سرور MCP (پروتکل چت چند عاملی) سفارشی برای مدیریت ارتباط بین چندین عامل و مدل‌های زبانی",
        projects_category2_title: "پروژه‌های کاربردی هوش مصنوعی",
        projects_category2_item1: "تشخیص پلاک خودرو ایرانی",
        projects_category2_item2: "تشخیص ارقام فارسی (OCR)",
        projects_category2_item3: "تشخیص سرطان با استفاده از CNN",
        projects_category2_item4: "تحلیل احساسات در رسانه‌های اجتماعی",
        projects_category2_item5: "پیش‌بینی بازپرداخت وام",
        projects_category2_item6: "تصحیح خودکار زیرنویس‌ها بدون استفاده از API‌های خارجی",
        
        // Skills section
        skills_title: "مهارت‌ها و تخصص‌ها",
        skills_programming_title: "برنامه‌نویسی",
        skills_programming_text: "تسلط بر پایتون و فریم‌ورک‌های مرتبط با هوش مصنوعی",
        skills_frameworks_title: "فریم‌ورک‌های هوش مصنوعی",
        skills_frameworks_text: "PyTorch، TensorFlow، Transformers، Unsloth، OnFluff",
        skills_agentic_title: "هوش مصنوعی عاملی",
        skills_agentic_text: "طراحی و پیاده‌سازی هوش مصنوعی عاملی و سیستم‌های چند عاملی",
        skills_vision_title: "بینایی کامپیوتر",
        skills_vision_text: "بینایی کامپیوتر، پردازش زبان طبیعی و تنظیم دقیق مدل‌های زبانی بزرگ",
        skills_llm_title: "سیستم‌های LLM",
        skills_llm_text: "توسعه سرورهای مبتنی بر LLM و ابزارهای هوشمند مرورگر",
        skills_content_title: "تولید محتوا",
        skills_content_text: "تولید محتوای تخصصی، خلاقانه و با کیفیت بالا در زمینه هوش مصنوعی",
        
        // Content section
        content_title: "تولید محتوا",
        content_description: "من محتوای پیشرفته و بسیار کاربردی با تمرکز بر پیاده‌سازی‌های واقعی هوش مصنوعی تولید می‌کنم. هدف من آموزش موضوعات پیشرفته و اغلب نادیده گرفته شده در جامعه فارسی‌زبان هوش مصنوعی از طریق ویدیوهای آموزشی و آزمایشی است.",
        content_youtube_title: "کانال یوتیوب",
        content_youtube_text: "آموزش‌ها و نمایش‌هایی درباره مدل‌های زبانی بزرگ (LLM)، اتصال LLM‌ها به Blender و وب، ساخت عامل‌های هوش مصنوعی چندوجهی، کاوش در زیرساخت‌های پیچیده هوش مصنوعی و اجرای آزمایش‌های خلاقانه هوش مصنوعی.",
        content_telegram_title: "کانال تلگرام",
        content_telegram_text: "اشتراک‌گذاری اخبار هوش مصنوعی، نکات و محتوای آموزشی.",
        content_github_title: "گیت‌هاب",
        content_github_text: "پروژه‌های متن‌باز هوش مصنوعی من را کاوش کنید.",
        
        // Contact section
        contact_title: "تماس با من",
        contact_text: "علاقه‌مند به همکاری در پروژه‌های هوش مصنوعی هستید یا سوالی دارید؟ از طریق هر یک از پلتفرم‌های اجتماعی من یا مستقیماً از طریق ایمیل با من تماس بگیرید.",
        
        // Footer
        footer_text: "©طاها اصل باختری."
    }
};

// Default language
let currentLanguage = 'en';

// Function to update all text content based on selected language
function updateLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // Add or remove RTL class to body for styling purposes
    if (lang === 'fa') {
        document.body.classList.add('rtl');
    } else {
        document.body.classList.remove('rtl');
    }
    
    // Update all text elements with their translations
    updateNavigation();
    updateHeroSection();
    updateAboutSection();
    updateProjectsSection();
    updateSkillsSection();
    updateContentSection();
    updateContactSection();
    updateFooter();
}

// Update navigation
function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks[0].textContent = languages[currentLanguage].nav_about;
    navLinks[1].textContent = languages[currentLanguage].nav_projects;
    navLinks[2].textContent = languages[currentLanguage].nav_skills;
    navLinks[3].textContent = languages[currentLanguage].nav_content;
    navLinks[4].textContent = languages[currentLanguage].nav_contact;
    
    // Update language switcher if it exists
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.textContent = languages[currentLanguage].nav_language;
    }
}

// Update hero section
function updateHeroSection() {
    const heroSection = document.querySelector('.hero-content');
    if (heroSection) {
        const h1 = heroSection.querySelector('h1');
        const h2 = heroSection.querySelector('h2');
        const p = heroSection.querySelector('p');
        const buttons = heroSection.querySelectorAll('.btn');
        
        h1.textContent = languages[currentLanguage].hero_title;
        h2.textContent = languages[currentLanguage].hero_subtitle;
        p.textContent = languages[currentLanguage].hero_description;
        buttons[0].textContent = languages[currentLanguage].hero_btn_projects;
        buttons[1].textContent = languages[currentLanguage].hero_btn_contact;
    }
}

// Update about section
function updateAboutSection() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const title = aboutSection.querySelector('.section-title');
        const paragraphs = aboutSection.querySelectorAll('p');
        const h3 = aboutSection.querySelector('h3');
        
        title.textContent = languages[currentLanguage].about_title;
        paragraphs[0].textContent = languages[currentLanguage].about_text;
        h3.textContent = languages[currentLanguage].about_education_title;
        paragraphs[1].textContent = languages[currentLanguage].about_education_text;
    }
}

// Update projects section
function updateProjectsSection() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const title = projectsSection.querySelector('.section-title');
        const description = projectsSection.querySelector('.section-description');
        const categories = projectsSection.querySelectorAll('.project-category');
        
        title.textContent = languages[currentLanguage].projects_title;
        description.textContent = languages[currentLanguage].projects_description;
        
        // First category
        const category1 = categories[0];
        category1.querySelector('h3').textContent = languages[currentLanguage].projects_category1_title;
        const items1 = category1.querySelectorAll('li');
        items1[0].textContent = languages[currentLanguage].projects_category1_item1;
        items1[1].textContent = languages[currentLanguage].projects_category1_item2;
        items1[2].textContent = languages[currentLanguage].projects_category1_item3;
        
        // Second category
        const category2 = categories[1];
        category2.querySelector('h3').textContent = languages[currentLanguage].projects_category2_title;
        const items2 = category2.querySelectorAll('li');
        items2[0].textContent = languages[currentLanguage].projects_category2_item1;
        items2[1].textContent = languages[currentLanguage].projects_category2_item2;
        items2[2].textContent = languages[currentLanguage].projects_category2_item3;
        items2[3].textContent = languages[currentLanguage].projects_category2_item4;
        items2[4].textContent = languages[currentLanguage].projects_category2_item5;
        items2[5].textContent = languages[currentLanguage].projects_category2_item6;
    }
}

// Update skills section
function updateSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const title = skillsSection.querySelector('.section-title');
        const cards = skillsSection.querySelectorAll('.skill-card');
        
        title.textContent = languages[currentLanguage].skills_title;
        
        // Update each skill card
        cards[0].querySelector('h3').textContent = languages[currentLanguage].skills_programming_title;
        cards[0].querySelector('p').textContent = languages[currentLanguage].skills_programming_text;
        
        cards[1].querySelector('h3').textContent = languages[currentLanguage].skills_frameworks_title;
        cards[1].querySelector('p').textContent = languages[currentLanguage].skills_frameworks_text;
        
        cards[2].querySelector('h3').textContent = languages[currentLanguage].skills_agentic_title;
        cards[2].querySelector('p').textContent = languages[currentLanguage].skills_agentic_text;
        
        cards[3].querySelector('h3').textContent = languages[currentLanguage].skills_vision_title;
        cards[3].querySelector('p').textContent = languages[currentLanguage].skills_vision_text;
        
        cards[4].querySelector('h3').textContent = languages[currentLanguage].skills_llm_title;
        cards[4].querySelector('p').textContent = languages[currentLanguage].skills_llm_text;
        
        cards[5].querySelector('h3').textContent = languages[currentLanguage].skills_content_title;
        cards[5].querySelector('p').textContent = languages[currentLanguage].skills_content_text;
    }
}

// Update content section
function updateContentSection() {
    const contentSection = document.getElementById('content');
    if (contentSection) {
        const title = contentSection.querySelector('.section-title');
        const description = contentSection.querySelector('.section-description');
        const platforms = contentSection.querySelectorAll('.platform-card');
        
        title.textContent = languages[currentLanguage].content_title;
        description.textContent = languages[currentLanguage].content_description;
        
        // YouTube
        platforms[0].querySelector('h3').textContent = languages[currentLanguage].content_youtube_title;
        platforms[0].querySelector('p').textContent = languages[currentLanguage].content_youtube_text;
        
        // Telegram
        platforms[1].querySelector('h3').textContent = languages[currentLanguage].content_telegram_title;
        platforms[1].querySelector('p').textContent = languages[currentLanguage].content_telegram_text;
        
        // GitHub
        platforms[2].querySelector('h3').textContent = languages[currentLanguage].content_github_title;
        platforms[2].querySelector('p').textContent = languages[currentLanguage].content_github_text;
    }
}

// Update contact section
function updateContactSection() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const title = contactSection.querySelector('.section-title');
        const text = contactSection.querySelector('.contact-info p');
        
        title.textContent = languages[currentLanguage].contact_title;
        text.textContent = languages[currentLanguage].contact_text;
    }
}

// Update footer
function updateFooter() {
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = languages[currentLanguage].footer_text;
    }
}

// Initialize language switcher
function initLanguageSwitcher() {
    // Create language switcher button
    const langSwitcher = document.createElement('li');
    const langLink = document.createElement('a');
    langLink.href = '#';
    langLink.classList.add('language-switcher');
    langLink.textContent = languages[currentLanguage].nav_language;
    langSwitcher.appendChild(langLink);
    
    // Add to navigation
    const navLinks = document.querySelector('.nav-links');
    navLinks.appendChild(langSwitcher);
    
    // Add event listener
    langLink.addEventListener('click', function(e) {
        e.preventDefault();
        const newLang = currentLanguage === 'en' ? 'fa' : 'en';
        updateLanguage(newLang);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    updateLanguage(currentLanguage);
});
