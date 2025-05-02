// Language switcher functionality
const languages = {
    en: {
        // Navigation
        nav_about: "About",
        nav_ai_agents: "AI Agents",
        nav_gallery: "Project Gallery",
        nav_skills: "Skills",
        nav_content: "Content",
        nav_contact: "Contact",
        nav_language: "فارسی",
        
        // Hero section
        hero_title: "Taha Bakhtari",
        hero_subtitle: "AI Engineer & Researcher",
        hero_description: "Specializing in AI Agents, Large Language Models, and Computer Vision",
        hero_btn_agents: "Explore AI Agents",
        hero_btn_gallery: "View Projects",
        
        // About section
        about_title: "About Me",
        about_text: "Born May 9, 2009, in Tehran, I am a programmer, researcher, and AI specialist focusing on cutting-edge technologies. With over two years of self-taught experience in artificial intelligence, I develop innovative solutions in areas such as Large Language Models (LLMs), Generative AI, Computer Vision, and Multi-Agent Systems.",
        about_education_title: "Life & Education",
        about_education_text: "I developed a passion for programming and AI from an early age. As a 10th-grade student, I've independently mastered advanced concepts in deep learning, natural language processing, and computer vision, demonstrating that age is not a barrier to innovation in technology. My work spans multiple domains, from sophisticated AI systems to practical applications that solve real-world problems.",
        about_highlight1_num: "15+",
        about_highlight1_text: "AI Projects",
        about_highlight2_num: "2+",
        about_highlight2_text: "Years Experience",
        about_highlight3_num: "3",
        about_highlight3_text: "Research Areas",
        
        // AI Agents section
        ai_agents_title: "AI Agents & Systems",
        ai_agents_description: "I specialize in building advanced AI agent systems that can perceive, reason, and act autonomously in various environments.",
        agent1_title: "FarsiRAG Retrieval System",
        agent1_desc: "An advanced question-answering system for Persian PDFs using Retrieval-Augmented Generation techniques. This system efficiently processes and retrieves relevant information from Persian documents.",
        agent1_link: "View on GitHub",
        agent2_title: "Advanced RAG Techniques",
        agent2_desc: "Implementation of cutting-edge Retrieval-Augmented Generation methods for more accurate and contextually-aware AI responses, showcasing the latest innovations in NLP technology.",
        agent2_link: "View on GitHub",
        agent3_title: "Subtitle Generator",
        agent3_desc: "An AI-powered system that automatically generates and synchronizes subtitles for videos with high accuracy. This popular project has received significant community recognition.",
        agent3_link: "View on GitHub",
        agent4_title: "AI CAPTCHA Solver",
        agent4_desc: "A deep learning system using YOLO architecture that achieves over 95% accuracy in solving CAPTCHAs, trained on a dataset of 181,000 images I personally collected and labeled.",
        agent4_link: "View on GitHub",
        agent5_title: "MCP Servers",
        agent5_desc: "Implementation of Multi-agent Chat Protocol servers for orchestrating communication between multiple AI agents, enabling complex collaborative behaviors and distributed problem-solving.",
        agent5_link: "View on GitHub",
        agent6_title: "TorobjoMCP",
        agent6_desc: "A specialized MCP implementation for product search and Instagram analysis, enabling intelligent data retrieval and social media content analysis with a custom protocol.",
        agent6_link: "View on GitHub",
        
        // Project Gallery section
        gallery_title: "Project Gallery",
        gallery_description: "A curated showcase of my most impactful AI projects, each representing significant innovation in their respective domains.",
        gallery_filter_all: "All Projects",
        gallery_filter_vision: "Computer Vision",
        gallery_filter_nlp: "NLP",
        gallery_filter_agent: "AI Agents",
        gallery_filter_data: "Data Science",
        gallery_item1_title: "Persian-digits-ocr",
        gallery_item1_desc: "OCR system for recognizing Persian digits (۰-۹) with a custom dataset I created specifically for this purpose.",
        gallery_item1_tag1: "Computer Vision",
        gallery_item1_tag2: "OCR",
        gallery_item1_tag3: "Persian",
        gallery_item1_link: "View Project",
        gallery_item2_title: "License Plate Recognition",
        gallery_item2_desc: "Advanced system for detecting and recognizing Iranian license plates using computer vision techniques and deep learning.",
        gallery_item2_tag1: "Computer Vision",
        gallery_item2_tag2: "OCR",
        gallery_item2_tag3: "Object Detection",
        gallery_item2_link: "View Project",
        gallery_item3_title: "FarsiRAG System",
        gallery_item3_desc: "Question-answering system for Persian documents using advanced RAG techniques to provide accurate, contextual responses.",
        gallery_item3_tag1: "NLP",
        gallery_item3_tag2: "RAG",
        gallery_item3_tag3: "LLM",
        gallery_item3_link: "View Project",
        gallery_item4_title: "CAPTCHA Solver",
        gallery_item4_desc: "High-accuracy CAPTCHA solving system using YOLO architecture, achieving over 95% success rate with a dataset of 181k images.",
        gallery_item4_tag1: "Computer Vision",
        gallery_item4_tag2: "YOLO",
        gallery_item4_tag3: "Deep Learning",
        gallery_item4_link: "View Project",
        gallery_item5_title: "Diabetes Diagnosis",
        gallery_item5_desc: "Predictive system for diabetes diagnosis using logistic regression, focusing on glucose and BMI features analysis.",
        gallery_item5_tag1: "Data Science",
        gallery_item5_tag2: "Medical AI",
        gallery_item5_tag3: "ML",
        gallery_item5_link: "View Project",
        gallery_item6_title: "Subtitle Generator",
        gallery_item6_desc: "Automatic video subtitle generator and synchronizer using speech recognition and NLP, highly popular in the community.",
        gallery_item6_tag1: "Speech Recognition",
        gallery_item6_tag2: "NLP",
        gallery_item6_tag3: "Video Processing",
        gallery_item6_link: "View Project",
        gallery_item7_title: "MCP Servers",
        gallery_item7_desc: "Multi-agent Chat Protocol implementation for coordinating communication between multiple AI agents in complex systems.",
        gallery_item7_tag1: "Multi-Agent Systems",
        gallery_item7_tag2: "Communication Protocols",
        gallery_item7_tag3: "Agentic AI",
        gallery_item7_link: "View Project",
        gallery_item8_title: "Loan Repayment Prediction",
        gallery_item8_desc: "Financial analysis system that predicts loan repayment probability based on personal and financial data using machine learning.",
        gallery_item8_tag1: "Financial AI",
        gallery_item8_tag2: "Predictive Analytics",
        gallery_item8_tag3: "ML",
        gallery_item8_link: "View Project",
        gallery_item9_title: "Cancer Detection",
        gallery_item9_desc: "Medical imaging analysis system using Convolutional Neural Networks to detect cancer patterns in medical scans.",
        gallery_item9_tag1: "Medical AI",
        gallery_item9_tag2: "CNN",
        gallery_item9_tag3: "Image Analysis",
        gallery_item9_link: "View Project",
        gallery_item10_title: "Sentiment Analysis",
        gallery_item10_desc: "Social media content analyzer that detects sentiment (positive/negative/neutral) in text from various platforms.",
        gallery_item10_tag1: "NLP",
        gallery_item10_tag2: "Social Media Analysis",
        gallery_item10_tag3: "Text Processing",
        gallery_item10_link: "View Project",
        gallery_item11_title: "CAPTCHA Characters Dataset",
        gallery_item11_desc: "Custom dataset of 118,167 labeled CAPTCHA character images for OCR and deep learning research, published on Kaggle.",
        gallery_item11_tag1: "Dataset Creation",
        gallery_item11_tag2: "Research Resource",
        gallery_item11_tag3: "Kaggle",
        gallery_item11_link: "View Dataset",
        gallery_item12_title: "Speech-to-Text",
        
        // Professional Projects Section (id="projects")
        projects_title: "Professional Projects",
        projects_description: "With extensive hands-on experience in AI, I have developed a wide range of advanced projects across multiple domains:",
        projects_category1_title: "Computer Vision Projects",
        projects_category1_item1: "Persian digits OCR with custom datasets",
        projects_category2_title: "NLP & Language Models",
        projects_category2_item1: "Retrieval-Augmented Generation for Persian documents",
        projects_category3_title: "Data Science & Predictive Analytics",
        projects_category3_item1: "Loan repayment prediction using financial data",
        projects_category4_title: "AI Agents & Infrastructure",
        projects_category4_item1: "Multi-Agent Chat Protocol (MCP) servers",
        
        // Skills section
        skills_title: "Skills & Expertise",
        skills_programming_title: "Programming",
        skills_programming_text: "Proficient in Python and specialized AI libraries",
        skills_deep_learning_title: "Deep Learning",
        skills_deep_learning_text: "TensorFlow, PyTorch, Neural Networks, CNN, YOLO",
        skills_agentic_title: "AI Agents",
        skills_agentic_text: "Multi-Agent systems, Agentic AI, Autonomous systems",
        skills_vision_title: "Computer Vision",
        skills_vision_text: "Object detection, OCR, image processing, CAPTCHA solving",
        skills_nlp_title: "NLP & LLMs",
        skills_nlp_text: "Retrieval-Augmented Generation, Language models, Transformers",
        skills_data_science_title: "Data Science",
        skills_data_science_text: "Dataset creation, data processing, predictive modeling",
        skills_optimization_title: "Model Optimization",
        skills_optimization_text: "Model quantization, pruning, and efficient deployment",
        skills_system_design_title: "AI System Design",
        skills_system_design_text: "End-to-end AI system architecture and implementation",
        
        // Content section
        content_title: "Content Creation",
        content_description: "I produce cutting-edge and highly practical content focused on real-world AI implementations. My goal is to teach advanced and often overlooked topics in the Persian-speaking AI community through educational and experimental videos.",
        content_youtube_title: "YouTube Channel",
        content_youtube_text: "Tutorials and demos on Large Language Models (LLMs), connecting LLMs to Blender and the web, building multi-modal AI agents, exploring complex AI infrastructures, and running creative AI experiments.",
        content_youtube_link: "@Tahabakhtariai",
        content_telegram_title: "Telegram Channel",
        content_telegram_text: "Sharing AI news, tips, and educational content. Get the latest updates on my projects and discoveries in the world of AI technology.",
        content_telegram_link: "@Ai_by_Taha",
        content_github_title: "GitHub",
        content_github_text: "Explore my open-source AI projects. All code repositories are available for you to study, use, and contribute to the advancement of AI technology.",
        content_github_link: "@Tahabakhtari",
        
        // Contact section
        contact_title: "Get In Touch",
        contact_text: "Interested in collaborating on AI projects or have questions about my work? Feel free to reach out through any of my social platforms or email me directly.",
        contact_email: "tahabakhtari88@gmail.com",
        
        // Footer
        footer_text: "© 2025 Taha Bakhtari. All rights reserved.",

        // Certificates section (Added)
        certificates_title: "Certificates",
        certificates_description: "My certifications and achievements in AI and programming",
        cert1_title: "2nd Place Nationwide - AIOcup",
        cert1_desc: "National Creativity and Innovation Competition (ICUP) in programming and AI - Challenge A5",
        cert2_title: "Large Language Model Evaluations",
        cert2_issuer: "From: EVIDENTLY AI",
        cert2_desc: "LLM evaluations for AI product teams",
        cert_view: "View Certificate", // Common key for view links
        cert3_title: "Foundations of AI Agents",
        cert3_issuer: "From: Hugging Face",
        cert3_desc: "Unit 1: Foundations of Agents in the Hugging Face Agents Course",
        cert4_title: "Problem Solving (Intermediate)",
        cert4_issuer: "From: HackerRank",
        cert4_desc: "Problem Solving (Intermediate)",
        cert4_id_label: "ID: 738EB5A5C8DE"
    },
    fa: {
        // Navigation
        nav_about: "درباره من",
        nav_ai_agents: "عامل‌های هوشمند",
        nav_gallery: "گالری پروژه‌ها",
        nav_skills: "مهارت‌ها",
        nav_content: "محتوا",
        nav_contact: "تماس",
        nav_language: "English",
        
        // Hero section
        hero_title: "طاها باختری",
        hero_subtitle: "مهندس و پژوهشگر هوش مصنوعی",
        hero_description: "متخصص در عامل‌های هوشمند، مدل‌های زبانی بزرگ و بینایی کامپیوتر",
        hero_btn_agents: "کاوش عامل‌های هوشمند",
        hero_btn_gallery: "مشاهده پروژه‌ها",
        
        // About section
        about_title: "درباره من",
        about_text: "متولد ۱۹ اردیبهشت ۱۳۸۸ در تهران، من یک برنامه‌نویس، پژوهشگر و متخصص هوش مصنوعی هستم که بر روی فناوری‌های پیشرفته تمرکز دارم. با بیش از دو سال تجربه خودآموخته در هوش مصنوعی، راهکارهای نوآورانه‌ای در حوزه‌هایی مانند مدل‌های زبانی بزرگ (LLM)، هوش مصنوعی مولد، بینایی کامپیوتر و سیستم‌های چندعاملی توسعه می‌دهم.",
        about_education_title: "زندگی و تحصیلات",
        about_education_text: "از سنین پایین به برنامه‌نویسی و هوش مصنوعی علاقه‌مند شدم. به عنوان دانش‌آموز پایه دهم، به طور مستقل مفاهیم پیشرفته در یادگیری عمیق، پردازش زبان طبیعی و بینایی کامپیوتر را فراگرفته‌ام و نشان داده‌ام که سن مانعی برای نوآوری در فناوری نیست. کار من حوزه‌های متعددی را در بر می‌گیرد، از سیستم‌های پیچیده هوش مصنوعی تا کاربردهای عملی که مشکلات دنیای واقعی را حل می‌کنند.",
        about_highlight1_num: "+۱۵",
        about_highlight1_text: "پروژه هوش مصنوعی",
        about_highlight2_num: "+۲",
        about_highlight2_text: "سال تجربه",
        about_highlight3_num: "۳",
        about_highlight3_text: "حوزه تحقیقاتی",
        
        // AI Agents section
        ai_agents_title: "عامل‌ها و سیستم‌های هوشمند",
        ai_agents_description: "من در ساخت سیستم‌های پیشرفته عامل هوشمند تخصص دارم که می‌توانند به طور خودمختار در محیط‌های مختلف درک، استدلال و عمل کنند.",
        agent1_title: "سیستم بازیابی FarsiRAG",
        agent1_desc: "یک سیستم پرسش و پاسخ پیشرفته برای فایل‌های PDF فارسی با استفاده از تکنیک‌های بازیابی-افزوده (RAG). این سیستم به طور کارآمد اطلاعات مرتبط را از اسناد فارسی پردازش و بازیابی می‌کند.",
        agent1_link: "مشاهده در گیت‌هاب",
        agent2_title: "تکنیک‌های پیشرفته RAG",
        agent2_desc: "پیاده‌سازی روش‌های پیشرفته بازیابی-افزوده برای پاسخ‌های هوش مصنوعی دقیق‌تر و آگاه به زمینه، نمایش‌دهنده آخرین نوآوری‌ها در فناوری NLP.",
        agent2_link: "مشاهده در گیت‌هاب",
        agent3_title: "مولد زیرنویس",
        agent3_desc: "یک سیستم مبتنی بر هوش مصنوعی که به طور خودکار زیرنویس‌ها را برای ویدیوها با دقت بالا تولید و همگام‌سازی می‌کند. این پروژه محبوب، بازخورد قابل توجهی از جامعه دریافت کرده است.",
        agent3_link: "مشاهده در گیت‌هاب",
        agent4_title: "حل‌کننده کپچای هوشمند",
        agent4_desc: "یک سیستم یادگیری عمیق با استفاده از معماری YOLO که بیش از ۹۵٪ دقت در حل کپچاها دارد، آموزش‌دیده بر روی مجموعه داده‌ای شامل ۱۸۱,۰۰۰ تصویر که شخصاً جمع‌آوری و برچسب‌گذاری کرده‌ام.",
        agent4_link: "مشاهده در گیت‌هاب",
        agent5_title: "سرورهای MCP",
        agent5_desc: "پیاده‌سازی سرورهای پروتکل چت چندعاملی (MCP) برای هماهنگ‌سازی ارتباط بین چندین عامل هوشمند، امکان‌پذیر ساختن رفتارهای مشارکتی پیچیده و حل مسئله توزیع‌شده.",
        agent5_link: "مشاهده در گیت‌هاب",
        agent6_title: "TorobjoMCP",
        agent6_desc: "یک پیاده‌سازی تخصصی MCP برای جستجوی محصول و تحلیل اینستاگرام، امکان بازیابی هوشمند داده‌ها و تحلیل محتوای رسانه‌های اجتماعی با یک پروتکل سفارشی.",
        agent6_link: "مشاهده در گیت‌هاب",
        
        // Project Gallery section
        gallery_title: "گالری پروژه‌ها",
        gallery_description: "نمایشگاهی از تاثیرگذارترین پروژه‌های هوش مصنوعی من، که هرکدام نشان‌دهنده نوآوری قابل توجهی در حوزه خود هستند.",
        gallery_filter_all: "همه پروژه‌ها",
        gallery_filter_vision: "بینایی کامپیوتر",
        gallery_filter_nlp: "پردازش زبان طبیعی",
        gallery_filter_agent: "عامل‌های هوشمند",
        gallery_filter_data: "علم داده",
        gallery_item1_title: "Persian-digits-ocr",
        gallery_item1_desc: "سیستم OCR برای تشخیص ارقام فارسی (۰-۹) با مجموعه داده سفارشی که خودم برای این منظور ایجاد کردم.",
        gallery_item1_tag1: "بینایی کامپیوتر",
        gallery_item1_tag2: "OCR",
        gallery_item1_tag3: "فارسی",
        gallery_item1_link: "مشاهده پروژه",
        gallery_item2_title: "تشخیص پلاک خودرو",
        gallery_item2_desc: "سیستم پیشرفته برای تشخیص و شناسایی پلاک خودروهای ایرانی با استفاده از تکنیک‌های بینایی کامپیوتر و یادگیری عمیق.",
        gallery_item2_tag1: "بینایی کامپیوتر",
        gallery_item2_tag2: "OCR",
        gallery_item2_tag3: "تشخیص اشیاء",
        gallery_item2_link: "مشاهده پروژه",
        gallery_item3_title: "سیستم FarsiRAG",
        gallery_item3_desc: "سیستم پرسش و پاسخ برای اسناد فارسی با استفاده از تکنیک‌های پیشرفته RAG برای ارائه پاسخ‌های دقیق و متنی.",
        gallery_item3_tag1: "پردازش زبان طبیعی",
        gallery_item3_tag2: "RAG",
        gallery_item3_tag3: "LLM",
        gallery_item3_link: "مشاهده پروژه",
        gallery_item4_title: "حل‌کننده کپچا",
        gallery_item4_desc: "سیستم حل کپچا با دقت بالا با استفاده از معماری YOLO، با نرخ موفقیت بیش از ۹۵٪ با مجموعه داده ۱۸۱ هزار تصویری.",
        gallery_item4_tag1: "بینایی کامپیوتر",
        gallery_item4_tag2: "YOLO",
        gallery_item4_tag3: "یادگیری عمیق",
        gallery_item4_link: "مشاهده پروژه",
        gallery_item5_title: "تشخیص دیابت",
        gallery_item5_desc: "سیستم پیش‌بینی برای تشخیص دیابت با استفاده از رگرسیون لجستیک، با تمرکز بر تحلیل ویژگی‌های گلوکز و BMI.",
        gallery_item5_tag1: "علم داده",
        gallery_item5_tag2: "هوش مصنوعی پزشکی",
        gallery_item5_tag3: "یادگیری ماشین",
        gallery_item5_link: "مشاهده پروژه",
        gallery_item6_title: "مولد زیرنویس",
        gallery_item6_desc: "مولد و همگام‌ساز خودکار زیرنویس ویدیو با استفاده از تشخیص گفتار و پردازش زبان طبیعی، بسیار محبوب در جامعه.",
        gallery_item6_tag1: "تشخیص گفتار",
        gallery_item6_tag2: "پردازش زبان طبیعی",
        gallery_item6_tag3: "پردازش ویدیو",
        gallery_item6_link: "مشاهده پروژه",
        gallery_item7_title: "سرورهای MCP",
        gallery_item7_desc: "پیاده‌سازی پروتکل چت چندعاملی برای هماهنگی ارتباط بین چندین عامل هوشمند در سیستم‌های پیچیده.",
        gallery_item7_tag1: "سیستم‌های چندعاملی",
        gallery_item7_tag2: "پروتکل‌های ارتباطی",
        gallery_item7_tag3: "هوش مصنوعی عاملی",
        gallery_item7_link: "مشاهده پروژه",
        gallery_item8_title: "پیش‌بینی بازپرداخت وام",
        gallery_item8_desc: "سیستم تحلیل مالی که احتمال بازپرداخت وام را بر اساس داده‌های شخصی و مالی با استفاده از یادگیری ماشین پیش‌بینی می‌کند.",
        gallery_item8_tag1: "هوش مصنوعی مالی",
        gallery_item8_tag2: "تحلیل پیش‌بینانه",
        gallery_item8_tag3: "یادگیری ماشین",
        gallery_item8_link: "مشاهده پروژه",
        gallery_item9_title: "تشخیص سرطان",
        gallery_item9_desc: "سیستم تحلیل تصاویر پزشکی با استفاده از شبکه‌های عصبی کانولوشنی برای تشخیص الگوهای سرطان در اسکن‌های پزشکی.",
        gallery_item9_tag1: "هوش مصنوعی پزشکی",
        gallery_item9_tag2: "CNN",
        gallery_item9_tag3: "تحلیل تصویر",
        gallery_item9_link: "مشاهده پروژه",
        gallery_item10_title: "تحلیل احساسات",
        gallery_item10_desc: "تحلیلگر محتوای رسانه‌های اجتماعی که احساسات (مثبت/منفی/خنثی) را در متن از پلتفرم‌های مختلف تشخیص می‌دهد.",
        gallery_item10_tag1: "پردازش زبان طبیعی",
        gallery_item10_tag2: "تحلیل رسانه‌های اجتماعی",
        gallery_item10_tag3: "پردازش متن",
        gallery_item10_link: "مشاهده پروژه",
        gallery_item11_title: "مجموعه داده کاراکترهای کپچا",
        gallery_item11_desc: "مجموعه داده سفارشی شامل ۱۱۸,۱۶۷ تصویر کاراکتر کپچای برچسب‌گذاری شده برای تحقیقات OCR و یادگیری عمیق، منتشر شده در Kaggle.",
        gallery_item11_tag1: "ایجاد مجموعه داده",
        gallery_item11_tag2: "منبع تحقیقاتی",
        gallery_item11_tag3: "Kaggle",
        gallery_item11_link: "مشاهده مجموعه داده",
        gallery_item12_title: "تبدیل گفتار به متن",
        
        // Professional Projects Section (id="projects")
        projects_title: "پروژه‌های حرفه‌ای",
        projects_description: "با تجربه عملی گسترده در هوش مصنوعی، طیف وسیعی از پروژه‌های پیشرفته را در حوزه‌های مختلف توسعه داده‌ام:",
        projects_category1_title: "پروژه‌های بینایی کامپیوتر",
        projects_category1_item1: "OCR ارقام فارسی با مجموعه داده‌های سفارشی",
        projects_category2_title: "پردازش زبان طبیعی و مدل‌های زبانی",
        projects_category2_item1: "بازیابی-افزوده برای اسناد فارسی",
        projects_category3_title: "علم داده و تحلیل پیش‌بینانه",
        projects_category3_item1: "پیش‌بینی بازپرداخت وام با استفاده از داده‌های مالی",
        projects_category4_title: "عامل‌های هوشمند و زیرساخت",
        projects_category4_item1: "سرورهای پروتکل چت چندعاملی (MCP)",
        
        // Skills section
        skills_title: "مهارت‌ها و تخصص‌ها",
        skills_programming_title: "برنامه‌نویسی",
        skills_programming_text: "مسلط به پایتون و کتابخانه‌های تخصصی هوش مصنوعی",
        skills_deep_learning_title: "یادگیری عمیق",
        skills_deep_learning_text: "تنسورفلو، پای‌تورچ، شبکه‌های عصبی، CNN، YOLO",
        skills_agentic_title: "عامل‌های هوشمند",
        skills_agentic_text: "سیستم‌های چندعاملی، هوش مصنوعی عاملی، سیستم‌های خودمختار",
        skills_vision_title: "بینایی کامپیوتر",
        skills_vision_text: "تشخیص اشیاء، OCR، پردازش تصویر، حل کپچا",
        skills_nlp_title: "پردازش زبان طبیعی و LLM",
        skills_nlp_text: "بازیابی-افزوده، مدل‌های زبانی، ترنسفورمرها",
        skills_data_science_title: "علم داده",
        skills_data_science_text: "ایجاد مجموعه داده، پردازش داده، مدل‌سازی پیش‌بینانه",
        skills_optimization_title: "بهینه‌سازی مدل",
        skills_optimization_text: "کوانتیزه‌سازی مدل، هرس کردن، و استقرار کارآمد",
        skills_system_design_title: "طراحی سیستم هوش مصنوعی",
        skills_system_design_text: "معماری و پیاده‌سازی سیستم‌های هوش مصنوعی سرتاسری",
        
        // Content section
        content_title: "تولید محتوا",
        content_description: "من محتوای پیشرفته و بسیار کاربردی با تمرکز بر پیاده‌سازی‌های واقعی هوش مصنوعی تولید می‌کنم. هدف من آموزش موضوعات پیشرفته و اغلب نادیده گرفته شده در جامعه فارسی‌زبان هوش مصنوعی از طریق ویدیوهای آموزشی و آزمایشی است.",
        content_youtube_title: "کانال یوتیوب",
        content_youtube_text: "آموزش‌ها و دموهایی درباره مدل‌های زبانی بزرگ (LLM)، اتصال LLM‌ها به بلندر و وب، ساخت عامل‌های هوشمند چندوجهی، کاوش در زیرساخت‌های پیچیده هوش مصنوعی و اجرای آزمایش‌های خلاقانه هوش مصنوعی.",
        content_youtube_link: "@Tahabakhtariai",
        content_telegram_title: "کانال تلگرام",
        content_telegram_text: "اشتراک‌گذاری اخبار هوش مصنوعی، نکات و محتوای آموزشی. آخرین به‌روزرسانی‌ها درباره پروژه‌ها و اکتشافات من در دنیای فناوری هوش مصنوعی را دریافت کنید.",
        content_telegram_link: "@Ai_by_Taha",
        content_github_title: "گیت‌هاب",
        content_github_text: "پروژه‌های متن‌باز هوش مصنوعی من را کاوش کنید. تمام مخازن کد برای مطالعه، استفاده و مشارکت شما در پیشرفت فناوری هوش مصنوعی در دسترس هستند.",
        content_github_link: "@Tahabakhtari",
        
        // Contact section
        contact_title: "در تماس باشید",
        contact_text: "علاقه‌مند به همکاری در پروژه‌های هوش مصنوعی هستید یا سوالی درباره کار من دارید؟ از طریق هر یک از پلتفرم‌های اجتماعی من یا مستقیماً از طریق ایمیل با من تماس بگیرید.",
        contact_email: "tahabakhtari88@gmail.com",
        
        // Footer
        footer_text: ".© ۲۰۲۵ طاها باختری. تمام حقوق محفوظ است",

        // Certificates section (Added)
        certificates_title: "گواهینامه‌ها",
        certificates_description: "گواهینامه ها و افتخارات من در حوزه هوش مصنوعی و برنامه نویسی",
        cert1_title: "مقام دوم کشوری AIOcup",
        cert1_desc: "مسابقات کشوری خلاقیت و نوآوری ایکاپ در حوزه برنامه نویسی و هوش مصنوعی - چالش A5",
        cert2_title: "ارزیابی مدل‌های زبانی بزرگ",
        cert2_issuer: "از: EVIDENTLY AI",
        cert2_desc: "ارزیابی مدل‌های LLM برای تیم‌های محصول هوش مصنوعی", // Adjusted Farsi description
        cert_view: "مشاهده گواهینامه", // Common key for view links
        cert3_title: "اصول ایجنت های هوش مصنوعی",
        cert3_issuer: "از: Hugging Face",
        cert3_desc: "واحد ۱: مبانی ایجنت‌ها در دوره ایجنت‌های Hugging Face", // Adjusted Farsi description
        cert4_title: "حل مسئله (متوسط)",
        cert4_issuer: "از: HackerRank",
        cert4_desc: "حل مسئله (متوسط)",
        cert4_id_label: "شناسه: 738EB5A5C8DE"
    }
};

