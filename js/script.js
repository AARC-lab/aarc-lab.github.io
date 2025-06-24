// AARC Lab Website JavaScript
// Add any interactive functionality here

document.addEventListener('DOMContentLoaded', function() {
    console.log('AARC Lab website loaded successfully');
    
    // Example: Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Example: Add hover effects or animations
    const researchBox = document.querySelector('.research-box');
    if (researchBox) {
        researchBox.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        researchBox.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Example: Responsive image loading
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
        logoImg.addEventListener('load', function() {
            console.log('Logo loaded successfully');
        });
        
        logoImg.addEventListener('error', function() {
            console.log('Logo failed to load, using fallback');
            this.alt = 'AARC Lab';
        });
    }
    
    // Footer logo loading
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('error', function() {
            console.log('Footer logo failed to load');
            this.alt = 'AARC Lab';
        });
    }
    
    // Example: Add viewport change detection
    function handleViewportChange() {
        const viewportWidth = window.innerWidth;
        
        if (viewportWidth <= 767) {
            console.log('Mobile viewport detected');
        } else if (viewportWidth <= 1024) {
            console.log('Tablet viewport detected');
        } else {
            console.log('Desktop viewport detected');
        }
    }
    
    // Run on load and resize
    handleViewportChange();
    window.addEventListener('resize', handleViewportChange);
});

// Example: Function to update figure content
function updateFigure(imageSrc, altText) {
    const figurePlaceholder = document.querySelector('.figure-placeholder');
    if (figurePlaceholder && imageSrc) {
        figurePlaceholder.innerHTML = `<img src="${imageSrc}" alt="${altText || 'Research Figure'}" style="max-width: 100%; height: auto;">`;
    }
}

// Example: Function to update research content
function updateResearchContent(title, description) {
    const titleElement = document.querySelector('.research-title');
    const descriptionElement = document.querySelector('.research-description');
    
    if (titleElement && title) {
        titleElement.textContent = title;
    }
    
    if (descriptionElement && description) {
        descriptionElement.textContent = description;
    }
}