// Make scrollToRSVP function available globally immediately
window.scrollToRSVP = function() {
    console.log('Global scrollToRSVP called');
    
    const rsvpSection = document.getElementById('rsvp');
    if (!rsvpSection) {
        console.log('RSVP section not found');
        return;
    }
    
    console.log('RSVP section found, scrolling...');
    
    // Add visual feedback immediately
    const button = document.getElementById('rsvpButton');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Force scroll to RSVP section
    try {
        rsvpSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Fallback
        setTimeout(() => {
            const rect = rsvpSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.top - 100;
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }, 100);
        
    } catch (error) {
        console.log('Scroll error:', error);
        window.location.hash = '#rsvp';
    }
};

// Bulletproof RSVP button handler
function createBulletproofRSVPHandler() {
    const rsvpButton = document.getElementById('rsvpButton');
    if (!rsvpButton) return;
    
    // Remove all existing event listeners
    const newButton = rsvpButton.cloneNode(true);
    rsvpButton.parentNode.replaceChild(newButton, rsvpButton);
    
    // Add multiple event listeners for maximum reliability
    newButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('RSVP button clicked via addEventListener');
        window.scrollToRSVP();
    });
    
    newButton.addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('RSVP button mousedown');
        window.scrollToRSVP();
    });
    
    // Also keep the onclick attribute as backup
    newButton.setAttribute('onclick', 'window.scrollToRSVP(); return false;');
    
    console.log('Bulletproof RSVP handler attached');
}

// Bulletproof Back to Story button handler
function createBulletproofBackHandler() {
    const backButton = document.querySelector('.back-to-story-btn');
    if (!backButton) return;
    
    // Remove all existing event listeners
    const newButton = backButton.cloneNode(true);
    backButton.parentNode.replaceChild(newButton, backButton);
    
    // Add multiple event listeners for maximum reliability
    newButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Back to story button clicked via addEventListener');
        window.scrollToSection('hero');
    });
    
    newButton.addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Back to story button mousedown');
        window.scrollToSection('hero');
    });
    
    // Also keep the onclick attribute as backup
    newButton.setAttribute('onclick', 'window.scrollToSection("hero"); return false;');
    
    console.log('Bulletproof back to story handler attached');
}

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

// Smooth scrolling function with improved reliability
function scrollToSection(sectionId) {
    console.log('scrollToSection called with:', sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
        console.log('Element found, scrolling to:', sectionId);
        // Ensure the element is visible and ready
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
        
        // Fallback: if smooth scroll doesn't work, use instant scroll
        setTimeout(() => {
            const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.top > window.innerHeight) {
                element.scrollIntoView({
                    behavior: 'auto',
            block: 'start'
        });
            }
        }, 500);
    } else {
        console.log('Element not found:', sectionId);
    }
}

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;

// Global RSVP scroll function - always available
window.scrollToRSVP = function() {
    console.log('scrollToRSVP called'); // Debug log
    
    const rsvpSection = document.getElementById('rsvp');
    if (!rsvpSection) {
        console.log('RSVP section not found');
        return;
    }
    
    console.log('RSVP section found, scrolling...');
    
    // Add visual feedback immediately
    const button = document.getElementById('rsvpButton');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Force scroll to RSVP section - try multiple methods
    try {
        // Method 1: Smooth scroll
        rsvpSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Method 2: Fallback with window.scrollTo
        setTimeout(() => {
            const rect = rsvpSection.getBoundingClientRect();
            const scrollTop = window.pageYOffset + rect.top - 100; // 100px offset from top
            
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
        }, 100);
        
        // Method 3: Final fallback
        setTimeout(() => {
            const rect = rsvpSection.getBoundingClientRect();
            if (rect.top < 0 || rect.top > window.innerHeight) {
                console.log('Using fallback scroll');
                window.scrollTo({
                    top: rsvpSection.offsetTop - 100,
                    behavior: 'auto'
                });
            }
        }, 500);
        
    } catch (error) {
        console.log('Scroll error:', error);
        // Ultimate fallback
        window.location.hash = '#rsvp';
    }
};

// Also create a local function for backward compatibility
function scrollToRSVP() {
    window.scrollToRSVP();
}

// RSVP Form Handling
const rsvpForm = document.getElementById('rsvpForm');
const rsvpSuccess = document.getElementById('rsvpSuccess');

// First form handler removed - using the enhanced one below

