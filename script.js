// Simple initialization
document.addEventListener('DOMContentLoaded', function() {
    setupRSVPButton();
    createBulletproofBackHandler();
});

// Simple and reliable RSVP scroll function
window.scrollToRSVP = function() {
    console.log('RSVP button clicked');
    
    // Add visual feedback
    const button = document.getElementById('rsvpButton');
    if (button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Simple scroll to RSVP section
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
        rsvpSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Fallback
        window.location.hash = '#rsvp';
    }
};

// Simple RSVP button setup
function setupRSVPButton() {
    const rsvpButton = document.getElementById('rsvpButton');
    if (rsvpButton) {
        // Simple click handler
        rsvpButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollToRSVP();
    });
    
        // Add hover effect
        rsvpButton.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        rsvpButton.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        console.log('RSVP button setup complete');
    }
}

// Bulletproof Back to Story button handler
function createBulletproofBackHandler() {
    const backButton = document.querySelector('.back-to-story-btn');
    if (!backButton) {
        console.log('Back to story button not found, will retry...');
        return;
    }
    
    // Remove all existing event listeners by cloning the button
    const newButton = backButton.cloneNode(true);
    backButton.parentNode.replaceChild(newButton, backButton);
    
    // Add multiple event listeners for maximum reliability
    newButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Back to story button clicked via addEventListener');
        window.showPostcardStory();
        return false;
    });
    
    newButton.addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Back to story button mousedown');
        window.showPostcardStory();
        return false;
    });
    
    newButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Back to story button touchstart');
        window.showPostcardStory();
        return false;
    });
    
    // Also keep the onclick attribute as backup
    newButton.setAttribute('onclick', 'window.showPostcardStory(); return false;');
    
    // Add visual feedback on hover
    newButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.2s ease';
    });
    
    newButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    console.log('Bulletproof back to story handler attached');
}

// Bee Cursor Fallback - Ensure bee cursor always works
function ensureBeeCursor() {
    const beeCursorSVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48dGV4dCB5PSIyNCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzhmNDUxMyI+8J+QvTwvdGV4dD48L3N2Zz4=';
    const honeyCursorSVG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48dGV4dCB5PSIyNCIgZm9udC1zaXplPSIyNiIgZmlsbD0iI2ZmOGMwMCI+8J+QvzwvdGV4dD48L3N2Zz4=';
    
    // Apply bee cursor to all elements
    document.body.style.cursor = beeCursorSVG + ', auto';
    
    // Apply to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [onclick], [role="button"], .clickable, .carousel-btn, .gender-btn, .open-invitation-btn, .cta-button, .nav-link, .instagram-link');
    interactiveElements.forEach(el => {
        el.style.cursor = beeCursorSVG + ', pointer';
        
        // Add hover effect
        el.addEventListener('mouseenter', () => {
            el.style.cursor = honeyCursorSVG + ', pointer';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.cursor = beeCursorSVG + ', pointer';
        });
    });
    
    // Apply to input fields
    const inputElements = document.querySelectorAll('input, textarea, select');
    inputElements.forEach(el => {
        el.style.cursor = beeCursorSVG + ', text';
    });
    
    console.log('Bee cursor applied via JavaScript fallback');
}

// Reapply bee cursor when new elements are added
function reapplyBeeCursor() {
    setTimeout(ensureBeeCursor, 100);
}

// Watch for dynamically added elements
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
            reapplyBeeCursor();
        }
    });
});

