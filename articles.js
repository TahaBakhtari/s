/**
 * Article Management System
 * Handles article routing, storage, and management
 */

class ArticleManager {
    constructor() {
        this.articles = this.loadArticles();
        this.init();
    }

    // Initialize the article manager
    init() {
        this.setupRouting();
        this.loadSampleArticles();
    }

    // Load articles from localStorage
    loadArticles() {
        const stored = localStorage.getItem('articles');
        return stored ? JSON.parse(stored) : {};
    }

    // Save articles to localStorage
    saveArticles() {
        localStorage.setItem('articles', JSON.stringify(this.articles));
    }

    // Load sample articles if none exist
    loadSampleArticles() {
        // Start with an empty article system - no sample articles
        if (Object.keys(this.articles).length === 0) {
            this.articles = {};
            this.saveArticles();
        }
    }

    // Setup routing for articles
    setupRouting() {
        // Check if current page is an article page
        const currentPath = window.location.pathname;
        const urlParams = new URLSearchParams(window.location.search);
        
        // Handle article.html?article=slug format
        if (currentPath.includes('article.html')) {
            const articleSlug = urlParams.get('article');
            if (articleSlug) {
                this.loadArticle(articleSlug);
            }
        }
        
        // Handle /article_title format (requires server-side routing)
        if (currentPath.startsWith('/') && currentPath.length > 1 && !currentPath.includes('.')) {
            const slug = currentPath.substring(1);
            if (this.articles[slug]) {
                this.loadArticle(slug);
            }
        }
    }

    // Load and display article
    loadArticle(slug) {
        const article = this.articles[slug];
        if (!article) {
            this.showArticleNotFound();
            return;
        }

        // Update page title
        document.title = article.title + ' - طاها باختری';
        
        // Display article content
        this.displayArticle(article);
    }

    // Display article content
    displayArticle(article) {
        const contentWrapper = document.getElementById('article-content-wrapper');
        if (!contentWrapper) return;

        // Render markdown content to HTML
        let renderedContent = article.content;
        if (window.markdownRenderer && article.isMarkdown !== false) {
            renderedContent = window.markdownRenderer.render(article.content);
        }

        contentWrapper.innerHTML = `
            <div class="article-header">
                <h1 class="article-title">${article.title}</h1>
                <div class="article-meta">
                    <div class="article-author">
                        <i class="fas fa-user"></i>
                        <span>${article.author}</span>
                    </div>
                    <div class="article-date">
                        <i class="fas fa-calendar"></i>
                        <span>${article.date}</span>
                    </div>
                </div>
            </div>
            
            <div class="article-content">
                ${renderedContent}
            </div>
        `;

        // Display tags
        const tagsContainer = document.getElementById('article-tags');
        if (tagsContainer && article.tags && article.tags.length > 0) {
            tagsContainer.innerHTML = article.tags.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }
    }

    // Show article not found error
    showArticleNotFound() {
        const contentWrapper = document.getElementById('article-content-wrapper');
        if (!contentWrapper) return;

        contentWrapper.innerHTML = `
            <div class="error">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>مقاله یافت نشد</h2>
                <p>مقاله مورد نظر شما یافت نشد. لطفا آدرس را بررسی کنید.</p>
                <a href="index.html" class="back-home">
                    <i class="fas fa-arrow-right"></i>
                    بازگشت به صفحه اصلی
                </a>
            </div>
        `;
    }

    // Create new article
    createArticle(articleData) {
        const slug = this.generateSlug(articleData.title);
        const article = {
            ...articleData,
            slug,
            publishDate: new Date().toISOString(),
            status: 'draft',
            isMarkdown: true // Mark new articles as markdown
        };
        
        this.articles[slug] = article;
        this.saveArticles();
        
        // Generate HTML file for the article
        this.generateArticleHTMLFile(slug, article);
        
        return slug;
    }

    // Update existing article
    updateArticle(slug, articleData) {
        if (this.articles[slug]) {
            this.articles[slug] = {
                ...this.articles[slug],
                ...articleData,
                lastModified: new Date().toISOString()
            };
            this.saveArticles();
            
            // Regenerate HTML file for the updated article
            this.generateArticleHTMLFile(slug, this.articles[slug]);
            
            return true;
        }
        return false;
    }

    // Delete article
    deleteArticle(slug) {
        if (this.articles[slug]) {
            delete this.articles[slug];
            this.saveArticles();
            return true;
        }
        return false;
    }

    // Publish article
    publishArticle(slug) {
        if (this.articles[slug]) {
            this.articles[slug].status = 'published';
            this.articles[slug].publishDate = new Date().toISOString();
            this.saveArticles();
            
            // Regenerate HTML file when publishing
            this.generateArticleHTMLFile(slug, this.articles[slug]);
            
            return true;
        }
        return false;
    }

    // Get article by slug
    getArticle(slug) {
        return this.articles[slug] || null;
    }

    // Get all articles
    getAllArticles() {
        return this.articles;
    }

