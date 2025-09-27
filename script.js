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
    
    // Apply bee cursor to ALL elements - most aggressive approach
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        if (!el.style.cursor || el.style.cursor === 'default' || el.style.cursor === 'auto') {
            el.style.cursor = beeCursorSVG + ', auto';
        }
    });
    
    // Apply to document body and html
    document.documentElement.style.cursor = beeCursorSVG + ', auto';
    document.body.style.cursor = beeCursorSVG + ', auto';
    
    // Apply to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [onclick], [role="button"], .clickable, .carousel-btn, .gender-btn, .open-invitation-btn, .cta-button, .nav-link, .instagram-link, .honey-drop');
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
    
    console.log('Bee cursor applied via JavaScript fallback to all elements');
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
    
    // Ensure bee cursor is applied
    ensureBeeCursor();
    
    // Reapply bee cursor every 2 seconds to ensure it's always maintained
    setInterval(ensureBeeCursor, 2000);
    
    // Also reapply on mouse movement to catch any missed elements
    document.addEventListener('mousemove', function() {
        ensureBeeCursor();
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
    const postcardOverlay = document.getElementById('postcard-overlay');
    
    if (!envelope || !postcard || !postcardOverlay) {
        console.log('Elements not found');
        return;
    }
    
    // Hide envelope and mark overlay as postcard-open
    envelope.classList.add('clicked');
    postcardOverlay.classList.add('postcard-open');
    
    // Show postcard after a short delay
    setTimeout(() => {
        postcard.classList.add('open');
        console.log('Postcard opened');
        
        // Show scroll indicator on mobile after postcard is open
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            setTimeout(() => {
                const scrollIndicator = document.querySelector('.scroll-indicator');
                if (scrollIndicator) {
                    scrollIndicator.classList.add('show');
                    // Hide scroll indicator after 5 seconds
                    setTimeout(() => {
                        scrollIndicator.classList.remove('show');
                    }, 5000);
                }
            }, 1000); // Show after 1 second to let user see the content
        }
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
        postcardOverlay.classList.remove('postcard-open');
        
        // Reset all postcard states
        const envelope = document.getElementById('envelope');
        const postcard = document.getElementById('postcard');
        const floatingBtn = document.querySelector('.floating-open-btn');
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (envelope) envelope.classList.remove('clicked');
        if (postcard) postcard.classList.remove('open');
        if (floatingBtn) floatingBtn.classList.remove('show');
        if (scrollIndicator) scrollIndicator.classList.remove('show');
        
        // Restore main content sections
        const mainSections = document.querySelectorAll('#home, #rsvp, #registry, #details, #main-navbar');
        mainSections.forEach(section => {
            if (section) {
                section.style.display = '';
            }
        });
        
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
        postcardOverlay.style.display = 'flex';
        postcardOverlay.style.flexDirection = 'column';
        postcard.style.height = '100vh';
        postcard.style.width = '100vw';
        postcard.style.overflow = 'auto';
        postcard.style.display = 'flex';
        postcard.style.flexDirection = 'column';
        
        // Ensure journey content is scrollable
        const journeyContent = postcard.querySelector('.journey-content');
        if (journeyContent) {
            journeyContent.style.flex = '1';
            journeyContent.style.overflowY = 'auto';
            journeyContent.style.webkitOverflowScrolling = 'touch';
            journeyContent.style.minHeight = '0';
        }
        
        // Ensure all journey items are visible
        const journeyItems = postcard.querySelectorAll('.journey-item');
        journeyItems.forEach(item => {
            item.style.display = 'flex';
            item.style.width = '100%';
            item.style.marginBottom = '10px';
        });
    }
    
    // Hide main navbar
    if (mainNavbar) {
        mainNavbar.style.display = 'none';
    }
    
    // Show postcard overlay
    postcardOverlay.style.display = 'flex';
    postcardOverlay.style.opacity = '0';
    postcardOverlay.style.transform = 'scale(0.8)';
    postcardOverlay.classList.add('show');
    
    // Hide main content sections to prevent bleed-through
    const mainSections = document.querySelectorAll('#home, #rsvp, #registry, #details, #main-navbar');
    mainSections.forEach(section => {
        if (section) {
            section.style.display = 'none';
        }
    });
    
    // Reset all states to show envelope first
    envelope.classList.remove('clicked');
    postcard.classList.remove('open');
    postcardOverlay.classList.remove('postcard-open');
    
    // Hide scroll indicator when showing envelope
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) scrollIndicator.classList.remove('show');
    
    // Animate in the overlay with envelope visible
    setTimeout(() => {
        postcardOverlay.style.transition = 'all 0.5s ease';
        postcardOverlay.style.opacity = '1';
        postcardOverlay.style.transform = 'scale(1)';
    }, 10);
}

// Make showPostcardStory globally available
window.showPostcardStory = showPostcardStory;

// Guest Messages Tab Functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.closest('.tab-btn').classList.add('active');
    
    // If switching to public tab, reload messages and Disqus
    if (tabName === 'public') {
        setTimeout(() => {
            // Reload messages carousel
            loadDisqusMessages();
            
            // Reload Disqus if available
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function () {
                        this.page.identifier = 'baby-bee-gender-reveal-guest-messages';
                        this.page.url = window.location.href + '#guest-messages';
                    }
                });
            }
        }, 100);
    }
}