// Start observing when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Postcard Opening Animation
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, setting up postcard');
    
    // Ensure bee cursor is applied
    ensureBeeCursor();
    
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
    console.log('Opening invitation with honey bee magic');
    const postcardOverlay = document.getElementById('postcard-overlay');
    const mainNavbar = document.getElementById('main-navbar');
    const heroSection = document.getElementById('home');
    
    if (!postcardOverlay || !mainNavbar) {
        console.log('Elements not found for invitation opening');
        return;
    }
    
    // Add honey bee magic to button
    const openBtn = document.querySelector('.open-invitation-btn');
    if (openBtn) {
        openBtn.style.opacity = '0.8';
        openBtn.style.transform = 'scale(0.95)';
        openBtn.textContent = '🍯 Buzzing...';
    }
    
    // Create honey drip particles
    createHoneyDrips();
    
    // Create floating bees during transition
    createTransitionBees();
    
    // Start the envelope closing animation
    postcardOverlay.classList.add('closing');
    
    // Create honey-themed transition overlay
    const honeyOverlay = document.createElement('div');
    honeyOverlay.className = 'honey-transition-overlay';
    document.body.appendChild(honeyOverlay);
    
    // Quick transition - show main content faster
    setTimeout(() => {
        // Prepare main content
        mainNavbar.style.display = 'block';
        mainNavbar.style.opacity = '0';
        mainNavbar.style.transform = 'translateY(-15px)';
        
        if (heroSection) {
            heroSection.style.opacity = '0';
            heroSection.style.transform = 'translateY(15px)';
        }
        
        // Fade in honey overlay
        honeyOverlay.style.opacity = '1';
        
        // Quick reveal of main content
        setTimeout(() => {
            mainNavbar.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            mainNavbar.style.opacity = '1';
            mainNavbar.style.transform = 'translateY(0)';
            mainNavbar.classList.add('visible');
            
            if (heroSection) {
                heroSection.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
                heroSection.style.opacity = '1';
                heroSection.style.transform = 'translateY(0)';
            }
            
            // Remove honey overlay quickly
            setTimeout(() => {
                honeyOverlay.style.opacity = '0';
                setTimeout(() => {
                    if (document.body.contains(honeyOverlay)) {
                        document.body.removeChild(honeyOverlay);
                    }
                }, 300);
            }, 500);
            
        }, 100);
        
        // Quick scroll to top
        setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        }, 200);
        
    }, 200);
    
    // Hide postcard overlay quickly
    setTimeout(() => {
        postcardOverlay.style.display = 'none';
        postcardOverlay.classList.remove('closing');
        
        // Reset button state
        if (openBtn) {
            openBtn.style.opacity = '1';
            openBtn.style.transform = 'scale(1)';
            openBtn.textContent = 'Open the Invitation';
        }
    }, 800);
}

// Create honey drip particles during transition
function createHoneyDrips() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const drip = document.createElement('div');
            drip.className = 'honey-drip-transition';
            drip.style.left = Math.random() * window.innerWidth + 'px';
            drip.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(drip);
            
            setTimeout(() => {
                if (document.body.contains(drip)) {
                    document.body.removeChild(drip);
                }
            }, 2000);
        }, i * 100);
    }
}

// Create floating bees during transition
function createTransitionBees() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const bee = document.createElement('div');
            bee.className = 'transition-bee';
            bee.textContent = '🐝';
            bee.style.left = Math.random() * window.innerWidth + 'px';
            bee.style.top = Math.random() * window.innerHeight + 'px';
            bee.style.animationDelay = Math.random() * 0.3 + 's';
            document.body.appendChild(bee);
            
            setTimeout(() => {
                if (document.body.contains(bee)) {
                    document.body.removeChild(bee);
                }
            }, 1500);
        }, i * 200);
    }
}

// Function to show the postcard story (for "Back to Our Story" button)
function showPostcardStory() {
    console.log('Showing postcard story directly');
    const postcardOverlay = document.getElementById('postcard-overlay');
    const mainNavbar = document.getElementById('main-navbar');
    const envelope = document.getElementById('envelope');
    const postcard = document.getElementById('postcard');
    
    if (!postcardOverlay || !envelope || !postcard) {
        console.log('Postcard elements not found');
        return;
    }
    
    // Mobile-specific handling
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        console.log('Mobile device - ensuring proper postcard sizing');
        postcardOverlay.style.height = '100vh';
        postcardOverlay.style.width = '100vw';
        postcardOverlay.style.overflow = 'auto';
        postcard.style.height = '100vh';
        postcard.style.width = '100vw';
        postcard.style.overflow = 'auto';
    }
    
    // Hide main navbar
    if (mainNavbar) {
        mainNavbar.style.display = 'none';
    }
    
    // Show postcard overlay
    postcardOverlay.style.display = 'flex';
    postcardOverlay.style.opacity = '0';
    postcardOverlay.style.transform = 'scale(0.8)';
    
    // Set envelope as clicked and postcard as open immediately (skip envelope animation)
    envelope.classList.add('clicked');
    postcard.classList.add('open');
    
    // Animate in the overlay with postcard already open
    setTimeout(() => {
        postcardOverlay.style.transition = 'all 0.5s ease';
        postcardOverlay.style.opacity = '1';
        postcardOverlay.style.transform = 'scale(1)';
    }, 10);
}