// Default language - Load from localStorage if available, otherwise default to 'en'
let currentLang = localStorage.getItem('language') || 'en';

// Function to update all text content based on selected language
function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (languages[lang][key]) {
            // Use innerHTML instead of textContent to allow for potential HTML entities in future translations
            element.innerHTML = languages[lang][key]; 
        }
    });

    // Call specific update functions AFTER the general update
    // This allows overriding or handling specific cases if needed
    // (Though currently, data-lang-key handles everything)
    updateNavigation();
    updateHeroSection();
    updateAboutSection();
    updateAIAgentsSection();
    updateGallerySection();
    updateProjectsSection();
    updateSkillsSection();
    // updateCertificatesSection(); // Not needed as data-lang-key handles it
    updateContentSection();
    updateContactSection();
    updateFooter();

    // Update language switcher button text explicitly (as it doesn't have data-lang-key)
    const langButton = document.querySelector('.language-switcher');
    if (langButton) { // Check if the button exists
        langButton.textContent = languages[lang].nav_language;
    }

    // Toggle RTL class
    if (lang === 'fa') {
        document.body.classList.add('rtl-styles');
    } else {
        document.body.classList.remove('rtl-styles');
    }

    // Persist language choice
    localStorage.setItem('language', lang);
}

// Function to toggle language
function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'fa' : 'en';
    updateLanguage(newLang);
}