    // Get published articles
    getPublishedArticles() {
        return Object.values(this.articles).filter(article => article.status === 'published');
    }

    // Generate HTML file for article
    async generateArticleHTMLFile(slug, article) {
        try {
            // Load the HTML template
            const template = await this.loadTemplate();
            
            // Render content (convert markdown to HTML if needed)
            let renderedContent = article.content;
            if (window.markdownRenderer && article.isMarkdown !== false) {
                renderedContent = window.markdownRenderer.render(article.content);
            }
            
            // Generate tags section
            let tagsSection = '';
            if (article.tags && article.tags.length > 0) {
                tagsSection = `
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                `;
            }
            
            // Replace template placeholders
            const htmlContent = template
                .replace(/\{\{TITLE\}\}/g, article.title || 'بدون عنوان')
                .replace(/\{\{DESCRIPTION\}\}/g, this.generateDescription(article.content))
                .replace(/\{\{KEYWORDS\}\}/g, article.tags ? article.tags.join(', ') : '')
                .replace(/\{\{AUTHOR\}\}/g, article.author || 'طاها باختری')
                .replace(/\{\{DATE\}\}/g, article.date || new Date().toLocaleDateString('fa-IR'))
                .replace(/\{\{CONTENT\}\}/g, renderedContent)
                .replace(/\{\{TAGS_SECTION\}\}/g, tagsSection);
            
            // Save the HTML file
            this.saveHTMLFile(slug, htmlContent);
            
        } catch (error) {
            console.error('Error generating HTML file:', error);
        }
    }
    
    // Load HTML template
    async loadTemplate() {
        try {
            const response = await fetch('article-template.html');
            if (!response.ok) {
                throw new Error('Template not found');
            }
            return await response.text();
        } catch (error) {
            console.error('Error loading template:', error);
            // Return a basic template if the file is not found
            return this.getBasicTemplate();
        }
    }
    
    // Generate description from content
    generateDescription(content) {
        if (!content) return '';
        
        // Remove markdown syntax and get first 150 characters
        const plainText = content
            .replace(/[#*_`\[\]()]/g, '')
            .replace(/\n/g, ' ')
            .trim();
            
        return plainText.length > 150 
            ? plainText.substring(0, 150) + '...'
            : plainText;
    }
    
    // Save HTML file (download for manual placement in articles folder)
    saveHTMLFile(slug, htmlContent) {
        // Store HTML content in localStorage for potential re-download
        const htmlArticles = JSON.parse(localStorage.getItem('htmlArticles') || '{}');
        htmlArticles[slug] = {
            filename: `${slug}.html`,
            content: htmlContent,
            lastGenerated: new Date().toISOString()
        };
        localStorage.setItem('htmlArticles', JSON.stringify(htmlArticles));
        
        // Download the HTML file for manual placement in articles folder
        this.downloadHTMLFile(slug, htmlContent);
        
        // Show instructions to user
        this.showHTMLFileInstructions(slug);
    }
    
    // Download HTML file
    downloadHTMLFile(slug, htmlContent) {
        const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `${slug}.html`;
        a.style.display = 'none';
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        
        // Show notification with instructions
        this.showNotification(`فایل HTML برای مقاله "${slug}" ایجاد و دانلود شد!`, 'success');
    }
    
    // Basic template fallback
    getBasicTemplate() {
        return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} - طاها باختری</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @font-face {
            font-family: 'DigiRastinPlus';
            src: url('../Digi-Rastin-Plus/Digi Rastin Plus Rectangle.ttf') format('truetype');
        }
        html { direction: rtl; }
        body { 
            font-family: 'DigiRastinPlus', 'Tahoma', Arial, sans-serif; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px; 
            direction: rtl; 
            text-align: right;
            background: #ffffff;
            color: #333;
            line-height: 1.8;
        }
        * { direction: rtl; }
        .article-title { 
            font-size: 2.5rem; 
            color: #2c3e50; 
            text-align: center; 
            margin-bottom: 20px; 
            font-weight: 700;
        }
        .article-meta { 
            text-align: center; 
            color: #666; 
            margin-bottom: 40px; 
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;
        }
        .article-content { 
            line-height: 1.8; 
            font-size: 1.1rem; 
            text-align: right;
        }
        .article-content h1, .article-content h2, .article-content h3 {
            color: #2c3e50;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        .article-content p {
            margin-bottom: 1.5rem;
        }
        .article-tags {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #f0f0f0;
        }
        .tag {
            display: inline-block;
            background: #3498db;
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            margin: 5px 5px 5px 0;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #f0f0f0; padding-bottom: 30px;">
        <h1 class="article-title">{{TITLE}}</h1>
        <div class="article-meta">
            <div><i class="fas fa-user"></i> {{AUTHOR}}</div>
            <div><i class="fas fa-calendar"></i> {{DATE}}</div>
        </div>
    </div>
    <div class="article-content">{{CONTENT}}</div>
    {{TAGS_SECTION}}
    <a href="../index.html" style="display: inline-flex; align-items: center; gap: 8px; margin-top: 30px; padding: 12px 20px; background: #3498db; color: white; text-decoration: none; border-radius: 25px; font-weight: 500;"><i class="fas fa-arrow-right"></i> بازگشت به صفحه اصلی</a>
</body>
</html>`;
    }
    
    // Show HTML file instructions
    showHTMLFileInstructions(slug) {
        setTimeout(() => {
            const instructions = `
📁 فایل HTML دانلود شد!

✅ مراحل بعدی:
1. فایل ${slug}.html را از Downloads پیدا کنید
2. آن را در پوشه "articles" کپی کنید  
3. حالا می‌توانید از آدرس زیر دسترسی داشته باشید:
   site.com/articles/${slug}.html

💡 نکته: فایل برای استفاده مستقل آماده است
`;
            
            // Show in a modal-like notification
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0,0,0,0.7);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'DigiRastinPlus', 'Tahoma', Arial, sans-serif;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    max-width: 500px;
                    text-align: center;
                    direction: rtl;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                ">
                    <h3 style="color: #2c3e50; margin-bottom: 20px;">فایل HTML ایجاد شد!</h3>
                    <div style="text-align: right; line-height: 1.8; color: #555; white-space: pre-line; margin-bottom: 20px;">
                        ${instructions}
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: #3498db;
                        color: white;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        cursor: pointer;
                        font-family: inherit;
                    ">متوجه شدم</button>
                </div>
            `;
            
            document.body.appendChild(modal);
        }, 500);
    }