function showRSVPSuccess() {
    // Get the attendance value to show appropriate message
    const attendingValue = document.getElementById('attending').value;
    const nameValue = document.getElementById('name').value;
    
    // Show funny bee messages based on RSVP response
    showFunnyBeeMessage(attendingValue, nameValue);
    
    // Hide the form and facts carousel
    rsvpForm.style.display = 'none';
    const rsvpFunFacts = document.querySelector('.rsvp-fun-facts');
    if (rsvpFunFacts) {
        rsvpFunFacts.style.display = 'none';
    }
    
    // Show success message
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

// Smart form submission (Demo mode or Formspree)
rsvpForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (this.classList.contains('submitting')) {
        return;
    }
    
    // Get form data for validation
        const formData = new FormData(rsvpForm);
        const rsvpData = {
            name: formData.get('name'),
            email: formData.get('email'),
            guests: formData.get('guests'),
            attending: formData.get('attending'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
    // Validate form before submission
        if (!rsvpData.name || !rsvpData.email || !rsvpData.guests || !rsvpData.attending) {
            showNotification('Please fill in all required fields!', 'error');
            return;
        }
        
    // Mark form as submitting to prevent double submission
    this.classList.add('submitting');
    
    // Show loading state
    const submitBtn = this.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting... 🐝';
    submitBtn.disabled = true;
    
    if (isDemoMode) {
        // Demo mode - use localStorage
        const existingRSVPs = JSON.parse(localStorage.getItem('rsvps') || '[]');
        existingRSVPs.push(rsvpData);
        localStorage.setItem('rsvps', JSON.stringify(existingRSVPs));
        
        // Show success message
        setTimeout(() => {
        showRSVPSuccess();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            rsvpForm.reset();
            this.classList.remove('submitting');
            showNotification('Demo RSVP submitted! (Edit/Delete features available) 🧪', 'success');
        }, 1000);
        
    } else {
        // Real mode - submit to Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Success - show success message
                showRSVPSuccess();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
        rsvpForm.reset();
                this.classList.remove('submitting');
                showNotification('RSVP submitted successfully! Check your email! 📧', 'success');
            } else {
                throw new Error('Submission failed');
            }
        })
        .catch(error => {
            console.error('Formspree submission error:', error);
            showNotification('Failed to submit RSVP. Please try again or contact us directly.', 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            this.classList.remove('submitting');
        });
    }
});

// Mama and Baby Bee Guide System
function startBeeGuides() {
    const mamaBee = document.querySelector('.mama-bee-guide');
    const babyBee = document.querySelector('.baby-bee-guide');
    
    if (!mamaBee || !babyBee) return;
    
    // Guide sequence for form fields
    const guideSequence = [
        { field: 'name', delay: 1000 },
        { field: 'email', delay: 4000 },
        { field: 'guests', delay: 7000 },
        { field: 'attending', delay: 10000 }
    ];
    
    guideSequence.forEach((guide, index) => {
        setTimeout(() => {
            // Show mama and baby bee guides
            mamaBee.className = `mama-bee-guide guide-${guide.field}`;
            babyBee.className = `baby-bee-guide guide-${guide.field}`;
            
            // Hide guides after animation
            setTimeout(() => {
                mamaBee.className = 'mama-bee-guide';
                babyBee.className = 'baby-bee-guide';
            }, 2000);
            
        }, guide.delay);
    });
}

// Dynamic Fun Facts System
const funFacts = [
    "At 5 months in the womb, I can hear your voices and recognize familiar sounds - just like Pooh recognizing his hunny! 👂🍯",
    "I'm already responding to music and may kick when I hear my favorite songs - especially Winnie the Pooh tunes! 🎵🐝",
    "I'm developing my unique personality and sleep patterns while growing strong - sweet as honey! 🍯👶",
    "I'm practicing my first movements - kicking, stretching, and even hiccuping like a little bouncing Tigger! 🤸🐯",
    "I can feel your love and emotions, creating our first special bond - sweeter than the sweetest hunny! 💕🍯"
];

let currentFactIndex = 0;

function updateFunFact() {
    const factText = document.getElementById('funFactText');
    const dots = document.querySelectorAll('.dot');
    
    if (!factText) return;
    
    // Fade out current fact
    factText.style.opacity = '0';
    
    setTimeout(() => {
        // Update fact text
        factText.textContent = funFacts[currentFactIndex];
        
        // Update active dot
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentFactIndex);
        });
        
        // Fade in new fact
        factText.style.opacity = '1';
        
        // Move to next fact
        currentFactIndex = (currentFactIndex + 1) % funFacts.length;
    }, 300);
}

// RSVP Fun Facts Carousel System
let currentRSVPFactIndex = 0;
let rsvpCarouselInterval;