// Update navigation
function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks[0].textContent = languages[currentLang].nav_about;
    navLinks[1].textContent = languages[currentLang].nav_ai_agents;
    navLinks[2].textContent = languages[currentLang].nav_gallery;
    navLinks[3].textContent = languages[currentLang].nav_skills;
    navLinks[4].textContent = languages[currentLang].nav_content;
    navLinks[5].textContent = languages[currentLang].nav_contact;
    
    // Update language switcher if it exists
    const langSwitcher = document.querySelector('.language-switcher');
    if (langSwitcher) {
        langSwitcher.textContent = languages[currentLang].nav_language;
    }
}

// Update hero section
function updateHeroSection() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const h1 = heroSection.querySelector('h1');
        const h2 = heroSection.querySelector('h2');
        const p = heroSection.querySelector('p');
        const buttons = heroSection.querySelectorAll('.btn');
        
        if(h1) h1.textContent = languages[currentLang].hero_title;
        if(h2) h2.textContent = languages[currentLang].hero_subtitle;
        if(p) p.textContent = languages[currentLang].hero_description;
        if(buttons.length > 0) buttons[0].textContent = languages[currentLang].hero_btn_agents;
        if(buttons.length > 1) buttons[1].textContent = languages[currentLang].hero_btn_gallery;
    }
}