// Messages Carousel Functionality
let currentMessageSlide = 0;
let messageSlides = [];
let totalSlides = 0;
let autoRotateInterval = null;

// Featured Messages Data - You can manually add real messages here
const featuredMessages = [
    // Add real user messages here as they come in
    // Example format:
    // {
    //     author: "Sarah M.",
    //     content: "I'm so excited for you both! I predict it's going to be a little queen bee! 👑",
    //     prediction: "Queen Bee 👑",
    //     timestamp: "2025-01-15"
    // }
];

// Sample messages (fallback if no real messages)
const sampleMessages = [
    {
        author: "Tharun",
        content: "I'm so excited for you both! I predict it's going to be a little queen bee! 👑",
        prediction: "Queen Bee 👑",
        timestamp: "2025-01-15"
    },
    {
        author: "Samyuktha",
        content: "Congratulations! Can't wait to meet the little one. My guess is a buzzing boy! 🐝",
        prediction: "Buzzing Boy 🐝",
        timestamp: "2025-01-14"
    },
    {
        author: "Soumya",
        content: "Either way, this baby will be absolutely perfect! So happy for you! 💕",
        prediction: "Sweet Surprise 🍯",
        timestamp: "2025-01-13"
    },
    {
        author: "Srujan",
        content: "This is such a beautiful way to share your journey! Wishing you all the best! 🌟",
        prediction: "Queen Bee 👑",
        timestamp: "2025-01-12"
    }
];

// Load and display messages
function loadMessages() {
    const messagesToShow = featuredMessages.length > 0 ? featuredMessages : sampleMessages;
    const track = document.getElementById('messages-track');
    
    if (!track) {
        console.log('Messages track not found - skipping message loading');
        return;
    }
    
    // Show loading state
    track.innerHTML = `
        <div class="loading-messages">
            <div class="loading-spinner">🍯</div>
            <p>Loading sweet messages...</p>
        </div>
    `;
    
    // Small delay to show loading state
    setTimeout(() => {
        // Clear loading message
        track.innerHTML = '';
        
        if (messagesToShow.length === 0) {
            // Show empty state
            track.innerHTML = `
                <div class="empty-messages">
                    <div class="empty-icon">💌</div>
                    <p>No messages yet. Be the first to share your excitement!</p>
                </div>
            `;
            totalSlides = 1;
            currentMessageSlide = 0;
            updateCarouselDots();
            updateCarousel();
            return;
        }
        
        // Create message slides
        messagesToShow.forEach((message, index) => {
            const slide = document.createElement('div');
            slide.className = 'message-slide';
            slide.style.minWidth = '100%';
            slide.style.flexShrink = '0';
            slide.innerHTML = `
                <div class="message-card">
                    <div class="message-author">${message.author}</div>
                    <div class="message-content">"${message.content}"</div>
                    <div class="message-prediction">${message.prediction}</div>
                    <div class="message-timestamp">${formatTimestamp(message.timestamp)}</div>
                </div>
            `;
            track.appendChild(slide);
        });
        
        // Update carousel variables
        messageSlides = document.querySelectorAll('.message-slide');
        totalSlides = messageSlides.length;
        
        // Set carousel track width to accommodate all slides
        const track = document.getElementById('messages-track');
        if (track) {
            track.style.width = `${totalSlides * 100}%`;
        }
        
        // Update dots
        updateCarouselDots();
        
        // Reset to first slide
        currentMessageSlide = 0;
        updateCarousel();
        
        // Start auto-rotation if we have multiple messages
        if (totalSlides > 1) {
            startAutoRotation();
        }
        
    }, 500); // 500ms delay to show loading state
}

// Format timestamp for display
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
}

// Update carousel dots based on number of slides
function updateCarouselDots() {
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!dotsContainer) {
        console.log('Carousel dots container not found - skipping dots creation');
        return;
    }
    
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = `dot ${i === 0 ? 'active' : ''}`;
        dot.onclick = () => currentSlide(i + 1);
        dotsContainer.appendChild(dot);
    }
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
                title: "You're un-BEE-lievable! 🐝",
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
document.querySelectorAll('.registry-link, .success-registry-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const itemName = this.closest('.registry-item, .success-registry-single')?.querySelector('h3, h5')?.textContent || 'Amazon Registry';
        showNotification(`🎁 Opening ${itemName} registry... Thanks for helping us prepare for Baby Bee! 🛍️`, 'success');
        
        // Track registry view
        if (window.guestPersonalization) {
            window.guestPersonalization.markSectionComplete('registry');
        }
        
        // Allow the link to open normally - no preventDefault()
        // The link will open in a new tab as specified by target="_blank"
    });
});

