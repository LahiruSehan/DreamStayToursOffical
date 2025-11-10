document.addEventListener('DOMContentLoaded', () => {

    // --- All data is now loaded from config.js ---

    // --- DOM Elements ---
    const preloader = document.getElementById('preloader');
    const langModal = document.getElementById('language-modal');
    const langButtons = document.querySelectorAll('.lang-btn');
    const appWrapper = document.getElementById('app-wrapper');
    const mainContent = document.getElementById('main-content');
    const galleryPage = document.getElementById('gallery-page');
    const galleryBtn = document.getElementById('gallery-btn');
    const backToMainBtn = document.getElementById('back-to-main-btn');
    const galleryGrid = document.getElementById('gallery-grid');
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const detailsSection = document.getElementById('details-section');
    const packagesGrid = document.getElementById('packages-grid');
    const filterTabs = document.querySelectorAll('.filter-tab');
    const packageModal = document.getElementById('package-modal');
    const packageModalBody = document.getElementById('package-modal-body');
    const stickyContactBtn = document.getElementById('contact-sticky-btn');
    const heroWhatsappBtn = document.getElementById('hero-whatsapp-btn');
    const faqAccordion = document.querySelector('.faq-accordion');
    const footerLangToggle = document.getElementById('footer-lang-toggle');
    const reviewsWrapper = document.querySelector('.reviews-carousel-wrapper');
    const reviewsGrid = document.getElementById('reviews-grid');
    const heroTitle = document.querySelector('.hero-title');
    const mediaLightbox = document.getElementById('media-lightbox');
    const mediaLightboxBody = document.getElementById('media-lightbox-body');
    const mediaLightboxTitle = document.getElementById('media-lightbox-title');
    const customPlanBtn = document.getElementById('custom-plan-btn');
    const customPlanModal = document.getElementById('custom-plan-modal');
    const customPlanForm = document.getElementById('custom-plan-form');
    // Chatbot elements
    const chatbotStickyBtn = document.getElementById('chatbot-sticky-btn');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatbotCloseBtn = document.getElementById('chatbot-close-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotQuestions = document.getElementById('chatbot-questions');
    // Music element
    const backgroundMusic = document.getElementById('background-music');

    // --- State ---
    let currentLang = null;
    let currentView = 'Dashboard';
    let heroQuoteIntervalId;
    let reviewCarouselIntervalId;
    let currentReviewIndex = 0;
    const heroFonts = ['var(--font-quote-1)', 'var(--font-quote-2)', 'var(--font-quote-3)', 'var(--font-quote-4)'];
    let fontIndex = 0;

    // --- Background Canvas Animation ---
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    // --- Hero Canvas Animation ---
    const heroCanvas = document.getElementById('hero-particles-canvas');
    const heroCtx = heroCanvas.getContext('2d');
    let heroParticles = [];
    let heroAnimationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    function resizeHeroCanvas() {
        if (!heroCanvas) return;
        const hero = document.querySelector('.hero');
        heroCanvas.width = hero.offsetWidth;
        heroCanvas.height = hero.offsetHeight;
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
    
    function createHeroParticles() {
        heroParticles = [];
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const count = Math.min(Math.floor(heroCanvas.width / 20), 100);
        for (let i = 0; i < count; i++) {
            heroParticles.push({
                x: Math.random() * heroCanvas.width,
                y: Math.random() * heroCanvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: -Math.random() * 0.5 - 0.2, // Drift upwards
                size: Math.random() * 2 + 1,
                color: `rgba(255, 255, 255, ${Math.random() * 0.4 + 0.2})`,
            });
        }
    }

    function animateHeroParticles() {
        heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
        heroParticles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < -p.size) p.x = heroCanvas.width + p.size;
            if (p.x > heroCanvas.width + p.size) p.x = -p.size;
            if (p.y < -p.size) p.y = heroCanvas.height + p.size;

            heroCtx.beginPath();
            heroCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            heroCtx.fillStyle = p.color;
            heroCtx.fill();
        });
        heroAnimationFrameId = requestAnimationFrame(animateHeroParticles);
    }
    
    const themeParticles = {
        Dashboard: { count: 0 },
        Japan: { count: 30, vx: [-0.2, 0.2], vy: [0.3, 0.8], size: [10, 20], char: '🌸', color: 'rgba(255, 182, 193, 0.5)' },
        Thailand: { count: 20, vx: [-0.1, 0.1], vy: [-0.5, -0.2], size: [15, 25], char: '🏮', color: 'rgba(255, 184, 77, 0.4)' },
        Malaysia: { count: 40, vx: [-0.3, 0.3], vy: [0.1, 0.5], size: [10, 20], char: '🌙', color: 'rgba(230, 230, 250, 0.6)' },
        India: { count: 35, vx: [-0.2, 0.2], vy: [0.2, 0.7], size: [15, 25], chars: ['🕉️', '☪️', '✝️', '☸️', '☬'], colors: ['rgba(255, 153, 51, 0.7)', 'rgba(19, 141, 117, 0.7)', 'rgba(88, 144, 255, 0.7)', 'rgba(255, 215, 0, 0.7)', 'rgba(240, 178, 122, 0.7)'] },
        "Sri Lanka": { count: 30, vx: [-0.2, 0.2], vy: [0.3, 0.8], size: [15, 25], char: '🌊', color: 'rgba(96, 165, 250, 0.5)' }
    };

    // --- Functions ---
    const initApp = () => {
        preloader.classList.remove('hidden');
        langModal.classList.remove('hidden');
    };
    
    const setLanguage = (lang) => {
        currentLang = lang;
        
        // Start app after language selection
        preloader.classList.add('fade-out');
        setTimeout(() => preloader.classList.add('hidden'), 500);
        appWrapper.classList.remove('hidden');

        // Play background music
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.warn("Background music autoplay failed:", error);
            });
        }
        
        translateUI(currentLang);
        renderFAQ();
        renderReviews();
        renderDashboard();
        switchView('Dashboard', true);
        startHeroQuoteAnimation();
        startReviewCarousel();
        renderChatbot();

        resizeHeroCanvas();
        createHeroParticles();
        animateHeroParticles();
    };
    
    const translateUI = (lang) => {
        document.documentElement.lang = lang;
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(el => {
            const key = el.dataset.langKey;
            if (config.STRINGS[lang][key]) {
                el.textContent = config.STRINGS[lang][key];
            }
        });
        updateWhatsappLinks();
    };

    const updateWhatsappLinks = () => {
        const message = config.STRINGS[currentLang].whatsappMsg("");
        const url = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message.replace('"" ', ''))}`;
        stickyContactBtn.href = url;
        heroWhatsappBtn.href = url;
    };
    
    const renderPackages = (country) => {
        packagesGrid.innerHTML = '';
        const filteredPackages = config.PACKAGES.filter(p => p.country === country);
            
        filteredPackages.forEach(pkg => {
            const card = document.createElement('div');
            card.className = 'package-card animate-in';
            card.innerHTML = `
                <div class="card-image-container">
                    <img src="${pkg.images[0]}" alt="${pkg[`title_${currentLang}`]}" class="card-image" loading="lazy">
                </div>
                <div class="card-content">
                    <p class="card-country">${pkg.country}</p>
                    <h3 class="card-title">${pkg[`title_${currentLang}`]}</h3>
                    <p class="card-price">${pkg.price_from}</p>
                    <div class="card-details">
                        <span>${pkg.duration}</span>
                        <span class="card-rating">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: gold;"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                            ${pkg.rating}
                        </span>
                    </div>
                    <button class="card-button" data-id="${pkg.id}">${config.STRINGS[currentLang].viewDetails}</button>
                </div>
            `;
            card.querySelector('.card-button').addEventListener('click', () => openPackageModal(pkg.id));
            packagesGrid.appendChild(card);
        });
    };
    
    const switchView = (view, forceParticles = false) => {
        document.body.classList.remove('scrolled-theme'); // Reset scroll theme on any view switch
        const oldView = currentView;
        currentView = view;

        filterTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.country === view);
        });
        
        const themeClass = view === 'Dashboard' ? '' : `theme-${view.toLowerCase().replace(' ', '')}`;
        document.body.className = `country-view ${themeClass}`;
        if (view === 'Dashboard') {
            document.body.classList.remove('country-view');
            handleDashboardScroll();
        } else {
            renderPackages(view);
            setupIntersectionObserver('.package-card.animate-in');
        }

        // Only recreate particles if the view has changed
        if (oldView !== view || forceParticles) {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null; // Reset animation ID
            const particleConfig = themeParticles[view];
            if (particleConfig && particleConfig.count > 0) {
                createParticles(particleConfig);
                animateParticles();
            } else {
                particles = []; // Clear particles if no config
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

        config.DETAILS_STATS.forEach(stat => {
            const card = document.createElement('div');
            card.className = 'stat-card animate-in';
            card.innerHTML = `
                <div class="stat-number" data-target="${stat.value}">0</div>
                <div class="stat-label">${stat[`label_${currentLang}`]}</div>
            `;
            detailsGrid.appendChild(card);
        });
        
        // Render Services Section
        const servicesHTML = `
            <div class="services-section">
                <h3 class="services-title animate-in">${config.STRINGS[currentLang].servicesTitle}</h3>
                <div class="services-grid">
                    <div class="service-item animate-in">
                        <div class="service-icon">✈️</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceAirTickets}</p>
                    </div>
                    <div class="service-item animate-in">
                        <div class="service-icon">🛂</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceVisa}</p>
                    </div>
                    <div class="service-item animate-in">
                        <div class="service-icon">🚌</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceTransport}</p>
                    </div>
                    <div class="service-item animate-in">
                        <div class="service-icon">🥐</div>
                        <p class="service-label">${config.STRINGS[currentLang].serviceBreakfast}</p>
                    </div>
                </div>
            </div>
        `;
        servicesContainer.innerHTML = servicesHTML;


        config.SPONSORS.forEach(sponsor => {
            const link = document.createElement('a');
            link.href = sponsor.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.innerHTML = `<img src="${sponsor.logoUrl}" alt="${sponsor.name}" class="sponsor-logo animate-in">`;
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
                    entry.target.classList.add('is-visible');
                    
                    const statNumberEl = entry.target.querySelector('.stat-number');
                    if (statNumberEl) {
                        animateCountUp(statNumberEl);
                    } else if (entry.target.matches('.stat-number')) {
                        animateCountUp(entry.target);
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(el => observer.observe(el));
    };

    const openPackageModal = (packageId) => {
        const pkg = config.PACKAGES.find(p => p.id === packageId);
        if (!pkg) return;

        const whatsappMessage = config.STRINGS[currentLang].whatsappMsg(pkg[`title_${currentLang}`]);
        const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
        
        packageModalBody.innerHTML = `
            <div class="modal-image-carousel">
                ${pkg.images.map(img => `<img src="${img}" alt="${pkg[`title_${currentLang}`]}" class="modal-image">`).join('')}
            </div>
            <h2 id="package-modal-title">${pkg[`title_${currentLang}`]}</h2>
            <p class="modal-price">${pkg.price_from}</p>
            <p class="modal-desc">${pkg[`desc_${currentLang}`]}</p>
            <a href="${whatsappUrl}" class="cta-primary" target="_blank" rel="noopener noreferrer" style="width:100%; text-align:center; display:block;">${config.STRINGS[currentLang].contactWhatsApp}</a>
        `;
        packageModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };
    
    const closePackageModal = () => {
        packageModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    };
    
    const openMediaLightbox = (mediaItem) => {
        mediaLightboxBody.innerHTML = ''; // Clear previous content

        if (mediaItem.type === 'photo') {
            const img = document.createElement('img');
            img.src = mediaItem.url;
            img.alt = mediaItem[`title_${currentLang}`];
            mediaLightboxBody.appendChild(img);
        } else if (mediaItem.type === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = mediaItem.url;
            iframe.title = mediaItem[`title_${currentLang}`];
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            mediaLightboxBody.appendChild(iframe);
        }

        mediaLightboxTitle.textContent = mediaItem[`title_${currentLang}`];
        mediaLightbox.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const closeMediaLightbox = () => {
        mediaLightbox.classList.add('hidden');
        document.body.classList.remove('modal-open');
        const iframe = mediaLightboxBody.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src; // This reloads the iframe, stopping video playback
        }
        mediaLightboxBody.innerHTML = '';
    };

    const openCustomPlanModal = () => {
        customPlanModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
    };

    const closeCustomPlanModal = () => {
        customPlanModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    };

    const handleCustomPlanSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(customPlanForm);
        const data = Object.fromEntries(formData.entries());
        const message = config.STRINGS[currentLang].customPlanWhatsappMsg(data);
        const whatsappUrl = `https://wa.me/${config.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        closeCustomPlanModal();
        customPlanForm.reset();
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
        config.REVIEWS_DATA.forEach((review) => {
            const card = document.createElement('div');
            card.className = 'review-card animate-in';
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
    };

    const renderGallery = (filter = 'all') => {
        galleryGrid.innerHTML = '';
        const filteredMedia = config.MEDIA_GALLERY.filter(item => filter === 'all' || item.type === filter);

        filteredMedia.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item animate-in';
            galleryItem.dataset.type = item.type;
            galleryItem.innerHTML = `
                <img src="${item.thumbnailUrl || item.url}" alt="${item[`title_${currentLang}`]}" loading="lazy">
                <div class="gallery-item-overlay">
                    <h4 class="gallery-item-title">${item[`title_${currentLang}`]}</h4>
                </div>
                ${item.type === 'video' ? `
                    <div class="gallery-item-play-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                    </div>
                ` : ''}
            `;
            galleryItem.addEventListener('click', () => openMediaLightbox(item));
            galleryGrid.appendChild(galleryItem);
        });
        setupIntersectionObserver('.gallery-item.animate-in');
    };

    const showGalleryPage = () => {
        mainContent.classList.add('hidden');
        galleryPage.classList.remove('hidden');
        renderGallery();
        window.scrollTo(0, 0);
    };

    const hideGalleryPage = () => {
        galleryPage.classList.add('hidden');
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
    };

    const startHeroQuoteAnimation = () => {
        if (heroQuoteIntervalId) clearInterval(heroQuoteIntervalId);
        if (!heroTitle) return;
        
        const quotes = config.HERO_QUOTES[currentLang];
        let quoteIndex = 0;
        heroTitle.textContent = quotes[quoteIndex];
        heroTitle.style.fontFamily = heroFonts[fontIndex];

        heroQuoteIntervalId = setInterval(() => {
            heroTitle.style.opacity = '0';
            
            setTimeout(() => {
                quoteIndex = (quoteIndex + 1) % quotes.length;
                fontIndex = (fontIndex + 1) % heroFonts.length;
                heroTitle.textContent = quotes[quoteIndex];
                heroTitle.style.fontFamily = heroFonts[fontIndex];
                heroTitle.style.opacity = '1';
            }, 400);

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
                    currentReviewIndex = -1; // Prepare for next cycle reset
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
    
    const handleDashboardScroll = () => {
        if (currentView === 'Dashboard') {
            if (window.scrollY > 100) {
                document.body.classList.add('scrolled-theme');
            } else {
                document.body.classList.remove('scrolled-theme');
            }
        }
    };

    // --- Chatbot Functions ---
    const addMessageToChat = (text, type = 'bot') => {
        const messageEl = document.createElement('div');
        messageEl.className = `chat-message ${type}`;
        messageEl.textContent = text;
        chatbotMessages.appendChild(messageEl);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to bottom
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

    // --- Event Listeners ---
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => switchView(tab.dataset.country));
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
    
    galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            galleryFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });

    if(customPlanBtn) customPlanBtn.addEventListener('click', openCustomPlanModal);
    if(customPlanModal) {
        customPlanModal.addEventListener('click', (e) => {
            if (e.target === customPlanModal || e.target.closest('.modal-close-btn')) {
                closeCustomPlanModal();
            }
        });
    }
    if(customPlanForm) customPlanForm.addEventListener('submit', handleCustomPlanSubmit);

    // Chatbot Listeners
    if(chatbotStickyBtn) chatbotStickyBtn.addEventListener('click', () => chatbotModal.classList.remove('hidden'));
    if(chatbotCloseBtn) chatbotCloseBtn.addEventListener('click', () => chatbotModal.classList.add('hidden'));
    if(chatbotQuestions) chatbotQuestions.addEventListener('click', handleQuestionClick);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!packageModal.classList.contains('hidden')) closePackageModal();
            if (!mediaLightbox.classList.contains('hidden')) closeMediaLightbox();
            if (!customPlanModal.classList.contains('hidden')) closeCustomPlanModal();
            if (!chatbotModal.classList.contains('hidden')) chatbotModal.classList.add('hidden');
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
    });

    window.addEventListener('scroll', handleDashboardScroll);

    window.addEventListener('resize', () => {
        resizeCanvas();
        resizeHeroCanvas();
    });

    // --- Initial Load ---
    resizeCanvas();
    initApp();
});