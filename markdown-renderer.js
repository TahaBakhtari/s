/**
 * Markdown Renderer for Article System
 * A lightweight markdown parser and renderer
 */

class MarkdownRenderer {
    constructor() {
        this.rules = this.getMarkdownRules();
    }

    // Get markdown parsing rules
    getMarkdownRules() {
        return [
            // Headers (must come before other rules)
            { pattern: /^### (.*$)/gm, replacement: '<h3>$1</h3>' },
            { pattern: /^## (.*$)/gm, replacement: '<h2>$1</h2>' },
            { pattern: /^# (.*$)/gm, replacement: '<h1>$1</h1>' },
            
            // Code blocks (must come before inline code)
            { pattern: /```([\s\S]*?)```/g, replacement: '<pre><code>$1</code></pre>' },
            
            // Inline code
            { pattern: /`([^`]+)`/g, replacement: '<code>$1</code>' },
            
            // Bold and italic (must come in this order)
            { pattern: /\*\*\*(.*?)\*\*\*/g, replacement: '<strong><em>$1</em></strong>' },
            { pattern: /\*\*(.*?)\*\*/g, replacement: '<strong>$1</strong>' },
            { pattern: /\*(.*?)\*/g, replacement: '<em>$1</em>' },
            
            // Strikethrough
            { pattern: /~~(.*?)~~/g, replacement: '<del>$1</del>' },
            
            // Links
            { pattern: /\[([^\]]+)\]\(([^)]+)\)/g, replacement: '<a href="$2">$1</a>' },
            
            // Images
            { pattern: /!\[([^\]]*)\]\(([^)]+)\)/g, replacement: '<img src="$2" alt="$1" />' },
            
            // Blockquotes
            { pattern: /^> (.*$)/gm, replacement: '<blockquote><p>$1</p></blockquote>' },
            
            // Horizontal rules
            { pattern: /^---$/gm, replacement: '<hr>' },
            { pattern: /^\*\*\*$/gm, replacement: '<hr>' },
            
            // Unordered lists
            { pattern: /^\* (.*$)/gm, replacement: '<li>$1</li>' },
            { pattern: /^- (.*$)/gm, replacement: '<li>$1</li>' },
            { pattern: /^\+ (.*$)/gm, replacement: '<li>$1</li>' },
            
            // Ordered lists
            { pattern: /^\d+\. (.*$)/gm, replacement: '<li>$1</li>' },
            
            // Tables (basic support)
            { pattern: /\|(.+)\|/g, replacement: this.parseTable.bind(this) },
            
            // Line breaks
            { pattern: /  \n/g, replacement: '<br>\n' },
            
            // Paragraphs (must come last)
            { pattern: /^(?!<[hul]|<blockquote|<hr|<pre)(.*$)/gm, replacement: '<p>$1</p>' }
        ];
    }

    // Parse table markdown
    parseTable(match, content) {
        if (!content.includes('|')) return match;
        
        const rows = content.split('\n').filter(row => row.trim());
        if (rows.length < 2) return match;
        
        let html = '<table><thead>';
        
        // Header row
        const headers = rows[0].split('|').map(cell => cell.trim()).filter(cell => cell);
        html += '<tr>';
        headers.forEach(header => {
            html += `<th>${header}</th>`;
        });
        html += '</tr></thead><tbody>';
        
        // Data rows (skip alignment row)
        for (let i = 2; i < rows.length; i++) {
            const cells = rows[i].split('|').map(cell => cell.trim()).filter(cell => cell);
            html += '<tr>';
            cells.forEach(cell => {
                html += `<td>${cell}</td>`;
            });
            html += '</tr>';
        }
        
        html += '</tbody></table>';
        return html;
    }

    // Render markdown to HTML
    render(markdown) {
        if (!markdown) return '';
        
        let html = markdown;
        
        // Apply rules in order
        this.rules.forEach(rule => {
            if (typeof rule.replacement === 'function') {
                html = html.replace(rule.pattern, rule.replacement);
            } else {
                html = html.replace(rule.pattern, rule.replacement);
            }
        });
        
        // Clean up multiple consecutive blockquotes
        html = html.replace(/(<\/blockquote>)\s*(<blockquote>)/g, '</p><p>');
        
        // Wrap consecutive list items in ul/ol tags
        html = this.wrapListItems(html);
        
        // Clean up empty paragraphs
        html = html.replace(/<p>\s*<\/p>/g, '');
        html = html.replace(/<p>(<[hul])/g, '$1');
        html = html.replace(/(<\/[hul][^>]*>)<\/p>/g, '$1');
        
        return html.trim();
    }

    // Wrap list items in appropriate list tags
    wrapListItems(html) {
        // Wrap unordered list items
        html = html.replace(/(<li>.*?<\/li>(?:\s*<li>.*?<\/li>)*)/gs, '<ul>$1</ul>');
        
        // Handle ordered lists (more complex due to numbering)
        const lines = html.split('\n');
        let inOrderedList = false;
        let result = [];
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            if (line.startsWith('<li>') && !inOrderedList) {
                // Check if this should be an ordered list
                const prevLines = lines.slice(Math.max(0, i - 3), i);
                const isOrdered = prevLines.some(prevLine => /^\d+\./.test(prevLine));
                
                if (isOrdered) {
                    result.push('<ol>');
                    inOrderedList = true;
                }
            } else if (!line.startsWith('<li>') && inOrderedList) {
                result.push('</ol>');
                inOrderedList = false;
            }
            
            result.push(lines[i]);
        }
        
        if (inOrderedList) {
            result.push('</ol>');
        }
        
        return result.join('\n');
    }

    // Get markdown syntax help
    getMarkdownHelp() {
        return {
            headers: {
                syntax: '# Header 1\n## Header 2\n### Header 3',
                description: 'سرتیترها با علامت # در ابتدای خط'
            },
            emphasis: {
                syntax: '**Bold Text**\n*Italic Text*\n***Bold and Italic***',
                description: 'متن پررنگ با ** و متن کج با *'
            },
            lists: {
                syntax: '- Item 1\n- Item 2\n\n1. First\n2. Second',
                description: 'فهرست‌ها با - یا * برای غیرشماره‌دار و 1. برای شماره‌دار'
            },
            links: {
                syntax: '[Link Text](https://example.com)',
                description: 'لینک‌ها با [متن](آدرس)'
            },
            images: {
                syntax: '![Alt Text](image-url.jpg)',
                description: 'تصاویر با ![توضیحات](آدرس)'
            },
            code: {
                syntax: '`inline code`\n\n```\ncode block\n```',
                description: 'کد با ` برای درون‌خطی و ``` برای بلوک'
            },
            quotes: {
                syntax: '> This is a quote',
                description: 'نقل قول با > در ابتدای خط'
            },
            tables: {
                syntax: '| Header 1 | Header 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |',
                description: 'جدول‌ها با | برای جداسازی ستون‌ها'
            }
        };
    }
}

// Create global instance
window.markdownRenderer = new MarkdownRenderer();
