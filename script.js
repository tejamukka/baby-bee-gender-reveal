// Postcard Opening Animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up postcard');
    
    // Simple setup without particles for now
    const envelope = document.getElementById('envelope');
    const postcard = document.getElementById('postcard');
    
    if (envelope && postcard) {
        console.log('Postcard elements found');
    } else {
        console.log('Postcard elements NOT found');
        console.log('Envelope:', envelope);
        console.log('Postcard:', postcard);
    }
});

// Simple function to open postcard
function openPostcard() {
    console.log('Opening postcard');
    const envelope = document.getElementById('envelope');
    const postcard = document.getElementById('postcard');
    
    if (!envelope || !postcard) {
        console.log('Elements not found');
        return;
    }
    
    // Hide envelope
    envelope.classList.add('clicked');
    
    // Show postcard after a short delay
    setTimeout(() => {
        postcard.classList.add('open');
        console.log('Postcard opened');
    }, 300);
}

// Function to open the main invitation
function openInvitation() {
    console.log('Opening invitation');
    const postcardOverlay = document.getElementById('postcard-overlay');
    const mainNavbar = document.getElementById('main-navbar');
    
    if (!postcardOverlay || !mainNavbar) {
        console.log('Elements not found for invitation opening');
        return;
    }
    
    // Hide postcard overlay
    postcardOverlay.style.opacity = '0';
    postcardOverlay.style.transform = 'scale(0.8)';
    
    // Show main navbar and content
    setTimeout(() => {
        postcardOverlay.style.display = 'none';
        mainNavbar.style.display = 'block';
        
        // Scroll to top of main content
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, 500);
}

// Travel locations modal functions
function showTravelLocations() {
    const modal = document.getElementById('travel-modal');
    if (modal) {
        modal.style.display = 'block';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
        }, 10);
    }
}

function closeTravelLocations() {
    const modal = document.getElementById('travel-modal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('travel-modal');
    if (event.target === modal) {
        closeTravelLocations();
    }
}

// RSVP Attendance Selection
function selectAttendance(value) {
    // Remove selected class from all buttons
    document.querySelectorAll('.attendance-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    const selectedBtn = document.querySelector(`.attendance-${value}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    // Set the hidden input value
    const hiddenInput = document.getElementById('attending');
    if (hiddenInput) {
        hiddenInput.value = value;
    }
}

// Floating particles removed for now to fix click issues

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

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(rsvpForm);
    const rsvpData = {
        name: formData.get('name'),
        email: formData.get('email'),
        guests: formData.get('guests'),
        attending: formData.get('attending'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Validate form
    if (!rsvpData.name || !rsvpData.email || !rsvpData.guests || !rsvpData.attending) {
        showNotification('Please fill in all required fields!', 'error');
        return;
    }
    
    // Simulate form submission (in a real app, you'd send this to a server)
    console.log('RSVP Data:', rsvpData);
    
    // Store in localStorage for demo purposes
    const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
    existingRSVPs.push(rsvpData);
    localStorage.setItem('rsvps', JSON.stringify(existingRSVPs));
    
    // Show success message
    showRSVPSuccess();
    
    // Reset form
    rsvpForm.reset();
    
    // Show notification
    showNotification('Thank you for your RSVP! 🎉', 'success');
});

function showRSVPSuccess() {
    // Get the attendance value to show appropriate message
    const attendingValue = document.getElementById('attending').value;
    const nameValue = document.getElementById('name').value;
    
    // Show funny bee messages based on RSVP response
    showFunnyBeeMessage(attendingValue, nameValue);
    
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

// Funny bee messages based on RSVP response
function showFunnyBeeMessage(attending, name) {
    const titleElement = document.getElementById('success-title');
    const messageElement = document.getElementById('success-message');
    
    if (attending === 'yes') {
        const yesMessages = [
            {
                title: "You're BEE-lievable! 🐝",
                message: "We're buzzing with excitement that you'll be joining our hive! Get ready for some sweet celebrations!"
            },
            {
                title: "Honey, you're the BEE's knees! 🍯",
                message: "Your RSVP has us doing the happy dance! Can't wait to see you at our gender reveal party!"
            },
            {
                title: "You're absolutely BEE-autiful! ✨",
                message: "Thanks for making our day sweeter than honey! We're counting down the days until we celebrate together!"
            },
            {
                title: "You're the BEE-all and end-all! 🎉",
                message: "Your positive response has us buzzing with joy! Get ready for the most exciting reveal ever!"
            },
            {
                title: "You're BEE-yond amazing! 🌟",
                message: "We're so grateful you'll be part of our special day! It's going to be un-BEE-lievably fun!"
            }
        ];
        
        const randomMessage = yesMessages[Math.floor(Math.random() * yesMessages.length)];
        titleElement.textContent = randomMessage.title;
        messageElement.textContent = randomMessage.message;
        
    } else {
        const noMessages = [
            {
                title: "We're BEE-reaved but understanding! 😢",
                message: "We'll miss you at our celebration, but we know you'll be there in spirit! Thanks for letting us know!"
            },
            {
                title: "You're still BEE-loved! 💕",
                message: "Even though you can't make it, you're still part of our hive! We'll share all the sweet moments with you!"
            },
            {
                title: "You're BEE-yond thoughtful! 🤗",
                message: "Thanks for taking the time to let us know! We appreciate your honesty and can't wait to celebrate with you another time!"
            },
            {
                title: "You're still the BEE's knees! 🐝",
                message: "We'll miss you at the party, but we know you're cheering us on from wherever you are! Thanks for being awesome!"
            },
            {
                title: "You're BEE-autiful inside and out! ✨",
                message: "Even though you can't join us, your support means the world! We'll make sure to share all the buzz with you!"
            }
        ];
        
        const randomMessage = noMessages[Math.floor(Math.random() * noMessages.length)];
        titleElement.textContent = randomMessage.title;
        messageElement.textContent = randomMessage.message;
    }
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

// Loading animation for form submission
function showLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Submitting...';
    button.disabled = true;
    button.style.opacity = '0.7';
    
    return function hideLoadingState() {
        button.textContent = originalText;
        button.disabled = false;
        button.style.opacity = '1';
    };
}

// Enhanced form submission with loading state
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.submit-btn');
    const hideLoading = showLoadingState(submitBtn);
    
    // Simulate network delay
    setTimeout(() => {
        hideLoading();
        
        // Get form data
        const formData = new FormData(rsvpForm);
        const rsvpData = {
            name: formData.get('name'),
            email: formData.get('email'),
            guests: formData.get('guests'),
            attending: formData.get('attending'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        // Validate form
        if (!rsvpData.name || !rsvpData.email || !rsvpData.guests || !rsvpData.attending) {
            showNotification('Please fill in all required fields!', 'error');
            return;
        }
        
        // Store in localStorage for demo purposes
        const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
        existingRSVPs.push(rsvpData);
        localStorage.setItem('rsvps', JSON.stringify(existingRSVPs));
        
        // Show success message
        showRSVPSuccess();
        
        // Reset form
        rsvpForm.reset();
        
        // Show notification
        showNotification('Thank you for your RSVP! 🎉', 'success');
    }, 1500);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add a welcome message
    setTimeout(() => {
        showNotification('Welcome to our Baby Bee Gender Reveal! 🐝', 'success');
    }, 1000);
    
    // Check if there are existing RSVPs
    const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
    if (existingRSVPs.length > 0) {
        console.log(`You have ${existingRSVPs.length} RSVP(s) stored locally.`);
    }
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