// Map Link Handling
document.querySelector('.map-link').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('🗺️ Opening directions to Teja & Suppu\'s Hive... See you there! 🏠', 'success');
    
    // In a real app, you would open Google Maps or Apple Maps
    setTimeout(() => {
        showNotification('📍 Map would open here! Get ready for the party! 🎉', 'success');
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
                
                // Send confirmation email to the user
                setTimeout(() => {
                    sendRSVPConfirmationEmail(rsvpData);
                }, 1000);
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
    showNotification('📧 Export RSVPs through your Formspree dashboard! Check your email for the link. 🎉', 'success');
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

// Honey Drop Game System (GitHub Pages Compatible)
let honeyGame = {
    isActive: false,
    score: 0,
    gameInterval: null,
    dropInterval: null,
    collectedFacts: [],
    
    facts: [
        "🍯 At 5 months, I can taste what mommy eats through the amniotic fluid!",
        "👂 I can hear your conversations and recognize familiar voices already!",
        "🎵 Classical music helps my brain development - just like Pooh's humming!",
        "💕 My heart beats twice as fast as mommy's - about 150 beats per minute!",
        "👶 I'm about the size of a banana and growing stronger every day!",
        "🌙 I have my own sleep schedule and dream cycles in the womb!",
        "🤸 I practice breathing movements even though I don't need air yet!",
        "👀 My eyes are developing and I can see light filtering through mommy's belly!",
        "🦴 My bones are hardening and I'm developing my unique fingerprints!",
        "🧠 My brain is growing rapidly - 250,000 neurons per minute!",
        "💪 I can grip things with my tiny hands and even suck my thumb!",
        "🎭 I make facial expressions and might even smile in the womb!",
        "🍼 I'm practicing swallowing and my digestive system is developing!",
        "🎪 I can do somersaults and kicks - my own little circus show!",
        "💝 I can feel mommy's emotions through her heartbeat and hormones!"
    ]
};

// Start the honey drop game
function startHoneyGame() {
    const overlay = document.getElementById('honey-game-overlay');
    if (!overlay) {
        console.log('Honey game overlay not found - skipping game start');
        return;
    }
    
    // Reset game state
    honeyGame.isActive = true;
    honeyGame.score = 0;
    honeyGame.collectedFacts = [];
    
    // Show overlay
    overlay.style.display = 'flex';
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.transition = 'opacity 0.3s ease';
        overlay.style.opacity = '1';
    }, 10);
    
    // Update UI
    const honeyCount = document.getElementById('honey-count');
    const collectedFacts = document.getElementById('collected-facts');
    const gameMessage = document.getElementById('game-message');
    
    if (honeyCount) honeyCount.textContent = honeyGame.score;
    if (collectedFacts) collectedFacts.innerHTML = '';
    if (gameMessage) gameMessage.textContent = 'Click the falling honey drops to collect sweet baby facts!';
    
    // Start dropping honey
    honeyGame.dropInterval = setInterval(createHoneyDrop, 1500);
    
    // Game timer (optional - game can run indefinitely)
    setTimeout(() => {
        if (honeyGame.isActive) {
            const gameMessage = document.getElementById('game-message');
            if (gameMessage) {
                gameMessage.textContent = `Great job! You collected ${honeyGame.score} honey drops! Keep playing!`;
            }
        }
    }, 30000);
    
    console.log('Honey drop game started!');
}

// Close the honey drop game
function closeHoneyGame() {
    const overlay = document.getElementById('honey-game-overlay');
    if (!overlay) return;
    
    // Stop game
    honeyGame.isActive = false;
    if (honeyGame.dropInterval) {
        clearInterval(honeyGame.dropInterval);
        honeyGame.dropInterval = null;
    }
    
    // Save score to localStorage (GitHub Pages compatible persistence)
    const totalHoney = parseInt(localStorage.getItem('totalHoneyCollected') || '0') + honeyGame.score;
    localStorage.setItem('totalHoneyCollected', totalHoney.toString());
    localStorage.setItem('lastGameScore', honeyGame.score.toString());
    
    // Hide overlay
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        
        // Show completion message
        if (honeyGame.score > 0) {
            showNotification(`🍯 Amazing! You collected ${honeyGame.score} honey drops! Total lifetime honey: ${totalHoney}`, 'success');
        }
    }, 300);
    
    console.log(`Game ended. Score: ${honeyGame.score}, Total: ${totalHoney}`);
}

// Create a falling honey drop
function createHoneyDrop() {
    if (!honeyGame.isActive) return;
    
    const gameArea = document.getElementById('honey-game-area');
    if (!gameArea) return;
    
    const drop = document.createElement('div');
    drop.className = 'honey-drop';
    drop.innerHTML = '🍯';
    
    // Random position
    const gameAreaWidth = gameArea.offsetWidth;
    const randomX = Math.random() * (gameAreaWidth - 50);
    drop.style.left = randomX + 'px';
    drop.style.top = '-50px';
    
    // Add click handler with better event handling
    drop.addEventListener('click', function(e) {
    e.preventDefault();
            e.stopPropagation();
        console.log('Honey drop clicked!');
        collectHoneyDrop(this);
    });
        
    // Add touch handler for mobile
    drop.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
        console.log('Honey drop touched!');
        collectHoneyDrop(this);
    });
    
    // Add mousedown as backup
    drop.addEventListener('mousedown', function(e) {
            e.preventDefault();
            e.stopPropagation();
        console.log('Honey drop mousedown!');
        collectHoneyDrop(this);
    });
    
    gameArea.appendChild(drop);
    
    // Remove drop after animation completes
    setTimeout(() => {
        if (drop.parentNode && !drop.classList.contains('collected')) {
            drop.remove();
        }
    }, 4500);
}