function startRSVPFunFacts() {
    const factItems = document.querySelectorAll('.rsvp-fact-item');
    const dots = document.querySelectorAll('.rsvp-dot');
    
    if (factItems.length === 0) return;
    
    // Function to show specific fact
    function showRSVPFact(index) {
        // Remove active class from all items and dots
        factItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current item and dot
        if (factItems[index]) {
            factItems[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        
        currentRSVPFactIndex = index;
    }
    
    // Auto-rotate facts every 4 seconds
    rsvpCarouselInterval = setInterval(() => {
        const nextIndex = (currentRSVPFactIndex + 1) % factItems.length;
        showRSVPFact(nextIndex);
    }, 4000);
    
    // Add click handlers to dots for manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showRSVPFact(index);
            // Reset auto-rotation timer when manually navigating
            clearInterval(rsvpCarouselInterval);
            rsvpCarouselInterval = setInterval(() => {
                const nextIndex = (currentRSVPFactIndex + 1) % factItems.length;
                showRSVPFact(nextIndex);
            }, 4000);
        });
    });
    
    // Show first fact
    showRSVPFact(0);
}

// Global functions for carousel navigation
function nextRSVPFact() {
    const factItems = document.querySelectorAll('.rsvp-fact-item');
    if (factItems.length === 0) return;
    
    const nextIndex = (currentRSVPFactIndex + 1) % factItems.length;
    showRSVPFact(nextIndex);
    
    // Reset auto-rotation timer
    clearInterval(rsvpCarouselInterval);
    rsvpCarouselInterval = setInterval(() => {
        const nextIndex = (currentRSVPFactIndex + 1) % factItems.length;
        showRSVPFact(nextIndex);
    }, 4000);
}

function previousRSVPFact() {
    const factItems = document.querySelectorAll('.rsvp-fact-item');
    if (factItems.length === 0) return;
    
    const prevIndex = currentRSVPFactIndex === 0 ? factItems.length - 1 : currentRSVPFactIndex - 1;
    showRSVPFact(prevIndex);
    
    // Reset auto-rotation timer
    clearInterval(rsvpCarouselInterval);
    rsvpCarouselInterval = setInterval(() => {
        const nextIndex = (currentRSVPFactIndex + 1) % factItems.length;
        showRSVPFact(nextIndex);
    }, 4000);
}