// Update about section
function updateAboutSection() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const title = aboutSection.querySelector('.section-title');
        const aboutTextDiv = aboutSection.querySelector('.about-text');
        const highlightItems = aboutSection.querySelectorAll('.highlight-item');
        
        if(title) title.textContent = languages[currentLang].about_title;
        if(aboutTextDiv) {
             const paragraphs = aboutTextDiv.querySelectorAll('p');
             const h3 = aboutTextDiv.querySelector('h3');
             if(paragraphs.length > 0) paragraphs[0].textContent = languages[currentLang].about_text;
             if(h3) h3.textContent = languages[currentLang].about_education_title;
             if(paragraphs.length > 1) paragraphs[1].textContent = languages[currentLang].about_education_text;
        }
       
        if(highlightItems.length > 0) {
            highlightItems[0].querySelector('.highlight-number').textContent = languages[currentLang].about_highlight1_num;
            highlightItems[0].querySelector('.highlight-text').textContent = languages[currentLang].about_highlight1_text;
        }
         if(highlightItems.length > 1) {
            highlightItems[1].querySelector('.highlight-number').textContent = languages[currentLang].about_highlight2_num;
            highlightItems[1].querySelector('.highlight-text').textContent = languages[currentLang].about_highlight2_text;
        }
         if(highlightItems.length > 2) {
            highlightItems[2].querySelector('.highlight-number').textContent = languages[currentLang].about_highlight3_num;
            highlightItems[2].querySelector('.highlight-text').textContent = languages[currentLang].about_highlight3_text;
        }
    }
}

