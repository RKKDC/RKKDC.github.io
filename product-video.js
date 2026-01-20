// Product Video Hover Module - YouTube-style video preview on hover

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        hoverDelay: 300,        // Delay before video starts (ms)
        fadeInDuration: 200,    // Video fade-in duration (ms)
        fadeOutDuration: 150,   // Video fade-out duration (ms)
        videoVolume: 0,         // Muted by default
        preloadOnInit: false    // Set to true to preload videos on page load
    };

    let hoverTimers = new Map();
    let videoCache = new Map();

    /**
     * Initialize video hover functionality for all product cards
     */
    function initProductVideoHover() {
        const productCards = document.querySelectorAll('.product-card');
        
        if (productCards.length === 0) {
            console.log('[product-video] No product cards found');
            return;
        }

        productCards.forEach(card => {
            setupCardVideoHover(card);
        });

        console.log(`[product-video] Initialized video hover for ${productCards.length} product cards`);
    }

    /**
     * Setup video hover for a single product card
     */
    function setupCardVideoHover(card) {
        const productImage = card.querySelector('.product-image');
        if (!productImage) return;

        // Get video URL from product data
        const productId = card.getAttribute('data-id');
        if (!productId) return;

        // Create video element if not exists
        let videoElement = productImage.querySelector('.product-video');
        if (!videoElement) {
            videoElement = createVideoElement();
            productImage.appendChild(videoElement);
        }

        // Store video URL in dataset
        const videoUrl = getProductVideoUrl(productId);
        if (videoUrl) {
            card.setAttribute('data-video-url', videoUrl);
        }

        // Remove existing listeners to avoid duplicates
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);

        // Add hover listeners
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        // Prevent video from blocking clicks
        if (videoElement) {
            videoElement.style.pointerEvents = 'none';
        }
    }

    /**
     * Create video element with proper attributes
     */
    function createVideoElement() {
        const video = document.createElement('video');
        video.className = 'product-video';
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = 'metadata';
        video.volume = CONFIG.videoVolume;
        
        // Styling
        Object.assign(video.style, {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: '0',
            transition: `opacity ${CONFIG.fadeInDuration}ms ease`,
            pointerEvents: 'none',
            zIndex: '2'
        });

        return video;
    }

    /**
     * Get video URL for a product
     */
    function getProductVideoUrl(productId) {
        // This should match your products array structure
        // For demo, using a placeholder video
        return 'https://www.w3schools.com/html/mov_bbb.mp4';
    }

    /**
     * Handle mouse enter event
     */
    function handleMouseEnter(event) {
        const card = event.currentTarget;
        const productImage = card.querySelector('.product-image');
        const videoElement = productImage?.querySelector('.product-video');
        const videoUrl = card.getAttribute('data-video-url');

        if (!videoElement || !videoUrl) return;

        // Clear any existing timer for this card
        if (hoverTimers.has(card)) {
            clearTimeout(hoverTimers.get(card));
        }

        // Set timer for delayed video start
        const timer = setTimeout(() => {
            loadAndPlayVideo(videoElement, videoUrl);
        }, CONFIG.hoverDelay);

        hoverTimers.set(card, timer);
    }

    /**
     * Handle mouse leave event
     */
    function handleMouseLeave(event) {
        const card = event.currentTarget;
        const productImage = card.querySelector('.product-image');
        const videoElement = productImage?.querySelector('.product-video');

        // Clear hover timer
        if (hoverTimers.has(card)) {
            clearTimeout(hoverTimers.get(card));
            hoverTimers.delete(card);
        }

        // Stop and hide video
        if (videoElement) {
            stopVideo(videoElement);
        }
    }

    /**
     * Load and play video
     */
    function loadAndPlayVideo(videoElement, videoUrl) {
        // Set video source if not already set
        if (videoElement.src !== videoUrl) {
            videoElement.src = videoUrl;
        }

        // Play video
        videoElement.currentTime = 0;
        const playPromise = videoElement.play();

        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    // Fade in video
                    videoElement.style.opacity = '1';
                })
                .catch(error => {
                    console.warn('[product-video] Video play failed:', error.message);
                });
        }
    }

    /**
     * Stop video and fade out
     */
    function stopVideo(videoElement) {
        // Fade out
        videoElement.style.opacity = '0';

        // Pause after fade out
        setTimeout(() => {
            videoElement.pause();
            videoElement.currentTime = 0;
        }, CONFIG.fadeOutDuration);
    }

    /**
     * Reinitialize videos for dynamically added products
     */
    function reinitializeVideoHover() {
        // Clear existing timers
        hoverTimers.forEach(timer => clearTimeout(timer));
        hoverTimers.clear();

        // Reinitialize all cards
        initProductVideoHover();
    }

    /**
     * Cleanup function
     */
    function cleanup() {
        hoverTimers.forEach(timer => clearTimeout(timer));
        hoverTimers.clear();
        videoCache.clear();

        const videos = document.querySelectorAll('.product-video');
        videos.forEach(video => {
            video.pause();
            video.src = '';
            video.load();
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProductVideoHover);
    } else {
        initProductVideoHover();
    }

    // Expose public API
    window.ProductVideoHover = {
        init: initProductVideoHover,
        reinit: reinitializeVideoHover,
        cleanup: cleanup
    };

})();