// Helper function to show specific fact (used by navigation functions)
function showRSVPFact(index) {
    const factItems = document.querySelectorAll('.rsvp-fact-item');
    const dots = document.querySelectorAll('.rsvp-dot');
    
    if (factItems.length === 0) return;
    
    // Remove active class from all items and dots
    factItems.forEach(item => item.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current item and dot
    if (factItems[index]) {
        factItems[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentRSVPFactIndex = index;
}

// Demo Mode Toggle
let isDemoMode = false;

// Evite Backup Integration
const EVITE_EVENT_URL = 'https://www.evite.com/event/YOUR_EVITE_EVENT_ID'; // Replace with your actual Evite URL

function openEviteBackup() {
    // Open Evite in new tab
    window.open(EVITE_EVENT_URL, '_blank');
    
    // Show helpful notification
    showNotification('📧 Evite backup opened! You can RSVP there and track counts separately.', 'info');
}

function toggleDemoMode() {
    isDemoMode = !isDemoMode;
    const demoBtn = document.querySelector('.demo-mode-btn');
    const demoText = demoBtn.querySelector('.demo-text');
    
    if (isDemoMode) {
        demoBtn.classList.add('active');
        demoText.textContent = 'Demo ON';
        showNotification('Demo mode enabled - Edit/Delete features active! 🧪', 'success');
    } else {
        demoBtn.classList.remove('active');
        demoText.textContent = 'Demo Mode';
        showNotification('Real mode enabled - RSVPs go to Formspree! 📧', 'success');
    }
}

// RSVP Submissions Modal Functions
function showRSVPSubmissions() {
    const modal = document.getElementById('rsvpModal');
    if (!modal) return;
    
    // Load and display RSVP data
    loadRSVPData();
    
    // Show modal with animation
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
    }, 10);
}

function closeRSVPModal() {
    const modal = document.getElementById('rsvpModal');
    if (!modal) return;
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

function loadRSVPData() {
    if (isDemoMode) {
        // Demo mode - load from localStorage with edit/delete features
        const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
        
        // Update summary stats
        const attendingCount = rsvps.filter(rsvp => rsvp.attending === 'yes').length;
        const notAttendingCount = rsvps.filter(rsvp => rsvp.attending === 'no').length;
        const totalGuests = rsvps.reduce((sum, rsvp) => sum + parseInt(rsvp.guests || 0), 0);
        
        document.getElementById('attendingCount').textContent = attendingCount;
        document.getElementById('notAttendingCount').textContent = notAttendingCount;
        document.getElementById('totalGuestsCount').textContent = totalGuests;
        
        // Display RSVP entries with edit/delete buttons
        const entriesContainer = document.getElementById('rsvpEntries');
        
        if (rsvps.length === 0) {
            entriesContainer.innerHTML = '<p class="no-rsvps">No demo RSVPs yet. Submit one to test edit/delete features! 🧪</p>';
            return;
        }
        
        entriesContainer.innerHTML = rsvps.map((rsvp, index) => {
            const statusClass = rsvp.attending === 'yes' ? 'attending' : 'not-attending';
            const statusText = rsvp.attending === 'yes' ? 'Attending' : 'Can\'t Make It';
            const guestText = rsvp.guests === '1' ? '1 guest' : `${rsvp.guests} guests`;
            const date = new Date(rsvp.timestamp).toLocaleDateString();
            
            return `
                <div class="rsvp-entry ${statusClass}">
                    <div class="rsvp-entry-header">
                        <div class="rsvp-name">${rsvp.name}</div>
                        <div class="rsvp-actions">
                            <div class="rsvp-status ${statusClass}">${statusText}</div>
                            <div class="action-buttons">
                                <button class="edit-btn" onclick="editRSVP(${index})" title="Edit RSVP">✏️</button>
                                <button class="delete-btn" onclick="deleteRSVP(${index})" title="Delete RSVP">🗑️</button>
                            </div>
                        </div>
                    </div>
                    <div class="rsvp-details">
                        <strong>Email:</strong> ${rsvp.email}<br>
                        <strong>Guests:</strong> ${guestText}<br>
                        <strong>Submitted:</strong> ${date}
                    </div>
                    ${rsvp.message ? `<div class="rsvp-message">"${rsvp.message}"</div>` : ''}
                </div>
            `;
        }).join('');
        
    } else {
        // Real mode - show Formspree info
        document.getElementById('attendingCount').textContent = '📧';
        document.getElementById('notAttendingCount').textContent = '📧';
        document.getElementById('totalGuestsCount').textContent = '📧';
        
        // Display helpful message
        const entriesContainer = document.getElementById('rsvpEntries');
        entriesContainer.innerHTML = `
            <div class="formspree-info">
                <div class="info-icon">📧</div>
                <h4>RSVPs Managed via Email</h4>
                <p>All RSVP submissions are sent directly to Teja & Supraja's email inbox!</p>
                <div class="info-details">
                    <p><strong>✅ Real-time notifications</strong> - Get notified instantly when someone RSVPs</p>
                    <p><strong>📊 Central tracking</strong> - All submissions in one place</p>
                    <p><strong>📥 Easy export</strong> - Download all RSVPs as CSV from Formspree</p>
                    <p><strong>🛡️ Spam protection</strong> - Built-in spam filtering</p>
                </div>
                <div class="info-note">
                    <p><em>💡 Tip: Enable "Demo Mode" to test edit/delete features with local data!</em></p>
                </div>
            </div>
        `;
    }
}

function exportRSVPs() {
    // With Formspree, export is done through the Formspree dashboard
    showNotification('📧 Export RSVPs through your Formspree dashboard! Check your email for the link.', 'info');
}

// Edit and Delete RSVP Functions
let currentEditIndex = -1;

function editRSVP(index) {
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    const rsvp = rsvps[index];
    
    if (!rsvp) return;
    
    currentEditIndex = index;
    
    // Populate edit form
    document.getElementById('editName').value = rsvp.name;
    document.getElementById('editEmail').value = rsvp.email;
    document.getElementById('editGuests').value = rsvp.guests;
    document.getElementById('editMessage').value = rsvp.message || '';
    
    // Set attendance buttons
    selectEditAttendance(rsvp.attending);
    
    // Show edit modal
    const modal = document.getElementById('editRSVPModal');
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s ease';
        modal.style.opacity = '1';
    }, 10);
}

function deleteRSVP(index) {
    if (!confirm('Are you sure you want to delete this RSVP? This action cannot be undone.')) {
        return;
    }
    
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    const deletedRSVP = rsvps[index];
    
    rsvps.splice(index, 1);
    localStorage.setItem('rsvps', JSON.stringify(rsvps));
    
    // Reload the RSVP data to update counts
    loadRSVPData();
    
    showNotification(`RSVP for ${deletedRSVP.name} deleted successfully! 🗑️`, 'success');
}