// Collect a honey drop
function collectHoneyDrop(dropElement) {
    console.log('collectHoneyDrop called', { isActive: honeyGame.isActive, alreadyCollected: dropElement.classList.contains('collected') });
    
    if (!honeyGame.isActive || dropElement.classList.contains('collected')) {
        console.log('Honey drop collection blocked:', { isActive: honeyGame.isActive, alreadyCollected: dropElement.classList.contains('collected') });
        return;
    }
    
    dropElement.classList.add('collected');
    honeyGame.score++;
    
    console.log('Honey collected! New score:', honeyGame.score);
    
    // Update score display
    const honeyCountElement = document.getElementById('honey-count');
    if (honeyCountElement) {
        honeyCountElement.textContent = honeyGame.score;
    } else {
        console.error('honey-count element not found!');
    }
    
    // Add a random fact
    const randomFact = honeyGame.facts[Math.floor(Math.random() * honeyGame.facts.length)];
    if (!honeyGame.collectedFacts.includes(randomFact)) {
        honeyGame.collectedFacts.push(randomFact);
        addFactToCollection(randomFact);
    }
    
    // Remove the drop after animation
    setTimeout(() => {
        if (dropElement.parentNode) {
            dropElement.remove();
        }
    }, 500);
    
    // Play collection sound effect (optional)
    playHoneyCollectSound();
    
    console.log(`Honey collected! Score: ${honeyGame.score}`);
}

// Add fact to collection display
function addFactToCollection(fact) {
    const factsContainer = document.getElementById('collected-facts');
    if (!factsContainer) {
        console.log('Facts container not found - skipping fact addition');
        return;
    }
    
    const factElement = document.createElement('div');
    factElement.className = 'fact-item';
    factElement.textContent = fact;
    
    factsContainer.appendChild(factElement);
    
    // Auto-scroll to bottom
    factsContainer.scrollTop = factsContainer.scrollHeight;
    
    // Update game message
    const messages = [
        "Sweet! You found a honey fact! 🍯",
        "Buzz buzz! Another sweet discovery! 🐝",
        "Honey-licious knowledge collected! 🍯✨",
        "You're becoming a honey expert! 👑",
        "Amazing! Keep collecting those sweet facts! 🌟"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const gameMessage = document.getElementById('game-message');
    if (gameMessage) {
        gameMessage.textContent = randomMessage;
    }
}

// Play honey collect sound (optional - works on GitHub Pages)
function playHoneyCollectSound() {
    // Create a simple audio context for sound effects
    try {
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a simple "pop" sound
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
            
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    } catch (error) {
        // Silently fail if audio context is not supported
        console.log('Audio not supported, playing silently');
    }
}

// Initialize honey game stats on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show lifetime honey collected (if any)
    const totalHoney = parseInt(localStorage.getItem('totalHoneyCollected') || '0');
    if (totalHoney > 0) {
        console.log(`Welcome back! You've collected ${totalHoney} honey drops total! 🍯`);
        
        // Show this info in the notification system
        setTimeout(() => {
            showNotification(`🍯 Welcome back, honey collector! You've gathered ${totalHoney} drops total!`, 'success');
        }, 2000);
    }
});

// Make game functions globally available
window.startHoneyGame = startHoneyGame;
window.closeHoneyGame = closeHoneyGame;

