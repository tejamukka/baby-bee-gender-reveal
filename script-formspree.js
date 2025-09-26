// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Check if form was submitted successfully
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
        showRSVPSuccess();
    }
});

// RSVP Form Handling for Formspree
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

rsvpForm.addEventListener('submit', function(e) {
    // Form will submit to Formspree automatically
    // We just need to show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Reset button after a delay (in case of error)
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }, 5000);
});

function showRSVPSuccess() {
    rsvpForm.style.display = 'none';
    rsvpSuccess.style.display = 'block';
    
    // Add some animation
    rsvpSuccess.style.opacity = '0';
    rsvpSuccess.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        rsvpSuccess.style.transition = 'all 0.5s ease';
        rsvpSuccess.style.opacity = '1';
        rsvpSuccess.style.transform = 'translateY(0)';
    }, 100);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1'};
        color: ${type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460'};
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Bee Animation Enhancement
function createFloatingBee() {
    const bee = document.createElement('div');
    bee.innerHTML = '🐝';
    bee.style.cssText = `
        position: fixed;
        font-size: 1.5rem;
        z-index: 1000;
        pointer-events: none;
        animation: floatBee 10s linear infinite;
        opacity: 0.7;
    `;
    
    // Random starting position
    bee.style.left = Math.random() * window.innerWidth + 'px';
    bee.style.top = Math.random() * window.innerHeight + 'px';
    
    document.body.appendChild(bee);
    
    // Remove after animation
    setTimeout(() => {
        if (bee.parentNode) {
            bee.remove();
        }
    }, 10000);
}

// Add floating bee animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes floatBee {
        0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.7;
        }
        25% {
            transform: translate(100px, -50px) rotate(90deg);
            opacity: 1;
        }
        50% {
            transform: translate(-50px, -100px) rotate(180deg);
            opacity: 0.8;
        }
        75% {
            transform: translate(-100px, -50px) rotate(270deg);
            opacity: 0.9;
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0.7;
        }
    }
`;
document.head.appendChild(style);

// Create floating bees periodically
setInterval(createFloatingBee, 15000);

// Registry Link Handling
document.querySelectorAll('.registry-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const itemName = this.closest('.registry-item').querySelector('h3').textContent;
        showNotification(`Opening ${itemName} registry... 🛍️`, 'info');
        
        // In a real app, you would open the actual registry links
        // For demo purposes, we'll just show a notification
        setTimeout(() => {
            showNotification('Registry link would open here! 🎁', 'success');
        }, 1000);
    });
});

// Map Link Handling
document.querySelector('.map-link').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('Opening directions to Teja & Suppu\'s Hive... 🗺️', 'info');
    
    // In a real app, you would open Google Maps or Apple Maps
    setTimeout(() => {
        showNotification('Map would open here! 📍', 'success');
    }, 1000);
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.registry-item, .detail-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.registry-item, .detail-card');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Honeycomb click effect
document.querySelectorAll('.honeycomb').forEach(honeycomb => {
    honeycomb.addEventListener('click', function() {
        this.style.animation = 'none';
        this.style.transform = 'scale(1.2) rotate(180deg)';
        
        setTimeout(() => {
            this.style.animation = 'float 6s ease-in-out infinite';
            this.style.transform = '';
        }, 500);
        
        showNotification('Buzz buzz! 🐝', 'success');
    });
});

// Bee click effect
document.querySelectorAll('.bee').forEach(bee => {
    bee.addEventListener('click', function() {
        this.style.animation = 'none';
        this.style.transform = 'scale(1.5) rotate(360deg)';
        
        setTimeout(() => {
            this.style.animation = 'fly 8s ease-in-out infinite';
            this.style.transform = '';
        }, 1000);
        
        showNotification('Hello there! 🐝', 'success');
    });
});

// Form validation enhancement
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add real-time email validation
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#dc3545';
        showNotification('Please enter a valid email address', 'error');
    } else {
        this.style.borderColor = '#d4a574';
    }
});

// Add character counter for message
const messageTextarea = document.getElementById('message');
messageTextarea.addEventListener('input', function() {
    const maxLength = 500;
    const currentLength = this.value.length;
    
    if (currentLength > maxLength) {
        this.value = this.value.substring(0, maxLength);
        showNotification('Message is too long! Maximum 500 characters.', 'error');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close notifications
    if (e.key === 'Escape') {
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }
    
    // Enter key on CTA button
    if (e.key === 'Enter' && e.target.classList.contains('cta-button')) {
        scrollToSection('rsvp');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add a welcome message
    setTimeout(() => {
        showNotification('Welcome to our Baby Bee Gender Reveal! 🐝', 'success');
    }, 1000);
});

// Add some fun Easter eggs
let clickCount = 0;
document.querySelector('.main-title').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        showNotification('You found the secret! 🐝✨', 'success');
        // Create a burst of bees
        for (let i = 0; i < 10; i++) {
            setTimeout(() => createFloatingBee(), i * 200);
        }
        clickCount = 0;
    }
});

// Add touch support for mobile
if ('ontouchstart' in window) {
    document.querySelectorAll('.bee, .honeycomb').forEach(element => {
        element.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    });
}
