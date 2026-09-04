import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowUpRight, Check, Menu, Search, ShoppingBag, X } from 'lucide-react'
import './styles.css'
import './editorial.css'
import './bento.css'
import './store.css'
import './item-collage.css'

const products = [
  { name: 'Field Bed', type: 'Rest / 01', price: '$148', category: 'Rest', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Ridge Bowl', type: 'Ritual / 02', price: '$58', category: 'Ritual', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Canyon Lead', type: 'Outside / 03', price: '$46', category: 'Outside', image: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Dune Throw', type: 'Rest / 04', price: '$84', category: 'Rest', image: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Ember Ball', type: 'Play / 05', price: '$24', category: 'Play', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1000&q=88' },
  { name: 'Path Towel', type: 'Outside / 06', price: '$34', category: 'Outside', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=88' },
]
const productSlug = (product) => product.name.toLowerCase().replaceAll(' ', '-')

function Header({ bagCount, onMenu }) {
  return <header className="site-header"><a className="brand" href="#top">cairn<span>/03</span></a><nav><a href="#/store">Store</a><a href="#collection">Field notes</a><a href="#story">About</a></nav><div className="header-tools"><button aria-label="Search"><Search size={17} /></button><button aria-label="Shopping bag"><ShoppingBag size={17} /><b>{bagCount}</b></button><button className="menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={18} /></button></div></header>
}

function ApertureHero() {
  const [progress, setProgress] = useState(0)
  useEffect(() => { const update = () => setProgress(Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * .82)))); addEventListener('scroll', update, { passive: true }); update(); return () => removeEventListener('scroll', update) }, [])
  return <section className="aperture" id="top" style={{ '--aperture-progress': progress }}><div className="aperture-photo" /><div className="aperture-wash" /><div className="aperture-frame"><div className="frame-corner corner-tl" /><div className="frame-corner corner-tr" /><div className="frame-corner corner-bl" /><div className="frame-corner corner-br" /><div className="frame-label label-top">A study in shared space <span>03 / 06</span></div><div className="hero-copy"><p>Objects for the life outside</p><h1>Leave<br /><i>room.</i></h1><a href="#collection">Enter the collection <ArrowDown size={16} /></a></div><div className="frame-label label-bottom"><span>Open form / quiet function</span><span>Scroll to reveal</span></div></div><div className="aperture-progress">0{Math.round(progress * 100)}<span>%</span></div></section>
}

function EditorialCutout({ product, word, title, tone, index }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => { const update = () => { const panel = document.querySelector(`[data-cutout="${index}"]`); if (!panel) return; const distance = Math.max(1, panel.offsetHeight - window.innerHeight); setProgress(Math.min(1, Math.max(0, -panel.getBoundingClientRect().top / distance))) }; addEventListener('scroll', update, { passive: true }); update(); return () => removeEventListener('scroll', update) }, [index])
  return <section className={`editorial-cutouts ${tone}`} data-cutout={index} style={{ '--cutout-progress': progress }}><div className="cutout-word">{word}</div><div className="cutout-block block-coral" /><div className="cutout-block block-cream" /><div className="cutout-product"><img src={product.image} alt={product.name} /><span>0{index} / {product.category.toLowerCase()}</span></div><div className="cutout-copy"><p>Layered for living / 0{index}</p><h2>{title}<br /><i>{product.name}.</i></h2><a href="#/store">Shop the piece <ArrowUpRight size={15} /></a></div><div className="cutout-marker"><span>Depth study</span><strong>0{index}</strong></div></section>
}

function ProductCard({ product, onAdd }) {
  return <article className="product-card"><a href={`#/product/${productSlug(product)}`} className="product-image"><img src={product.image} alt={product.name} /><span>View piece <ArrowUpRight size={15} /></span></a><div className="product-meta"><div><small>{product.type}</small><h3>{product.name}</h3></div><strong>{product.price}</strong></div><button className="add-button" onClick={() => onAdd(product)}><span>Add to bag</span><ArrowUpRight size={15} /></button></article>
}

