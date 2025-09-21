// Random Quote Generator JavaScript - Advanced DOM Manipulation
class QuoteGenerator {
    constructor() {
        // Quote database with categories
        this.quotes = [
            // Inspirational
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "inspirational" },
            { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon", category: "inspirational" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt", category: "inspirational" },
            { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs", category: "inspirational" },
            { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs", category: "inspirational" },
            
            // Motivational
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney", category: "motivational" },
            { text: "Don't let yesterday take up too much of today.", author: "Will Rogers", category: "motivational" },
            { text: "If you can dream it, you can do it.", author: "Walt Disney", category: "motivational" },
            { text: "The secret of getting ahead is getting started.", author: "Mark Twain", category: "motivational" },
            { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi", category: "motivational" },
            
            // Wisdom
            { text: "The only true wisdom is in knowing you know nothing.", author: "Socrates", category: "wisdom" },
            { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "wisdom" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle", category: "wisdom" },
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins", category: "wisdom" },
            { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", author: "Albert Einstein", category: "wisdom" },
            
            // Success
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill", category: "success" },
            { text: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis", category: "success" },
            { text: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill", category: "success" },
            { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller", category: "success" },
            { text: "The difference between successful people and very successful people is that very successful people say 'no' to almost everything.", author: "Warren Buffett", category: "success" },
            
            // Life
            { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "life" },
            { text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein", category: "life" },
            { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius", category: "life" },
            { text: "The purpose of our lives is to be happy.", author: "Dalai Lama", category: "life" },
            { text: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll", category: "life" },
            
            // Love
            { text: "The best thing to hold onto in life is each other.", author: "Audrey Hepburn", category: "love" },
            { text: "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.", author: "Unknown", category: "love" },
            { text: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.", author: "Lao Tzu", category: "love" },
            { text: "The greatest happiness of life is the conviction that we are loved.", author: "Victor Hugo", category: "love" },
            { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle", category: "love" },
            
            // Happiness
            { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama", category: "happiness" },
            { text: "The most important thing is to enjoy your life—to be happy—it's all that matters.", author: "Audrey Hepburn", category: "happiness" },
            { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi", category: "happiness" },
            { text: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", author: "Marcus Aurelius", category: "happiness" },
            { text: "The happiness of your life depends upon the quality of your thoughts.", author: "Marcus Aurelius", category: "happiness" },
            
            // Famous Quotes
            { text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.", author: "Martin Luther King Jr.", category: "famous" },
            { text: "Ask not what your country can do for you—ask what you can do for your country.", author: "John F. Kennedy", category: "famous" },
            { text: "That's one small step for man, one giant leap for mankind.", author: "Neil Armstrong", category: "famous" },
            { text: "Mr. Gorbachev, tear down this wall!", author: "Ronald Reagan", category: "famous" },
            { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt", category: "famous" }
        ];
        
        this.currentQuote = null;
        this.filteredQuotes = [...this.quotes];
        this.favorites = JSON.parse(localStorage.getItem('quoteGeneratorFavorites')) || [];
        this.statistics = JSON.parse(localStorage.getItem('quoteGeneratorStats')) || {
            totalQuotes: 0,
            shares: 0,
            sessionStart: Date.now()
        };
        
        this.isDarkTheme = localStorage.getItem('quoteGeneratorTheme') === 'dark';
        this.isAutoPlay = false;
        this.autoPlayInterval = null;
        
        this.initializeElements();
        this.setupEventListeners();
        this.applyTheme();
        this.updateFavoriteCount();
        this.displayRandomQuote();
    }
    
    initializeElements() {
        this.quoteText = document.getElementById('quoteText');
        this.quoteAuthor = document.getElementById('quoteAuthor');
        this.quoteCategory = document.getElementById('quoteCategory');
        this.quoteContainer = document.getElementById('quoteContainer');
        this.favoriteBtn = document.getElementById('favoriteBtn');
        this.categorySelect = document.getElementById('categorySelect');
        this.autoBtn = document.getElementById('autoBtn');
        this.themeBtn = document.getElementById('themeBtn');
        this.favCount = document.getElementById('favCount');
        
        // Modals
        this.favoritesModal = document.getElementById('favoritesModal');
        this.statsModal = document.getElementById('statsModal');
        this.favoritesContent = document.getElementById('favoritesContent');
    }
    
    setupEventListeners() {
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
            
            switch(e.key.toLowerCase()) {
                case ' ':
                    e.preventDefault();
                    this.getNewQuote();
                    break;
                case 'f':
                    e.preventDefault();
                    this.toggleFavorite();
                    break;
                case 'c':
                    e.preventDefault();
                    this.copyQuote();
                    break;
                case 's':
                    e.preventDefault();
                    this.shareQuote();
                    break;
                case 'a':
                    e.preventDefault();
                    this.toggleAutoQuote();
                    break;
                case 't':
                    e.preventDefault();
                    this.toggleTheme();
                    break;
                case 'escape':
                    this.closeFavorites();
                    this.closeStats();
                    break;
            }
        });
        
        // Click outside modal to close
        this.favoritesModal.addEventListener('click', (e) => {
            if (e.target === this.favoritesModal) {
                this.closeFavorites();
            }
        });
        
        this.statsModal.addEventListener('click', (e) => {
            if (e.target === this.statsModal) {
                this.closeStats();
            }
        });
    }
    
    displayRandomQuote() {
        if (this.filteredQuotes.length === 0) {
            this.filteredQuotes = [...this.quotes];
        }
        
        const randomIndex = Math.floor(Math.random() * this.filteredQuotes.length);
        this.currentQuote = this.filteredQuotes[randomIndex];
        
        // Add animation class
        this.quoteContainer.classList.add('quote-new');
        setTimeout(() => {
            this.quoteContainer.classList.remove('quote-new');
        }, 600);
        
        // Update display
        this.quoteText.textContent = this.currentQuote.text;
        this.quoteAuthor.textContent = this.currentQuote.author;
        this.quoteCategory.textContent = this.capitalize(this.currentQuote.category);
        
        // Update favorite button
        this.updateFavoriteButton();
        
        // Update statistics
        this.statistics.totalQuotes++;
        this.saveStatistics();
    }
    
    filterByCategory() {
        const selectedCategory = this.categorySelect.value;
        
        if (selectedCategory === 'all') {
            this.filteredQuotes = [...this.quotes];
        } else {
            this.filteredQuotes = this.quotes.filter(quote => quote.category === selectedCategory);
        }
        
        this.displayRandomQuote();
    }
    
    toggleFavorite() {
        if (!this.currentQuote) return;
        
        const quoteKey = `${this.currentQuote.text}_${this.currentQuote.author}`;
        const existingIndex = this.favorites.findIndex(fav => 
            `${fav.text}_${fav.author}` === quoteKey
        );
        
        if (existingIndex > -1) {
            this.favorites.splice(existingIndex, 1);
            this.showNotification('Removed from favorites!', 'info');
        } else {
            this.favorites.push({...this.currentQuote});
            this.showNotification('Added to favorites!', 'success');
        }
        
        this.saveFavorites();
        this.updateFavoriteButton();
        this.updateFavoriteCount();
    }
    
    updateFavoriteButton() {
        if (!this.currentQuote) return;
        
        const quoteKey = `${this.currentQuote.text}_${this.currentQuote.author}`;
        const isFavorite = this.favorites.some(fav => 
            `${fav.text}_${fav.author}` === quoteKey
        );
        
        if (isFavorite) {
            this.favoriteBtn.classList.add('active');
            this.favoriteBtn.title = 'Remove from Favorites';
        } else {
            this.favoriteBtn.classList.remove('active');
            this.favoriteBtn.title = 'Add to Favorites';
        }
    }
    
    copyQuote() {
        if (!this.currentQuote) return;
        
        const textToCopy = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            this.showNotification('Quote copied to clipboard!', 'success');
        }).catch(() => {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            this.showNotification('Quote copied to clipboard!', 'success');
        });
    }
    
    shareQuote() {
        if (!this.currentQuote) return;
        
        const shareText = `"${this.currentQuote.text}" - ${this.currentQuote.author}`;
        const shareUrl = window.location.href;
        
        if (navigator.share) {
            navigator.share({
                title: 'Inspiring Quote',
                text: shareText,
                url: shareUrl
            }).then(() => {
                this.statistics.shares++;
                this.saveStatistics();
                this.showNotification('Quote shared!', 'success');
            });
        } else {
            // Fallback - copy to clipboard and show social links
            this.copyQuote();
            
            const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
            const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
            
            const shareModal = document.createElement('div');
            shareModal.innerHTML = `
                <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1001;">
                    <h3 style="margin-bottom: 1rem; color: #333;">Share this quote</h3>
                    <p style="margin-bottom: 1rem; color: #666;">Quote copied to clipboard!</p>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
                        <a href="${twitterUrl}" target="_blank" style="padding: 0.5rem 1rem; background: #1da1f2; color: white; text-decoration: none; border-radius: 5px;">Twitter</a>
                        <a href="${facebookUrl}" target="_blank" style="padding: 0.5rem 1rem; background: #4267b2; color: white; text-decoration: none; border-radius: 5px;">Facebook</a>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="padding: 0.5rem 1rem; background: #ccc; border: none; border-radius: 5px; cursor: pointer;">Close</button>
                </div>
                <div onclick="this.remove()" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;"></div>
            `;
            document.body.appendChild(shareModal);
            
            this.statistics.shares++;
            this.saveStatistics();
        }
    }
    
    toggleAutoQuote() {
        this.isAutoPlay = !this.isAutoPlay;
        
        if (this.isAutoPlay) {
            this.autoPlayInterval = setInterval(() => {
                this.displayRandomQuote();
            }, 5000);
            
            this.autoBtn.innerHTML = '<i class="fas fa-pause"></i> Stop Auto';
            this.autoBtn.style.background = 'var(--warning-color)';
            this.showNotification('Auto-play started! New quote every 5 seconds', 'info');
        } else {
            clearInterval(this.autoPlayInterval);
            this.autoBtn.innerHTML = '<i class="fas fa-play"></i> Auto Play';
            this.autoBtn.style.background = 'var(--info-color)';
            this.showNotification('Auto-play stopped', 'info');
        }
    }
    
    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        this.applyTheme();
        this.saveTheme();
    }
    
    applyTheme() {
        if (this.isDarkTheme) {
            document.body.setAttribute('data-theme', 'dark');
            this.themeBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            document.body.removeAttribute('data-theme');
            this.themeBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }
    
    showFavorites() {
        this.renderFavorites();
        this.favoritesModal.classList.add('show');
    }
    
    closeFavorites() {
        this.favoritesModal.classList.remove('show');
    }
    
    renderFavorites() {
        if (this.favorites.length === 0) {
            this.favoritesContent.innerHTML = '<p class="no-favorites">No favorite quotes yet. Heart some quotes to see them here!</p>';
            return;
        }
        
        const favoritesHtml = this.favorites.map((quote, index) => `
            <div class="favorite-item">
                <div class="favorite-quote">"${quote.text}"</div>
                <div class="favorite-author">— ${quote.author}</div>
                <button class="favorite-remove" onclick="quoteGenerator.removeFavorite(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `).join('');
        
        this.favoritesContent.innerHTML = favoritesHtml;
    }
    
    removeFavorite(index) {
        this.favorites.splice(index, 1);
        this.saveFavorites();
        this.updateFavoriteCount();
        this.updateFavoriteButton();
        this.renderFavorites();
        this.showNotification('Quote removed from favorites', 'info');
    }
    
    showStats() {
        const sessionTime = Math.floor((Date.now() - this.statistics.sessionStart) / 60000);
        
        document.getElementById('totalQuotes').textContent = this.statistics.totalQuotes;
        document.getElementById('favoriteCount').textContent = this.favorites.length;
        document.getElementById('shareCount').textContent = this.statistics.shares;
        document.getElementById('sessionTime').textContent = `${sessionTime}m`;
        
        this.statsModal.classList.add('show');
    }
    
    closeStats() {
        this.statsModal.classList.remove('show');
    }
    
    updateFavoriteCount() {
        this.favCount.textContent = this.favorites.length;
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#45b7d1'};
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 1002;
            animation: slideInRight 0.3s ease-out;
            font-weight: 500;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    saveFavorites() {
        localStorage.setItem('quoteGeneratorFavorites', JSON.stringify(this.favorites));
    }
    
    saveStatistics() {
        localStorage.setItem('quoteGeneratorStats', JSON.stringify(this.statistics));
    }
    
    saveTheme() {
        localStorage.setItem('quoteGeneratorTheme', this.isDarkTheme ? 'dark' : 'light');
    }
    
    // Public methods for global access
    getNewQuote() {
        this.displayRandomQuote();
    }
}

// Global instance
let quoteGenerator;

// Global functions for HTML onclick events
function getNewQuote() {
    quoteGenerator.getNewQuote();
}

function toggleFavorite() {
    quoteGenerator.toggleFavorite();
}

function copyQuote() {
    quoteGenerator.copyQuote();
}

function shareQuote() {
    quoteGenerator.shareQuote();
}

function filterByCategory() {
    quoteGenerator.filterByCategory();
}

function toggleAutoQuote() {
    quoteGenerator.toggleAutoQuote();
}

function toggleTheme() {
    quoteGenerator.toggleTheme();
}

function showFavorites() {
    quoteGenerator.showFavorites();
}

function closeFavorites() {
    quoteGenerator.closeFavorites();
}

function showStats() {
    quoteGenerator.showStats();
}

function closeStats() {
    quoteGenerator.closeStats();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    quoteGenerator = new QuoteGenerator();
    
    // Add CSS for notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // Add visual feedback for all buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});