// Guest Personalization System (GitHub Pages Compatible)
const guestPersonalization = {
    // Get guest data from localStorage
    getGuestData() {
        const data = localStorage.getItem('babyBeeGuestData');
        return data ? JSON.parse(data) : {
            name: '',
            visits: 0,
            firstVisit: new Date().toISOString(),
            lastVisit: new Date().toISOString(),
            predictions: [],
            completedSections: [],
            honeyCollected: 0,
            preferences: {}
        };
    },
    
    // Save guest data to localStorage
    saveGuestData(data) {
        data.lastVisit = new Date().toISOString();
        data.visits++;
        localStorage.setItem('babyBeeGuestData', JSON.stringify(data));
    },
    
    // Track section completion
    markSectionComplete(sectionId) {
        const data = this.getGuestData();
        if (!data.completedSections.includes(sectionId)) {
            data.completedSections.push(sectionId);
            this.saveGuestData(data);
            this.showSectionCompletionReward(sectionId);
        }
    },
    
    // Show personalized welcome message
    showWelcomeMessage() {
        const data = this.getGuestData();
        
        if (data.visits === 1) {
            // First time visitor
    setTimeout(() => {
                showNotification('🐝 Welcome to our Baby Bee celebration! Explore and collect honey drops! 🍯', 'success');
            }, 3000);
        } else if (data.name) {
            // Returning visitor with name
            setTimeout(() => {
                showNotification(`🍯 Welcome back, ${data.name}! You've visited ${data.visits} times and collected ${data.honeyCollected} honey drops!`, 'success');
    }, 2000);
        } else {
            // Returning visitor without name
            setTimeout(() => {
                showNotification(`🐝 Welcome back! This is visit #${data.visits}. Don't forget to RSVP! 💕`, 'success');
            }, 2000);
        }
        
        this.saveGuestData(data);
    },
    
    // Save guest prediction
    savePrediction(prediction, confidence = 'medium') {
        const data = this.getGuestData();
        const newPrediction = {
            prediction,
            confidence,
            timestamp: new Date().toISOString()
        };
        
        data.predictions.push(newPrediction);
        this.saveGuestData(data);
        
        // Show personalized message based on prediction history
        this.showPredictionMessage(data.predictions);
    },
    
    // Show prediction-based message
    showPredictionMessage(predictions) {
        if (predictions.length === 1) {
            showNotification('🎯 Your first prediction is recorded! Come back anytime to change it! 🍯', 'success');
        } else if (predictions.length > 1) {
            const lastTwo = predictions.slice(-2);
            if (lastTwo[0].prediction === lastTwo[1].prediction) {
                showNotification(`💪 You're sticking with ${lastTwo[1].prediction}! Confidence is key! 🐝`, 'success');
            } else {
                showNotification(`🤔 Changed your mind? That's okay! ${lastTwo[1].prediction} it is! 🍯`, 'info');
            }
        }
    },
    
    // Track RSVP submission
    saveRSVPData(rsvpData) {
        const data = this.getGuestData();
        data.name = rsvpData.name;
        data.email = rsvpData.email;
        data.rsvpSubmitted = true;
        data.rsvpData = rsvpData;
        this.saveGuestData(data);
        
        // Mark RSVP section as complete
        this.markSectionComplete('rsvp');
    },
    
    // Show section completion reward
    showSectionCompletionReward(sectionId) {
        const rewards = {
            'home': '🏠 You explored our story! Here\'s a bonus honey drop! 🍯',
            'rsvp': '📝 RSVP completed! You\'re officially part of the hive! 🐝',
            'registry': '🎁 Registry viewed! Thanks for helping us prepare for Baby Bee! 💕',
            'details': '📅 Event details noted! See you at the party! 🎉',
            'guest-messages': '💌 Messages section explored! Thanks for spreading the love! ✨'
        };
        
        const reward = rewards[sectionId] || '✨ Section completed! You\'re awesome! 🍯';
        showNotification(reward, 'success');
        
        // Give bonus honey for section completion
        const currentHoney = parseInt(localStorage.getItem('totalHoneyCollected') || '0');
        localStorage.setItem('totalHoneyCollected', (currentHoney + 1).toString());
    },
    
    // Get personalized content
    getPersonalizedContent() {
        const data = this.getGuestData();
        const content = {
            welcomeText: data.name ? `Welcome back, ${data.name}!` : 'Welcome to our celebration!',
            visitCount: data.visits,
            completionPercentage: Math.round((data.completedSections.length / 5) * 100),
            lastPrediction: data.predictions.length > 0 ? data.predictions[data.predictions.length - 1].prediction : null,
            suggestedAction: this.getSuggestedAction(data)
        };
        
        return content;
    },
    
    // Get suggested next action
    getSuggestedAction(data) {
        if (!data.rsvpSubmitted) return 'rsvp';
        if (!data.completedSections.includes('registry')) return 'registry';
        if (!data.completedSections.includes('details')) return 'details';
        if (!data.completedSections.includes('guest-messages')) return 'guest-messages';
        if (data.honeyCollected < 10) return 'honey-game';
        return 'explore';
    },
    
    // Show personalized CTA
    updatePersonalizedCTA() {
        const data = this.getGuestData();
        const ctaButton = document.getElementById('rsvpButton');
        
        if (!ctaButton) return;
        
        if (data.rsvpSubmitted) {
            ctaButton.innerHTML = '🎉 Thanks for RSVPing! Play Honey Game! 🍯';
            ctaButton.onclick = startHoneyGame;
        } else if (data.visits > 1) {
            ctaButton.innerHTML = '💕 Ready to RSVP? We\'re waiting! 🐝';
        }
    }
};

// Section visibility tracking
function trackSectionView(sectionId) {
    guestPersonalization.markSectionComplete(sectionId);
}

// Enhanced RSVP form submission with personalization
function enhanceRSVPSubmission() {
    const rsvpForm = document.getElementById('rsvpForm');
    if (!rsvpForm) return;
    
    rsvpForm.addEventListener('submit', function(e) {
        // Get form data for personalization
        const formData = new FormData(rsvpForm);
        const rsvpData = {
        name: formData.get('name'),
        email: formData.get('email'),
        guests: formData.get('guests'),
        attending: formData.get('attending'),
            prediction: formData.get('gender-prediction'),
        message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
        
        // Save to personalization system
        guestPersonalization.saveRSVPData(rsvpData);
        
        // Save prediction if provided
        if (rsvpData.prediction) {
            guestPersonalization.savePrediction(rsvpData.prediction, 'high');
        }
    });
}

// Enhanced gender prediction with personalization
function enhanceGenderPrediction() {
    const genderButtons = document.querySelectorAll('.gender-btn');
    genderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prediction = this.querySelector('.gender-text').textContent;
            guestPersonalization.savePrediction(prediction);
        });
    });
}