// Update AI Agents section
function updateAIAgentsSection() {
    const agentsSection = document.getElementById('ai-agents');
    if (agentsSection) {
        const title = agentsSection.querySelector('.section-title');
        const description = agentsSection.querySelector('.section-description');
        const agentCards = agentsSection.querySelectorAll('.agent-card');
        
        if(title) title.textContent = languages[currentLang].ai_agents_title;
        if(description) description.textContent = languages[currentLang].ai_agents_description;
        
        agentCards.forEach((card, index) => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const link = card.querySelector('.agent-link');
            const linkText = card.querySelector('.agent-link').childNodes[2];
            
            const titleKey = `agent${index + 1}_title`;
            const descKey = `agent${index + 1}_desc`;
            const linkKey = `agent${index + 1}_link`;
            
            if (h3 && languages[currentLang][titleKey]) h3.textContent = languages[currentLang][titleKey];
            if (p && languages[currentLang][descKey]) p.textContent = languages[currentLang][descKey];
            if (link && linkText && languages[currentLang][linkKey]) {
                 const iconHTML = link.querySelector('i').outerHTML;
                 link.innerHTML = iconHTML + ' ' + languages[currentLang][linkKey];
            }
        });
    }
}

// Update Gallery section
function updateGallerySection() {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
        const title = gallerySection.querySelector('.section-title');
        const description = gallerySection.querySelector('.section-description');
        const filterButtons = gallerySection.querySelectorAll('.filter-btn');
        const galleryItems = gallerySection.querySelectorAll('.gallery-item');
        
        if (title) title.textContent = languages[currentLang].gallery_title;
        if (description) description.textContent = languages[currentLang].gallery_description;
        
        if (filterButtons.length > 0) filterButtons[0].textContent = languages[currentLang].gallery_filter_all;
        if (filterButtons.length > 1) filterButtons[1].textContent = languages[currentLang].gallery_filter_vision;
        if (filterButtons.length > 2) filterButtons[2].textContent = languages[currentLang].gallery_filter_nlp;
        if (filterButtons.length > 3) filterButtons[3].textContent = languages[currentLang].gallery_filter_agent;
        if (filterButtons.length > 4) filterButtons[4].textContent = languages[currentLang].gallery_filter_data;
        
        galleryItems.forEach((item, index) => {
             const h3 = item.querySelector('h3');
             const p = item.querySelector('p');
             const tags = item.querySelectorAll('.gallery-tags span');
             const link = item.querySelector('.gallery-link');
             
             const titleKey = `gallery_item${index + 1}_title`;
             const descKey = `gallery_item${index + 1}_desc`;
             const linkKey = `gallery_item${index + 1}_link`;
             const tag1Key = `gallery_item${index + 1}_tag1`;
             const tag2Key = `gallery_item${index + 1}_tag2`;
             const tag3Key = `gallery_item${index + 1}_tag3`;
             
             if (h3 && languages[currentLang][titleKey]) h3.textContent = languages[currentLang][titleKey];
             if (p && languages[currentLang][descKey]) p.textContent = languages[currentLang][descKey];
             if (link && languages[currentLang][linkKey]) link.textContent = languages[currentLang][linkKey];
             
             if (tags.length > 0 && languages[currentLang][tag1Key]) tags[0].textContent = languages[currentLang][tag1Key];
             if (tags.length > 1 && languages[currentLang][tag2Key]) tags[1].textContent = languages[currentLang][tag2Key];
             if (tags.length > 2 && languages[currentLang][tag3Key]) tags[2].textContent = languages[currentLang][tag3Key];
        });
    }
}

