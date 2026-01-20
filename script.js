// Consolidated app script: products (furniture), UI, modals, cart, parallax, search/filter/sort

const products = [
    // Dog Bed Products from Hero Slider
    {
        id: 'dogbed-luxury-1',
        name: 'Luxury Comfort Bed',
        category: 'beds',
        price: 149.99,
        rating: 4.8,
        images: ['dogbed1.png', 'dogbed1.png', 'dogbed1.png', 'dogbed1.png', 'dogbed1.png'],
        colors: ['Beige', 'Gray', 'Brown'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        options: ['Small', 'Medium', 'Large', 'X-Large'],
        description: 'Premium orthopedic dog bed with memory foam cushioning. Perfect for large breeds and senior dogs.',
        longDescription: 'This luxury comfort bed features premium orthopedic memory foam that conforms to your pet\'s body, providing optimal support for joints and muscles. The removable, machine-washable cover is made from durable, water-resistant fabric. Non-slip bottom keeps the bed in place. Ideal for dogs of all sizes, especially large breeds and senior dogs who need extra support.'
    },
    {
        id: 'dogbed-cozy-2',
        name: 'Cozy Cushion Bed',
        category: 'beds',
        price: 89.99,
        rating: 4.6,
        images: ['dogbed2.png', 'dogbed2.png', 'dogbed2.png', 'dogbed2.png', 'dogbed2.png'],
        colors: ['Blue', 'Pink', 'Green', 'Beige'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        options: ['Small', 'Medium', 'Large'],
        description: 'Soft and comfortable cushion bed with plush filling. Ideal for medium-sized dogs who love to curl up.',
        longDescription: 'The Cozy Cushion Bed provides ultimate comfort with its ultra-soft plush filling and cozy design. Perfect for dogs who love to curl up and nestle. Features a durable outer fabric that resists wear and tear, with easy-to-clean materials. The raised edges provide a sense of security and warmth. Available in multiple sizes and colors to match any home décor.'
    },
    {
        id: 'dogbed-premium-3',
        name: 'Premium Lounge Bed',
        category: 'beds',
        price: 199.99,
        rating: 4.9,
        images: ['dogbed3.png', 'dogbed3.png', 'dogbed3.png', 'dogbed3.png', 'dogbed3.png'],
        colors: ['Charcoal', 'Cream', 'Navy'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4',
        options: ['Medium', 'Large', 'X-Large'],
        description: 'Luxurious lounge-style bed with raised edges for head support. Features premium materials and elegant design.',
        longDescription: 'Our Premium Lounge Bed combines style and function with its sophisticated design and premium construction. The raised edges provide excellent head and neck support, perfect for dogs who like to rest their head while sleeping. Made with high-quality, durable materials that resist scratching and wear. The elegant design complements any interior while providing your pet with the ultimate comfort experience.'
    },
    
    // Beds
    {
        id: 'bed-01', name: 'CloudNest Orthopedic Bed - L', category: 'beds', price: 89.99, rating: 4.8,
        images: ['https://picsum.photos/seed/bed01/1200/800', 'https://picsum.photos/seed/bed01b/1200/800', 'https://picsum.photos/seed/bed01c/1200/800', 'https://picsum.photos/seed/bed01d/1200/800', 'https://picsum.photos/seed/bed01e/1200/800'],
        colors: ['Gray', 'Beige', 'Blue'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium', 'Large']
    },
    {
        id: 'bed-02', name: 'NestBreeze Bolster Bed - M', category: 'beds', price: 69.99, rating: 4.5,
        images: ['https://picsum.photos/seed/bed02/1200/800', 'https://picsum.photos/seed/bed02b/1200/800', 'https://picsum.photos/seed/bed02c/1200/800', 'https://picsum.photos/seed/bed02d/1200/800', 'https://picsum.photos/seed/bed02e/1200/800'],
        colors: ['Gray', 'Red', 'Green'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium', 'Large']
    },
    {
        id: 'bed-03', name: 'PlushHaven Memory Foam Bed', category: 'beds', price: 129.99, rating: 4.9,
        images: ['https://picsum.photos/seed/bed03/1200/800', 'https://picsum.photos/seed/bed03b/1200/800', 'https://picsum.photos/seed/bed03c/1200/800', 'https://picsum.photos/seed/bed03d/1200/800', 'https://picsum.photos/seed/bed03e/1200/800'],
        colors: ['Black', 'White'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Medium', 'Large']
    },

    // Mats / Rugs
    {
        id: 'mat-01', name: 'CozyMat Cooling Pad', category: 'mats', price: 39.99, rating: 4.6,
        images: ['https://picsum.photos/seed/mat01/1200/800', 'https://picsum.photos/seed/mat01b/1200/800', 'https://picsum.photos/seed/mat01c/1200/800', 'https://picsum.photos/seed/mat01d/1200/800', 'https://picsum.photos/seed/mat01e/1200/800'],
        colors: ['Blue', 'Pink'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['One Size']
    },
    {
        id: 'mat-02', name: 'ThermoComfort Rug', category: 'mats', price: 49.99, rating: 4.3,
        images: ['https://picsum.photos/seed/mat02/1200/800', 'https://picsum.photos/seed/mat02b/1200/800', 'https://picsum.photos/seed/mat02c/1200/800', 'https://picsum.photos/seed/mat02d/1200/800', 'https://picsum.photos/seed/mat02e/1200/800'],
        colors: ['Brown', 'Beige'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['One Size']
    },

    // Sofas / Chairs
    {
        id: 'sofa-01', name: 'LoungePet Modern Chair', category: 'sofas', price: 149.99, rating: 4.7,
        images: ['https://picsum.photos/seed/sofa01/1200/800', 'https://picsum.photos/seed/sofa01b/1200/800', 'https://picsum.photos/seed/sofa01c/1200/800', 'https://picsum.photos/seed/sofa01d/1200/800', 'https://picsum.photos/seed/sofa01e/1200/800'],
        colors: ['Red', 'Yellow'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Standard']
    },
    {
        id: 'sofa-02', name: 'PetLounge Sofa - Compact', category: 'sofas', price: 119.99, rating: 4.4,
        images: ['https://picsum.photos/seed/sofa02/1200/800', 'https://picsum.photos/seed/sofa02b/1200/800', 'https://picsum.photos/seed/sofa02c/1200/800', 'https://picsum.photos/seed/sofa02d/1200/800', 'https://picsum.photos/seed/sofa02e/1200/800'],
        colors: ['Green', 'Beige'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Standard']
    },

    // Accessories / Covers
    {
        id: 'access-01', name: 'Waterproof Cover - XL', category: 'accessories', price: 19.99, rating: 4.2,
        images: ['https://picsum.photos/seed/access01/1200/800', 'https://picsum.photos/seed/access01b/1200/800', 'https://picsum.photos/seed/access01c/1200/800', 'https://picsum.photos/seed/access01d/1200/800', 'https://picsum.photos/seed/access01e/1200/800'],
        colors: ['Black', 'Gray'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium', 'Large', 'XL']
    },
    {
        id: 'access-02', name: 'Removable Washable Cover', category: 'accessories', price: 24.99, rating: 4.6,
        images: ['https://picsum.photos/seed/access02/1200/800', 'https://picsum.photos/seed/access02b/1200/800', 'https://picsum.photos/seed/access02c/1200/800', 'https://picsum.photos/seed/access02d/1200/800', 'https://picsum.photos/seed/access02e/1200/800'],
        colors: ['White', 'Beige'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium', 'Large']
    },

    // More variety to showcase pages
    {
        id: 'bed-04', name: 'EcoLoom Elevated Bed', category: 'beds', price: 79.99, rating: 4.1,
        images: ['https://picsum.photos/seed/bed04/1200/800', 'https://picsum.photos/seed/bed04b/1200/800', 'https://picsum.photos/seed/bed04c/1200/800', 'https://picsum.photos/seed/bed04d/1200/800', 'https://picsum.photos/seed/bed04e/1200/800'],
        colors: ['Brown', 'Green'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Medium', 'Large']
    },
    {
        id: 'matt-03', name: 'FoldAway Travel Mat', category: 'mats', price: 29.99, rating: 4.0,
        images: ['https://picsum.photos/seed/mat03/1200/800', 'https://picsum.photos/seed/mat03b/1200/800', 'https://picsum.photos/seed/mat03c/1200/800', 'https://picsum.photos/seed/mat03d/1200/800', 'https://picsum.photos/seed/mat03e/1200/800'],
        colors: ['Blue', 'Gray'],
        video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['One Size']
    },

    // Additional products for pagination demo
    {
        id: 'bed-05', name: 'Coastal Lounger Bed', category: 'beds', price: 99.99, rating: 4.4,
        images: ['https://picsum.photos/seed/bed05/1200/800', 'https://picsum.photos/seed/bed05b/1200/800', 'https://picsum.photos/seed/bed05c/1200/800', 'https://picsum.photos/seed/bed05d/1200/800', 'https://picsum.photos/seed/bed05e/1200/800'],
        colors: ['Navy', 'Sand'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium', 'Large']
    },
    {
        id: 'sofa-03', name: 'Velvet Pet Sofa', category: 'sofas', price: 179.99, rating: 4.6,
        images: ['https://picsum.photos/seed/sofa03/1200/800', 'https://picsum.photos/seed/sofa03b/1200/800', 'https://picsum.photos/seed/sofa03c/1200/800', 'https://picsum.photos/seed/sofa03d/1200/800', 'https://picsum.photos/seed/sofa03e/1200/800'],
        colors: ['Maroon', 'Gray'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Standard']
    },
    {
        id: 'mat-04', name: 'UltraSoft Mat', category: 'mats', price: 34.99, rating: 4.2,
        images: ['https://picsum.photos/seed/mat04/1200/800', 'https://picsum.photos/seed/mat04b/1200/800', 'https://picsum.photos/seed/mat04c/1200/800', 'https://picsum.photos/seed/mat04d/1200/800', 'https://picsum.photos/seed/mat04e/1200/800'],
        colors: ['Charcoal'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['One Size']
    },
    {
        id: 'access-03', name: 'Comfort Pillow', category: 'accessories', price: 14.99, rating: 4.0,
        images: ['https://picsum.photos/seed/access03/1200/800', 'https://picsum.photos/seed/access03b/1200/800', 'https://picsum.photos/seed/access03c/1200/800', 'https://picsum.photos/seed/access03d/1200/800', 'https://picsum.photos/seed/access03e/1200/800'],
        colors: ['Cream', 'Gray'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Small', 'Medium']
    },
    {
        id: 'bed-06', name: 'Hammock-style Bed', category: 'beds', price: 59.99, rating: 4.1,
        images: ['https://picsum.photos/seed/bed06/1200/800', 'https://picsum.photos/seed/bed06b/1200/800', 'https://picsum.photos/seed/bed06c/1200/800', 'https://picsum.photos/seed/bed06d/1200/800', 'https://picsum.photos/seed/bed06e/1200/800'],
        colors: ['Olive', 'Tan'], video: 'https://www.w3schools.com/html/mov_bbb.mp4', options: ['Medium']
    }
];

let filtered = [...products];
let cart = [];
let searchTimer = null;
let currentGallery = { idx: 0, productId: null };

// Pagination variables (ensure defined)
const itemsPerPage = 8;
let currentPage = 1;

// Small helpers
function formatPrice(v) { return '$' + v.toFixed(2); }
function genStars(r) { return `★ ${r}`; }

// Small helper: read query param
function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

/* Render recommended items on homepage (top 4 by rating) */
function renderRecommended() {
    const container = document.getElementById('recommendedGrid');
    if (!container) return;
    const top = [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
    container.innerHTML = '';
    top.forEach(p => {
        const d = document.createElement('div');
        d.className = 'product-card fade-in-up';
        d.setAttribute('data-id', p.id);
        d.innerHTML = `
			<div class="product-image" style="background-image:url('${p.images[0]}')"></div>
			<div class="product-info" style="padding:.8rem;">
				<h3 class="product-name">${p.name}</h3>
				<div style="display:flex;justify-content:space-between;align-items:center">
					<span class="product-price">${formatPrice(p.price)}</span>
					<span>★ ${p.rating}</span>
				</div>
				<div style="margin-top:.6rem">
					<button class="btn-inline" onclick="event.stopPropagation(); addToCart('${p.id}',1,'${p.options[0]}')">Add</button>
					<button class="btn-inline" onclick="event.stopPropagation(); location.href='product.html?id=${p.id}'">Open</button>
				</div>
			</div>
		`;
        container.appendChild(d);
    });
    attachCardInteractions();
    
    // Reinitialize video hover
    if (window.ProductVideoHover) {
        window.ProductVideoHover.reinit();
    }
    
    setTimeout(() => initFadeInAnimations(), 50);
}

/* Update attachCardInteractions: card click behavior depends on page */
function attachCardInteractions() {
    document.querySelectorAll('.product-card').forEach(card => {
        // onmousemove/onmouseleave (parallax) as before
        card.onmousemove = (e) => {
            const rect = card.getBoundingClientRect();
            const mx = (e.clientX - rect.left) / rect.width;
            const my = (e.clientY - rect.top) / rect.height;
            const px = (mx - 0.5) * 14;
            const py = (my - 0.5) * 10;
            card.style.transform = `translateY(-6px) translateX(${px * 0.06}px) scale(1.02)`;
            card.style.boxShadow = `0 30px 60px rgba(0,0,0,0.12)`;
            const img = card.querySelector('.product-image');
            if (img) { img.style.transform = `translate(${px * 0.9}px, ${py * 0.9}px) scale(1.04)`; img.style.backgroundPosition = `${50 + px * 0.08}% ${50 + py * 0.08}%`; }
        };
        card.onmouseleave = () => { card.style.transform = ''; card.style.boxShadow = ''; const img = card.querySelector('.product-image'); if (img) { img.style.transform = ''; img.style.backgroundPosition = ''; } };

        // click behavior: if on products.html -> navigate to product page; else open modal
        card.onclick = () => {
            const id = card.dataset.id;
            if (!id) return;
            if (document.body.classList.contains('products-page')) {
                location.href = `product.html?id=${encodeURIComponent(id)}`;
            } else {
                openProductModal(id);
            }
        };

        card.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const id = card.dataset.id; if (!id) return; if (document.body.classList.contains('products-page')) location.href = `product.html?id=${encodeURIComponent(id)}`; else openProductModal(id); } };
    });
}

/* Product page renderer: builds a full-page product detail UI (enhanced with specs, reviews, related) */
function renderProductPage(id) {
    const out = document.getElementById('productDetailPage');
    if (!out) return;
    const p = products.find(x => x.id === id);
    if (!p) { out.innerHTML = '<p>Product not found.</p>'; return; }

    out.innerHTML = `
		<button class="btn btn-back" id="backBtn" aria-label="Back to ${p.category}">← Back to ${capitalize(p.category)}</button>

		<div class="product-detail-wrap">
			<div class="product-gallery">
				<div class="gallery-main" id="galleryMainPage" tabindex="0" aria-label="Product image gallery" role="region">
					<button type="button" class="gallery-arrow prev" id="galleryPrevBtn" aria-label="Previous image">‹</button>
					<div class="gallery-frame">
						<img src="${p.images[0]}" alt="${p.name}" style="max-width:100%;max-height:100%;object-fit:contain" />
					</div>
					<button type="button" class="gallery-arrow next" id="galleryNextBtn" aria-label="Next image">›</button>
				</div>
				<div class="gallery-thumbs" id="galleryThumbsPage" aria-hidden="false">
					${p.images.map((s, i) => `<div class="thumb ${i === 0 ? 'active' : ''}" tabindex="0" style="background-image:url('${s}')" data-idx="${i}" role="button" aria-label="Thumbnail ${i + 1}"></div>`).join('')}
					<div class="thumb" tabindex="0" style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center" data-video="${p.video}" data-idx="${p.images.length}" role="button" aria-label="Video">▶</div>
				</div>
			</div>

			<div class="product-meta product-meta-page">
				<h2>${p.name}</h2>
				<div class="price">${formatPrice(p.price)}</div>
				<div>★ ${p.rating}</div>
				<p style="margin-top:.6rem;color:#444">${p.description || 'High quality item.'}</p>

				<div class="option-row">
					<label style="min-width:60px">Size</label>
					<select id="pageProdSize">${p.options.map(o => `<option value="${o}">${o}</option>`).join('')}</select>
				</div>

				<div class="option-row">
					<label style="min-width:60px">Color</label>
					<select id="pageProdColor">${(p.colors || ['Standard']).map(c => `<option value="${c}">${c}</option>`).join('')}</select>
				</div>

				<div class="option-row">
					<label style="min-width:60px">Qty</label>
					<input id="pageProdQty" class="quantity" type="number" min="1" value="1" />
				</div>

				<div style="display:flex;gap:.6rem;margin-top:.8rem">
					<button class="btn btn-primary" onclick="addToCartFromPage('${p.id}')">Add to cart</button>
					<button class="btn-inline" onclick="addToCartFromPage('${p.id}'); alert('Proceeding to buy (demo)')">Buy Now</button>
				</div>
			</div>
		</div>

		<!-- Additional content to fill empty spaces -->
		<section class="product-extra" style="margin-top:2rem;display:grid;grid-template-columns:2fr 1fr;gap:1.25rem;align-items:start">
			<div class="product-description" aria-labelledby="descTitle">
				<h3 id="descTitle">Description</h3>
				<p>${(p.longDescription) ? p.longDescription : 'This product is designed with comfort, durability and style in mind. Premium materials, easy care, and built for pets.'}</p>

				<h4 style="margin-top:1rem">Specifications</h4>
				<table class="specs-table" style="width:100%;border-collapse:collapse">
					<tr><td>Category</td><td>${p.category}</td></tr>
					<tr><td>SKU</td><td>${p.id}</td></tr>
					<tr><td>Available Colors</td><td>${(p.colors || []).join(', ')}</td></tr>
					<tr><td>Available Sizes</td><td>${(p.options || []).join(', ')}</td></tr>
					<tr><td>Rating</td><td>★ ${p.rating}</td></tr>
				</table>

				<h4 style="margin-top:1rem">Customer Reviews</h4>
				<div class="reviews">
					<div class="review"><strong>Alex</strong> — "Great quality and my pup loves it!"</div>
					<div class="review"><strong>Robin</strong> — "Exactly as described, fast shipping."</div>
				</div>
			</div>

			<aside class="related-aside">
				<h4>Related Products</h4>
				<div class="related-grid" id="relatedGrid"></div>
			</aside>
		</section>
	`;

    // back button handler
    const backBtn = document.getElementById('backBtn');
    if (backBtn) backBtn.addEventListener('click', () => {
        location.href = `products.html?category=${encodeURIComponent(p.category)}`;
    });

    currentGallery.productId = id;
    currentGallery.idx = 0;

    // Use event delegation for arrows and thumbnails so clicks always work
    const galleryMain = document.getElementById('galleryMainPage');
    if (galleryMain) {
        galleryMain.addEventListener('click', (e) => {
            if (e.target.closest('.gallery-arrow.prev') && typeof galleryPrevPage === 'function') {
                galleryPrevPage();
            }
            if (e.target.closest('.gallery-arrow.next') && typeof galleryNextPage === 'function') {
                galleryNextPage();
            }
        });
    }

    const thumbsContainer = document.getElementById('galleryThumbsPage');
    if (thumbsContainer) {
        thumbsContainer.addEventListener('click', (e) => {
            const thumb = e.target.closest('.thumb');
            if (!thumb) return;
            const idx = parseInt(thumb.getAttribute('data-idx'));
            currentGallery.idx = isNaN(idx) ? 0 : idx;
            renderGalleryFramePage();
        });
        thumbsContainer.addEventListener('keydown', (e) => {
            const thumb = e.target.closest('.thumb');
            if (!thumb) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const idx = parseInt(thumb.getAttribute('data-idx'));
                currentGallery.idx = isNaN(idx) ? 0 : idx;
                renderGalleryFramePage();
            }
        });
    }
}
// remove the previous per-thumb setTimeout handler (now replaced with delegation)

/* retry helper: attempt to render products several times (handles race/timing issues) */
function tryRenderProductsWithRetry(maxAttempts = 10, interval = 200) {
	const grid = document.getElementById('productsGrid');
	if (!grid) return;
	console.log('[app] tryRenderProductsWithRetry: starting');
	let attempts = 0;
	const timer = setInterval(() => {
		attempts++;
		try {
			renderProducts(filtered, currentPage);
		} catch (err) {
			console.error('[app] renderProducts error on attempt', attempts, err);
		}
		// if products rendered, stop retrying
		if (grid.children.length > 0) {
			clearInterval(timer);
			console.log('[app] products rendered after', attempts, 'attempt(s)');
			return;
		}
		if (attempts >= maxAttempts) {
			clearInterval(timer);
			console.warn('[app] products failed to render after maximum attempts');
			grid.innerHTML = '<p style="padding:2rem;color:#666">Products failed to load. <button class="btn-inline" onclick="renderProducts(filtered, currentPage)">Retry</button></p>';
		}
	}, interval);
}

/* ===== Missing functions restored: renderProducts, pagination, UI wiring, parallax, cart update ===== */

function renderProducts(list, page = 1) {
	const grid = document.getElementById('productsGrid');
	if (!grid) return;
	grid.innerHTML = '';
	if (!list || list.length === 0) {
		grid.innerHTML = '<p style="padding:2rem;color:#666">No items found</p>';
		renderPagination(0);
		return;
	}

	const totalItems = list.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
	currentPage = Math.min(Math.max(1, page), totalPages);
	const start = (currentPage - 1) * itemsPerPage;
	const pageItems = list.slice(start, start + itemsPerPage);

	pageItems.forEach(p => {
		const div = document.createElement('div');
		div.className = 'product-card fade-in-up';
		div.setAttribute('data-id', p.id);
		div.setAttribute('tabindex', '0');
		div.setAttribute('role', 'button');
		div.setAttribute('aria-label', `View product ${p.name}`);
		div.innerHTML = `
			<div class="product-image" style="background-image:url('${p.images[0]}')"></div>
			<div class="product-info" style="padding: .8rem;">
				<h3 class="product-name">${p.name}</h3>
				<div class="meta" style="display:flex;justify-content:space-between;align-items:center">
					<span class="product-price">${formatPrice(p.price)}</span>
					<span>${genStars(p.rating)}</span>
				</div>
				<div style="margin-top:.6rem;display:flex;gap:.6rem">
					<button class="btn-inline" onclick="event.stopPropagation(); addToCart('${p.id}',1,'${p.options[0]}')">Add</button>
					<button class="btn-inline" onclick="event.stopPropagation(); location.href='product.html?id=${p.id}'">Open</button>
				</div>
			</div>
		`;
		grid.appendChild(div);
	});

	renderPagination(totalItems);
	attachCardInteractions();
	
	// Reinitialize video hover for new products
	if (window.ProductVideoHover) {
		window.ProductVideoHover.reinit();
	}
	
	setTimeout(() => initFadeInAnimations(), 50);
	
	console.log(`[app] renderProducts: rendered ${pageItems.length} items (total ${totalItems}) page ${currentPage}/${totalPages}`);
}

function renderPagination(totalItems) {
	const container = document.getElementById('pagination');
	if (!container) return;
	container.innerHTML = '';
	const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

	const prev = document.createElement('button');
	prev.className = 'page-btn';
	prev.textContent = 'Prev';
	prev.disabled = (currentPage <= 1);
	prev.onclick = () => goToPage(currentPage - 1);
	container.appendChild(prev);

	const maxButtons = 7;
	let start = Math.max(1, currentPage - Math.floor(maxButtons / 2));
	let end = Math.min(totalPages, start + maxButtons - 1);
	if (end - start < maxButtons - 1) start = Math.max(1, end - maxButtons + 1);

	for (let i = start; i <= end; i++) {
		const btn = document.createElement('button');
		btn.className = 'page-btn' + (i === currentPage ? ' active' : '');
		btn.textContent = i;
		btn.onclick = () => goToPage(i);
		container.appendChild(btn);
	}

	const next = document.createElement('button');
	next.className = 'page-btn';
	next.textContent = 'Next';
	next.disabled = (currentPage >= totalPages);
	next.onclick = () => goToPage(currentPage + 1);
	container.appendChild(next);
}

function goToPage(page) {
	currentPage = page;
	renderProducts(filtered, currentPage);
	const productsSection = document.getElementById('products');
	if (productsSection) window.scrollTo({ top: productsSection.offsetTop - 80, behavior: 'smooth' });
}

/* Minimal setup UI to wire common elements and make sure handlers exist */
function setupUI() {
	try {
		// cart button opens modal
		const cartBtn = document.getElementById('cartBtn');
		if (cartBtn) cartBtn.addEventListener('click', openCart);

		// search bar toggle
		const searchBtn = document.getElementById('searchBtn');
		const searchBar = document.getElementById('searchBar');
		if (searchBtn && searchBar) {
			searchBtn.addEventListener('click', () => {
				searchBar.classList.toggle('active');
				const input = document.getElementById('navSearchInput');
				if (searchBar.classList.contains('active') && input) input.focus();
			});
		}

		// modal overlay click-to-close
		const productModal = document.getElementById('productModal');
		if (productModal) productModal.addEventListener('click', e => { if (e.target === productModal) closeProductModal(); });

		const cartModal = document.getElementById('cartModal');
		if (cartModal) cartModal.addEventListener('click', e => { if (e.target === cartModal) closeCart(); });

		const infoModal = document.getElementById('infoModal');
		if (infoModal) infoModal.addEventListener('click', e => { if (e.target === infoModal) closeInfoModal(); });

		// update cart count
		const cnt = document.querySelector('.cart-count');
		if (cnt) cnt.innerText = cart.reduce((s,i)=>s+i.qty,0);

		// ensure product card interactions attached
		attachCardInteractions();

		// update nav active state & cart count
		updateNavActive();

		console.log('[app] setupUI applied');
	} catch (err) {
		console.error('[app] setupUI inner error', err);
	}
}

/* simple parallax/hover wiring for hero and category cards */
function initParallax(){
	const hero = document.querySelector('.hero');
	if (hero) {
		window.addEventListener('scroll', () => {
			const rect = hero.getBoundingClientRect();
			const offset = Math.max(-rect.top * 0.12, -60);
			hero.style.backgroundPosition = `center ${50 + offset}px`;
		});
	}
	document.querySelectorAll('.category-card').forEach(card=>{
		const wrap = card.querySelector('.img-wrap');
		card.addEventListener('mousemove', (e)=>{
			const r = card.getBoundingClientRect();
			const x = (e.clientX - r.left) / r.width;
			const y = (e.clientY - r.top) / r.height;
			const px = (x - 0.5) * 8, py = (y - 0.5) * 8;
			if (wrap) { wrap.style.transform = `translate(${px}px, ${py}px) scale(1.04)`; wrap.style.backgroundPosition = `${50 + px}% ${50 + py}%`; }
		});
		card.addEventListener('mouseleave', ()=>{ if (wrap) { wrap.style.transform=''; wrap.style.backgroundPosition=''; }});
	});
}

/* cart UI update (used across app) */
function updateCartUI() {
	const container = document.getElementById('cartItems');
	if (!container) return;
	container.innerHTML = '';
	if (cart.length === 0) {
		container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
		const totalEl = document.getElementById('cartTotal'); if (totalEl) totalEl.innerText = '0.00';
		const cc = document.querySelector('.cart-count'); if (cc) cc.innerText = '0';
		return;
	}

	let total = 0;
	cart.forEach((item, index) => {
		const p = products.find(x => x.id === item.id);
		if (!p) return;
		total += item.qty * p.price;
		const div = document.createElement('div');
		div.className = 'cart-item';
		div.setAttribute('data-id', item.id);
		div.innerHTML = `
			<div class="item-image" style="background-image:url('${p.images[0]}')"></div>
			<div class="item-details">
				<div class="item-info">
					<h4 class="item-name">${p.name}</h4>
					<div class="item-meta">
						<span class="item-price">${formatPrice(p.price)}</span>
						<span class="item-qty">Qty: ${item.qty}</span>
					</div>
				</div>
				<div class="item-actions">
					<button class="btn-inline" onclick="event.stopPropagation(); removeCartItem(${index})">Remove</button>
				</div>
			</div>
		`;
		container.appendChild(div);
	});

	const totalEl = document.getElementById('cartTotal');
	if (totalEl) {
		totalEl.innerText = total.toFixed(2);
	}
	const cc = document.querySelector('.cart-count');
	if (cc) cc.innerText = cart.reduce((s,i)=>s+i.qty,0);
}

/* ===== Cart persistence & helpers ===== */
function saveCart() {
	try { localStorage.setItem('pk_cart', JSON.stringify(cart || [])); } catch (e) { console.warn('[app] saveCart failed', e); }
}
function loadCart() {
	try {
		const raw = localStorage.getItem('pk_cart');
		if (raw) cart = JSON.parse(raw) || [];
	} catch (e) { console.warn('[app] loadCart failed', e); cart = []; }
}

function addToCart(productId, qty = 1, option = '') {
	const p = products.find(x => x.id === productId);
	if (!p) return;
	const keyOpt = (option || '').toString();
	const existing = cart.find(i => i.id === productId && (i.option || '') === keyOpt);
	if (existing) existing.qty = Math.max(1, existing.qty + Number(qty));
	else cart.push({ id: productId, qty: Math.max(1, Number(qty)), option: keyOpt });
	saveCart();
	updateCartUI();
	showToast(`${p.name} added to cart`);
}

function addToCartFromPage(id) {
	const qty = parseInt(document.getElementById('pageProdQty')?.value || 1);
	const size = document.getElementById('pageProdSize')?.value || '';
	const color = document.getElementById('pageProdColor')?.value || '';
	addToCart(id, qty, `${size} / ${color}`);
}

/* open/close cart modal */
function openCart() {
	const m = document.getElementById('cartModal');
	if (!m) return;
	updateCartUI();
	m.classList.add('active');
	m.setAttribute('aria-hidden', 'false');
}
function closeCart() {
	const m = document.getElementById('cartModal');
	if (!m) return;
	m.classList.remove('active');
	m.setAttribute('aria-hidden', 'true');
}

/* toast */
function showToast(msg, timeout = 2200) {
	let container = document.getElementById('toastContainer');
	if (!container) {
		container = document.createElement('div'); container.id = 'toastContainer';
		Object.assign(container.style, { position:'fixed', right:'20px', bottom:'20px', zIndex:4000 });
		document.body.appendChild(container);
	}
	const t = document.createElement('div'); t.textContent = msg;
	Object.assign(t.style, { background:'rgba(0,0,0,0.85)', color:'#fff', padding:'8px 12px', marginTop:'8px', borderRadius:'6px', opacity:'0', transition:'opacity .18s ease, transform .2s ease' });
	container.appendChild(t);
	requestAnimationFrame(()=>{ t.style.opacity='1'; t.style.transform='translateY(-4px)'; });
	setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateY(0)'; setTimeout(()=>t.remove(),220); }, timeout);
}

/* ensure mutations persist */
function updateQty(index, val) {
	const qty = Math.max(1, parseInt(val) || 1);
	if (!cart[index]) return;
	cart[index].qty = qty;
	saveCart();
	updateCartUI();
}
function removeCartItem(index) {
	cart.splice(index, 1);
	saveCart();
	updateCartUI();
}
function checkout() {
	if (cart.length === 0) { alert('Your cart is empty'); return; }
	alert('Proceeding to checkout (demo)');
	cart = [];
	saveCart();
	updateCartUI();
	closeCart();
}

// Product modal (gallery + buy/add)
function openProductModal(id) {
	const p = products.find(x => x.id === id);
	if (!p) return;
	const content = document.getElementById('productDetailContent');
	if (!content) return;

	content.innerHTML = `
		<div class="product-gallery">
			<div class="gallery-main" id="galleryMain"><button type="button" class="gallery-arrow prev" id="modalPrev">‹</button>
				<div class="gallery-frame"><img src="${p.images[0]}" alt="${p.name}" style="max-width:100%;max-height:100%;object-fit:contain" /></div>
				<button type="button" class="gallery-arrow next" id="modalNext">›</button>
			</div>
			<div class="gallery-thumbs" id="galleryThumbs">
				${p.images.map((src,i)=>`<div class="thumb ${i===0?'active':''}" data-idx="${i}" style="background-image:url('${src}')" role="button" tabindex="0"></div>`).join('')}
				<div class="thumb" data-idx="${p.images.length}" style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center">▶</div>
			</div>
		</div>
		<div class="product-meta">
			<h2>${p.name}</h2>
			<div class="price">${formatPrice(p.price)}</div>
			<div>★ ${p.rating}</div>
			<p style="margin-top:.6rem;color:#444">High quality item. Select size, color and quantity.</p>

			<div class="option-row"><label>Size</label><select id="prodSize">${p.options.map(o=>`<option>${o}</option>`).join('')}</select></div>
			<div class="option-row"><label>Color</label><select id="prodColor">${(p.colors||[]).map(c=>`<option>${c}</option>`).join('')}</select></div>
			<div class="option-row"><label>Qty</label><input id="prodQty" type="number" min="1" value="1" class="quantity" /></div>

			<div style="margin-top:.6rem">
				<button class="btn-inline" onclick="addToCartFromModal('${p.id}')">Add to Cart</button>
				<button class="btn-inline" onclick="buyNow('${p.id}')">Buy Now</button>
			</div>
		</div>
	`;

	currentGallery.productId = id;
	currentGallery.idx = 0;

	// modal arrows & thumbs (delegated handlers)
	document.getElementById('modalPrev').addEventListener('click', galleryPrev);
	document.getElementById('modalNext').addEventListener('click', galleryNext);
	document.getElementById('galleryThumbs').addEventListener('click', (e) => {
		const t = e.target.closest('.thumb'); if (!t) return;
		const idx = parseInt(t.getAttribute('data-idx')); currentGallery.idx = isNaN(idx) ? 0 : idx; renderGalleryFrame();
	});

	document.getElementById('productModal').classList.add('active');
	document.getElementById('productModal').setAttribute('aria-hidden','false');
}

function closeProductModal() {
	const m = document.getElementById('productModal');
	if (!m) return;
	m.classList.remove('active');
	m.setAttribute('aria-hidden','true');
}

function galleryNext() {
	const p = products.find(x => x.id === currentGallery.productId);
	if (!p) return;
	currentGallery.idx = (currentGallery.idx + 1) % (p.images.length + 1);
	renderGalleryFrame();
}
function galleryPrev() {
	const p = products.find(x => x.id === currentGallery.productId);
	if (!p) return;
	currentGallery.idx = (currentGallery.idx - 1 + (p.images.length + 1)) % (p.images.length + 1);
	renderGalleryFrame();
}

// small helper for capitalizing category label
function capitalize(s){ return (s||'').charAt(0).toUpperCase() + (s||'').slice(1); }

/* Product page gallery controls (missing previously) */
function galleryNextPage() {
	const p = products.find(x => x.id === currentGallery.productId);
	if (!p) return;
	currentGallery.idx = (currentGallery.idx + 1) % (p.images.length + 1);
	renderGalleryFramePage();
}

function galleryPrevPage() {
	const p = products.find(x => x.id === currentGallery.productId);
	if (!p) return;
	currentGallery.idx = (currentGallery.idx - 1 + (p.images.length + 1)) % (p.images.length + 1);
	renderGalleryFramePage();
}

/* render only the product page gallery frame (keeps modal gallery separate) */
function renderGalleryFramePage() {
	const p = products.find(x => x.id === currentGallery.productId);
	if (!p) return;
	const main = document.getElementById('galleryMainPage');
	const frame = main && main.querySelector('.gallery-frame');
	if (!frame) return;
	const isVideo = currentGallery.idx === p.images.length;

	let newEl;
	if (isVideo) {
		newEl = document.createElement('video');
		newEl.src = p.video;
		newEl.controls = true;
	} else {
		newEl = document.createElement('img');
		newEl.src = p.images[currentGallery.idx];
		newEl.alt = p.name;
	}
	newEl.style.opacity = '0';
	newEl.style.transition = 'opacity .28s ease';
	newEl.style.display = 'block';
	frame.appendChild(newEl);

	window.requestAnimationFrame(() => {
		newEl.style.opacity = '1';
		Array.from(frame.children).forEach(child => {
			if (child !== newEl) {
				child.style.transition = 'opacity .18s ease';
				child.style.opacity = '0';
				if (child.tagName === 'VIDEO') { try { child.pause(); child.removeAttribute('src'); } catch(e){} }
				setTimeout(()=>{ try{ child.remove(); }catch(e){} },220);
			}
		});
	});

	// update thumbnails active state & scroll into view
	const thumbs = document.querySelectorAll('#galleryThumbsPage .thumb');
	thumbs.forEach((t,i)=> t.classList.toggle('active', i === currentGallery.idx));
	const active = document.querySelector('#galleryThumbsPage .thumb.active');
	if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
}

function addToCartFromModal(id) {
	const qty = parseInt(document.getElementById('prodQty')?.value || 1);
	const size = document.getElementById('prodSize')?.value || '';
	const color = document.getElementById('prodColor')?.value || '';
	addToCart(id, qty, `${size} / ${color}`);
	closeProductModal();
}
function buyNow(id) { addToCartFromModal(id); alert('Proceeding to buy (demo)'); }

document.addEventListener('DOMContentLoaded', () => {
	try {
		console.log('[app] DOMContentLoaded - initializing');

		// load cart from storage
		try { loadCart(); } catch (e) { console.warn('[app] loadCart failed', e); }
		try { updateCartUI(); } catch (err) { console.error('[app] updateCartUI error', err); }

		// render recommended on homepage
		try { renderRecommended(); } catch (err) { console.error('[app] renderRecommended error', err); }

		// If a products grid exists on the page, render products (homepage or products page)
		const grid = document.getElementById('productsGrid');
		if (grid) {
			// If there is a category query param, apply it first
			const cat = getQueryParam('category');
			if (cat) {
				const fs = document.getElementById('filterSelect');
				if (fs) fs.value = cat;
				try { filterProducts(cat); } catch (err) { console.error('[app] filterProducts error', err); tryRenderProductsWithRetry(); }
			} else {
				try {
					renderProducts(filtered, currentPage);
				} catch (err) {
					console.error('[app] renderProducts immediate attempt failed', err);
				}
				// if grid still empty, start retry attempts
				const grid = document.getElementById('productsGrid');
				if (grid && grid.children.length === 0) {
					console.warn('[app] Products grid empty on initial render — starting retry attempts.');
					tryRenderProductsWithRetry();
				}
			}
		}

		// Product detail page: render product by id (if present)
		if (document.body.classList.contains('product-page-body')) {
			const id = getQueryParam('id');
			if (id) {
				currentGallery = { idx: 0, productId: id };
				try { renderProductPage(id); } catch (err) { console.error('[app] renderProductPage error', err); }
			} else {
				const out = document.getElementById('productDetailPage');
				if (out) out.innerHTML = '<p>Missing product id.</p>';
			}
		}

		// setup UI behavior
		try { setupUI(); } catch (err) { console.error('[app] setupUI error', err); }
		try { initParallax(); } catch (err) { console.error('[app] initParallax error', err); }
		try { initFadeInAnimations(); } catch (err) { console.error('[app] initFadeInAnimations error', err); }
		try { updateCartUI(); } catch (err) { console.error('[app] updateCartUI error', err); }

		console.log('[app] initialization complete');
	} catch (err) {
		console.error('[app] initialization failed', err);
	}
});

/* ===== Parallax Fade-In Animation System ===== */
function initFadeInAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('animate');
				// Optionally unobserve after animation to improve performance
				observer.unobserve(entry.target);
			}
		});
	}, observerOptions);

	// Observe all elements with fade-in classes
	const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in');
	fadeElements.forEach(el => observer.observe(el));

	console.log('[app] Fade-in animations initialized for', fadeElements.length, 'elements');
}

// --- search / filter / sort helpers (used by products page) ---
function filterProducts(category) {
	if (!category || category === 'all') {
		filtered = [...products];
	} else {
		filtered = products.filter(p => p.category === category);
	}
	currentPage = 1;
	renderProducts(filtered, currentPage);
	console.log('[app] filterProducts:', category, 'result', filtered.length);
}

function sortProducts(mode) {
	if (!mode) { renderProducts(filtered, currentPage); return; }
	const copy = [...filtered];
	switch (mode) {
		case 'price-low': copy.sort((a,b)=>a.price - b.price); break;
		case 'price-high': copy.sort((a,b)=>b.price - a.price); break;
		case 'rating': copy.sort((a,b)=>b.rating - a.rating); break;
		case 'name': copy.sort((a,b)=>a.name.localeCompare(b.name)); break;
		default: break;
	}
	filtered = copy;
	currentPage = 1;
	renderProducts(filtered, currentPage);
	console.log('[app] sortProducts:', mode);
}

function performSearch(query) {
	const q = (query || '').trim().toLowerCase();
	if (!q) { filtered = [...products]; }
	else {
		filtered = products.filter(p => (p.name + ' ' + (p.category||'') + ' ' + (p.description||'')).toLowerCase().includes(q));
	}
	currentPage = 1;
	renderProducts(filtered, currentPage);
	console.log('[app] performSearch:', q, 'matches', filtered.length);
}

function debouncedSearch() {
	if (searchTimer) clearTimeout(searchTimer);
	searchTimer = setTimeout(() => {
		const inp = document.getElementById('searchInput');
		performSearch(inp ? inp.value : '');
	}, 280);
}
function debouncedSearchFromNav() {
	if (searchTimer) clearTimeout(searchTimer);
	searchTimer = setTimeout(() => {
		const inp = document.getElementById('navSearchInput');
		performSearch(inp ? inp.value : '');
	}, 280);
}

// attach page-specific controls when products grid is present
document.addEventListener('DOMContentLoaded', () => {
	// ...existing DOMContentLoaded code...

	// If a products grid exists on the page, wire up filter/sort/search controls (defensive)
	const grid = document.getElementById('productsGrid');
	if (grid) {
		const fs = document.getElementById('filterSelect');
		if (fs) fs.addEventListener('change', (e) => filterProducts(e.target.value));

		const ssort = document.querySelector('.sort-section select');
		if (ssort) ssort.addEventListener('change', (e) => sortProducts(e.target.value));

		const sinp = document.getElementById('searchInput');
		if (sinp) sinp.addEventListener('input', debouncedSearch);

		console.log('[app] products page controls wired:', !!fs, !!ssort, !!sinp);
	}

	// Dog bed card click handler - navigate to product detail page
    setTimeout(() => {
        const dogBedCards = document.querySelectorAll('.dog-bed-card');
        dogBedCards.forEach(card => {
            const wrapper = card.querySelector('.bed-image-wrapper');
            if (wrapper) {
                wrapper.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const bedNumber = card.getAttribute('data-bed');
                    const productIds = {
                        '1': 'dogbed-luxury-1',
                        '2': 'dogbed-cozy-2',
                        '3': 'dogbed-premium-3'
                    };
                    
                    const productId = productIds[bedNumber];
                    if (productId) {
                        // Navigate to product detail page
                        window.location.href = `product.html?id=${productId}`;
                    }
                });
            }
        });
    }, 500);
});

// update nav active state and cart count (safe if nav not present)
function updateNavActive() {
	const menu = document.getElementById('navMenu');
	if (!menu) return;
	const links = menu.querySelectorAll('a');
	const path = (location.pathname || '').split('/').pop();
	const hash = location.hash || '';
	const search = location.search || '';

	links.forEach(link => {
		const href = link.getAttribute('href') || '';
		let active = false;
		if (href.includes('products.html')) {
			active = path === 'products.html' || search.includes('category=');
		} else if (href.includes('index.html') || href === '#' || href === '' || href.includes('#home')) {
			active = path === '' || path === 'index.html' || hash === '#home';
		} else if (href.includes('#about')) {
			active = hash === '#about';
		} else if (href.includes('#contact')) {
			active = hash === '#contact';
		}
		link.classList.toggle('active', active);
	});

	const cc = document.querySelector('.cart-count');
	if (cc) cc.innerText = cart && cart.length ? cart.reduce((s,i)=>s+i.qty,0) : '0';
}

// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
    resetSlideInterval();
}

function goToSlide(n) {
    showSlide(n);
    resetSlideInterval();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Auto-play slider
slideInterval = setInterval(nextSlide, 5000);

// Pause auto-play on hover
document.querySelector('.hero-slider').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

document.querySelector('.hero-slider').addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
});


// Authentication module: login, register, and toast notifications

/* ============= Toast Notification System ============= */
function showToast(message, type = 'success', duration = 3000) {
    let container = document.getElementById('toastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'fa-check-circle';
    if (type === 'error') icon = 'fa-exclamation-circle';
    if (type === 'info') icon = 'fa-info-circle';
    
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span class="toast-message">${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/* ============= Navigation Menu Toggle ============= */
function initNavMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/* ============= Login Form Handler ============= */
function handleLoginSubmit(event) {
    event.preventDefault();
    
    const email = document.getElementById('email')?.value || '';
    const password = document.getElementById('password')?.value || '';
    const remember = document.getElementById('remember')?.checked || false;
    
    // Validation
    if (!email || !password) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Simulate login (showcase only)
    showToast(`Welcome back! Logged in as ${email}`, 'success', 3000);
    
    // Save remember me preference
    if (remember) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
    
    // Reset form
    event.target.reset();
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

/* ============= Register Form Handler ============= */
function handleRegisterSubmit(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname')?.value || '';
    const email = document.getElementById('regemail')?.value || '';
    const password = document.getElementById('regpassword')?.value || '';
    const confirmPassword = document.getElementById('confirmpassword')?.value || '';
    const terms = document.getElementById('terms')?.checked || false;
    
    // Validation
    if (!fullname || !email || !password || !confirmPassword) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Name validation
    if (fullname.trim().length < 2) {
        showToast('Please enter your full name', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation
    if (password.length < 6) {
        showToast('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Password match validation
    if (password !== confirmPassword) {
        showToast('Passwords do not match', 'error');
        return;
    }
    
    // Terms validation
    if (!terms) {
        showToast('Please accept the Terms & Conditions', 'error');
        return;
    }
    
    // Simulate registration (showcase only)
    showToast(`Welcome ${fullname}! Your account has been created successfully.`, 'success', 3000);
    
    // Reset form
    event.target.reset();
    
    // Redirect after delay
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

/* ============= Initialize on Page Load ============= */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize navigation menu
    initNavMenu();
    
    // Check for remembered email on login page
    const emailInput = document.getElementById('email');
    const rememberCheckbox = document.getElementById('remember');
    if (emailInput && rememberCheckbox) {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        if (rememberedEmail) {
            emailInput.value = rememberedEmail;
            rememberCheckbox.checked = true;
        }
    }
    
    console.log('[auth] Authentication module initialized');
});

document.addEventListener('DOMContentLoaded', () => {
    // ...existing code...
});