// Make showPostcardStory globally available
window.showPostcardStory = showPostcardStory;

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

// Function to handle gender prediction selection
function selectGender(value) {
    // Remove selected class from all gender buttons
    document.querySelectorAll('.gender-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked button
    const selectedBtn = document.querySelector(`.gender-${value}`);
    if (selectedBtn) {
        selectedBtn.classList.add('selected');
    }
    
    // Set the hidden input value
    const hiddenInput = document.getElementById('gender-prediction');
    if (hiddenInput) {
        hiddenInput.value = value;
    }
    
    // Show dress code message based on selection
    let message = '';
    switch(value) {
        case 'boy':
            message = '🐝 Great choice! Don\'t forget to wear yellow to support our buzzing boy!';
            break;
        case 'girl':
            message = '👑 Perfect! Remember to wear pink to support our queen bee!';
            break;
        case 'surprise':
            message = '🍯 Sweet! Either way, our little honey bee will be perfect!';
            break;
    }
    
    // Show notification
    if (message) {
        showNotification(message);
    }
}

// Function to add event to calendar
function addToCalendar() {
    // Find the AddEvent button and trigger it
    const addEventBtn = document.querySelector('.addeventatc');
    if (addEventBtn) {
        addEventBtn.click();
    } else {
        // Fallback: create a temporary AddEvent button
        const tempBtn = document.createElement('div');
        tempBtn.className = 'addeventatc';
        tempBtn.title = 'Add to Calendar';
        tempBtn.innerHTML = 'Add to Calendar';
        
        // Add the required spans for AddEvent
        const startSpan = document.createElement('span');
        startSpan.className = 'start';
        startSpan.textContent = '10/25/2025 11:00 AM';
        
        const endSpan = document.createElement('span');
        endSpan.className = 'end';
        endSpan.textContent = '10/25/2025 02:00 PM';
        
        const timezoneSpan = document.createElement('span');
        timezoneSpan.className = 'timezone';
        timezoneSpan.textContent = 'America/Los_Angeles';
        
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title';
        titleSpan.textContent = 'Baby Bee Gender Reveal Party';
        
        const descriptionSpan = document.createElement('span');
        descriptionSpan.className = 'description';
        descriptionSpan.textContent = 'Join Teja & Supraja for their gender reveal celebration! What will baby bee? 🐝';
        
        const locationSpan = document.createElement('span');
        locationSpan.className = 'location';
        locationSpan.textContent = '6565 Scenery Ct, San Jose, CA 95120';
        
        const organizerSpan = document.createElement('span');
        organizerSpan.className = 'organizer';
        organizerSpan.textContent = 'Teja & Supraja';
        
        const organizerEmailSpan = document.createElement('span');
        organizerEmailSpan.className = 'organizer_email';
        organizerEmailSpan.textContent = 'tejamukka@gmail.com';
        
        tempBtn.appendChild(startSpan);
        tempBtn.appendChild(endSpan);
        tempBtn.appendChild(timezoneSpan);
        tempBtn.appendChild(titleSpan);
        tempBtn.appendChild(descriptionSpan);
        tempBtn.appendChild(locationSpan);
        tempBtn.appendChild(organizerSpan);
        tempBtn.appendChild(organizerEmailSpan);
        
        // Add to body temporarily and click
        document.body.appendChild(tempBtn);
        tempBtn.click();
        document.body.removeChild(tempBtn);
    }
}

// Fun Facts Carousel for Event Details
let currentFunFact = 1;
const totalFunFacts = 5;

function nextFunFact() {
    currentFunFact++;
    if (currentFunFact > totalFunFacts) {
        currentFunFact = 1;
    }
    showFunFact(currentFunFact);
}

function previousFunFact() {
    currentFunFact--;
    if (currentFunFact < 1) {
        currentFunFact = totalFunFacts;
    }
    showFunFact(currentFunFact);
}

function showFunFact(factNumber) {
    // Hide all facts
    for (let i = 1; i <= totalFunFacts; i++) {
        const fact = document.getElementById(`funFact${i}`);
        const dot = document.querySelector(`.fun-fact-indicator .dot:nth-child(${i})`);
        if (fact) fact.classList.remove('active');
        if (dot) dot.classList.remove('active');
    }
    
    // Show current fact
    const currentFact = document.getElementById(`funFact${factNumber}`);
    const currentDot = document.querySelector(`.fun-fact-indicator .dot:nth-child(${factNumber})`);
    if (currentFact) currentFact.classList.add('active');
    if (currentDot) currentDot.classList.add('active');
    
    currentFunFact = factNumber;
}

// Auto-advance fun facts
setInterval(() => {
    nextFunFact();
}, 4000);

// RSVP Facts Carousel
let currentRSVPFact = 1;
const totalRSVPFacts = 5;

function nextRSVPFact() {
    currentRSVPFact++;
    if (currentRSVPFact > totalRSVPFacts) {
        currentRSVPFact = 1;
    }
    showRSVPFact(currentRSVPFact);
}

function previousRSVPFact() {
    currentRSVPFact--;
    if (currentRSVPFact < 1) {
        currentRSVPFact = totalRSVPFacts;
    }
    showRSVPFact(currentRSVPFact);
}

function showRSVPFact(factNumber) {
    // Hide all facts
    for (let i = 1; i <= totalRSVPFacts; i++) {
        const fact = document.getElementById(`rsvpFact${i}`);
        const dot = document.querySelector(`[data-fact="${i}"]`);
        if (fact) fact.classList.remove('active');
        if (dot) dot.classList.remove('active');
    }
    
    // Show current fact
    const currentFact = document.getElementById(`rsvpFact${factNumber}`);
    const currentDot = document.querySelector(`[data-fact="${factNumber}"]`);
    if (currentFact) currentFact.classList.add('active');
    if (currentDot) currentDot.classList.add('active');
    
    currentRSVPFact = factNumber;
}

// Auto-advance RSVP facts
setInterval(() => {
    nextRSVPFact();
}, 4000);

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
    
    // Wait for DOM to be ready if needed
    const scrollToElement = () => {
        const element = document.getElementById(sectionId);
        if (!element) {
            console.log('Element not found:', sectionId, 'retrying...');
            // Retry after a short delay
            setTimeout(scrollToElement, 100);
        return;
    }
    
        console.log('Element found, scrolling to:', sectionId);
        
        // Multiple scroll methods for maximum reliability
        try {
            // Method 1: scrollIntoView with smooth behavior
            element.scrollIntoView({
            behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
        });
        
        // Method 2: Fallback with window.scrollTo
        setTimeout(() => {
                const rect = element.getBoundingClientRect();
                const scrollTop = window.pageYOffset + rect.top - 80; // 80px offset from top
            
            window.scrollTo({
                top: scrollTop,
                behavior: 'smooth'
            });
            }, 50);
        
            // Method 3: Final fallback with instant scroll
        setTimeout(() => {
                const rect = element.getBoundingClientRect();
            if (rect.top < 0 || rect.top > window.innerHeight) {
                    console.log('Using instant scroll fallback for:', sectionId);
                window.scrollTo({
                        top: element.offsetTop - 80,
                    behavior: 'auto'
                });
            }
            }, 300);
        
    } catch (error) {
        console.log('Scroll error:', error);
        // Ultimate fallback
            window.location.hash = '#' + sectionId;
    }
};

    // Start the scroll process
    scrollToElement();
}

