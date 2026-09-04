import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, ChevronLeft, ChevronRight, Check, Heart, Menu, Minus, Pause, Play, Plus, Search, ShoppingBag, SlidersHorizontal, Sparkles, X } from 'lucide-react'
import './styles.css'

const products = [
  { name: 'Cloud Nest', slug: 'cloud-nest', category: 'Sleep', type: 'Memory foam dog bed', price: '$128', range: '3 colors', color: '#d3b18f', accent: '#8d6f59', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=85', detail: 'The soft landing for big dreams.' },
  { name: 'Moss Bowl', slug: 'moss-bowl', category: 'Feed', type: 'Stoneware feeding set', price: '$64', range: '2 sizes', color: '#aebba9', accent: '#657266', image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=700&q=85', detail: 'Everyday rituals, considered.' },
  { name: 'Loop Lead', slug: 'loop-lead', category: 'Walk', type: 'Woven walking set', price: '$42', range: '6 colors', color: '#aebdca', accent: '#5c7586', image: 'https://images.unsplash.com/photo-1558929996-da64ba858215?auto=format&fit=crop&w=700&q=85', detail: 'Made for the long way around.' },
  { name: 'Sunbeam Toy', slug: 'sunbeam-toy', category: 'Play', type: 'Hand-knotted wool toy', price: '$28', range: '4 shapes', color: '#d9b06f', accent: '#987442', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=700&q=85', detail: 'A little spark for the everyday.' },
  { name: 'Trail Towel', slug: 'trail-towel', category: 'Walk', type: 'Organic cotton towel', price: '$36', range: '2 sizes', color: '#c6afa4', accent: '#876a5f', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=85', detail: 'For muddy paws and open doors.' },
  { name: 'Amber Brush', slug: 'amber-brush', category: 'Care', type: 'Plant-fiber grooming brush', price: '$24', range: 'One size', color: '#c99e77', accent: '#8e6240', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=85', detail: 'A calm ritual, from nose to tail.' },
]

function ProductStage({ active, setActive, autoRotate, setAutoRotate }) {
  return (
    <div className="stage-wrap">
      <div className="stage-label"><span className="live-dot" /> Spinning product edit</div>
      <div className={autoRotate ? 'spin-stage is-spinning' : 'spin-stage'}>
        <div className="spin-ring">
          {products.slice(0, 3).map((product, index) => <button key={product.name} className={active === index ? 'spin-card is-selected' : 'spin-card'} style={{ '--card-index': index }} onClick={() => { setActive(index); setAutoRotate(false) }} aria-label={`View ${product.name}`}>
            <span className="spin-card-image"><img src={product.image} alt={product.name} /></span>
            <span className="spin-card-copy"><small>0{index + 1}</small><strong>{product.name}</strong><em>{product.type}</em></span>
          </button>)}
        </div>
      </div>
      <button className="stage-control" onClick={() => setAutoRotate((value) => !value)} aria-label={autoRotate ? 'Pause rotation' : 'Play rotation'}>{autoRotate ? <Pause size={15} /> : <Play size={15} />}</button>
      <div className="stage-hint">Tap a product <span>•</span> Let it spin</div>
    </div>
  )
}

function StoreHeader({ active = 'shop' }) {
  return (
    <>
      <header className="nav store-nav">
        <a className="brand" href="#top" aria-label="Cairn home"><span className="brand-mark">C</span><span>cairn<span className="brand-dot">.</span></span></a>
        <nav className="nav-links store-links"><a className={active === 'shop' ? 'active' : ''} href="#/shop">Shop</a><a href="#top">Our story</a><a href="#journal">Journal</a><a href="#experience">Good to know</a></nav>
        <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><button className="icon-button bag-button" aria-label="Shopping bag"><ShoppingBag size={18} /><span>0</span></button></div>
      </header>
    </>
  )
}

function ConceptCarousel({ detail = false, items = products }) {
  const [active, setActive] = useState(0)
  const current = items[active]
  const move = (direction) => setActive((active + direction + items.length) % items.length)
  if (!items.length) return <div className="empty-search carousel-empty"><p className="eyebrow">No pieces found</p><h2>Try a softer search.</h2></div>
  return (
    <section className={detail ? 'concept-carousel detail-concepts' : 'concept-carousel store-concepts'}>
      <div className="concept-topline"><div className="concept-heading"><p className="section-kicker">The concept edit</p><h2>{detail ? 'More good things.' : 'A considered collection.'}</h2><p>{detail ? 'Pieces that pair well with slow mornings and long walks.' : 'Browse the Cairn point of view, one piece at a time.'}</p></div><div className="concept-controls"><span><strong>0{active + 1}</strong> / 0{items.length}</span><button onClick={() => move(-1)} aria-label="Previous concept item"><ChevronLeft size={17} /></button><button onClick={() => move(1)} aria-label="Next concept item"><ChevronRight size={17} /></button></div></div>
      <div className="concept-feed"><div className="concept-stage">{items.map((product, index) => { const position = (index - active + items.length) % items.length; return <a className={`concept-card ${position === 0 ? 'is-active' : position === 1 ? 'is-next' : position === items.length - 1 ? 'is-prev' : 'is-hidden'}`} href={`#/product/${product.slug}`} key={product.name}><div className="concept-image"><img src={product.image} alt={product.name} /><span className="concept-image-name">{product.name}</span></div></a> })}</div><div className="concept-feed-copy"><span className="concept-feed-number">0{active + 1}</span><p>{current.type}</p><strong>{current.price}</strong><a className="text-link" href={`#/product/${current.slug}`}>View piece <ArrowRight size={15} /></a><div className="concept-dots">{items.map((product, index) => <button className={active === index ? 'active' : ''} key={product.name} onClick={() => setActive(index)} aria-label={`Show ${product.name}`} />)}</div></div></div>
    </section>
  )
}

function StorePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Featured')
  const categories = ['All', 'Sleep', 'Walk', 'Feed', 'Play', 'Care']
  const filtered = products.filter((product) => `${product.name} ${product.type}`.toLowerCase().includes(query.toLowerCase()) && (category === 'All' || product.category === category))
  const visibleProducts = sort === 'Price: low to high' ? [...filtered].sort((a, b) => Number(a.price.slice(1)) - Number(b.price.slice(1))) : filtered

  return (
    <div className="site-shell inner-page"><StoreHeader />
      <main className="store-page">
        <section className="store-intro"><div><p className="eyebrow">The Cairn shop</p><h1>Things for<br /><em>good days.</em></h1></div><p className="store-intro-copy">Thoughtful essentials for the life you share. Start with the everyday pieces that make home feel more like yours.</p></section>
        <section className="catalog-toolbar"><div className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the collection" aria-label="Search the collection" /></div><div className="category-tabs">{categories.map((item) => <button className={category === item ? 'selected' : ''} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="sort-field"><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option>Featured</option><option>Price: low to high</option></select></label><button className="filter-button"><SlidersHorizontal size={15} /> Filter</button></section>
        <section className="catalog-meta"><span>{visibleProducts.length} pieces</span><span>{query ? `Results for “${query}”` : 'Small collection, carefully chosen'}</span></section>
        <ConceptCarousel items={visibleProducts} />
      </main>
    </div>
  )
}

function ProductPage() {
  const slug = window.location.hash.split('/')[2]
  const product = products.find((item) => item.slug === slug) || products[0]
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  return (
    <div className="site-shell inner-page"><StoreHeader active="" />
      <main className="detail-page"><a className="back-link" href="#/shop"><ChevronLeft size={15} /> Back to shop</a><section className="detail-layout"><div className="detail-gallery"><div className="detail-main-image"><img src={product.image} alt={product.name} /></div><div className="detail-thumbs"><button className="active"><img src={product.image} alt="" /></button><button><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=260&q=80" alt="" /></button></div></div><div className="detail-copy"><p className="eyebrow">{product.type}</p><h1>{product.name}</h1><p className="detail-price">{product.price}</p><p className="detail-description">A deep, supportive bed with a cloud-soft cover and a shape that gives them room to truly settle. Designed to live beautifully in the room you share.</p><div className="detail-rule" /><div className="detail-option"><div><span>Color</span><strong>Oat</strong></div><div className="swatches"><button className="swatch selected" aria-label="Oat color" /><button className="swatch sage" aria-label="Sage color" /><button className="swatch charcoal" aria-label="Charcoal color" /></div></div><div className="detail-actions"><div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div><button className={added ? 'add-button added' : 'add-button'} onClick={() => setAdded(true)}>{added ? <><Check size={16} /> Added to bag</> : <>Add to bag <ArrowRight size={16} /></>}</button></div><p className="shipping-note"><Check size={14} /> Free shipping on orders over $75</p><div className="detail-accordions"><details open><summary>Materials & care <Plus size={15} /></summary><p>Removable cotton canvas cover. Spot clean with a gentle soap. The inner cushion is made with recycled fiber fill.</p></details><details><summary>Shipping & returns <Plus size={15} /></summary><p>Ships in 2–4 business days. Return unused pieces within 30 days.</p></details></div></div></section></main>
    </div>
  )
}

function HomePage() {
  const heroProducts = products.slice(0, 3)
  const [active, setActive] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [liked, setLiked] = useState(false)
  const product = products[active]

  useEffect(() => {
    if (!autoRotate) return undefined
    const timer = setInterval(() => setActive((current) => (current + 1) % heroProducts.length), 5600)
    return () => clearInterval(timer)
  }, [autoRotate])

  const move = (direction) => setActive((active + direction + heroProducts.length) % heroProducts.length)

  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Cairn home"><span className="brand-mark">C</span><span>cairn<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a className="active" href="#/shop">Shop</a><a href="#studio">Our story</a><a href="#journal">Journal</a><a href="#experience">Good to know</a>
        </nav>
        <div className="nav-actions"><button className="icon-button" aria-label="Search"><Search size={18} /></button><button className="icon-button bag-button" aria-label="Shopping bag"><ShoppingBag size={18} /><span>0</span></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></div>
      </header>

      <main id="top">
        <section className="hero" id="models">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> New season / 2025</p>
            <h1>Good things<br /><em>for good dogs.</em></h1>
            <p className="hero-text">Well-made essentials for the animals who make every day feel a little more like home.</p>
            <a className="text-link" href="#configure">Shop the collection <ArrowRight size={16} /></a>
          </div>
          <div className="hero-stage"><ProductStage active={active} setActive={setActive} autoRotate={autoRotate} setAutoRotate={setAutoRotate} /></div>
          <div className="hero-meta"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section className="model-bar">
          <div><span className="section-kicker">Shop the edit</span><h2>For every kind of good day.</h2></div>
          <div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Previous product"><ChevronLeft size={18} /></button><span><strong>0{active + 1}</strong> / 0{heroProducts.length}</span><button onClick={() => move(1)} aria-label="Next product"><ChevronRight size={18} /></button></div>
        </section>

        <section className="model-info" id="configure">
          <div className="model-number">0{active + 1}</div>
          <div className="model-heading"><p className="eyebrow">{product.type}</p><h3>{product.name}</h3></div>
          <p className="model-detail">{product.detail}</p>
          <div className="model-stats"><div><span>Price</span><strong>{product.price}</strong></div><div><span>Available in</span><strong>{product.range}</strong></div></div>
          <button className="configure-button">Add to bag <ArrowRight size={17} /></button><button className={liked ? 'heart-button liked' : 'heart-button'} onClick={() => setLiked(!liked)} aria-label="Save product"><Heart size={18} fill={liked ? 'currentColor' : 'none'} /></button>
        </section>

        <section className="editorial" id="studio">
              <div className="editorial-image image-one"><div className="image-caption">01 <span>Soft places</span></div></div>
          <div className="editorial-copy"><p className="section-kicker">The Cairn philosophy</p><h2>Less clutter.<br /><em>More together.</em></h2><p>Thoughtful materials, calm colors, and daily objects that make room for the bond you already share.</p><a className="text-link" href="#journal">Read our story <ArrowRight size={16} /></a></div>
          <div className="editorial-image image-two"><div className="image-caption">02 <span>Out in the world</span></div></div>
        </section>

        <section className="benefits" id="experience"><div><span className="benefit-icon">↗</span><h4>Made for daily life</h4><p>Comfortable, durable pieces for the rhythm you share.</p></div><div><span className="benefit-icon">◌</span><h4>Materials with meaning</h4><p>Natural textures and considered details, chosen to last.</p></div><div><span className="benefit-icon">⌁</span><h4>Care, included</h4><p>Easy returns and a little help whenever you need it.</p></div></section>
      </main>

      <footer id="journal"><div className="footer-brand"><span className="brand-mark">C</span><span>cairn<span className="brand-dot">.</span></span></div><p>For the life you share.</p><div className="footer-links"><a href="#models">Instagram</a><a href="#models">Contact</a><a href="#models">Privacy</a></div></footer>
    </div>
  )
}

function App() {
  const [route, setRoute] = useState(window.location.hash)
  useEffect(() => {
    const syncRoute = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', syncRoute)
    return () => window.removeEventListener('hashchange', syncRoute)
  }, [])
  if (route.startsWith('#/product')) return <ProductPage />
  if (route.startsWith('#/shop')) return <StorePage />
  return <HomePage />
}

createRoot(document.getElementById('root')).render(<App />)
