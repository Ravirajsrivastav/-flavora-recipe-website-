// Simple search bar interaction
document.querySelector("input[type='text']").addEventListener("focus", function() {
    this.style.border = "2px solid #E74C3C";
});

document.querySelector("input[type='text']").addEventListener("blur", function() {
    this.style.border = "1px solid #ccc";
});

// Recipe data
const recipes = [
    {
        id: 1,
        name: 'Special Vada Pav',
        image: 'images/vada-pav.jpg',
        time: '20 min',
        rating: 4.5,
        category: 'Breakfast'
    },
    {
        id: 2,
        name: 'Margherita Pizza',
        image: 'images/pizza.jpg',
        time: '30 min',
        rating: 4.8,
        category: 'Lunch'
    },
    {
        id: 3,
        name: 'Idli Sambar',
        image: 'images/idli.jpg',
        time: '25 min',
        rating: 4.3,
        category: 'Breakfast'
    },
    {
        id: 4,
        name: 'Chocolate Cake',
        image: 'images/cake.jpg',
        time: '45 min',
        rating: 4.9,
        category: 'Desserts'
    }
];

// DOM Elements
const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.querySelector('.search-box input');
const voiceSearchBtn = document.querySelector('.search-box .fa-microphone');
const categoryCards = document.querySelectorAll('.category-card');
const newsletterForm = document.getElementById('newsletterForm');
const phoneInput = document.querySelector('.phone-input input');
const continueBtn = document.querySelector('.continue-btn');
const googleBtn = document.querySelector('.google-btn');
const facebookBtn = document.querySelector('.facebook-btn');
const moreBtn = document.querySelector('.more-btn');

// Display recipes
function displayRecipes(recipesToShow = recipes) {
    recipeGrid.innerHTML = '';
    recipesToShow.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="recipe-info">
                    <span class="time">${recipe.time}</span>
                    <span class="rating">★ ${recipe.rating}</span>
                </div>
            </div>
        `;
        recipeGrid.appendChild(card);
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.category.toLowerCase().includes(searchTerm)
    );
    displayRecipes(filteredRecipes);
});

// Voice search
voiceSearchBtn.addEventListener('click', () => {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => {
            voiceSearchBtn.style.color = 'var(--primary-color)';
        };

        recognition.onresult = (event) => {
            const searchTerm = event.results[0][0].transcript;
            searchInput.value = searchTerm;
            searchInput.dispatchEvent(new Event('input'));
        };

        recognition.onend = () => {
            voiceSearchBtn.style.color = '#666';
        };

        recognition.start();
    } else {
        alert('Voice search is not supported in your browser');
    }
});

// Category filtering
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.querySelector('span').textContent;
        const filteredRecipes = category === 'All' 
            ? recipes 
            : recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);

        // Update active state
        categoryCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

// Newsletter subscription
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    if (email) {
        // Here you would typically send this to your backend
        alert('Thank you for subscribing! You will receive our weekly recipes soon.');
        emailInput.value = '';
    }
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScroll = currentScroll;
});

// Category cards hover effect
const categoryCardsHover = document.querySelectorAll('.category-card');
categoryCardsHover.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Phone number validation
phoneInput.addEventListener('input', (e) => {
    // Remove any non-digit characters
    let number = e.target.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (number.length > 10) {
        number = number.slice(0, 10);
    }
    
    // Format the number
    if (number.length > 5) {
        number = number.slice(0, 5) + ' ' + number.slice(5);
    }
    
    e.target.value = number;
    
    // Enable/disable continue button
    continueBtn.disabled = number.length !== 10;
    continueBtn.style.opacity = number.length === 10 ? '1' : '0.5';
});

// Login with phone number
continueBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const phoneNumber = phoneInput.value.replace(/\s/g, '');
    
    if (phoneNumber.length === 10) {
        try {
            // Here you would typically make an API call to your backend
            // For demo purposes, we'll simulate an OTP send
            alert('OTP sent to your phone number: +91 ' + phoneNumber);
            
            // You could then show an OTP input field
            const otp = prompt('Please enter the OTP sent to your phone:');
            if (otp) {
                // Verify OTP (mock implementation)
                if (otp === '123456') { // In real app, verify with backend
                    alert('Login successful!');
                    // Redirect to dashboard or home page
                } else {
                    alert('Invalid OTP. Please try again.');
                }
            }
        } catch (error) {
            alert('Error sending OTP. Please try again.');
        }
    }
});

// Social login configuration
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const FB_APP_ID = 'YOUR_FACEBOOK_APP_ID';

// Initialize Facebook SDK
window.fbAsyncInit = function() {
    FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v18.0'
    });
};

// Google Sign-In Handler
function handleGoogleSignIn(response) {
    const credential = response.credential;
    const profile = JSON.parse(atob(credential.split('.')[1]));
    
    // Here you would typically send this token to your backend
    console.log('Google Sign-In successful:', profile);
    
    // For demo purposes, show success message
    const userData = {
        name: profile.name,
        email: profile.email,
        picture: profile.picture
    };
    
    handleSuccessfulLogin(userData, 'google');
}

// Facebook Sign-In Handler
function handleFacebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            FB.api('/me', { fields: 'name, email, picture' }, function(response) {
                console.log('Facebook Sign-In successful:', response);
                
                const userData = {
                    name: response.name,
                    email: response.email,
                    picture: response.picture?.data?.url
                };
                
                handleSuccessfulLogin(userData, 'facebook');
            });
        } else {
            console.log('Facebook Sign-In cancelled');
            showError('Facebook login was cancelled');
        }
    }, { scope: 'public_profile,email' });
}

// Common success handler
function handleSuccessfulLogin(userData, provider) {
    // Save user data to localStorage (in real app, use secure storage)
    localStorage.setItem('user', JSON.stringify({
        ...userData,
        provider,
        loginTime: new Date().toISOString()
    }));
    
    // Show success message
    showSuccess(`Welcome ${userData.name}!`);
    
    // Redirect to dashboard after delay
    setTimeout(() => {
        window.location.href = '/dashboard.html';
    }, 1500);
}

// UI Feedback Functions
function showSuccess(message) {
    const toast = createToast(message, 'success');
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function showError(message) {
    const toast = createToast(message, 'error');
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function createToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        font-size: 14px;
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    return toast;
}

// Event Listeners
document.getElementById('googleBtn').addEventListener('click', () => {
    // The Google Sign-In flow is handled by the Google SDK
    // Make sure the button has the proper data attributes
    const googleSignInDiv = document.getElementById('g_id_onload');
    if (googleSignInDiv) {
        googleSignInDiv.click();
    } else {
        showError('Google Sign-In is not properly configured');
    }
});

document.getElementById('facebookBtn').addEventListener('click', handleFacebookLogin);

// Hero Section Interactions
function initHeroInteractions() {
    const hero = document.querySelector('.hero');
    const heroTexts = document.querySelectorAll('.hero-text');
    const appLogo = document.querySelector('.app-logo');
    
    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Text reveal animation
    heroTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        setTimeout(() => {
            text.style.transition = 'all 0.8s ease';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 500 + (index * 400));
    });

    // Mouse move effect on logo
    appLogo.addEventListener('mousemove', (e) => {
        const rect = appLogo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        
        const img = appLogo.querySelector('img');
        const title = appLogo.querySelector('h2');
        
        img.style.transform = `perspective(1000px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
        title.style.transform = `translateX(${deltaX * 10}px) translateY(${deltaY * 10}px)`;
    });

    // Reset logo position on mouse leave
    appLogo.addEventListener('mouseleave', () => {
        const img = appLogo.querySelector('img');
        const title = appLogo.querySelector('h2');
        
        img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        title.style.transform = 'translateX(0) translateY(0)';
    });

    // Add sparkle effect on click
    hero.addEventListener('click', (e) => {
        createSparkle(e.clientX, e.clientY);
    });
}

