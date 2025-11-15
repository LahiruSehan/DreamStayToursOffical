




document.addEventListener('DOMContentLoaded', () => {

    // --- All data is now loaded from config.js ---

    // --- DOM Elements ---
    const preloader = document.getElementById('preloader');
    const langModal = document.getElementById('language-modal');
    const langButtonsContainer = document.querySelector('.lang-buttons');
    const langButtons = document.querySelectorAll('.lang-btn');
    const appWrapper = document.getElementById('app-wrapper');
    const mainContent = document.getElementById('main-content');
    const galleryPage = document.getElementById('gallery-page');
    const galleryBtn = document.getElementById('gallery-btn');
    const backToMainBtn = document.getElementById('back-to-main-btn');
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryLayoutControls = document.querySelector('#gallery-controls .layout-controls');
    const detailsSection = document.getElementById('details-section');
    const packagesGrid = document.getElementById('packages-grid');
    const mainFilterNav = document.querySelector('.filter-nav');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const thailandNav = document.getElementById('thailand-nav');
    const thailandNavDashboard = document.getElementById('thailand-nav-dashboard');
    const thailandNavHotels = document.getElementById('thailand-nav-hotels');
    const thailandNavOther = document.getElementById('thailand-nav-other');
    const packageModal = document.getElementById('package-modal');
    const packageModalBody = document.getElementById('package-modal-body');
    const stickyContactBtn = document.getElementById('contact-sticky-btn');
    const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
    const faqAccordion = document.querySelector('.faq-accordion');
    const footerLangToggle = document.getElementById('footer-lang-toggle');
    const reviewsWrapper = document.querySelector('.reviews-carousel-wrapper');
    const reviewsGrid = document.getElementById('reviews-grid');
    const heroTitle = document.querySelector('.hero-title-main'); // Updated class
    const mediaLightbox = document.getElementById('media-lightbox');
    const mediaLightboxBody = document.getElementById('media-lightbox-body');
    const mediaLightboxTitle = document.getElementById('media-lightbox-title');
    // Chatbot elements
    const chatbotStickyBtn = document.getElementById('chatbot-sticky-btn');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotQuestions = document.getElementById('chatbot-questions');
    // Music elements
    const backgroundMusic = document.getElementById('background-music');
    // Currency elements
    const currencySwitcherBtn = document.getElementById('currency-switcher-btn');
    // Hotel elements
    const hotelToggleContainer = document.getElementById('hotel-toggle-container');
    const showHotelsBtn = document.getElementById('show-hotels-btn');
    const thailandHotelsSection = document.getElementById('thailand-hotels');
    const hotelGrid = document.getElementById('hotel-grid');
    // New Elements from update
    const stickyActionsContainer = document.querySelector('.sticky-actions-container');
    const heroSection = document.querySelector('.hero');
    const aboutDreamstayBtn = document.getElementById('about-dreamstay-btn');
    const heroDestinationsContainer = document.querySelector('.hero-destinations');
    const filtersSection = document.getElementById('filters');
    const heroMenuBtn = document.querySelector('.hero-menu-btn');
    const aboutModal = document.getElementById('about-modal');
    const aboutModalBody = document.getElementById('about-modal-body');

    // --- NEW PACKAGE BUILDER & CART ELEMENTS ---
    const packagesBuilderBtn = document.getElementById('packages-builder-btn');
    const packagesBuilderModal = document.getElementById('packages-builder-modal');
    const cartFab = document.getElementById('cart-fab');
    const cartCountBadge = document.getElementById('cart-count-badge');
    const cartModal = document.getElementById('cart-modal');
    const cartModalBody = document.getElementById('cart-modal-body');
    const cartClearBtn = document.getElementById('cart-clear-btn');
    const cartSendBtn = document.getElementById('cart-send-btn');


    // Package Controls
    const packageControls = document.getElementById('package-controls');
    const layoutControls = document.querySelector('.layout-controls');
    const filterCitySelect = document.getElementById('filter-city');
    const sortPackagesSelect = document.getElementById('sort-packages');

    // --- State ---
    let currentLang = 'en';
    let selectedLang = 'en';
    let audioContextUnlocked = false;
    let currentView = 'Dashboard';
    let heroQuoteIntervalId;
    let reviewCarouselIntervalId;
    let currentReviewIndex = 0;
    let currentLayout = '2';
    let currentCityFilter = 'all';
    let currentSort = 'default';
    const currencies = Object.keys(config.CURRENCIES);
    let currentCurrencyIndex = 0;
    let hotelsRendered = false;
    let customPackageCart = [];
    const seeMoreTranslations = {
        en: "See More",
        si: "තව බලන්න",
        ja: "もっと見る"
    };

    // --- New Gallery Data ---
    const TOTAL_TOUR_IMAGES = 107;
    const tourImages = [];
    for (let i = 1; i <= TOTAL_TOUR_IMAGES; i++) {
        tourImages.push({
            url: `images/dreamstayimage (${i}).jpg`,
            title_en: `Tour Photo ${i}`,
            type: 'photo'
        });
    }

    // --- Background Canvas Animation ---
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function createParticles(config) {
        particles = [];
        if (!config || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        
        const count = config.count;
        for (let i = 0; i < count; i++) {
             particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: Math.random() * (config.vx[1] - config.vx[0]) + config.vx[0],
                vy: Math.random() * (config.vy[1] - config.vy[0]) + config.vy[0],
                size: Math.random() * (config.size[1] - config.size[0]) + config.size[0],
                char: Array.isArray(config.chars) ? config.chars[Math.floor(Math.random() * config.chars.length)] : config.char,
                color: Array.isArray(config.colors) ? config.colors[Math.floor(Math.random() * config.colors.length)] : config.color,
            });
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x > canvas.width + p.size) p.x = -p.size;
            if (p.y > canvas.height + p.size) p.y = -p.size;
            if (p.x < -p.size) p.x = canvas.width + p.size;
            if (p.y < -p.size) p.y = canvas.height + p.size;


            ctx.fillStyle = p.color;
            ctx.font = `${p.size}px serif`;
            ctx.fillText(p.char, p.x, p.y);
        });
        animationFrameId = requestAnimationFrame(animateParticles);
    }
    
    const themeParticles = {
        Dashboard: { count: 0 },
        Japan: { count: 30, vx: [-0.2, 0.2], vy: [0.3, 0.8], size: [10, 20], char: '🌸', color: 'rgba(255, 182, 193, 0.5)' },
        Thailand: { count: 20, vx: [-0.1, 0.1], vy: [-0.5, -0.2], size: [15, 25], char: '🏮', color: 'rgba(255, 184, 77, 0.4)' },
        Malaysia: { count: 40, vx: [-0.3, 0.3], vy: [0.1, 0.5], size: [10, 20], char: '🌙', color: 'rgba(230, 230, 250, 0.6)' },
        India: { count: 35, vx: [-0.2, 0.2], vy: [0.2, 0.7], size: [15, 25], chars: ['🕉️', '☪️', '✝️', '☸️', '☬'], colors: ['rgba(255, 153, 51, 0.7)', 'rgba(19, 141, 117, 0.7)', 'rgba(88, 144, 255, 0.7)', 'rgba(255, 215, 0, 0.7)', 'rgba(240, 178, 122, 0.7)'] },
        "Sri Lanka": { count: 30, vx: [-0.2, 0.2], vy: [0.3, 0.8], size: [15, 25], char: '🌊', color: 'rgba(96, 165, 250, 0.5)' }
    };

    // --- Audio Functions ---
    const playAudio = () => {
        if (!audioContextUnlocked) {
            console.log("Audio context not unlocked. Cannot play.");
            return;
        }
        if (backgroundMusic.paused) {
            backgroundMusic.volume = 0.3; // A safe, non-jarring volume
            const playPromise = backgroundMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log("✅ Audio playback started successfully.");
                }).catch(error => {
                    console.error("❌ Audio playback failed:", error);
                });
            }
        }
    };
    
    // --- Currency Functions ---
    const formatPrice = (baseUsd) => {
        const currencyCode = currencies[currentCurrencyIndex];
        const currency = config.CURRENCIES[currencyCode];
        const converted = baseUsd * currency.rate;
        return `${currency.symbol} ${Math.round(converted).toLocaleString()}`;
    };

    const updateAllPrices = () => {
        const priceElements = document.querySelectorAll('[data-base-usd]');
        priceElements.forEach(el => {
            const baseUsd = parseFloat(el.dataset.baseUsd);
            el.textContent = formatPrice(baseUsd);
        });
        currencySwitcherBtn.textContent = currencies[currentCurrencyIndex];
    };

    // --- Core App Functions ---
    const showPreloader = () => {
        preloader.classList.remove('hidden');
        langModal.classList.remove('hidden');
    };

    const startApp = () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);

        appWrapper.classList.remove('hidden');
        setLanguage(selectedLang);

        renderFAQ();
        renderReviews();
        renderDashboard();
        switchView('Dashboard', true);
        startHeroQuoteAnimation();
        startReviewCarousel();
        renderChatbot();
    };
    
    const setLanguage = (lang) => {
        currentLang = lang;
        document.documentElement.lang = lang;
        translateUI(currentLang);
        updateWhatsappLinks();
    };

    const translateUI = (lang) => {
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.dataset.langKey;
            if (config.STRINGS[lang] && config.STRINGS[lang][key]) {
                el.textContent = config.STRINGS[lang][key];
            }
        });
    };

    const updateWhatsappLinks = () => {
        const message = config.STRINGS[currentLang].whatsappMsg("");
        const url = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message.replace('"" ', ''))}`;
        stickyContactBtn.href = url;
        if (heroWhatsappBtn) {
            heroWhatsappBtn.href = url;
        }
    };
    
    const renderPackages = () => {
        packagesGrid.innerHTML = '';
        
        let packagesToRender = config.PACKAGES.filter(p => p.country === currentView);
    
        if (currentView === 'Thailand' && currentCityFilter !== 'all') {
            packagesToRender = packagesToRender.filter(p => p.city === currentCityFilter);
        }

        if (currentSort === 'popularity') {
            packagesToRender.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        packagesToRender.forEach((pkg, index) => {
            const card = document.createElement('div');

            if (pkg.comingSoon) {
                card.className = 'package-card coming-soon-card';
                card.innerHTML = `
                    <div class="coming-soon-content">
                        <h3>${pkg[`title_${currentLang}`]}</h3>
                        <p>✨</p>
                    </div>
                `;
                packagesGrid.appendChild(card);
                return;
            }

            card.className = 'package-card animate-in';
            card.dataset.id = pkg.id;
            card.style.setProperty('--animation-delay', `${index * 50}ms`);


            const images = config.LOCATION_IMAGES[pkg.id] || ['https://source.unsplash.com/800x600/?travel,placeholder'];
            const isComingSoon = pkg.country === 'Sri Lanka' || pkg.country === 'Japan';
            const isInCart = customPackageCart.some(item => item.id === pkg.id);
            const addBtnClass = isInCart ? 'card-add-btn added' : 'card-add-btn';
            const addBtnContent = isInCart ? '✓' : '➕';

            const cardButtonHTML = isComingSoon
                ? `<span class="card-notice-coming-soon">${config.STRINGS[currentLang].comingSoonNotice}</span>`
                : `<div class="card-button">${seeMoreTranslations[currentLang]}</div>`;
            
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${images[0]}" alt="${pkg[`title_${currentLang}`]}" class="card-image" loading="lazy">
                    <button class="${addBtnClass}" data-id="${pkg.id}" aria-label="Add ${pkg[`title_${currentLang}`]} to plan">${addBtnContent}</button>
                </div>
                <div class="card-content">
                    <p class="card-country">${pkg.country}</p>
                    <h3 class="card-title">${pkg[`title_${currentLang}`]}</h3>
                    <p class="card-details-short">${pkg[`short_desc_${currentLang}`]}</p>
                    <div class="card-details">
                        <span>${pkg.city || ''}</span>
                        <span class="card-rating">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: gold;"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            ${pkg.rating}
                        </span>
                    </div>
                    ${cardButtonHTML}
                </div>
            `;
            
            const contentPart = card.querySelector('.card-content');
            if (contentPart) {
                contentPart.addEventListener('click', () => openPackageModal(pkg.id));
            }
            
            packagesGrid.appendChild(card);
        });

        if (packagesToRender.length === 0) {
            packagesGrid.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">No locations match the current filters.</p>`;
        }
        setupIntersectionObserver('.package-card.animate-in');
    };
    
    const switchView = (view, forceParticles = false) => {
        const oldView = currentView;
        currentView = view;

        filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.country === view);
        });
        
        const themeClass = view === 'Dashboard' ? '' : `theme-${view.toLowerCase().replace(' ', '')}`;
        document.body.className = ``; 
        if (view !== 'Dashboard') {
            document.body.classList.add('country-view', themeClass);
            
            packageControls.classList.remove('hidden');
            mainFilterNav.classList.toggle('hidden', view === 'Thailand');
            thailandNav.classList.toggle('hidden', view !== 'Thailand');
            filterCitySelect.classList.toggle('hidden', view !== 'Thailand');
            sortPackagesSelect.classList.toggle('hidden', view === 'Thailand');
            
            hotelToggleContainer.classList.toggle('hidden', view !== 'Thailand');
            if (view !== 'Thailand') {
                thailandHotelsSection.classList.add('hidden');
                showHotelsBtn.textContent = config.STRINGS[currentLang].seeThailandHotels;
            }
            
            filterCitySelect.value = 'all';
            currentCityFilter = 'all';
            sortPackagesSelect.value = 'default';
            currentSort = 'default';
            
            currentLayout = '2';
            packagesGrid.className = 'packages-grid'; 
            packagesGrid.classList.add(`columns-${currentLayout}`);
            layoutControls.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            layoutControls.querySelector(`button[data-layout='2']`).classList.add('active');

            renderPackages();
        } else {
             packageControls.classList.add('hidden');
             hotelToggleContainer.classList.add('hidden');
             thailandHotelsSection.classList.add('hidden');
             mainFilterNav.classList.remove('hidden');
             thailandNav.classList.add('hidden');
        }

        if (oldView !== view || forceParticles) {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            const particleConfig = themeParticles[view];
            if (particleConfig && particleConfig.count > 0) {
                createParticles(particleConfig);
                animateParticles();
            } else {
                particles = [];
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
    };
    
    const renderDashboard = () => {
        const detailsGrid = detailsSection.querySelector('.details-grid');
        const sponsorsGrid = detailsSection.querySelector('.sponsors-grid');
        const servicesContainer = document.getElementById('services-section-container');

        detailsGrid.innerHTML = '';
        sponsorsGrid.innerHTML = '';
        servicesContainer.innerHTML = '';

        config.DETAILS_STATS.forEach((stat, index) => {
            const card = document.createElement('div');
            card.className = 'stat-card animate-in';
            card.style.setProperty('--animation-delay', `${index * 100}ms`);
            card.innerHTML = `
                <div class="stat-number" data-target="${stat.value}">0</div>
                <div class="stat-label">${stat[`label_${currentLang}`]}</div>
            `;
            detailsGrid.appendChild(card);
        });
        
        const servicesHTML = `
            <div class="services-section">
                <h3 class="services-title animate-in">${config.STRINGS[currentLang].servicesTitle}</h3>
                <div class="services-grid">
                    <div class="service-item animate-in" style="--animation-delay: 0ms;">
                        <div class="service-icon">✈️</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceAirTickets}</p>
                    </div>
                    <div class="service-item animate-in" style="--animation-delay: 100ms;">
                        <div class="service-icon">🛂</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceVisa}</p>
                    </div>
                    <div class="service-item animate-in" style="--animation-delay: 200ms;">
                        <div class="service-icon">🚌</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceTransport}</p>
                    </div>
                    <div class="service-item animate-in" style="--animation-delay: 300ms;">
                        <div class="service-icon">🥐</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceBreakfast}</p>
                    </div>
                </div>
            </div>
        `;
        servicesContainer.innerHTML = servicesHTML;

        config.SPONSORS.forEach((sponsor, index) => {
            const link = document.createElement('a');
            link.href = sponsor.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.innerHTML = `<img src="${sponsor.logoUrl}" alt="${sponsor.name}" class="sponsor-logo animate-in">`;
            link.querySelector('img').style.setProperty('--animation-delay', `${index * 100}ms`);
            sponsorsGrid.appendChild(link);
        });
        
        setupIntersectionObserver('.animate-in');
    };

    const animateCountUp = (el) => {
        const target = +el.dataset.target;
        if (isNaN(target)) return;
        
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const easeOutProgress = progress * (2 - progress);
            const currentCount = Math.round(target * easeOutProgress);
            
            el.textContent = currentCount.toLocaleString(currentLang.startsWith('en') ? 'en-US' : 'si-LK');

            if (frame === totalFrames) {
                clearInterval(counter);
                el.textContent = target.toLocaleString(currentLang.startsWith('en') ? 'en-US' : 'si-LK');
            }
        }, frameRate);
    };
    
    const setupIntersectionObserver = (selector = '.animate-in') => {
        const animatedElements = document.querySelectorAll(`${selector}:not(.is-visible)`);
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.style.getPropertyValue('--animation-delay') || '0ms';
                    setTimeout(() => {
                        entry.target.classList.add('is-visible');
                    
                        const statNumberEl = entry.target.querySelector('.stat-number');
                        if (statNumberEl) {
                            animateCountUp(statNumberEl);
                        } else if (entry.target.matches('.stat-number')) {
                            animateCountUp(entry.target);
                        }
                    }, parseFloat(delay));

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => observer.observe(el));
    };

    const formatDescription = (text) => {
        if (!text) return '';
        let html = '';
        const lines = text.split('\n');
        let inList = false;

        for (const line of lines) {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith('* ')) {
                if (!inList) {
                    html += '<ul>';
                    inList = true;
                }
                const itemContent = trimmedLine.substring(2)
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                html += `<li>${itemContent}</li>`;
            } else {
                if (inList) {
                    html += '</ul>';
                    inList = false;
                }
                if (trimmedLine === '') {
                    // We can ignore empty lines as the <p> tags will create space.
                } else {
                    const formattedLine = trimmedLine.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    html += `<p>${formattedLine}</p>`;
                }
            }
        }

        if (inList) {
            html += '</ul>';
        }
        return html;
    };

    const openPackageModal = (packageId) => {
        const pkg = config.PACKAGES.find(p => p.id === packageId);
        if (!pkg) return;

        const modalData = config.MODAL_CONTENT[packageId] || { smallImages: [], youtubeUrl: '' };
        const whatsappMessage = config.STRINGS[currentLang].whatsappInquiry(pkg[`title_${currentLang}`]);
        const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        const images = config.LOCATION_IMAGES[pkg.id] || [];

        let videoEmbedUrl = '';
        if (modalData.youtubeUrl) {
            const videoIdMatch = modalData.youtubeUrl.match(/(?:v=|\/embed\/|\/)([a-zA-Z0-9_-]{11})/);
            if (videoIdMatch && videoIdMatch[1]) {
                const videoId = videoIdMatch[1];
                videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${videoId}`;
            }
        }

        const isComingSoon = pkg.country === 'Sri Lanka' || pkg.country === 'Japan';
        const modalButtonHTML = isComingSoon
            ? `<span class="cta-primary" style="width:100%; text-align:center; display:block; background: #e74c3c; cursor: not-allowed;">${config.STRINGS[currentLang].comingSoonNotice}</span>`
            : `<a href="${whatsappUrl}" class="cta-primary" target="_blank" rel="noopener noreferrer" style="width:100%; text-align:center; display:block;">${config.STRINGS[currentLang].contactUs}</a>`;
        
        const formattedDesc = formatDescription(pkg[`desc_en`]);

        const modalContentHTML = `
            <div class="modal-image-carousel">
                ${images.map(img => `<img src="${img}" alt="${pkg[`title_${currentLang}`]}" class="modal-image">`).join('')}
            </div>
            
            ${modalData.smallImages && modalData.smallImages.length > 0 ? `
            <div class="modal-small-images-container">
                ${modalData.smallImages.map(img => `<img src="${img}" alt="Detail view" class="modal-small-image" loading="lazy">`).join('')}
            </div>
            ` : ''}

            ${videoEmbedUrl ? `
            <div class="modal-video-container">
                <iframe src="${videoEmbedUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            ` : ''}

            <h2 id="package-modal-title">${pkg[`title_${currentLang}`]}</h2>
            <div class="modal-desc">${formattedDesc}</div>
            <p class="modal-desc" style="font-style: italic; opacity: 0.7;">${pkg[`desc_si`]}</p>
            <p class="modal-desc" style="font-style: italic; opacity: 0.7;">${pkg[`desc_ja`]}</p>
            ${modalButtonHTML}
        `;
        
        packageModalBody.innerHTML = modalContentHTML;
        packageModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const openHotelModal = (hotelId) => {
        const hotel = config.THAILAND_HOTELS.find(h => h.id === hotelId);
        if (!hotel) return;
    
        const whatsappMessage = config.STRINGS[currentLang].whatsappHotelInquiry(hotel.name);
        const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
        const modalContentHTML = `
            <div class="modal-image-carousel">
                ${hotel.images.map(img => `<img src="${img}" alt="${hotel.name}" class="modal-image">`).join('')}
            </div>
            <h2 id="package-modal-title">${hotel.name}</h2>
            <div class="card-details" style="margin-bottom: 1.5rem; font-size: 1.1rem; justify-content: flex-start; gap: 0.5rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="color: gold;"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                <b>${hotel.rating}</b>
            </div>
            <p class="modal-desc">${hotel[`desc_${currentLang}`]}</p>
            <a href="${whatsappUrl}" class="cta-primary" target="_blank" rel="noopener noreferrer" style="width:100%; text-align:center; display:block;">${config.STRINGS[currentLang].contactUs}</a>
        `;
    
        packageModalBody.innerHTML = modalContentHTML;
        packageModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };
    
    const closePackageModal = () => {
        packageModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
        // Clear body to stop video playback
        packageModalBody.innerHTML = '';
    };
    
    const openMediaLightbox = (mediaItem) => {
        mediaLightboxBody.innerHTML = ''; 
        const downloadBtn = document.getElementById('media-download-btn');

        if (mediaItem.type === 'photo') {
            const img = document.createElement('img');
            img.src = mediaItem.url;
            img.alt = mediaItem.title_en; // Use a default title
            mediaLightboxBody.appendChild(img);
            downloadBtn.href = mediaItem.url;
            downloadBtn.classList.remove('hidden');
            mediaLightboxTitle.textContent = '';
            mediaLightboxTitle.classList.add('hidden');
        } else if (mediaItem.type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = mediaItem.url;
            iframe.title = mediaItem[`title_${currentLang}`];
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            mediaLightboxBody.appendChild(iframe);
            downloadBtn.classList.add('hidden');
            mediaLightboxTitle.textContent = mediaItem[`title_${currentLang}`];
            mediaLightboxTitle.classList.remove('hidden');
        }

        mediaLightbox.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const closeMediaLightbox = () => {
        mediaLightbox.classList.add('hidden');
        document.body.classList.remove('modal-open');
        const iframe = mediaLightboxBody.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src; 
        }
        mediaLightboxBody.innerHTML = '';
    };

    const openAboutModal = () => {
        aboutModalBody.innerHTML = `
            <h2 id="about-modal-title">About DreamStay Tours</h2>
            <p>Your premier partner in crafting unforgettable journeys across Asia. We specialize in creating personalized travel experiences that go beyond the ordinary, letting you travel like it’s another universe.</p>
            <div class="about-modal-stats">
                ${config.DETAILS_STATS.map(stat => `
                    <div class="about-modal-stat">
                        <div class="stat-number">${stat.value.toLocaleString()}</div>
                        <div class="stat-label">${stat[`label_${currentLang}`]}</div>
                    </div>
                `).join('')}
            </div>
            <div class="about-modal-contact">
                <p><strong>Contact Us:</strong> <a href="tel:+817053729297">+81 70-5372-9297</a></p>
                <p><strong>Address:</strong> Saitama Ken, Yashio Shi, 1 Chome-18-9, Japan</p>
            </div>
        `;
        aboutModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const closeAboutModal = () => {
        aboutModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    };

    const renderFAQ = () => {
        faqAccordion.innerHTML = '';
        config.FAQ_DATA.forEach(item => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <button class="faq-question" aria-expanded="false">
                    <span>${item[`q_${currentLang}`]}</span>
                    <span class="faq-toggle">+</span>
                </button>
                <div class="faq-answer">
                    <p>${item[`a_${currentLang}`]}</p>
                </div>
            `;
            faqAccordion.appendChild(faqItem);
        });
    };

    const renderReviews = () => {
        if (!reviewsGrid) return;
        reviewsGrid.innerHTML = '';
        config.REVIEWS_DATA.forEach((review, index) => {
            const card = document.createElement('div');
            card.className = 'review-card animate-in';
            card.style.setProperty('--animation-delay', `${index * 100}ms`);
            card.innerHTML = `
                <p class="review-quote">“${review[`quote_${currentLang}`]}”</p>
                <div class="review-author">
                    <img src="${review.avatar}" alt="${review.name}" class="review-author-img" loading="lazy">
                    <div class="review-author-info">
                        <h4>${review.name}</h4>
                        <p>${review[`country_${currentLang}`]}</p>
                    </div>
                </div>
                ${review.photos && review.photos.length > 0 ? `<button class="review-photos-btn" data-review-id="${review.name}">${config.STRINGS[currentLang].viewPhotos}</button>` : ''}
            `;
            reviewsGrid.appendChild(card);
        });
        setupIntersectionObserver('.review-card.animate-in');
    };

    const renderHotels = () => {
        hotelGrid.innerHTML = '';
        config.THAILAND_HOTELS.forEach((hotel, index) => {
            const card = document.createElement('div');
            card.className = 'hotel-card animate-in';
            card.style.setProperty('--animation-delay', `${index * 50}ms`);
            card.innerHTML = `
                <div class="hotel-card-images">
                    <img src="${hotel.images[0]}" alt="${hotel.name}" loading="lazy">
                    <img src="${hotel.images[1]}" alt="${hotel.name}" loading="lazy">
                    <img src="${hotel.images[2]}" alt="${hotel.name}" loading="lazy">
                </div>
                <div class="hotel-card-content">
                    <h3 class="hotel-card-title">${hotel.name}</h3>
                    <div class="hotel-card-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: gold;"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        <b>${hotel.rating}</b>
                    </div>
                </div>
            `;
            card.addEventListener('click', () => openHotelModal(hotel.id));
            hotelGrid.appendChild(card);
        });
        setupIntersectionObserver('.hotel-card.animate-in');
    };

    const renderGallery = () => {
        galleryGrid.innerHTML = '';
        tourImages.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item animate-in';
            galleryItem.dataset.type = item.type;
            galleryItem.innerHTML = `
                <img src="${item.url}" alt="${item.title_en}" loading="lazy">
                <div class="gallery-item-overlay"></div>
            `;
            galleryItem.addEventListener('click', () => openMediaLightbox(item));
            galleryGrid.appendChild(galleryItem);
        });
        setupIntersectionObserver('.gallery-item.animate-in');
    };

    const showGalleryPage = () => {
        mainContent.classList.add('hidden');
        galleryPage.classList.remove('hidden');
        galleryGrid.className = 'gallery-grid columns-3';
        renderGallery();
        document.body.className = ''; // Use default light theme
        const galleryMain = galleryPage.querySelector('main');
        galleryMain.scrollTo(0, 0);
    };

    const hideGalleryPage = () => {
        galleryPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        if (currentView !== 'Dashboard') {
            const themeClass = `theme-${currentView.toLowerCase().replace(' ', '')}`;
            document.body.className = `country-view ${themeClass}`;
        } else {
            document.body.className = '';
        }
        window.scrollTo(0, 0);
    };

    const startHeroQuoteAnimation = () => {
        if (heroQuoteIntervalId) clearInterval(heroQuoteIntervalId);
        if (!heroTitle) return;
    
        const quotes = config.HERO_QUOTES[currentLang];
        
        // Dynamically replace a quote for English without modifying config file
        if (currentLang === 'en') {
            const quoteToReplace = "Crafting memories, one journey at a time";
            const index = quotes.indexOf(quoteToReplace);
            if (index !== -1) {
                quotes[index] = "Crafting Journeys & Memories";
            }
        }

        let quoteIndex = 0;
        heroTitle.textContent = quotes[quoteIndex];
    
        heroQuoteIntervalId = setInterval(() => {
            heroTitle.style.opacity = '0';
    
            setTimeout(() => {
                quoteIndex = (quoteIndex + 1) % quotes.length;
                heroTitle.textContent = quotes[quoteIndex];
                heroTitle.style.opacity = '1';
            }, 400); // This should match the CSS transition duration
    
        }, 5000);
    };
    
    const startReviewCarousel = () => {
        if (reviewCarouselIntervalId) clearInterval(reviewCarouselIntervalId);
        const totalReviews = config.REVIEWS_DATA.length;
        if (!reviewsGrid || totalReviews <= 1) return;

        const reviews = reviewsGrid.querySelectorAll('.review-card');
        if (reviews.length === 0) return;

        let reviewWidth = 0;
        const calculateReviewWidth = () => {
            if(reviews.length > 0) {
                 const card = reviews[0];
                 const gap = parseFloat(getComputedStyle(reviewsGrid).gap);
                 reviewWidth = card.offsetWidth + gap;
            }
        };
        calculateReviewWidth();

        reviewCarouselIntervalId = setInterval(() => {
            currentReviewIndex = (currentReviewIndex + 1) % totalReviews;
            reviewsGrid.style.transform = `translateX(-${reviewWidth * currentReviewIndex}px)`;

            if (currentReviewIndex === totalReviews -1) {
                setTimeout(() => {
                    reviewsGrid.style.transition = 'none';
                    currentReviewIndex = -1;
                }, 800);
                 setTimeout(() => {
                    reviewsGrid.style.transform = `translateX(0)`;
                    reviewsGrid.style.transition = 'transform 0.8s cubic-bezier(0.65, 0, 0.35, 1)';
                 }, 850);
            }

        }, 2000);
        
        window.addEventListener('resize', calculateReviewWidth);
    };

    const stopReviewCarousel = () => {
        clearInterval(reviewCarouselIntervalId);
    };

    // --- Chatbot Functions ---
    const addMessageToChat = (text, type = 'bot') => {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${type}`;
        messageEl.textContent = text;
        chatbotMessages.appendChild(messageEl);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const renderChatbot = () => {
        chatbotMessages.innerHTML = '';
        chatbotQuestions.innerHTML = '';

        addMessageToChat(config.CHATBOT_DATA[`welcome_${currentLang}`]);
        
        config.CHATBOT_DATA.questions.forEach((q, index) => {
            const questionBtn = document.createElement('button');
            questionBtn.className = 'chatbot-question-btn';
            questionBtn.textContent = q[`q_${currentLang}`];
            questionBtn.dataset.index = index;
            chatbotQuestions.appendChild(questionBtn);
        });
    };
    
    const handleQuestionClick = (e) => {
        const btn = e.target.closest('.chatbot-question-btn');
        if (!btn) return;
        
        const questionIndex = btn.dataset.index;
        const questionData = config.CHATBOT_DATA.questions[questionIndex];
        
        addMessageToChat(questionData[`q_${currentLang}`], 'user');
        
        setTimeout(() => {
            addMessageToChat(questionData[`a_${currentLang}`], 'bot');
        }, 500);

        chatbotQuestions.innerHTML = `
            <button class="chatbot-question-btn" id="ask-another-btn">${config.STRINGS[currentLang].chatbotAskAnother}</button>
        `;
        document.getElementById('ask-another-btn').addEventListener('click', renderChatbot);
    };

    // --- NEW PACKAGE BUILDER & CART FUNCTIONS ---
    const updateCartFab = () => {
        const count = customPackageCart.length;
        if (count > 0) {
            cartFab.classList.remove('hidden');
            cartCountBadge.textContent = count;
        } else {
            cartFab.classList.add('hidden');
        }
    };

    const handleAddToCart = (packageId, buttonEl) => {
        const alreadyInCart = customPackageCart.some(item => item.id === packageId);
        if (alreadyInCart) {
            // Remove from cart
            customPackageCart = customPackageCart.filter(item => item.id !== packageId);
            buttonEl.classList.remove('added');
            buttonEl.innerHTML = '➕';
        } else {
            // Add to cart
            const pkg = config.PACKAGES.find(p => p.id === packageId);
            if (pkg) {
                customPackageCart.push(pkg);
                buttonEl.classList.add('added');
                buttonEl.innerHTML = '✓';
            }
        }
        updateCartFab();
    };
    
    const openCartModal = () => {
        cartModalBody.innerHTML = '';
        if (customPackageCart.length === 0) {
            cartModal.classList.remove('hidden');
            return;
        }

        customPackageCart.forEach(pkg => {
            const itemEl = document.createElement('div');
            itemEl.className = 'cart-item';
            itemEl.dataset.id = pkg.id;
            itemEl.innerHTML = `
                <img src="${config.LOCATION_IMAGES[pkg.id][0]}" class="cart-item-img" alt="${pkg.title_en}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${pkg[`title_${currentLang}`]}</div>
                    <div class="cart-item-country">${pkg.country}</div>
                </div>
                <button class="cart-item-remove-btn" aria-label="Remove ${pkg.title_en}">✖</button>
            `;
            cartModalBody.appendChild(itemEl);
        });
        cartModal.classList.remove('hidden');
    };

    const closeCartModal = () => cartModal.classList.add('hidden');
    
    const clearCart = () => {
        customPackageCart = [];
        updateCartFab();
        openCartModal();
        renderPackages(); // Re-render to update add buttons
        document.querySelectorAll('.custom-location-card .card-add-btn').forEach(btn => {
            btn.classList.remove('added');
            btn.innerHTML = '➕';
        });
    };
    
    const sendCartToWhatsapp = () => {
        if (customPackageCart.length === 0) return;
        const locations = customPackageCart.map(p => `- ${p.title_en} (${p.country})`).join('\n');
        const message = `Hello DreamStay Tours, I'm interested in a custom tour with the following locations:\n\n${locations}\n\nPlease provide me with a quote!`;
        const url = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const renderPackagesBuilderModal = () => {
        const body = packagesBuilderModal.querySelector('.packages-builder-body');
        const countries = [...new Set(config.PACKAGES.map(p => p.country))];

        let html = `
            <h3 class="builder-section-title">Recommended Packages</h3>
            <div class="recommended-packages-grid">
        `;
        
        window.packagesConfig.recommended.forEach(recPkg => {
            html += `
                <div class="recommended-package-card" style="--theme-color: ${recPkg.themeColor}; --theme-icon: '${recPkg.icon}';">
                    <h4 class="rec-pkg-title">${recPkg[`title_${currentLang}`]}</h4>
                    <p class="rec-pkg-desc">${recPkg[`desc_${currentLang}`]}</p>
                    <div class="rec-pkg-durations" data-package-id="${recPkg.id}">
                        <button class="active" data-duration="4D/3N">4D/3N</button>
                        <button data-duration="7D/6N">7D/6N</button>
                        <button data-duration="10D/9N">10D/9N</button>
                    </div>
                    <button class="rec-pkg-cta" data-package-id="${recPkg.id}">Send Inquiry</button>
                </div>
            `;
        });

        html += `</div>
            <h3 class="builder-section-title">Or, Build Your Own Package</h3>
            <div class="custom-builder-controls">
                ${countries.map((c, i) => `<button class="filter-tab ${i === 0 ? 'active' : ''}" data-country="${c}">${c}</button>`).join('')}
            </div>
            <div id="custom-locations-container"></div>
        `;

        body.innerHTML = html;
        renderCustomLocationsForBuilder(countries[0]);
    };

    const renderCustomLocationsForBuilder = (country) => {
        const container = document.getElementById('custom-locations-container');
        const locations = config.PACKAGES.filter(p => p.country === country && !p.comingSoon);
        
        let html = `<div class="custom-locations-grid">`;
        locations.forEach(pkg => {
            const isInCart = customPackageCart.some(item => item.id === pkg.id);
            const addBtnClass = isInCart ? 'card-add-btn added' : 'card-add-btn';
            const addBtnContent = isInCart ? '✓' : '➕';
            html += `
                <div class="custom-location-card">
                    <img src="${config.LOCATION_IMAGES[pkg.id][0]}" loading="lazy" alt="${pkg.title_en}">
                    <div class="custom-location-card-title">${pkg[`title_${currentLang}`]}</div>
                    <button class="${addBtnClass}" data-id="${pkg.id}" aria-label="Add ${pkg.title_en}">${addBtnContent}</button>
                </div>
            `;
        });
        html += `</div>`;
        container.innerHTML = html;
    };

    const openPackagesBuilderModal = () => {
        renderPackagesBuilderModal();
        packagesBuilderModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const closePackagesBuilderModal = () => {
        packagesBuilderModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    };
    
    // --- Event Listeners ---
    langButtonsContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (!btn) return;
        
        if (!audioContextUnlocked) {
            audioContextUnlocked = true;
            playAudio();
        }

        selectedLang = btn.dataset.lang;
        langButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        translateUI(selectedLang);
        startApp();
    });
    
    backgroundMusic.addEventListener('error', (e) => {
        console.error("❌ EVENT: An error occurred with the audio element.", e);
    });
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedCountry = tab.dataset.country;
            if (selectedCountry === currentView) return;
            switchView(selectedCountry);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    thailandNavDashboard.addEventListener('click', () => switchView('Dashboard'));
    thailandNavOther.addEventListener('click', () => switchView('Dashboard'));
    thailandNavHotels.addEventListener('click', () => {
        if (thailandHotelsSection.classList.contains('hidden')) {
            showHotelsBtn.click();
        } else {
             thailandHotelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    packageModal.addEventListener('click', (e) => {
        if (e.target === packageModal || e.target.closest('.modal-close-btn')) {
            closePackageModal();
        }
    });

    mediaLightbox.addEventListener('click', (e) => {
        if (e.target === mediaLightbox || e.target.closest('.modal-close-btn')) {
            closeMediaLightbox();
        }
    });

    if(galleryBtn) galleryBtn.addEventListener('click', showGalleryPage);
    if(backToMainBtn) backToMainBtn.addEventListener('click', hideGalleryPage);
    
    if (galleryLayoutControls) {
        galleryLayoutControls.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (btn) {
                const layout = btn.dataset.layout;
                galleryLayoutControls.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                galleryGrid.className = 'gallery-grid'; // Reset
                galleryGrid.classList.add(`columns-${layout}`);
            }
        });
    }

    if(layoutControls) {
        layoutControls.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                currentLayout = e.target.dataset.layout;
                layoutControls.querySelectorAll('button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                packagesGrid.className = 'packages-grid';
                packagesGrid.classList.add(`columns-${currentLayout}`);
            }
        });
    }

    if (filterCitySelect) {
         filterCitySelect.addEventListener('change', (e) => {
            currentCityFilter = e.target.value;
            renderPackages();
        });
    }

    if (sortPackagesSelect) {
        sortPackagesSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderPackages();
        });
    }

    if(chatbotStickyBtn) chatbotStickyBtn.addEventListener('click', () => chatbotModal.classList.remove('hidden'));
    if(chatbotCloseBtn) chatbotCloseBtn.addEventListener('click', () => chatbotModal.classList.add('hidden'));
    if(chatbotQuestions) chatbotQuestions.addEventListener('click', handleQuestionClick);
    
    if (currencySwitcherBtn) {
        currencySwitcherBtn.addEventListener('click', () => {
            currentCurrencyIndex = (currentCurrencyIndex + 1) % currencies.length;
            updateAllPrices();
        });
    }

    if (showHotelsBtn) {
        showHotelsBtn.addEventListener('click', () => {
            const isHidden = thailandHotelsSection.classList.toggle('hidden');
            if (!isHidden) {
                if (!hotelsRendered) {
                    renderHotels();
                    hotelsRendered = true;
                }
                showHotelsBtn.textContent = config.STRINGS[currentLang].hideThailandHotels;
                thailandHotelsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                showHotelsBtn.textContent = config.STRINGS[currentLang].seeThailandHotels;
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!packageModal.classList.contains('hidden')) closePackageModal();
            if (!mediaLightbox.classList.contains('hidden')) closeMediaLightbox();
            if (!packagesBuilderModal.classList.contains('hidden')) closePackagesBuilderModal();
            if (!cartModal.classList.contains('hidden')) closeCartModal();
            if (!chatbotModal.classList.contains('hidden')) chatbotModal.classList.add('hidden');
            if (!aboutModal.classList.contains('hidden')) closeAboutModal();
        }
    });

    faqAccordion.addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq-question');
        if (questionBtn) {
            const faqItem = questionBtn.parentElement;
            faqItem.classList.toggle('open');
            const isExpanded = faqItem.classList.contains('open');
            questionBtn.setAttribute('aria-expanded', isExpanded);
            questionBtn.querySelector('.faq-toggle').textContent = isExpanded ? '-' : '+';
        }
    });

    reviewsGrid.addEventListener('click', (e) => {
        const photosBtn = e.target.closest('.review-photos-btn');
        if (photosBtn) {
            const reviewName = photosBtn.dataset.reviewId;
            const review = config.REVIEWS_DATA.find(r => r.name === reviewName);
            if (!review || !review.photos || review.photos.length === 0) return;
            
            openMediaLightbox({
                type: 'photo',
                url: review.photos[0],
                title_en: config.STRINGS.en.photosBy.replace('{name}', review.name),
                title_si: config.STRINGS.si.photosBy.replace('{name}', review.name),
                title_ja: config.STRINGS.ja.photosBy.replace('{name}', review.name),
            });
        }
    });

    if (reviewsWrapper) {
        reviewsWrapper.addEventListener('mouseenter', stopReviewCarousel);
        reviewsWrapper.addEventListener('mouseleave', startReviewCarousel);
    }

    footerLangToggle.addEventListener('click', () => {
        const langs = ['en', 'si', 'ja'];
        const currentLangIndex = langs.indexOf(currentLang);
        const nextLang = langs[(currentLangIndex + 1) % langs.length];
        setLanguage(nextLang);
        renderFAQ();
        renderReviews();
        if (currentView === 'Dashboard') {
            renderDashboard();
        } else {
            renderPackages();
            if(currentView === 'Thailand' && hotelsRendered){
                renderHotels();
            }
        }
    });
    
    // --- NEW EVENT LISTENERS ---
    const fabObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // When hero is NOT visible on screen, show the buttons.
                if (!entry.isIntersecting) {
                    stickyActionsContainer.classList.remove('fab-hidden');
                } else {
                    stickyActionsContainer.classList.add('fab-hidden');
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of hero is visible/hidden
    );

    if (heroSection) {
        fabObserver.observe(heroSection);
    }

    if (aboutDreamstayBtn) {
        aboutDreamstayBtn.addEventListener('click', () => {
            if (filtersSection) {
                filtersSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    if (heroMenuBtn) {
        heroMenuBtn.addEventListener('click', openAboutModal);
    }
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal || e.target.closest('.modal-close-btn')) {
                closeAboutModal();
            }
        });
    }

    if (heroDestinationsContainer) {
        heroDestinationsContainer.addEventListener('click', (e) => {
            const card = e.target.closest('.destination-card');
            if (card && card.dataset.country) {
                const country = card.dataset.country;
                switchView(country);
            }
        });
    }

    // --- NEW PACKAGE BUILDER & CART LISTENERS ---
    if (packagesBuilderBtn) packagesBuilderBtn.addEventListener('click', openPackagesBuilderModal);
    
    packagesBuilderModal.addEventListener('click', e => {
        if (e.target === packagesBuilderModal || e.target.closest('.modal-close-btn')) {
            closePackagesBuilderModal();
        }
        
        // Handle duration selection
        if (e.target.closest('.rec-pkg-durations button')) {
            const btn = e.target.closest('.rec-pkg-durations button');
            const parent = btn.parentElement;
            parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        // Handle Recommended Package CTA
        if (e.target.closest('.rec-pkg-cta')) {
            const btn = e.target.closest('.rec-pkg-cta');
            const pkgId = btn.dataset.packageId;
            const recPkg = window.packagesConfig.recommended.find(p => p.id === pkgId);
            const durationEl = btn.parentElement.querySelector('.rec-pkg-durations button.active');
            const duration = durationEl ? durationEl.dataset.duration : 'Not specified';
            const country = document.querySelector('.custom-builder-controls .filter-tab.active')?.dataset.country || 'Any';

            const message = `Hello DreamStay! I'm interested in the "${recPkg.title_en}" package for ${country}, with a duration of ${duration}. Could you provide more details and a quote?`;
            const url = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }

        // Handle custom builder country tabs
        if (e.target.closest('.custom-builder-controls .filter-tab')) {
            const tab = e.target.closest('.custom-builder-controls .filter-tab');
            document.querySelectorAll('.custom-builder-controls .filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderCustomLocationsForBuilder(tab.dataset.country);
        }

        // Handle add to cart inside modal
        if (e.target.closest('.custom-location-card .card-add-btn')) {
            const btn = e.target.closest('.card-add-btn');
            handleAddToCart(btn.dataset.id, btn);
            // also update the button on the main page if it's visible
            const mainPageBtn = document.querySelector(`.package-card .card-add-btn[data-id="${btn.dataset.id}"]`);
            if (mainPageBtn) {
                mainPageBtn.classList.toggle('added', btn.classList.contains('added'));
                mainPageBtn.innerHTML = btn.innerHTML;
            }
        }
    });

    packagesGrid.addEventListener('click', e => {
        if (e.target.closest('.card-add-btn')) {
            const btn = e.target.closest('.card-add-btn');
            handleAddToCart(btn.dataset.id, btn);
        }
    });

    cartFab.addEventListener('click', openCartModal);
    cartModal.addEventListener('click', e => {
        if (e.target === cartModal || e.target.closest('.modal-close-btn')) {
            closeCartModal();
        }
        if (e.target.closest('.cart-item-remove-btn')) {
            const itemEl = e.target.closest('.cart-item');
            const packageId = itemEl.dataset.id;
            // This will also update the button on the main page
            const btnOnCard = document.querySelector(`.package-card .card-add-btn[data-id="${packageId}"]`);
            if(btnOnCard) handleAddToCart(packageId, btnOnCard);
            // This will also update the button in the builder modal
            const btnInModal = document.querySelector(`.custom-location-card .card-add-btn[data-id="${packageId}"]`);
            if(btnInModal) {
                 btnInModal.classList.remove('added');
                 btnInModal.innerHTML = '➕';
            }
            itemEl.remove();
            if (customPackageCart.length === 0) closeCartModal();
        }
    });

    cartClearBtn.addEventListener('click', clearCart);
    cartSendBtn.addEventListener('click', sendCartToWhatsapp);

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    // --- Initial Load ---
    resizeCanvas();
    showPreloader();
});