// Update projects section
function updateProjectsSection() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const title = projectsSection.querySelector('.section-title');
        const description = projectsSection.querySelector('.section-description');
        const categories = projectsSection.querySelectorAll('.project-category');
        
        if(title) title.textContent = languages[currentLang].projects_title;
        if(description) description.textContent = languages[currentLang].projects_description;
        
        categories.forEach((category, catIndex) => {
            const h3 = category.querySelector('h3');
            const listItems = category.querySelectorAll('li');
            const titleKey = `projects_category${catIndex + 1}_title`;
            
            if(h3 && languages[currentLang][titleKey]) h3.textContent = languages[currentLang][titleKey];
            
            listItems.forEach((item, itemIndex) => {
                 const itemKey = `projects_category${catIndex + 1}_item${itemIndex + 1}`;
                 if(languages[currentLang][itemKey]) item.textContent = languages[currentLang][itemKey];
            });
        });
    }
}

// Update skills section
function updateSkillsSection() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const title = skillsSection.querySelector('.section-title');
        const skillCards = skillsSection.querySelectorAll('.skill-card');
        
        if(title) title.textContent = languages[currentLang].skills_title;
        
        const skillKeys = [
            { title: 'skills_programming_title', text: 'skills_programming_text' },
            { title: 'skills_deep_learning_title', text: 'skills_deep_learning_text' },
            { title: 'skills_agentic_title', text: 'skills_agentic_text' },
            { title: 'skills_vision_title', text: 'skills_vision_text' },
            { title: 'skills_nlp_title', text: 'skills_nlp_text' },
            { title: 'skills_data_science_title', text: 'skills_data_science_text' },
            { title: 'skills_optimization_title', text: 'skills_optimization_text' },
            { title: 'skills_system_design_title', text: 'skills_system_design_text' },
        ];
        
        skillCards.forEach((card, index) => {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const keys = skillKeys[index];
            
            if (keys) {
                 if (h3 && languages[currentLang][keys.title]) h3.textContent = languages[currentLang][keys.title];
                 if (p && languages[currentLang][keys.text]) p.textContent = languages[currentLang][keys.text];
            }
        });
    }
}