    // Show notification
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#e74c3c' : '#3498db'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 9999;
            font-family: 'Digi-Rastin-Plus-Rectangle', Arial, sans-serif;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
    }

    // Generate URL slug from title
    generateSlug(title) {
        return title
            .toLowerCase()
            .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, '') // Allow Persian and English characters
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
    }

    // Search articles
    searchArticles(query) {
        const lowerQuery = query.toLowerCase();
        return Object.values(this.articles).filter(article => 
            article.title.toLowerCase().includes(lowerQuery) ||
            article.content.toLowerCase().includes(lowerQuery) ||
            article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
    }

    // Get articles by tag
    getArticlesByTag(tag) {
        return Object.values(this.articles).filter(article => 
            article.tags.includes(tag)
        );
    }

    // Generate article URL
    generateArticleURL(slug) {
        // For client-side routing
        return `article.html?article=${slug}`;
        
        // For server-side routing (uncomment when server-side routing is implemented)
        // return `/${slug}`;
    }

    // Export articles (for backup)
    exportArticles() {
        const data = JSON.stringify(this.articles, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = `articles-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Import articles (from backup)
    importArticles(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedArticles = JSON.parse(e.target.result);
                    this.articles = { ...this.articles, ...importedArticles };
                    this.saveArticles();
                    resolve(Object.keys(importedArticles).length);
                } catch (error) {
                    reject(error);
                }
            };
            reader.onerror = () => reject(new Error('خطا در خواندن فایل'));
            reader.readAsText(file);
        });
    }

    // Generate HTML files for all articles
    async generateAllHTMLFiles() {
        try {
            const articles = Object.entries(this.articles);
            let generated = 0;
            
            for (const [slug, article] of articles) {
                await this.generateArticleHTMLFile(slug, article);
                generated++;
            }
            
            this.showNotification(`${generated} فایل HTML ایجاد شد`, 'success');
            return generated;
        } catch (error) {
            console.error('Error generating all HTML files:', error);
            this.showNotification('خطا در ایجاد فایل‌های HTML', 'error');
            return 0;
        }
    }

    // Get stored HTML files
    getStoredHTMLFiles() {
        return JSON.parse(localStorage.getItem('htmlArticles') || '{}');
    }

    // Export all HTML files as ZIP (placeholder for future implementation)
    exportAllHTMLFiles() {
        const htmlFiles = this.getStoredHTMLFiles();
        
        if (Object.keys(htmlFiles).length === 0) {
            this.showNotification('هیچ فایل HTML یافت نشد. ابتدا فایل‌ها را ایجاد کنید.', 'error');
            return;
        }

        // For now, just show the files that would be included
        const fileList = Object.values(htmlFiles).map(file => file.filename).join('\n');
        alert(`فایل‌های موجود برای دانلود:\n\n${fileList}\n\nهر فایل به صورت جداگانه دانلود خواهد شد.`);
        
        // Download each file individually
        Object.entries(htmlFiles).forEach(([slug, fileData]) => {
            setTimeout(() => {
                const blob = new Blob([fileData.content], { type: 'text/html;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = fileData.filename;
                a.style.display = 'none';
                
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                URL.revokeObjectURL(url);
            }, 500 * Object.keys(htmlFiles).indexOf(slug));
        });
    }
}

// Initialize article manager
const articleManager = new ArticleManager();

// Make it globally available
window.articleManager = articleManager;
