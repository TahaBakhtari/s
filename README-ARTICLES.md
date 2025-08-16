# Article System Implementation

## Overview
A complete article management system has been implemented for the Taha Bakhtari website with RTL Persian support and the Digi-Rastin-Plus font.

## Features Implemented

### 1. **Article Pages**
- **File**: `article.html`
- **URLs**: `http://xxx.com/article.html?article=article_title`
- White background with minimal, clean design
- Full RTL (Right-to-Left) support for Persian text
- Dynamic content loading from article management system
- Responsive design for mobile devices

### 2. **Article Editor**
- **File**: `article-editor.html`
- Complete WYSIWYG-style editor with RTL Persian input
- Markdown-like formatting toolbar
- Real-time preview functionality
- Auto-save functionality
- Tag management system
- Article metadata management (title, slug, author, date)

### 3. **Article Management System**
- **File**: `articles.js` - Core article management functionality
- **File**: `article-list.html` - Article management interface
- Create, read, update, delete (CRUD) operations
- Article status management (draft/published)
- Search and filter functionality
- Local storage persistence
- Import/export capabilities for backup

### 4. **Font Integration**
- **File**: `digi-rastin-font.css`
- Integration of Digi-Rastin-Plus font family
- Three font variations:
  - Rectangle (default)
  - Circle (alternative)
  - Line (alternative)
- Proper RTL text rendering and alignment

### 5. **Dynamic Routing**
- Support for clean URLs: `http://xxx.com/article_title`
- Query parameter support: `http://xxx.com/article.html?article=slug`
- Automatic article loading and error handling
- SEO-friendly URL structure

## File Structure

```
/
├── article.html              # Article display page
├── article-editor.html       # Article editor interface  
├── article-list.html         # Article management dashboard
├── articles.js              # Article management system
├── digi-rastin-font.css     # Digi-Rastin-Plus font integration
├── Digi-Rastin-Plus/        # Font files directory
│   ├── Digi Rastin Plus Rectangle.ttf
│   ├── Digi Rastin Plus Circle.ttf
│   └── Digi Rastin Plus Line.ttf
└── README-ARTICLES.md       # This documentation
```

## Usage

### Creating a New Article
1. Navigate to `article-editor.html`
2. Enter title, content, and tags
3. Use the formatting toolbar for rich text
4. Click "ذخیره" (Save) to save as draft
5. Use "انتشار" (Publish) to make it live

### Managing Articles
1. Navigate to `article-list.html`
2. View all articles with status indicators
3. Search and filter articles
4. Edit, publish, or delete articles
5. Export/import for backup

### Viewing Articles
1. Access via `article.html?article=slug`
2. Or implement server-side routing for clean URLs
3. Articles display with proper RTL formatting
4. Full responsive design support

## Sample Articles Included

The system comes with three sample articles:
1. **intro-to-ai**: Introduction to AI (مقدمه‌ای بر هوش مصنوعی)
2. **ai-agents-guide**: AI Agents Guide (راهنمای عامل‌های هوشمند)
3. **machine-learning-basics**: ML Basics (مبانی یادگیری ماشین)

## Technical Features

- **RTL Support**: Complete right-to-left text support
- **Responsive Design**: Mobile-first responsive layout
- **Font Integration**: Custom Persian font (Digi-Rastin-Plus)
- **Data Persistence**: Local storage with export/import
- **Search & Filter**: Full-text search and status filtering
- **Auto-save**: Automatic saving during editing
- **Preview Mode**: Real-time content preview
- **Status Management**: Draft/Published status system

## Browser Compatibility

- Modern browsers with ES6+ support
- Mobile Safari and Chrome
- Firefox, Edge, and other major browsers
- RTL text rendering support required

## Future Enhancements

For production use, consider:
- Backend API integration
- Database storage
- User authentication
- Server-side rendering
- SEO optimization
- Comment system
- Social sharing

## Persian Language Support

The system is fully localized for Persian language with:
- RTL text alignment
- Persian date formatting
- Localized UI elements
- Proper font rendering
- Persian number support