// Update content section
function updateContentSection() {
    const contentSection = document.getElementById('content');
    if (contentSection) {
        const title = contentSection.querySelector('.section-title');
        const description = contentSection.querySelector('.section-description');
        const platforms = contentSection.querySelectorAll('.platform-card');
        
        if(title) title.textContent = languages[currentLang].content_title;
        if(description) description.textContent = languages[currentLang].content_description;
        
        if(platforms.length > 0) {
             platforms[0].querySelector('h3').textContent = languages[currentLang].content_youtube_title;
             platforms[0].querySelector('p').textContent = languages[currentLang].content_youtube_text;
             platforms[0].querySelector('a').textContent = languages[currentLang].content_youtube_link;
        }
        if(platforms.length > 1) {
             platforms[1].querySelector('h3').textContent = languages[currentLang].content_telegram_title;
             platforms[1].querySelector('p').textContent = languages[currentLang].content_telegram_text;
             platforms[1].querySelector('a').textContent = languages[currentLang].content_telegram_link;
        }
         if(platforms.length > 2) {
             platforms[2].querySelector('h3').textContent = languages[currentLang].content_github_title;
             platforms[2].querySelector('p').textContent = languages[currentLang].content_github_text;
             platforms[2].querySelector('a').textContent = languages[currentLang].content_github_link;
        }
    }
}

// Update contact section
function updateContactSection() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const title = contactSection.querySelector('.section-title');
        const p = contactSection.querySelector('.contact-info p');
        const emailLink = contactSection.querySelector('.email-link');
        
        if(title) title.textContent = languages[currentLang].contact_title;
        if(p) p.textContent = languages[currentLang].contact_text;
        if(emailLink && languages[currentLang].contact_email) {
            const iconHTML = emailLink.querySelector('i').outerHTML;
            emailLink.innerHTML = iconHTML + ' ' + languages[currentLang].contact_email;
            emailLink.href = 'mailto:' + languages[currentLang].contact_email;
        }
    }
}

// Update footer
function updateFooter() {
    const footer = document.querySelector('footer p');
    if (footer) {
        footer.textContent = languages[currentLang].footer_text;
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const langButton = document.querySelector('.language-switcher');
    
    if (langButton) { // Check if button exists before adding listener
        langButton.addEventListener('click', toggleLanguage);
    }
    
    // Set initial language based on localStorage or default to 'en'
    const initialLang = localStorage.getItem('language') || 'en'; 
    updateLanguage(initialLang);
});