// Intersection Observer for section tracking
function setupSectionTracking() {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                trackSectionView(entry.target.id);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Update navigation personalization elements
function updateNavPersonalization() {
    const totalHoney = parseInt(localStorage.getItem('totalHoneyCollected') || '0');
    const personalContent = guestPersonalization.getPersonalizedContent();
    
    // Update honey counter
    const honeyAmount = document.getElementById('nav-honey-amount');
    if (honeyAmount) {
        honeyAmount.textContent = totalHoney;
    }
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const guestProgress = document.getElementById('guest-progress');
    
    if (progressFill && progressText && personalContent.visitCount > 0) {
        progressFill.style.width = personalContent.completionPercentage + '%';
        progressText.textContent = personalContent.completionPercentage + '%';
        
        // Show progress bar for returning visitors
        if (guestProgress && personalContent.visitCount > 1) {
            guestProgress.style.display = 'flex';
        }
    }
    
    // Add click handler to honey counter for stats
    const honeyCounter = document.getElementById('nav-honey-counter');
    if (honeyCounter) {
        honeyCounter.addEventListener('click', function() {
            showPersonalizedStats();
        });
    }
}

// Show personalized stats modal
function showPersonalizedStats() {
    const personalContent = guestPersonalization.getPersonalizedContent();
    const guestData = guestPersonalization.getGuestData();
    
    const statsHTML = `
        <div class="personalized-stats-modal">
            <div class="stats-header">
                <h3>🍯 Your Baby Bee Journey 🍯</h3>
                <button class="close-stats-btn" onclick="closePersonalizedStats()">&times;</button>
            </div>
            <div class="stats-content">
                <div class="stat-item">
                    <span class="stat-icon">👋</span>
                    <span class="stat-label">Welcome ${guestData.name || 'Guest'}!</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">📊</span>
                    <span class="stat-label">Progress: ${personalContent.completionPercentage}%</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">🍯</span>
                    <span class="stat-label">Honey Collected: ${guestData.honeyCollected}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">👁️</span>
                    <span class="stat-label">Visits: ${personalContent.visitCount}</span>
                </div>
                <div class="stat-item">
                    <span class="stat-icon">✅</span>
                    <span class="stat-label">Sections Completed: ${guestData.completedSections.length}/5</span>
                </div>
                ${personalContent.lastPrediction ? `
                <div class="stat-item">
                    <span class="stat-icon">🔮</span>
                    <span class="stat-label">Latest Prediction: ${personalContent.lastPrediction}</span>
                </div>
                ` : ''}
                <div class="achievements-section">
                    <h4>🏆 Achievements</h4>
                    <div class="achievements-list" id="achievements-list">
                        ${generateAchievements(guestData)}
                    </div>
                </div>
            </div>
        </div>
        <div class="stats-overlay" onclick="closePersonalizedStats()"></div>
    `;
    
    // Remove existing modal
    const existingModal = document.querySelector('.personalized-stats-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add new modal
    document.body.insertAdjacentHTML('beforeend', statsHTML);
    
    // Add styles dynamically
    if (!document.getElementById('stats-modal-styles')) {
        const styles = document.createElement('style');
        styles.id = 'stats-modal-styles';
        styles.textContent = `
            .personalized-stats-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #fff8dc 0%, #f5deb3 100%);
                border-radius: 20px;
                padding: 25px;
                max-width: 400px;
                width: 90vw;
                max-height: 80vh;
                overflow-y: auto;
                z-index: 20000;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                border: 3px solid #ffd700;
                animation: modalSlideIn 0.3s ease;
            }
            
            .stats-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(139, 69, 19, 0.8);
                z-index: 19000;
                backdrop-filter: blur(5px);
            }
            
            @keyframes modalSlideIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            
            .stats-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid #ffd700;
            }
            
            .stats-header h3 {
                color: #8b4513;
                font-family: 'Kalam', cursive;
                margin: 0;
            }
            
            .close-stats-btn {
                background: #dc3545;
                color: white;
                border: none;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                font-size: 1.2rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s ease;
            }
            
            .close-stats-btn:hover {
                background: #c82333;
                transform: scale(1.1);
            }
            
            .stat-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px;
                margin: 8px 0;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 10px;
                color: #8b4513;
                font-family: 'Open Sans', sans-serif;
                font-weight: 500;
            }
            
            .stat-icon {
                font-size: 1.2rem;
            }
            
            .achievements-section {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid #ffd700;
            }
            
            .achievements-section h4 {
                color: #8b4513;
                font-family: 'Kalam', cursive;
                margin-bottom: 10px;
            }
            
            .achievements-list {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
            }
        `;
        document.head.appendChild(styles);
    }
}

// Generate achievements based on guest data
function generateAchievements(guestData) {
    const achievements = [];
    
    if (guestData.visits >= 1) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🐝</span>First Visit</div>');
    }
    
    if (guestData.visits >= 3) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🍯</span>Frequent Visitor</div>');
    }
    
    if (guestData.rsvpSubmitted) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">📝</span>RSVP Master</div>');
    }
    
    if (guestData.completedSections.length >= 3) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🌟</span>Explorer</div>');
    }
    
    if (guestData.completedSections.length === 5) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">👑</span>Completionist</div>');
    }
    
    if (guestData.honeyCollected >= 5) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🍯</span>Honey Collector</div>');
    }
    
    if (guestData.honeyCollected >= 20) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🏆</span>Honey Master</div>');
    }
    
    if (guestData.predictions.length > 0) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">🔮</span>Fortune Teller</div>');
    }
    
    if (achievements.length === 0) {
        achievements.push('<div class="achievement-badge"><span class="achievement-icon">✨</span>Getting Started</div>');
    }
    
    return achievements.join('');
}

