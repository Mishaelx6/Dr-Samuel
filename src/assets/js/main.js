function initMobileMenu() {
    console.log("Initializing mobile menu...");
    
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!menuButton || !mobileMenu) {
        console.error("Mobile menu elements not found!");
        return;
    }

    // Mobile toggle functionality
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        
        const icon = this.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });

    // Close menu when clicking links
    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuButton.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    console.log("Mobile menu initialized successfully");
}

// Wait for components to be ready
document.addEventListener('componentsReady', function() {
    console.log("Components ready - initializing...");
    
    // Debug check
    console.log("Menu button exists now:", !!document.getElementById('mobile-menu-button'));
    console.log("Mobile menu exists now:", !!document.getElementById('mobile-menu'));
    console.log("Font Awesome check:", !!document.querySelector('.fa-bars'));
    
    // Initialize all functionality
    initMobileMenu();
    
    // Sticky header
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('shadow-lg', window.scrollY > 100);
        });
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Fallback initialization after 1 second
setTimeout(() => {
    if (!document.getElementById('mobile-menu-button')) {
        console.warn("Fallback initialization triggered");
        document.dispatchEvent(new CustomEvent('componentsReady'));
    }
}, 1000);