function ItemPage({ product, onAdd }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [panel, setPanel] = useState('Details')
  const collage = [product, ...products.filter((item) => productSlug(item) !== productSlug(product)).slice(0, 3)]
  const panels = { Details: `${product.name} is a considered piece for the daily rhythm you share. Quietly useful, tactile, and made to stay close.`, Materials: 'Natural materials, chosen for daily use. Spot clean gently and let the piece air dry.', Shipping: 'Ships in 2–4 days. Free shipping over $75, with easy returns within 30 days.' }
  return <main className="item-route"><section className="item-collage"><div className="item-nav"><a href="#/store"><ArrowUpRight size={15} /> Back to store</a><span>cairn<span>/03</span></span><button onClick={() => setDrawerOpen(true)}>Open details <ArrowUpRight size={15} /></button></div><div className="collage-word">{product.category}</div>{collage.map((item, index) => <a key={productSlug(item)} href={`#/product/${productSlug(item)}`} className={`collage-image collage-image-${index}`}><img src={item.image} alt={item.name} /><span>{item.name} / 0{index + 1}</span></a>)}<div className="collage-title"><small>{product.type}</small><h1>{product.name}</h1><strong>{product.price}</strong></div><div className="collage-index">0{products.findIndex((item) => productSlug(item) === productSlug(product)) + 1} / 06</div></section><div className={`bottom-drawer ${drawerOpen ? 'open' : ''}`}><button className="drawer-handle" onClick={() => setDrawerOpen(!drawerOpen)} aria-label={drawerOpen ? 'Close details' : 'Open details'}><span /></button><div className="drawer-head"><div><small>{product.category} / {product.type}</small><h2>{product.name}</h2></div><button onClick={() => setDrawerOpen(false)} aria-label="Close details"><X size={18} /></button></div><div className="drawer-tabs">{Object.keys(panels).map((name) => <button key={name} className={panel === name ? 'active' : ''} onClick={() => setPanel(name)}>{name}</button>)}</div><p>{panels[panel]}</p><div className="drawer-buy"><span>{product.price}</span><button onClick={() => onAdd(product)}>Add to bag <ArrowUpRight size={15} /></button></div></div></main>
}

function Collection() {
  return <section className="collection" id="collection"><div className="section-intro"><div><p className="eyebrow">The considered collection</p><h2>Made for <i>the in-between.</i></h2></div><p className="intro-copy">A sequence of quiet forms, layered with a little more presence.</p></div><EditorialCutout product={products[0]} word="ESSENTIALS" title="Objects with" tone="cutout-one" index={1} /><EditorialCutout product={products[2]} word="OUTSIDE" title="Go a little" tone="cutout-two" index={2} /><EditorialCutout product={products[4]} word="PLAY" title="Make room for" tone="cutout-three" index={3} /><a className="store-portal" href="#/store"><span>06 pieces / 2025</span><strong>Enter the store <ArrowUpRight size={17} /></strong></a></section>
}

function Store({ onAdd }) {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Rest', 'Ritual', 'Outside', 'Play']
  const visible = products.filter((product) => filter === 'All' || product.category === filter)
  return <section className="store-page" id="store"><div className="store-intro"><p className="eyebrow">The cairn store / 03</p><h1>Find your<br /><i>own rhythm.</i></h1><p>Useful, beautiful objects for the pause between leaving and arriving.</p><a href="#top">Back to the beginning <ArrowUpRight size={15} /></a></div><div className="collection-tools"><span>06 pieces / 2025</span><div>{categories.map((category) => <button key={category} className={filter === category ? 'selected' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div></div><div className="product-grid">{visible.map((product) => <ProductCard key={product.name} product={product} onAdd={onAdd} />)}</div></section>
}

function Story() { return <section className="story" id="story"><div><p className="eyebrow">Field note / 01</p><h2>Keep the good<br /><i>close.</i></h2></div><p>We make objects that ask less of the world around them. Natural textures, honest materials, a little more thought in the places that matter every day.</p><a href="#about">Read our approach <ArrowUpRight size={15} /></a></section> }

function App() {
  const [bagCount, setBagCount] = useState(0)
  const [notice, setNotice] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => { const update = () => setHash(window.location.hash); addEventListener('hashchange', update); return () => removeEventListener('hashchange', update) }, [])
  const addToBag = (product) => { setBagCount((count) => count + 1); setNotice(`${product.name} added to your bag`); setTimeout(() => setNotice(''), 2200) }
  const storeRoute = hash === '#/store'
  useEffect(() => { document.documentElement.classList.toggle('store-route', storeRoute); return () => document.documentElement.classList.remove('store-route') }, [storeRoute])
  const itemSlug = hash.startsWith('#/product/') ? hash.split('/')[2] : ''
  const itemProduct = products.find((product) => productSlug(product) === itemSlug)
  let page
  if (itemProduct) page = <ItemPage product={itemProduct} onAdd={addToBag} />
  else if (storeRoute) page = <><Header bagCount={bagCount} onMenu={() => setMenuOpen(true)} /><main><Store onAdd={addToBag} /></main></>
  else page = <><Header bagCount={bagCount} onMenu={() => setMenuOpen(true)} /><ApertureHero /><main><Collection /><Story /><section className="closing" id="about"><p>For the life you share.</p><strong>cairn /03</strong><span>© 2025</span></section></main></>
  return <div>{page}{notice && <div className="toast"><Check size={15} />{notice}</div>}{menuOpen && <div className="menu-drawer"><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button><nav><a href="#/store" onClick={() => setMenuOpen(false)}>Store</a><a href="#collection" onClick={() => setMenuOpen(false)}>Field notes</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a></nav></div>}</div>
}

createRoot(document.getElementById('root')).render(<App />)