// Close personalized stats modal
function closePersonalizedStats() {
    const modal = document.querySelector('.personalized-stats-modal');
    const overlay = document.querySelector('.stats-overlay');
    
    if (modal) modal.remove();
    if (overlay) overlay.remove();
}

// Initialize personalization system
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome message
    guestPersonalization.showWelcomeMessage();
    
    // Update personalized CTA
    guestPersonalization.updatePersonalizedCTA();
    
    // Update navigation personalization
    updateNavPersonalization();
    
    // Setup section tracking
    setupSectionTracking();
    
    // Enhance form submissions
    enhanceRSVPSubmission();
    enhanceGenderPrediction();
    
    // Show personalized stats in console for debugging
    const personalContent = guestPersonalization.getPersonalizedContent();
    console.log('🍯 Guest Personalization Data:', personalContent);
});

// Update navigation when honey is collected
function updateHoneyDisplay() {
    const totalHoney = parseInt(localStorage.getItem('totalHoneyCollected') || '0');
    const honeyAmount = document.getElementById('nav-honey-amount');
    if (honeyAmount) {
        honeyAmount.textContent = totalHoney;
        
        // Add bounce animation
        honeyAmount.style.animation = 'none';
    setTimeout(() => {
            honeyAmount.style.animation = 'honeyBounce 0.5s ease';
        }, 10);
    }
}

// Add honey bounce animation
const honeyBounceStyle = document.createElement('style');
honeyBounceStyle.textContent = `
    @keyframes honeyBounce {
        0%, 20%, 60%, 100% { transform: scale(1); }
        40% { transform: scale(1.2); }
        80% { transform: scale(1.1); }
    }
`;
document.head.appendChild(honeyBounceStyle);

// Export functions for global access
window.guestPersonalization = guestPersonalization;

// ========================================
// EMAIL SYSTEM - EmailJS Integration
// ========================================

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_qittxes', // Your EmailJS service ID
    templateId: 'template_rpi1rbl', // Your EmailJS template ID
    publicKey: '2wpg-B7rwnaW3Ifpv' // Your EmailJS public key
};

// Initialize EmailJS when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('EmailJS initialized successfully');
    } else {
        console.log('EmailJS not loaded - check your internet connection');
    }
});

// Email Templates
const EMAIL_TEMPLATES = {
    welcome: {
        subject: '🐝 Welcome to our Baby Bee Celebration!',
        message: `
            <h2>🐝 Welcome to our Baby Bee Celebration!</h2>
            <p>Hi {{name}},</p>
            <p>Thank you for joining our special celebration! We're so excited to share this journey with you.</p>
            <p><strong>Event Details:</strong></p>
            <ul>
                <li>📅 Date: Saturday, October 25th, 2025</li>
                <li>⏰ Time: 11:00 AM</li>
                <li>📍 Location: Teja & Supraja's Hive, 6565 Scenery Ct, San Jose, CA 95120</li>
            </ul>
            <p>Don't forget to:</p>
            <ul>
                <li>🎯 Make your gender prediction</li>
                <li>🎁 Check out our registry</li>
                <li>🍯 Collect honey drops on our website</li>
            </ul>
            <p>Can't wait to celebrate with you!</p>
            <p>With love,<br>Teja & Supraja 🍯</p>
        `
    },
    
    rsvpConfirmation: {
        subject: '🎉 RSVP Confirmed - See you at our Baby Bee Party!',
        message: `
            <h2>🎉 RSVP Confirmed!</h2>
            <p>Hi {{name}},</p>
            <p>Thank you for confirming your attendance! We're thrilled you'll be joining us for our Baby Bee celebration.</p>
            <p><strong>Your RSVP Details:</strong></p>
            <ul>
                <li>👥 Guests: {{guests}}</li>
                <li>🎯 Gender Prediction: {{prediction}}</li>
                <li>📧 Email: {{email}}</li>
            </ul>
            <p><strong>Event Reminder:</strong></p>
            <ul>
                <li>📅 Saturday, October 25th, 2025 at 11:00 AM</li>
                <li>📍 Teja & Supraja's Hive, 6565 Scenery Ct, San Jose, CA 95120</li>
                <li>👗 Dress Code: Wear yellow to support boy, pink for girl!</li>
            </ul>
            <p>We can't wait to see you there!</p>
            <p>With love,<br>Teja & Supraja 🍯</p>
        `
    },
    
    genderReveal: {
        subject: '🍯 The Big Reveal - Baby Bee Gender Announcement!',
        message: `
            <h2>🍯 The Big Reveal!</h2>
            <p>Hi {{name}},</p>
            <p>The moment you've been waiting for is here! We're excited to share the gender of our little Baby Bee!</p>
            <p><strong>Drumroll please... 🥁</strong></p>
            <p style="font-size: 24px; text-align: center; margin: 20px 0;">
                {{gender_reveal}}
            </p>
            <p>Thank you for being part of this special journey with us. Your love and support mean the world to us!</p>
            <p>With love,<br>Teja & Supraja 🍯</p>
        `
    },
    
    thankYou: {
        subject: '💕 Thank You for Celebrating with Us!',
        message: `
            <h2>💕 Thank You for Celebrating with Us!</h2>
            <p>Hi {{name}},</p>
            <p>What an amazing celebration it was! Thank you for making our Baby Bee gender reveal party so special.</p>
            <p>We're so grateful for your love, support, and the wonderful memories we created together.</p>
            <p>Stay tuned for updates about our little one's arrival!</p>
            <p>With love and gratitude,<br>Teja & Supraja 🍯</p>
        `
    }
};