// Make scrollToSection globally available
window.scrollToSection = scrollToSection;


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
    
    // Handle window resize for mobile optimization
    window.addEventListener('resize', function() {
        const isMobile = window.innerWidth <= 768;
        const postcardOverlay = document.getElementById('postcard-overlay');
        
        if (postcardOverlay && isMobile) {
            postcardOverlay.style.height = '100vh';
            postcardOverlay.style.width = '100vw';
        }
    });

// Registry Link Handling
document.querySelectorAll('.registry-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const itemName = this.closest('.registry-item').querySelector('h3').textContent;
        showNotification(`Opening ${itemName} registry... 🛍️`, 'info');
        
        // Allow the link to open normally - no preventDefault()
        // The link will open in a new tab as specified by target="_blank"
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
    
    // Submit to Formspree
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
    // Show Formspree info
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
            </div>
        `;
}

function exportRSVPs() {
    // With Formspree, export is done through the Formspree dashboard
    showNotification('📧 Export RSVPs through your Formspree dashboard! Check your email for the link.', 'info');
}


// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const rsvpModal = document.getElementById('rsvpModal');
    
    if (event.target === rsvpModal) {
        closeRSVPModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const rsvpModal = document.getElementById('rsvpModal');
        
        if (rsvpModal && rsvpModal.style.display === 'flex') {
            closeRSVPModal();
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing...');
    
    // Mobile-specific initialization
    if (window.innerWidth <= 768) {
        console.log('Mobile device detected - applying mobile optimizations');
        
        // Ensure postcard overlay is properly sized for mobile
        const postcardOverlay = document.getElementById('postcard-overlay');
        if (postcardOverlay) {
            postcardOverlay.style.height = '100vh';
            postcardOverlay.style.width = '100vw';
        }
        
        // Add touch event support for envelope
        const envelope = document.getElementById('envelope');
        if (envelope) {
            envelope.addEventListener('touchstart', function(e) {
            e.preventDefault();
                openPostcard();
            }, { passive: false });
        }
    }
    
    // Add a welcome message
    setTimeout(() => {
        showNotification('Welcome to our Baby Bee Gender Reveal! 🐝', 'success');
    }, 1000);
    
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

// Gender Prediction Poll Function
function selectPollOption(option) {
    // Remove selected class from all options
    document.querySelectorAll('.poll-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    event.target.closest('.poll-option').classList.add('selected');
    
    // Show a fun message based on selection
    let message = '';
    switch(option) {
        case 'boy':
            message = '🐝 Buzzing boy it is! Can\'t wait to meet our little drone bee!';
            break;
        case 'girl':
            message = '👑 Queen bee vibes! Our little princess will rule the hive!';
            break;
        case 'surprise':
            message = '🍯 Sweet surprise! Either way, our little bee will be perfect!';
            break;
    }
    
    // Show notification
    showNotification(message);
    
    // Optional: Store the selection (you could send this to a server)
    localStorage.setItem('genderPrediction', option);
}

// Baby Facts Carousel
let currentBabyFact = 0;
const totalBabyFacts = 6;

function nextBabyFact() {
    currentBabyFact++;
    if (currentBabyFact >= totalBabyFacts) {
        currentBabyFact = 0;
    }
    showBabyFact(currentBabyFact);
}

function previousBabyFact() {
    currentBabyFact--;
    if (currentBabyFact < 0) {
        currentBabyFact = totalBabyFacts - 1;
    }
    showBabyFact(currentBabyFact);
}

function showBabyFact(index) {
    // Hide all slides
    document.querySelectorAll('.carousel-slide').forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    
    // Update dots
    document.querySelectorAll('.dot').forEach(dot => {
        dot.classList.remove('active');
    });
    
    const dots = document.querySelectorAll('.dot');
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentBabyFact = index;
}

// Auto-advance baby facts carousel
setInterval(() => {
    nextBabyFact();
}, 5000);

// Add click handlers for dots
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showBabyFact(index);
        });
    });
});