// Helper function to create sparkle effect
function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.body.appendChild(sparkle);

    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'];
    const size = Math.random() * 10 + 5;
    const angle = Math.random() * 360;

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';
    sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.transform = `rotate(${angle}deg)`;

    setTimeout(() => sparkle.remove(), 1000);
}

// Recipe management
function displayRecipes() {
    // Recipe display logic here
}

// User management
function handleUserLogin(userData) {
    // User login logic here
}

// Initialize all animations and interactions
function initializeAnimations() {
    // Get DOM elements
    const searchInput = document.querySelector('.search-container input');
    const navLinks = document.querySelectorAll('.nav-links a');
    const heroTexts = document.querySelectorAll('.hero-text');
    const appLogo = document.querySelector('.app-logo');
    const footerSections = document.querySelectorAll('.footer-section');
    const socialIcons = document.querySelectorAll('.social-icons a');

    // Navigation highlight effect
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Hero text animation with staggered delay
    heroTexts.forEach((text, index) => {
        text.style.opacity = '0';
        text.style.transform = 'translateY(20px)';
        setTimeout(() => {
            text.style.transition = 'all 0.6s ease';
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });

    // Logo hover effect with rotation
    if (appLogo) {
        appLogo.addEventListener('mouseover', () => {
            appLogo.style.transform = 'scale(1.05) rotate(5deg)';
        });
        appLogo.addEventListener('mouseout', () => {
            appLogo.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Multi-sparkle effect on click
    document.addEventListener('click', (e) => {
        for(let i = 0; i < 8; i++) {
            setTimeout(() => {
                createSparkle(e.pageX, e.pageY);
            }, i * 50);
        }
    });

    // Smooth scroll for navigation with offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Footer section fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    footerSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // Enhanced social icons hover effect
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-3px) scale(1.1)';
            icon.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animated search input with transition
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.style.transition = 'all 0.3s ease';
            searchInput.style.width = '300px';
            searchInput.style.boxShadow = '0 0 15px rgba(255, 107, 107, 0.2)';
            searchInput.style.borderColor = '#FF6B6B';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.style.width = '250px';
            searchInput.style.boxShadow = 'none';
            searchInput.style.borderColor = '#ddd';
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    
    // Check for existing user
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        handleUserLogin(userData);
    }
    
    // Initialize recipe display
    displayRecipes();
});