// Send Email Function
async function sendEmail(templateType, recipientEmail, recipientName, additionalData = {}) {
    try {
        // Check if EmailJS is available
        if (typeof emailjs === 'undefined') {
            console.error('EmailJS not loaded');
            showNotification('Email service not available. Please check your connection.', 'error');
            return false;
        }

        // Get template
        const template = EMAIL_TEMPLATES[templateType];
        if (!template) {
            console.error('Email template not found:', templateType);
            return false;
        }

        // Prepare email data
        const emailData = {
            to_email: recipientEmail,
            to_name: recipientName,
            subject: template.subject,
            message: template.message,
            ...additionalData
        };

        // Replace placeholders in message
        emailData.message = emailData.message
            .replace(/\{\{name\}\}/g, recipientName)
            .replace(/\{\{email\}\}/g, recipientEmail)
            .replace(/\{\{guests\}\}/g, additionalData.guests || '')
            .replace(/\{\{prediction\}\}/g, additionalData.prediction || '')
            .replace(/\{\{gender_reveal\}\}/g, additionalData.gender_reveal || '');

        // Send email
        const result = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            emailData
        );

        console.log('Email sent successfully:', result);
        showNotification(`📧 Email sent to ${recipientName}!`, 'success');
        return true;

    } catch (error) {
        console.error('Email sending failed:', error);
        showNotification('Failed to send email. Please try again later.', 'error');
        return false;
    }
}

// Send Welcome Email
function sendWelcomeEmail(email, name) {
    if (!email || !name) {
        console.error('Email and name are required');
        return;
    }
    
    sendEmail('welcome', email, name);
}

// Send RSVP Confirmation Email
function sendRSVPConfirmationEmail(rsvpData) {
    if (!rsvpData.email || !rsvpData.name) {
        console.error('RSVP data incomplete');
        return;
    }
    
    sendEmail('rsvpConfirmation', rsvpData.email, rsvpData.name, {
        guests: rsvpData.guests,
        prediction: rsvpData.prediction || 'Not specified'
    });
}

// Send Gender Reveal Email
function sendGenderRevealEmail(email, name, gender) {
    if (!email || !name || !gender) {
        console.error('Gender reveal data incomplete');
        return;
    }
    
    const genderReveal = gender === 'boy' ? 
        'It\'s a BOY! 👶🍯 Our little prince is on the way!' : 
        'It\'s a GIRL! 👶🍯 Our little princess is on the way!';
    
    sendEmail('genderReveal', email, name, {
        gender_reveal: genderReveal
    });
}

// Send Thank You Email
function sendThankYouEmail(email, name) {
    if (!email || !name) {
        console.error('Thank you email data incomplete');
        return;
    }
    
    sendEmail('thankYou', email, name);
}

// Test Email Function (for debugging)
function testEmailSystem() {
    console.log('Testing EmailJS configuration...');
    console.log('Service ID:', EMAILJS_CONFIG.serviceId);
    console.log('Template ID:', EMAILJS_CONFIG.templateId);
    console.log('Public Key:', EMAILJS_CONFIG.publicKey);
    
    // Test with a sample email (replace with your email for testing)
    const testEmail = 'tejamukka@gmail.com'; // Replace with your email
    const testName = 'Teja';
    
    console.log('Sending test welcome email...');
    sendWelcomeEmail(testEmail, testName);
}

// Export email functions for global access
window.sendWelcomeEmail = sendWelcomeEmail;
window.sendRSVPConfirmationEmail = sendRSVPConfirmationEmail;
window.sendGenderRevealEmail = sendGenderRevealEmail;
window.sendThankYouEmail = sendThankYouEmail;
window.testEmailSystem = testEmailSystem;
window.trackSectionView = trackSectionView;
