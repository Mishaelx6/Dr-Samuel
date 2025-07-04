import Header from './components/Header.js';
import Hero from './components/Hero.js';
import AboutSection from './components/AboutSection.js';
import AuthurProfile from './components/AuthurProfile.js';
import BookCard from './components/BookCard.js';
import Footer from './components/Footer.js';
import StrategyCTA from './components/StrategyCTA.js';
import pick4 from './assets/images/pick4.jpg';
import pick3 from './assets/images/pick3.jpg';
import pick9 from './assets/images/pick9.jpg';
import pick7 from './assets/images/pick7.jpg';

// Data and State
const heroImages = {
    author: [pick3, pick4, pick7, pick9],
    org: [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1887&auto=format&fit=crop'
    ]
};

const books = [
    {
        id: "book1",
        title: "The Mindful Leader",
        description: "Transforming leadership through conscious awareness and emotional intelligence.",
        price: "₦5,000",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: "book2",
        title: "Innovation at Scale",
        description: "Strategies for driving sustainable innovation in modern organizations.",
        price: "₦4,500",
        image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: "book3", 
        title: "Cultural Transformation",
        description: "Building resilient organizations through values-driven cultural change.",
        price: "₦6,000",
        image: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?q=80&w=1887&auto=format&fit=crop"
    }
];

let currentIndex = { author: 0, org: 0 };
let carouselInterval;
let navigationLock = false;

// Core Functions
function initializeApp() {
    loadAllComponents();
    setupNavigation();
    setupEventListeners();
    console.log('App initialized successfully');
}

function loadAllComponents() {
    navigationLock = false;
    
    // Header
    safeInjectComponent('header', Header());
    
    // Footer
    safeInjectComponent('footer', Footer());
    
    // CTA
    safeInjectComponent('cta', StrategyCTA());
    
    // Page-Specific Components
    const path = window.location.pathname;
    
    if (path === '/' || path.includes('index.html')) {
        safeInjectComponent('hero', Hero());
        safeInjectComponent('about', AboutSection());
        safeInjectComponent('author', AuthurProfile());
        initializeHeroCarousel();
    }
    
    if (path.includes('books.html')) {
        const booksHTML = books.map(book => BookCard(book)).join('');
        safeInjectComponent('books-container', booksHTML);
    }
}

function safeInjectComponent(elementId, html) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = html;
        console.log(`Injected component: ${elementId}`);
    } else {
        console.warn(`Element not found: ${elementId}`);
    }
}

function initializeHeroCarousel() {
    const authorHero = document.getElementById('author-hero');
    const orgHero = document.getElementById('org-hero');
    
    if (authorHero && orgHero) {
        authorHero.style.backgroundImage = `url('${heroImages.author[0]}')`;
        orgHero.style.backgroundImage = `url('${heroImages.org[0]}')`;
        
        clearInterval(carouselInterval);
        carouselInterval = setInterval(rotateHeroImages, 5000);
    }
}

function rotateHeroImages() {
    currentIndex.author = (currentIndex.author + 1) % heroImages.author.length;
    currentIndex.org = (currentIndex.org + 1) % heroImages.org.length;
    
    const authorHero = document.getElementById('author-hero');
    const orgHero = document.getElementById('org-hero');
    
    if (authorHero) authorHero.style.backgroundImage = `url('${heroImages.author[currentIndex.author]}')`;
    if (orgHero) orgHero.style.backgroundImage = `url('${heroImages.org[currentIndex.org]}')`;
}

// Navigation System
function setupNavigation() {
    // Handle all link clicks in the document
    document.addEventListener('click', function(e) {
        // Mobile menu toggle
        if (e.target.closest('#mobile-menu-button')) {
            document.getElementById('mobile-menu')?.classList.toggle('hidden');
            e.stopPropagation();
            return;
        }
        
        // Navigation links
        const navLink = e.target.closest('[data-navigation]');
        if (navLink && !navigationLock) {
            handleNavigationClick(e, navLink);
        }
    });
    
    updateActiveNavigation();
}

function handleNavigationClick(e, link) {
    e.preventDefault();
    navigationLock = true;
    
    const targetUrl = link.getAttribute('href');
    console.log(`Navigating to: ${targetUrl}`);
    
    // Visual feedback
    document.body.style.opacity = '0.9';
    document.body.style.transition = 'opacity 0.2s ease';
    
    // Update URL and history
    window.history.pushState({}, '', targetUrl);
    updateActiveNavigation();
    
    // Load new content
    setTimeout(() => {
        loadAllComponents();
        window.scrollTo(0, 0);
        document.body.style.opacity = '1';
        navigationLock = false;
    }, 100);
}

function updateActiveNavigation() {
    const currentPath = window.location.pathname;
    
    document.querySelectorAll('[data-navigation]').forEach(link => {
        const linkPath = link.getAttribute('href');
        const isActive = linkPath === currentPath || 
                        (currentPath !== '/' && currentPath.includes(linkPath.replace('/', '')));
        
        link.classList.toggle('active', isActive);
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
}

// Event System
function setupEventListeners() {
    // Back/forward navigation
    window.addEventListener('popstate', () => {
        clearInterval(carouselInterval);
        loadAllComponents();
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && !mobileMenu.contains(e.target) && 
            menuButton && !menuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
    
    // Book actions
    document.addEventListener('click', (e) => {
        const readBtn = e.target.closest('.read-btn');
        const buyBtn = e.target.closest('.buy-btn');
        
        if (readBtn) {
            const bookId = readBtn.dataset.bookId;
            openBookReader(bookId);
        } else if (buyBtn) {
            const bookId = buyBtn.dataset.bookId;
            initiatePurchase(bookId);
        }
    });
}

// Helper Functions
function openBookReader(bookId) {
    console.log(`Opening book: ${bookId}`);
    // Implementation here
}

function initiatePurchase(bookId) {
    console.log(`Purchasing book: ${bookId}`);
    // Implementation here
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);

// Error handling
window.addEventListener('error', (e) => {
    console.error('Application error:', e);
});