function selectEditAttendance(value) {
    // Remove selected class from all buttons
    document.querySelectorAll('#editRSVPModal .attendance-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    const selectedBtn = document.querySelector(`#editRSVPModal .attendance-${value}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    // Set the hidden input value
    const hiddenInput = document.getElementById('editAttending');
    if (hiddenInput) {
        hiddenInput.value = value;
    }
}

function closeEditRSVPModal() {
    const modal = document.getElementById('editRSVPModal');
    if (!modal) return;
    
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        currentEditIndex = -1;
    }, 300);
}

// Handle edit form submission
document.getElementById('editRSVPForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (currentEditIndex === -1) return;
    
    const formData = new FormData(this);
    const rsvps = JSON.parse(localStorage.getItem('rsvps') || '[]');
    
    // Update the RSVP at the current index
    rsvps[currentEditIndex] = {
        name: formData.get('name'),
        email: formData.get('email'),
        guests: formData.get('guests'),
        attending: formData.get('attending'),
        message: formData.get('message'),
        timestamp: rsvps[currentEditIndex].timestamp // Keep original timestamp
    };
    
    localStorage.setItem('rsvps', JSON.stringify(rsvps));
    
    // Reload the RSVP data to update counts
    loadRSVPData();
    
    // Close edit modal
    closeEditRSVPModal();
    
    showNotification('RSVP updated successfully! ✏️', 'success');
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const rsvpModal = document.getElementById('rsvpModal');
    const editModal = document.getElementById('editRSVPModal');
    
    if (event.target === rsvpModal) {
        closeRSVPModal();
    }
    
    if (event.target === editModal) {
        closeEditRSVPModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const rsvpModal = document.getElementById('rsvpModal');
        const editModal = document.getElementById('editRSVPModal');
        
        if (rsvpModal && rsvpModal.style.display === 'flex') {
            closeRSVPModal();
        }
        
        if (editModal && editModal.style.display === 'flex') {
            closeEditRSVPModal();
        }
    }
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
    
    // Create bulletproof RSVP handler immediately
    createBulletproofRSVPHandler();
    
    // Create bulletproof back to story handler immediately
    createBulletproofBackHandler();
    
    // Re-create bulletproof handlers every 3 seconds to ensure they're always working
    setInterval(createBulletproofRSVPHandler, 3000);
    setInterval(createBulletproofBackHandler, 3000);
    
    // Also create handler when page becomes visible (in case of tab switching)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            setTimeout(createBulletproofRSVPHandler, 500);
            setTimeout(createBulletproofBackHandler, 500);
        }
    });
    
    // Create handler on window focus (in case of window switching)
    window.addEventListener('focus', function() {
        setTimeout(createBulletproofRSVPHandler, 500);
        setTimeout(createBulletproofBackHandler, 500);
    });
    
    // Event delegation as ultimate backup - catches clicks even if button handlers fail
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'rsvpButton') {
            console.log('RSVP button clicked via event delegation (backup)');
            e.preventDefault();
            e.stopPropagation();
            window.scrollToRSVP();
        }
        
        // Also handle back to story button
        if (e.target && e.target.classList.contains('back-to-story-btn')) {
            console.log('Back to story button clicked via event delegation (backup)');
            e.preventDefault();
            e.stopPropagation();
            window.scrollToSection('hero');
        }
    });
    
    // Also catch mousedown events as backup
    document.addEventListener('mousedown', function(e) {
        if (e.target && e.target.id === 'rsvpButton') {
            console.log('RSVP button mousedown via event delegation (backup)');
            e.preventDefault();
            e.stopPropagation();
            window.scrollToRSVP();
        }
        
        // Also handle back to story button
        if (e.target && e.target.classList.contains('back-to-story-btn')) {
            console.log('Back to story button mousedown via event delegation (backup)');
            e.preventDefault();
            e.stopPropagation();
            window.scrollToSection('hero');
        }
    });
    
    // Start fun facts rotation
    setTimeout(() => {
        updateFunFact(); // Show first fact
        setInterval(updateFunFact, 4000); // Change every 4 seconds
    }, 2000);
    
    // Start RSVP fun facts carousel
    startRSVPFunFacts();
    
    // Start bee guides when RSVP section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'rsvp') {
                setTimeout(() => {
                    startBeeGuides();
                }, 1000);
            }
        });
    });
    
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
        observer.observe(rsvpSection);
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
