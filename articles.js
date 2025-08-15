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
        
        // Update meta tags for social media previews
        this.updateMetaTags(article, slug);
        
        // Display article content
        this.displayArticle(article);
    }

    // Update meta tags for social media previews
    updateMetaTags(article, slug) {
        // Generate article URL
        const articleURL = `${window.location.protocol}//${window.location.host}/${this.generateArticleURL(slug)}`;
        
        // Generate description from content (first 160 characters, remove HTML)
        let description = article.content.replace(/<[^>]*>/g, '').substring(0, 160);
        if (description.length === 160) {
            description += '...';
        }
        
        // Determine the best image to use for social media preview
        let socialImage = 'https://tahabakhtari.com/me.jpg'; // Default image
        if (article.socialImage) {
            socialImage = article.socialImage;
        } else if (article.featuredImage) {
            socialImage = article.featuredImage;
        }
        
        // Update Open Graph meta tags
        this.updateMetaTag('og-title', 'content', article.title + ' - طاها باختری');
        this.updateMetaTag('og-description', 'content', description);
        this.updateMetaTag('og-url', 'content', articleURL);
        this.updateMetaTag('og-image', 'content', socialImage);
        this.updateMetaTag('og-image-alt', 'content', article.title);
        this.updateMetaTag('og-author', 'content', article.author || 'Taha Bakhtari');
        this.updateMetaTag('og-published-time', 'content', article.publishDate || article.date);
        this.updateMetaTag('og-modified-time', 'content', article.lastModified || article.publishDate || article.date);
        this.updateMetaTag('og-tags', 'content', article.tags ? article.tags.join(', ') : '');
        
        // Update Twitter Card meta tags
        this.updateMetaTag('twitter-title', 'content', article.title + ' - طاها باختری');
        this.updateMetaTag('twitter-description', 'content', description);
        this.updateMetaTag('twitter-image', 'content', socialImage);
        this.updateMetaTag('twitter-image-alt', 'content', article.title);
        
        // Update additional meta tags
        this.updateMetaTag('meta-description', 'content', description);
        this.updateMetaTag('meta-keywords', 'content', article.tags ? article.tags.join(', ') + ', هوش مصنوعی, طاها باختری' : 'هوش مصنوعی, طاها باختری');
        
        // Update canonical URL
        this.updateLinkTag('canonical-url', 'href', articleURL);
    }
    
    // Helper method to update meta tag content
    updateMetaTag(id, attribute, value) {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute(attribute, value);
        }
    }
    
    // Helper method to update link tag href
    updateLinkTag(id, attribute, value) {
        const element = document.getElementById(id);
        if (element) {
            element.setAttribute(attribute, value);
        }
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
}

// Initialize article manager
const articleManager = new ArticleManager();

// Make it globally available
window.articleManager = articleManager;
