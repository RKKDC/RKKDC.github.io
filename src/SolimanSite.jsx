import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronRight,
  Bot, Clock3, Copy, FileUp, Landmark, LockKeyhole, Mail, MapPin, Menu, MessageCircle,
  Pause, Phone, Play, Search, Send, ShieldCheck, X,
} from 'lucide-react'
import './soliman.css'

const navigation = [
  ['lobby', 'Concierge'], ['about', 'About'], ['services', 'Services'],
  ['clients', 'Client archive'], ['statistics', 'Impact'], ['employment', 'Employment'], ['news', 'News'], ['contact', 'Contact'],
]
const serviceDomains = [
  'Security guard deployment', 'Security consultancy & survey',
  'Inspection & operational briefing', 'Alarm monitoring & response', 'Other / combined service',
]
const servicePostures = ['New site or contract', 'Review an existing operation', 'Time-sensitive security concern']
const positions = ['Security Guard — Metro Manila', 'Security Guard — Multinational Company', 'Receptionist', 'Accounting Clerk', 'Researcher']
const credentials = ['Valid security license', 'Industrial security experience', 'College education', 'NBI clearance', 'Barangay clearance']
const editorialImages = {
  architecture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90',
  architectureAlternate: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88',
  training: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=88',
  trainingAlternate: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=88',
  briefing: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=88',
  briefingAlternate: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=88',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88',
  officeAlternate: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=88',
  assessment: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=88',
  assessmentAlternate: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88',
  interior: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2200&q=88',
  interiorAlternate: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=88',
  seminar: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2200&q=88',
  seminarAlternate: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2200&q=88',
}

const sectors = [
  ['Embassies & diplomatic missions', ['Embassy of the Republic of Turkey', 'Royal Embassy of Saudi Arabia, Manila', 'Netherlands Embassy', 'Swiss Embassy', 'Canadian Embassy', 'Singapore Embassy', 'Embassy of Sweden', 'Embassy of Spain', 'Embassy of France', 'Delegation of the European Commission in the Philippines', 'Asian Development Bank', 'The World Bank']],
  ['Banks & financial institutions', ['Bank of the Philippine Islands', 'BPI Family Bank', 'ExportBank', 'Standard Chartered', 'Union Bank', 'Sterling Bank of Asia']],
  ['Communication & business services', ['Genpact', 'Wachovia', 'Verizon', 'Convergys', 'HSBC']],
  ['Power generation', ['San Roque Multi-Purpose Project', 'Chevron']],
  ['Parcel & cargo handling', ['Federal Express', 'Sandigan']],
  ['Condominiums', ['SDTT Salustiana D. Ty Tower', 'The Cordova Condominium', 'Salcedo Mansion', 'Sunette Tower', 'City Land Condominium']],
  ['Pharmaceuticals', ['AstraZeneca', 'Mercury Drug']],
  ['Schools', ['PAREF Southridge', 'Colegio San Agustin']],
  ['Manufacturing & consumer goods', ['Goodyear', 'Del Monte Philippines, Inc.', 'IDS Marketing', 'Kraft Foods (Philippines), Inc.', 'NAPICO', 'Coca-Cola', 'Unilever']],
]

const serviceSections = [
  {
    number: '01', title: 'Trained & licensed security guards', image: editorialImages.training, alternate: editorialImages.trainingAlternate,
    paragraphs: [
      'The company describes a force of approximately 1,000 trained and duly licensed guards. Its published standard includes at least two years of college education and completion of agency training before assignment.',
      'Training is conducted by in-house instructors, with additional modules tailored to client requirements. The source site says clients may participate in selecting personnel for their premises.',
    ],
  },
  {
    number: '02', title: 'Security inspection & operational briefings', image: editorialImages.briefing, alternate: editorialImages.briefingAlternate,
    paragraphs: [
      'Published operating practices include routine post inspections, weekly service assessments, monthly guard meetings, detachment inspections, and coordination calls with client security managers.',
      'The site also describes periodic performance reviews with client security managers and briefings before and after shift changes.',
    ],
  },
  {
    number: '03', title: 'Security consultancy & surveys', image: editorialImages.office, alternate: editorialImages.officeAlternate,
    paragraphs: [
      'Soliman describes security surveys, audits, and advice on complete security programs, concepts, and practices as part of its client service.',
      'Recommendations are developed around site conditions, existing policies, post orders, and the client’s operating requirements.',
    ],
  },
  {
    number: '04', title: 'Training, facilities & qualification', image: editorialImages.seminar, alternate: editorialImages.seminarAlternate,
    paragraphs: [
      'The company says it maintains a training facility and provides pre-posting, continuing, and periodic training for guards. Clients may recommend training modules for their sites.',
      'Its published policy references R.A. 5487 as a baseline for guard qualifications, while allowing clients to set additional requirements for assigned personnel.',
    ],
  },
  {
    number: '05', title: 'Equipment, supervision & accountability', image: editorialImages.assessment, alternate: editorialImages.assessmentAlternate,
    paragraphs: [
      'The source describes agency-officer supervision alongside client authority for day-to-day site administration and lawful post instructions. Uniform requirements may be coordinated with each client.',
      'It also describes licensed firearms and two-way radios for guards where appropriate, with additional equipment arranged in advance. The page says the agency handles guard employment matters and describes a no-union tie-up policy; confirm current equipment and contract terms directly with the company.',
    ],
  },
  {
    number: '06', title: 'Coverage & service commitments', image: editorialImages.interior, alternate: editorialImages.interiorAlternate,
    paragraphs: [
      'The published services page describes restitution and recovery for certain losses established through investigation, subject to stated exclusions and terms.',
      'It lists general-liability coverage of ₱2,000,000 per occurrence for certain accidental injury or property-damage claims. The page also says contract rates follow applicable legislation and guard wages and benefits are paid directly. These are source-site statements; confirm current policy limits and contract terms directly with the company.',
    ],
  },
]

function Eyebrow({ children, index }) {
  return <div className="eyebrow">{index && <span className="eyebrow-index">{index}</span>}<span>{children}</span></div>
}

export default function SolimanSite() {
  const [view, setView] = useState('lobby')
  const [activeDialog, setActiveDialog] = useState('concierge')
  const [assistantOpen, setAssistantOpen] = useState(false)
  const [assistantInput, setAssistantInput] = useState('')
  const [assistantReply, setAssistantReply] = useState('I can help you find a service, start an application, or explore the company.')
  const [menuOpen, setMenuOpen] = useState(false)
  const [clientStep, setClientStep] = useState(0)
  const [careerStep, setCareerStep] = useState(0)
  const [clientSent, setClientSent] = useState(false)
  const [careerSent, setCareerSent] = useState(false)
  const [error, setError] = useState('')
  const [client, setClient] = useState({ scope: '', posture: '', name: '', organization: '', phone: '', email: '' })
  const [candidate, setCandidate] = useState({ position: '', credentials: [], resume: null })
  const fileInput = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (!activeDialog) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const escapeDialog = (event) => {
      if (event.key === 'Escape' && activeDialog !== 'concierge') setActiveDialog(null)
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = [...dialogRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]), a[href], [tabindex="0"]')]
        if (!focusable.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', escapeDialog)
    const firstFocusable = dialogRef.current?.querySelector('.intake-panel button, .intake-panel input, .concierge-dialog-choice, .concierge-free-reign')
      || dialogRef.current?.querySelector('button, input, a, [tabindex="0"]')
    firstFocusable?.focus({ preventScroll: true })
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', escapeDialog)
    }
  }, [activeDialog])

  useEffect(() => {
    const revealSelector = '#main-content section, #main-content .service-bento-item, #main-content .museum-feature, #main-content .museum-tile, #main-content .impact-metric, #main-content .news-entry, #main-content .leader-entry, #main-content .opportunity-row'
    const revealTargets = document.querySelectorAll(revealSelector)
    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((element) => element.classList.add('is-in-view'))
      return undefined
    }
    const observed = new WeakSet()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle('is-in-view', entry.isIntersecting))
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })
    function observeReveal(element) {
      if (observed.has(element)) return
      observed.add(element)
      element.classList.add('scroll-reveal')
      observer.observe(element)
    }
    revealTargets.forEach(observeReveal)
    const mutations = new MutationObserver((records) => records.forEach((record) => record.addedNodes.forEach((node) => {
      if (!(node instanceof Element)) return
      if (node.matches(revealSelector)) observeReveal(node)
      node.querySelectorAll(revealSelector).forEach(observeReveal)
    })))
    mutations.observe(document.getElementById('main-content'), { childList: true, subtree: true })
    return () => {
      mutations.disconnect()
      observer.disconnect()
    }
  }, [view])

  function navigate(nextView) {
    setAssistantOpen(false)
    if (nextView === 'lobby') {
      setView('lobby')
      setActiveDialog('concierge')
      setMenuOpen(false)
      setError('')
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    if (nextView === 'client_intake' || nextView === 'career_intake') {
      setError('')
      setActiveDialog(nextView)
      return
    }
    setView(nextView)
    setActiveDialog(null)
    setMenuOpen(false)
    setError('')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  function submitAssistant(event) {
    event.preventDefault()
    const query = assistantInput.trim().toLowerCase()
    if (!query) return
    setAssistantInput('')
    if (/career|job|recruit|resume|cv|employment|apply|application/.test(query)) {
      setAssistantReply('I’ll open the recruitment application for you.')
      setAssistantOpen(false)
      setActiveDialog('career_intake')
      return
    }
    if (/(request|quote|consult|book|hire|need).{0,35}(service|guard|security|protection)|security.{0,20}(quote|consult|application|request)/.test(query)) {
      setAssistantReply('I’ll open the focused security service enquiry.')
      setAssistantOpen(false)
      setActiveDialog('client_intake')
      return
    }
    const destinations = [
      { pattern: /client|archive|customer|sector/.test(query), view: 'clients', label: 'Client archive' },
      { pattern: /impact|stat|number|award/.test(query), view: 'statistics', label: 'Impact and published statistics' },
      { pattern: /news|article|update/.test(query), view: 'news', label: 'News and archive' },
      { pattern: /contact|address|map|phone|email|office|direction/.test(query), view: 'contact', label: 'Office contact and map' },
      { pattern: /service|guard|security|training|inspection/.test(query), view: 'services', label: 'Services' },
      { pattern: /about|history|leader|company/.test(query), view: 'about', label: 'About Soliman' },
    ]
    const destination = destinations.find((item) => item.pattern)
    if (destination) {
      setAssistantReply(`Taking you to ${destination.label}.`)
      setActiveDialog(null)
      setView(destination.view)
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    setAssistantReply('Try “security services”, “careers”, “client archive”, “impact”, “news”, or “office map”.')
  }
  function updateClient(field, value) {
    setClient((current) => ({ ...current, [field]: value }))
    setError('')
  }
  function updateCandidate(field, value) {
    setCandidate((current) => ({ ...current, [field]: value }))
    setError('')
  }
  function advanceClient() {
    if (clientStep === 0 && !client.scope) return setError('Select a service area to continue.')
    if (clientStep === 1 && !client.posture) return setError('Select an engagement preference to continue.')
    if (clientStep === 2) {
      if (!client.name.trim() || !client.email.trim()) return setError('Name and email are required.')
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(client.email)) return setError('Enter a valid email address.')
    }
    setError('')
    setClientStep((step) => Math.min(step + 1, 3))
  }
  function advanceCareer() {
    if (careerStep === 0 && !candidate.position) return setError('Select a role to continue.')
    if (careerStep === 2 && !candidate.resume) return setError('Attach your curriculum vitae as a PDF to continue.')
    setError('')
    setCareerStep((step) => Math.min(step + 1, 3))
  }
  const suggestedRole = candidate.position || 'Security Guard — Metro Manila'

  return <div className="app-shell min-h-screen bg-alabaster text-navy soliman-shell">
    <header className={`site-header soliman-header ${activeDialog ? 'is-behind-dialog' : ''}`} inert={activeDialog ? '' : undefined}>
      <a className="brand-mark soliman-brand" href="#concierge" onClick={(event) => { event.preventDefault(); navigate('lobby') }} aria-label="Soliman Security Services home">
        <img className="soliman-logo" src="/soliman-logo.svg" alt="Soliman Security Services logo" />
        <span className="brand-copy"><strong>SOLIMAN</strong><small>SECURITY SERVICES INC.</small></span>
      </a>
      <nav className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" inert={activeDialog ? '' : undefined}>
        {navigation.map(([id, label]) => <button key={id} className={`nav-link ${view === id ? 'is-active' : ''}`} onClick={() => navigate(id)} aria-current={view === id ? 'page' : undefined}>{label}</button>)}
      </nav>
      <a className="header-contact" href="tel:+6328928881" tabIndex={activeDialog ? -1 : undefined}><span className="contact-label">MAKATI OFFICE</span><span>+63 2 892 8881</span><ArrowRight size={15} strokeWidth={1.5} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} tabIndex={activeDialog ? -1 : undefined}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
    </header>
    <main id="main-content" className={`site-route ${activeDialog ? 'is-dialog-background' : ''}`} key={view} inert={activeDialog ? '' : undefined}>
      {view === 'lobby' && <Concierge navigate={navigate} />}
      {view === 'about' && <AboutPage navigate={navigate} />}
      {view === 'services' && <ServicesPage navigate={navigate} />}
      {view === 'clients' && <ClientsPage navigate={navigate} />}
      {view === 'statistics' && <ImpactPage navigate={navigate} />}
      {view === 'employment' && <EmploymentPage navigate={navigate} />}
      {view === 'news' && <NewsPage />}
      {view === 'contact' && <ContactPage navigate={navigate} />}
    </main>
    <footer className="site-footer soliman-footer" inert={activeDialog ? '' : undefined}>
      <a className="footer-brand" href="#concierge" onClick={(event) => { event.preventDefault(); navigate('lobby') }}>SOLIMAN <span>/</span> SECURITY SERVICES INC.</a>
      <span className="footer-copy">MAKATI CITY, PHILIPPINES · EST. 1957</span>
      <a className="footer-source" href="https://www.soliman-security.com/" target="_blank" rel="noreferrer">Source site <ArrowUpRight size={12} /></a>
    </footer>
    {activeDialog && <div className="focus-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget && activeDialog !== 'concierge') setActiveDialog(null) }}>
      <section className={`focus-dialog ${activeDialog === 'concierge' ? 'concierge-dialog' : 'transaction-dialog'}`} role="dialog" aria-modal="true" aria-labelledby="focused-dialog-title" ref={dialogRef}>
        {activeDialog === 'concierge' && <button type="button" className="concierge-close" onClick={() => setActiveDialog(null)} aria-label="Close concierge and explore the website"><X size={18} /></button>}
        {activeDialog === 'concierge' ? <ConciergeDialog navigate={navigate} close={() => setActiveDialog(null)} /> : <>
          <div className="transaction-dialog-top"><a className="dialog-brand" href="#concierge" onClick={(event) => { event.preventDefault(); setActiveDialog('concierge') }}><img src="/soliman-logo.svg" alt="" /><span>SOLIMAN <small>PRIVATE OFFICE</small></span></a><button type="button" className="dialog-close" onClick={() => setActiveDialog(null)} aria-label="Close application"><X size={18} /></button></div>
          {activeDialog === 'client_intake' && <ClientIntake step={clientStep} setStep={setClientStep} form={client} update={updateClient} error={error} next={advanceClient} sent={clientSent} transmit={() => setClientSent(true)} navigate={navigate} />}
          {activeDialog === 'career_intake' && <CareerIntake step={careerStep} setStep={setCareerStep} form={candidate} update={updateCandidate} error={error} next={advanceCareer} sent={careerSent} transmit={() => setCareerSent(true)} suggestedRole={suggestedRole} fileInput={fileInput} />}
        </>}
      </section>
    </div>}
    <AssistantWidget open={assistantOpen} setOpen={setAssistantOpen} input={assistantInput} setInput={setAssistantInput} reply={assistantReply} onSubmit={submitAssistant} navigate={navigate} />
  </div>
}

function ConciergeDialog({ navigate, close }) {
  return <div className="concierge-dialog-content">
    <div className="concierge-dialog-brand"><img src="/soliman-logo.svg" alt="Soliman Security Services logo" /><span><strong>SOLIMAN</strong><small>SECURITY SERVICES INC.</small></span></div>
    <Eyebrow index="SOLIMAN CORPORATE CENTER · MAKATI">Digital concierge</Eyebrow>
    <h1 id="focused-dialog-title">How can we<br /><em>assist you?</em></h1>
    <p className="concierge-dialog-intro">Choose a focused path to start an enquiry, or enter the full website at your own pace.</p>
    <div className="concierge-dialog-actions">
      <button type="button" className="concierge-dialog-choice" onClick={() => navigate('client_intake')}><span className="dialog-choice-index">01</span><span><strong>Request security services</strong><small>Site needs, guarding, consultancy</small></span><ArrowRight size={17} /></button>
      <button type="button" className="concierge-dialog-choice" onClick={() => navigate('career_intake')}><span className="dialog-choice-index">02</span><span><strong>Apply for a position</strong><small>Recruitment and career enquiries</small></span><ArrowRight size={17} /></button>
    </div>
    <button type="button" className="concierge-free-reign" onClick={close}>Explore the website <ArrowUpRight size={15} /><span>Browse all sections without the guided flow</span></button>
    <div className="concierge-dialog-foot"><LockKeyhole size={13} /> YOUR DETAILS STAY IN THIS BROWSER DEMO</div>
  </div>
}

function AssistantWidget({ open, setOpen, input, setInput, reply, onSubmit, navigate }) {
  return <div className={`assistant-widget ${open ? 'is-open' : ''}`}>
    {open && <section className="assistant-panel" aria-label="Soliman digital assistant">
      <div className="assistant-panel-head"><span className="assistant-avatar"><Bot size={18} /></span><div><strong>Soliman assistant</strong><small>Website guide · available now</small></div><button type="button" onClick={() => setOpen(false)} aria-label="Close assistant"><X size={17} /></button></div>
      <div className="assistant-conversation" aria-live="polite"><p className="assistant-message">{reply}</p><div className="assistant-suggestions"><button onClick={() => navigate('client_intake')}>Request services</button><button onClick={() => navigate('career_intake')}>Apply for a job</button><button onClick={() => navigate('contact')}>Office map</button></div></div>
      <form className="assistant-compose" onSubmit={onSubmit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask for services, jobs, or the office" aria-label="Ask the Soliman assistant" /><button type="submit" aria-label="Send question"><Send size={16} /></button></form>
    </section>}
    <button type="button" className="assistant-launcher" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close Soliman assistant' : 'Open Soliman assistant'} aria-expanded={open}>{open ? <X size={22} /> : <MessageCircle size={22} />}<span>{open ? 'Close' : 'Ask Soliman'}</span></button>
  </div>
}

function Concierge({ navigate }) {
  return <>
    <section className="lobby-hero source-hero">
      <div className="hero-copy"><Eyebrow index="MAKATI · PHILIPPINES">Security services since 1957</Eyebrow>
        <h1>Steadfast service.<br /><em>Trusted protection.</em></h1>
        <p>Soliman Security Services, Inc. is a Philippine security agency built on professionalism, integrity, and excellence. Begin here to learn about the company, its services, or a private inquiry.</p>
        <button className="text-action" onClick={() => navigate('about')}>Discover Soliman <ArrowDownRight size={17} /></button>
        <div className="hero-caption"><span className="caption-rule" />SOLIMAN CORPORATE CENTER · MAKATI CITY</div>
      </div>
      <div className="hero-photo-wrap"><ImageSwap className="hero-photo-swap" src={editorialImages.architecture} alternate={editorialImages.architectureAlternate} alt="Modern glass office tower in daylight, shown as representative architecture" loading="eager" />
        <div className="photo-index"><span>EST. 1957</span><span>REPRESENTATIVE ARCHITECTURE · MAKATI</span></div>
        <div className="photo-stamp source-stamp"><ShieldCheck size={20} strokeWidth={1.4} /><span>PROFESSIONALISM<br />INTEGRITY<br />EXCELLENCE</span></div>
      </div>
    </section>
    <section className="concierge-section" aria-labelledby="concierge-title">
      <div className="concierge-heading"><div><Eyebrow>Soliman digital concierge</Eyebrow><h2 id="concierge-title">Where shall we begin?</h2></div><p>Choose a path. For service enquiries, we’ll gather a few details before connecting you with the Makati office.</p></div>
      <div className="concierge-options">
        <ConciergeLink number="01" title="Discover the company" detail="History, leadership, and operating principles" onClick={() => navigate('about')} />
        <ConciergeLink number="02" title="Arrange security services" detail="Share a site requirement or request a consultation" onClick={() => navigate('client_intake')} />
        <ConciergeLink number="03" title="Careers & recruitment" detail="Explore roles and the selection process" onClick={() => navigate('employment')} />
      </div>
      <div className="concierge-note"><LockKeyhole size={14} strokeWidth={1.6} />CLIENT ENQUIRIES ARE ROUTED TO SOLIMAN SECURITY SERVICES, INC.</div>
    </section>
    <section className="lobby-quickfacts"><div><span className="quickfact-value">1957</span><span className="quickfact-label">Established in the Philippines</span></div><div><span className="quickfact-value">1,000</span><span className="quickfact-label">Licensed guards, as reported by the source site</span></div><div><span className="quickfact-value">24 / 7</span><span className="quickfact-label">Office operation, as described on the source site</span></div></section>
  </>
}
function ConciergeLink({ number, title, detail, onClick }) {
  return <button className="concierge-option" onClick={onClick}><span className="option-number">{number}</span><span className="option-copy"><strong>{title}</strong><small>{detail}</small></span><ArrowRight size={19} strokeWidth={1.35} /></button>
}

function PageBanner({ index, eyebrow, title, emphasis, copy, action, onAction }) {
  return <section className="editorial-banner source-banner"><Eyebrow index={index}>{eyebrow}</Eyebrow><h1>{title}{emphasis && <><br /><em>{emphasis}</em></>}</h1><div className="banner-bottom"><p>{copy}</p>{action && <button className="button-primary" onClick={onAction}>{action}<ArrowRight size={15} /></button>}</div></section>
}
function AboutPage({ navigate }) {
  const leaders = [
    { name: 'Teresita L. Soliman', title: 'General Manager', initials: 'TS', bio: 'A biologist by education and security-management leader by profession. She assumed ownership and full management in 1987 after directing company operations from 1977. Her professional affiliations have included ASIS, PSIS, and AHSOP.' },
    { name: 'Juliano R. Dupaya Jr.', title: 'Assistant General Manager', initials: 'JD', bio: 'A lawyer with 15 years of hotel-security and management experience at The Westin Philippine Plaza. His professional background includes hotel-security leadership, risk-management training, and agency operations.' },
    { name: 'Loreto S. Sumoba', title: 'HRD Director', initials: 'LS', bio: 'A sociologist with experience in research, education, and organizational training. He leads recruitment, training, and employee-development programs for the agency.' },
  ]
  return <div className="source-page">
    <PageBanner index="01 / ABOUT" eyebrow="Professionalism · Integrity · Excellence" title="A Philippine security" emphasis="legacy." copy="Established by Macario J. Soliman in 1957, Soliman Security Services grew from a single-proprietor watchman agency into a corporate security provider serving organizations across the Philippines." action="Explore services" onAction={() => navigate('services')} />
    <section className="history-section"><div className="source-section-intro"><Eyebrow>Company history</Eyebrow><h2>Built through generations<br />of service.</h2><p>Four milestones trace the agency’s transition from a family-founded watchman service to a Philippine security corporation.</p></div><div className="history-copy"><AboutTimeline /><p className="history-note">The company’s archived profile cites a 1994–1995 survey ranking it fifth in detective and protective services, and Philippine National Police “Best Security Agency” awards in 1993 and 1997. It also describes a 24-hour office, routine inspections, and a 1991 alarm-monitoring venture connected to about 300 diplomatic residences and businesses. These and the client counts are historical claims; confirm current information with the company.</p></div></section>
    <section className="company-principles"><Eyebrow>What guides the work</Eyebrow><h2>Professionalism, integrity<br />and excellence.</h2><p>The company describes its credo as superior service: meeting client needs on time, improving service continuously, and translating those commitments into action through staff training and supervision.</p><div className="principle-rules"><span>Client service</span><span>Continuous training</span><span>Accountable supervision</span></div></section>
    <section className="leadership-section"><div className="source-section-heading"><div><Eyebrow>Leadership</Eyebrow><h2>Experience in service<br />of the mission.</h2></div><p>Profiles adapted from Soliman Security’s public company pages. High-resolution portraits were not available, so no stock photos are used for named people.</p></div><div className="leadership-grid">{leaders.map((leader, index) => <article className="leader-entry" key={leader.name}><div className="leader-image"><span>{leader.initials}</span><span className="leader-index">0{index + 1}</span></div><h3>{leader.name}</h3><div className="leader-title">{leader.title}</div><p>{leader.bio}</p></article>)}</div></section>
  </div>
}
function AboutTimeline() {
  const milestones = [
    ['1957', 'A watchman agency begins', 'Macario J. Soliman establishes Soliman’s Watchman & Security Agency as a single-proprietor business.'],
    ['1977', 'A new generation takes the lead', 'Teresita L. Soliman begins directing the company’s business affairs and operations.'],
    ['1987', 'Ownership and management transition', 'Teresita L. Soliman assumes ownership and full management of the agency.'],
    ['1992', 'The company incorporates', 'Soliman’s Watchman & Security Agency becomes Soliman Security Services, Inc.'],
  ]
  const [active, setActive] = useState(0)
  const [year, title, copy] = milestones[active]
  return <div className="about-timeline"><div className="timeline-tabs" role="tablist" aria-label="Company milestones">{milestones.map(([milestoneYear], index) => <button type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} key={milestoneYear} onClick={() => setActive(index)}>{milestoneYear}</button>)}</div><article className="timeline-story" role="tabpanel" key={year}><span>{year}</span><h3>{title}</h3><p>{copy}</p></article></div>
}

function ServicesPage({ navigate }) {
  return <div className="source-page"><PageBanner index="02 / SERVICES" eyebrow="Quality · Training · Inspection" title="Security built around" emphasis="the site." copy="Guard deployment, security consultancy, and ongoing inspection shaped by each client’s policies, premises, and operating requirements." action="Request a service consultation" onAction={() => navigate('client_intake')} />
    <section className="service-facts"><div><span>~1,000</span><small>trained and licensed guards reported by the company</small></div><div><span>24 hours</span><small>operational coverage described on the source site</small></div><div><span>1957</span><small>year Soliman’s security business was established</small></div></section>
    <ComparisonChart />
    <section className="service-bento-wrap"><div className="service-bento-heading"><div><Eyebrow>Service portfolio</Eyebrow><h2>Six connected disciplines.</h2></div><p>Photography is temporary editorial stock imagery, not documentation of Soliman sites or staff.</p></div><div className="service-bento-grid">{serviceSections.map((service) => <article className="service-bento-item" key={service.number}><div className="service-bento-image"><ImageSwap src={service.image} alternate={service.alternate} alt={`Representative editorial photograph for ${service.title}`} /><span>{service.number}</span></div><div className="service-bento-copy"><Eyebrow>Service / {service.number}</Eyebrow><h3>{service.title}</h3><p>{service.paragraphs[0]}</p><details><summary>Operational detail <ChevronRight size={14} /></summary><p>{service.paragraphs[1]}</p></details></div></article>)}</div></section>
    <section className="service-endnote"><p>Published service statements may describe historical policies. Confirm current staffing, equipment, insurance terms, and contract conditions directly with Soliman Security.</p><button className="text-action" onClick={() => navigate('contact')}>Contact the Makati office <ArrowRight size={15} /></button></section>
  </div>
}
function ComparisonChart() {
  const metrics = [
    ['Guard force', '~1,000', 'trained and licensed guards reported', 'Ask each provider for the licensed roster, relief capacity, and the team allocated to your site.'],
    ['Office operations', '24 hours', 'operation described by the company', 'Confirm staffed escalation coverage, response ownership, and after-hours contact arrangements.'],
    ['Quality cadence', 'Daily / weekly', 'routine guard inspections and service assessments described', 'Compare written inspection frequency, audit records, and corrective-action timelines.'],
    ['Alarm connections', '~300*', 'alarm-linked residences and businesses in a 1991 historical profile', 'Ask for current monitored-site figures, response coverage, and service dates.'],
  ]
  return <section className="comparison-section"><div className="comparison-heading"><div><Eyebrow>Compare the operating evidence</Eyebrow><h2>Look beyond the rate.</h2></div><p>Soliman’s site does not publish competitor benchmarks. These source-attributed figures and prompts make proposals easier to compare without inventing peer statistics.</p></div><div className="comparison-chart"><div className="comparison-chart-head"><span aria-hidden="true"></span><span>Measure</span><span>Soliman published profile</span><span>Ask another provider</span></div>{metrics.map(([measure, value, detail, prompt], index) => <article className="comparison-row" key={measure}><span className="comparison-index">0{index + 1}</span><h3 className="comparison-measure">{measure}</h3><div className="comparison-evidence"><strong>{value}</strong><span>{detail}</span></div><p><small>Compare on:</small>{prompt}</p></article>)}</div><p className="comparison-footnote">*Historical 1991 figure. All company figures are reproduced as stated on its public website, not independently audited or necessarily current.</p></section>
}

function ClientsPage({ navigate }) {
  const [sectorFilter, setSectorFilter] = useState('All sectors')
  const [search, setSearch] = useState('')
  const [selectedName, setSelectedName] = useState('Embassy of the Republic of Turkey')
  const [stripPaused, setStripPaused] = useState(false)
  const filters = ['All sectors', ...sectors.map(([sector]) => sector)]
  const normalizedSearch = search.trim().toLowerCase()
  const visibleSectors = sectors.filter(([sector, names]) => {
    const matchesFilter = sectorFilter === 'All sectors' || sector === sectorFilter
    const matchesSearch = !normalizedSearch || sector.toLowerCase().includes(normalizedSearch) || names.some((name) => name.toLowerCase().includes(normalizedSearch))
    return matchesFilter && matchesSearch
  })
  const allClients = sectors.flatMap(([sector, names]) => names.map((name) => ({ name, sector })))
  const selectedClient = allClients.find(({ name }) => name === selectedName) || allClients[0]
  const logoByClient = {
    'Bank of the Philippine Islands': '/clients/bpi.jpg',
    Convergys: '/clients/convergys.png',
    'Standard Chartered': '/clients/standard-chartered.png',
    Unilever: '/clients/unilever.png',
    'Coca-Cola': '/clients/coca-cola.png',
    'The World Bank': '/clients/world-bank.png',
    HSBC: '/clients/hsbc.png',
    'Del Monte Philippines, Inc.': '/clients/del-monte.png',
  }
  const filteredClients = visibleSectors.flatMap(([sector, names]) => names
    .filter((name) => !normalizedSearch || sector.toLowerCase().includes(normalizedSearch) || name.toLowerCase().includes(normalizedSearch))
    .map((name) => ({ name, sector })))
  const filteredClientNames = filteredClients.map(({ name }) => name).join('|')
  const selectedIndex = filteredClients.findIndex(({ name }) => name === selectedClient.name)
  useEffect(() => {
    if (filteredClients.length && !filteredClientNames.split('|').includes(selectedName)) {
      setSelectedName(filteredClients[0].name)
    }
  }, [filteredClientNames, selectedName])
  function moveSelection(direction) {
    if (!filteredClients.length) return
    const currentIndex = Math.max(0, selectedIndex)
    const nextIndex = (currentIndex + direction + filteredClients.length) % filteredClients.length
    setSelectedName(filteredClients[nextIndex].name)
    setStripPaused(true)
  }
  return <div className="source-page"><PageBanner index="03 / CLIENTS" eyebrow="Sectors served" title="Trusted across" emphasis="industries." copy="Soliman Security’s public client page lists organizations across diplomacy, finance, communications, infrastructure, residential communities, education, and manufacturing." action="Discuss your requirements" onAction={() => navigate('client_intake')} />
    <section className="client-museum" aria-labelledby="client-museum-title"><div className="museum-heading"><div><Eyebrow>Soliman / Client archive</Eyebrow><h2 id="client-museum-title">A record of trust.</h2></div><p>Organizations named in Soliman Security’s public client directory. Select a name to view its archive label.</p></div>
      <div className="museum-overview"><span className="museum-total">{allClients.length}</span><div><strong>publicly listed organizations</strong><small>Across {sectors.length} sectors · client page references, not confirmation of current contracts</small></div><button className="museum-view-all" onClick={() => { setSectorFilter('All sectors'); setSearch('') }}>View complete archive <ArrowDownRight size={15} /></button></div>
      <div className="museum-feature" key={selectedClient.name} aria-live="polite"><div className="museum-feature-label"><Eyebrow index="CURRENT EXHIBIT">Selected organization</Eyebrow><span>{String(allClients.findIndex(({ name }) => name === selectedClient.name) + 1).padStart(2, '0')} / {allClients.length}</span></div><div className={`museum-feature-mark ${logoByClient[selectedClient.name] ? 'has-logo' : ''}`}>{logoByClient[selectedClient.name] ? <img src={logoByClient[selectedClient.name]} alt={`${selectedClient.name} logo`} /> : <span>{selectedClient.name.split(/\s+/).slice(0, 3).map((word) => word[0]).join('').toUpperCase()}</span>}</div><div className="museum-feature-copy"><span>{selectedClient.sector} · SOURCE DIRECTORY / {selectedIndex + 1}</span><h3>{selectedClient.name}</h3><p>This organization is named on Soliman Security’s public client page under {selectedClient.sector.toLowerCase()}. The directory does not specify engagement dates or confirm that the relationship is current.</p><a href="https://www.soliman-security.com/clients.html" target="_blank" rel="noreferrer">View source directory <ArrowUpRight size={12} /></a></div><Landmark size={20} className="museum-feature-icon" /></div>
      <div className="museum-controls"><label className="directory-search"><Search size={16} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find an organization or sector" aria-label="Search client archive" /></label><span className="directory-count">Showing {filteredClients.length} of {allClients.length}</span></div>
      <div className="museum-filters" role="group" aria-label="Filter client archive by sector">{filters.map((filter) => <button type="button" key={filter} className={sectorFilter === filter ? 'is-active' : ''} aria-pressed={sectorFilter === filter} onClick={() => setSectorFilter(filter)}>{filter}</button>)}</div>
      <div className="museum-strip-controls"><span>CLIENT REGISTER <i /> {filteredClients.length} ENTRIES</span><div><button type="button" aria-label="Previous client" onClick={() => moveSelection(-1)}><ArrowLeft size={14} /></button><button type="button" aria-label={stripPaused ? 'Resume client strip' : 'Pause client strip'} onClick={() => setStripPaused((paused) => !paused)}>{stripPaused ? <Play size={13} /> : <Pause size={13} />}</button><button type="button" aria-label="Next client" onClick={() => moveSelection(1)}><ArrowRight size={14} /></button></div></div>
      <div className={`museum-strip-viewport ${stripPaused ? 'is-paused' : ''} ${filteredClients.length < 2 ? 'is-static' : ''}`} key={`${sectorFilter}:${normalizedSearch}`} aria-label="Publicly listed client archive">
        <div className="museum-strip-track">{[0, 1].map((copyIndex) => <div className="museum-strip-copy" key={copyIndex} aria-hidden={copyIndex === 1} inert={copyIndex === 1 ? '' : undefined}>{filteredClients.map(({ name, sector }, index) => <button type="button" className={`museum-tile ${selectedClient.name === name ? 'is-selected' : ''}`} style={{ '--tile-index': Math.min(index, 14) }} key={`${copyIndex}-${name}`} onFocus={() => { setSelectedName(name); setStripPaused(true) }} onClick={() => { setSelectedName(name); setStripPaused(true) }} aria-pressed={selectedClient.name === name} aria-label={`${name}, ${sector}`} tabIndex={copyIndex === 1 ? -1 : undefined}><span className="museum-tile-number">{String(index + 1).padStart(2, '0')}</span><span className={`museum-wordmark ${logoByClient[name] ? 'has-logo' : ''}`}>{logoByClient[name] ? <img src={logoByClient[name]} alt="" loading="lazy" /> : name}</span><span className="museum-tile-sector">{sector}</span></button>)}</div>)}</div>
      </div>
      <p className="museum-note">Publicly named client references are presented as found on the company website, with minor spelling normalization. Listing does not imply a current contract or endorsement.</p>
    </section>
    <section className="source-cta"><Eyebrow>For organizations</Eyebrow><h2>Start with a site conversation.</h2><button className="button-primary" onClick={() => navigate('client_intake')}>Request a consultation <ArrowRight size={15} /></button></section>
  </div>
}

function ImpactPage({ navigate }) {
  const metrics = [
    { value: 1957, display: 'year', label: 'Year established', source: 'Company history' },
    { value: 1000, display: 'guards', label: 'Trained, licensed guards', source: 'Published company profile' },
    { value: 24, display: 'hours', label: 'Office operation described', source: 'Published services profile' },
    { value: null, display: 'Daily', label: 'Routine guard inspection cadence', source: 'Published services profile' },
    { value: null, display: 'Weekly', label: 'Service performance assessment', source: 'Published services profile' },
    { value: 2, display: 'coverage', label: 'Liability coverage per occurrence stated', source: 'Historical published services page' },
  ]
  const sectorCounts = sectors.map(([name, clients]) => ({ name, count: clients.length })).sort((a, b) => b.count - a.count)
  const maxCount = Math.max(...sectorCounts.map(({ count }) => count))
  return <div className="source-page"><PageBanner index="07 / IMPACT" eyebrow="Published figures · Service record" title="Measure the" emphasis="commitment." copy="A focused view of the operating figures Soliman publishes, with dates and context kept visible so proposals can be compared fairly." action="Explore client archive" onAction={() => navigate('clients')} />
    <section className="impact-metrics"><div className="impact-intro"><Eyebrow>At a glance</Eyebrow><h2>Numbers with<br />their source attached.</h2><p>These are company-published statements, not an independently audited performance ranking. Confirm present-day figures and contract terms directly.</p></div><div className="impact-grid">{metrics.map((metric, index) => <article className="impact-metric" key={metric.label}><span className="impact-index">0{index + 1}</span><strong>{metric.value === null ? metric.display : <CalibratingValue target={metric.value} format={metric.display} />}</strong><h3>{metric.label}</h3><small>{metric.source}</small></article>)}</div></section>
    <section className="sector-chart-section"><div className="source-section-heading"><div><Eyebrow>Client directory / by sector</Eyebrow><h2>Public references,<br />across industries.</h2></div><p>Counts are calculated from names listed on Soliman’s public client page. They describe the directory, not active contracts, security outcomes, or market share.</p></div><div className="sector-chart">{sectorCounts.map(({ name, count }, index) => <div className="sector-chart-row" key={name}><span className="sector-chart-index">0{index + 1}</span><span className="sector-chart-name">{name}</span><span className="sector-chart-track"><span style={{ '--bar-size': `${(count / maxCount) * 100}%` }} /></span><strong>{count}</strong></div>)}</div><p className="comparison-footnote">Directory contains {sectorCounts.reduce((total, sector) => total + sector.count, 0)} names across {sectorCounts.length} categories, as transcribed from the source site. Several entries and figures may be historical.</p></section>
    <section className="impact-timeline"><Eyebrow>Milestones cited in company history</Eyebrow><div className="impact-timeline-list"><article><strong>1957</strong><span>Business established by Macario J. Soliman.</span></article><article><strong>1987</strong><span>Teresita L. Soliman assumes ownership and management.</span></article><article><strong>1992</strong><span>Agency incorporates as Soliman Security Services, Inc.</span></article><article><strong>1993 · 1997</strong><span>Company history cites two PNP “Best Security Agency” awards.</span></article></div></section>
  </div>
}

function CalibratingValue({ target, format }) {
  const [value, setValue] = useState(0)
  const [settled, setSettled] = useState(false)
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setValue(target)
      setSettled(true)
      return undefined
    }
    let frame = 0
    const started = performance.now()
    const duration = 1150
    function calibrate(now) {
      const progress = Math.min((now - started) / duration, 1)
      const easing = 1 - ((1 - progress) ** 4)
      setValue(progress === 1 ? target : Math.floor(target * easing))
      if (progress < 1) frame = requestAnimationFrame(calibrate)
      else setSettled(true)
    }
    frame = requestAnimationFrame(calibrate)
    return () => cancelAnimationFrame(frame)
  }, [target])

  let output
  if (format === 'year') output = String(value).padStart(4, '0')
  else if (format === 'guards') output = `~${value.toLocaleString('en-US')}`
  else if (format === 'hours') output = `${value} hours`
  else output = `₱${value}M`
  return <span className={`calibrating-value ${settled ? 'is-settled' : 'is-calibrating'}`} aria-label={format === 'year' ? `${target}` : format === 'guards' ? `approximately ${target.toLocaleString('en-US')}` : format === 'hours' ? `${target} hours` : `2 million pesos`}>{output}</span>
}

function EmploymentPage({ navigate }) {
  const [roleFilter, setRoleFilter] = useState('All roles')
  const opportunities = [
    { type: 'Security', title: 'Security Guard · Metro Manila', detail: 'The archived listing describes pay at NCR minimum wage plus a ₱1,500 monthly allowance. It asks for at least second-year college education, three years of industrial-security experience, and a valid security license.' },
    { type: 'Security', title: 'Security Guard · Multinational company', detail: 'The archived listing states ₱520 per eight-hour shift plus benefits, and requests a four-year degree, fluent English, and three years of industrial-security experience.' },
    { type: 'Office', title: 'Receptionist', detail: 'The archived listing states ₱15,000 monthly and asks for a four-year degree and fluent English.' },
    { type: 'Office', title: 'Accounting Clerk', detail: 'The listing requests a BSBA or BSC degree majoring in accountancy and computer literacy; experience may be considered either way.' },
    { type: 'Office', title: 'Researcher', detail: 'The archived listing states ₱750 per eight-hour shift plus benefits. It describes a related four-year degree, strong English and research skills, computer literacy, and a permanent 10 p.m.–6 a.m. shift.' },
  ]
  const visibleOpportunities = opportunities.filter((role) => roleFilter === 'All roles' || role.type === roleFilter)
  const screening = ['Written qualifying examination', 'NBI, C-2 / PC-NIP, and barangay clearances', 'Background review of personal, marital, residence, physical, education, character-reference, employment, military, and criminal history, including neighborhood investigation', 'Neuro-psychiatric and medical examinations', 'Final interview and briefing orientation']
  const deployment = ['Site survey and preparation of security guidelines', 'Review of client policies, rules, and post orders', 'Client review of site recommendations', 'Pre-posting seminar and officer orientation', 'After posting: post-order checks, 24-hour inspections, reserve and reaction-force readiness, equipment maintenance, performance audits, shift formations, corrective seminars, and client-agency meetings']
  return <div className="source-page"><PageBanner index="04 / EMPLOYMENT" eyebrow="Careers & recruitment" title="A disciplined start." emphasis="A supported career." copy="Soliman’s published recruitment process combines screening, background checks, medical review, orientation, and a structured transition to assignment." action="Begin a confidential application" onAction={() => navigate('career_intake')} />
    <section className="hiring-process"><div className="source-section-intro"><Eyebrow>Recruitment process</Eyebrow><h2>From application<br />to assignment.</h2><p>Process details adapted from the company’s public employment page.</p></div><div className="process-columns"><ProcessList title="Applicant screening" items={screening} /><ProcessList title="Before and after deployment" items={deployment} /></div></section>
    <section className="opportunity-section"><div className="source-section-heading"><div><Eyebrow>Published career opportunities</Eyebrow><h2>Roles listed by the company.</h2></div><p>These vacancies and compensation figures are archived website information, not confirmation that a role is currently open. Contact the company to verify current requirements and terms.</p></div><div className="role-filters" role="group" aria-label="Filter published roles">{['All roles', 'Security', 'Office'].map((filter) => <button type="button" key={filter} className={roleFilter === filter ? 'is-active' : ''} aria-pressed={roleFilter === filter} onClick={() => setRoleFilter(filter)}>{filter}</button>)}</div><div className="opportunity-list">{visibleOpportunities.map((role, index) => <article className="opportunity-row" key={role.title}><span className="capability-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{role.title}</h3><p>{role.detail}</p></div></article>)}</div><button className="button-primary" onClick={() => navigate('career_intake')}>Introduce yourself <ArrowRight size={15} /></button></section>
    <section className="employment-gallery"><Eyebrow>Recruitment & training</Eyebrow><h2>Preparation before the post.</h2><p className="image-disclaimer">Representative editorial photography, not images of Soliman personnel or facilities.</p><div className="employment-photo-grid"><PhotoTile src={editorialImages.seminar} alternate={editorialImages.seminarAlternate} label="Professional development" /><PhotoTile src={editorialImages.assessment} alternate={editorialImages.assessmentAlternate} label="Assessment & preparation" /><PhotoTile src={editorialImages.training} alternate={editorialImages.trainingAlternate} label="Team training" /></div></section>
  </div>
}
function ProcessList({ title, items }) { return <div className="process-list"><h3>{title}</h3><ol>{items.map((item) => <li key={item}>{item}</li>)}</ol></div> }
function PhotoTile({ src, alternate, label }) { return <figure className="employment-photo"><ImageSwap src={src} alternate={alternate} alt={`Representative editorial image: ${label}`} /><figcaption>{label}</figcaption></figure> }

function ImageSwap({ src, alternate, alt, className = '', loading = 'lazy' }) {
  return <div className={`image-swap ${className}`}><img className="image-swap-primary" src={src} alt={alt} loading={loading} /><img className="image-swap-alternate" src={alternate} alt="" aria-hidden="true" loading="lazy" /></div>
}

function NewsPage() {
  const [topic, setTopic] = useState('All updates')
  const stories = [
    { index: '01', filter: 'Crime archive', category: 'Criminal statistics · Archived', title: 'Philippine crime statistics', date: 'Updated August 3, 2015', summary: 'A historical news clipping discusses reported crime trends and contrasts national figures with claims about Metro Manila. Its numbers describe 2014–2015 and are presented here only as an archive, not current risk intelligence.' },
    { index: '02', filter: 'Cyber security', category: 'Cyber security · Practical guidance', title: 'Protect information and accounts', date: 'Security awareness archive', summary: 'The source page gathers basic guidance on strong unique passwords, multi-factor authentication, phishing awareness, safer connections, device updates, antivirus, and minimizing stored sensitive information.' },
    { index: '03', filter: 'Data protection', category: 'Data protection · Higher education', title: 'Lessons from data-breach reporting', date: 'Security awareness archive', summary: 'A historical article reviews social engineering, unpatched systems, exposed personal information, delayed breach discovery, and practical steps for users and institutions to reduce risk.' },
  ]
  const topics = ['All updates', ...stories.map((story) => story.filter)]
  const visibleStories = stories.filter((story) => topic === 'All updates' || story.filter === topic)
  return <div className="source-page"><PageBanner index="05 / NEWS" eyebrow="Briefings & archive" title="Security is a" emphasis="continuing conversation." copy="A concise guide to the public news and awareness material published on Soliman Security’s website. Historical reports remain clearly dated and should not be treated as current statistics." />
    <section className="news-archive"><div className="archive-note"><LockKeyhole size={15} /><p>Archive note: the source site includes older external news and cyber-awareness material. This page summarizes its topics; follow the source link for the original context.</p><a href="https://www.soliman-security.com/news.html" target="_blank" rel="noreferrer">Original news page <ArrowUpRight size={13} /></a></div>
      <div className="news-content"><div className="news-filters" role="group" aria-label="Filter news topics">{topics.map((item) => <button type="button" key={item} className={topic === item ? 'is-active' : ''} aria-pressed={topic === item} onClick={() => setTopic(item)}>{item}</button>)}</div><div className="news-list" aria-live="polite">{visibleStories.map((story) => <article className="news-entry" key={story.index}><span className="news-index">{story.index}</span><div><Eyebrow>{story.category}</Eyebrow><h2>{story.title}</h2><time>{story.date}</time><p>{story.summary}</p></div><ArrowUpRight className="news-arrow" size={18} /></article>)}</div></div>
      <aside className="news-principles"><Eyebrow>Everyday safeguards</Eyebrow><h2>Small practices.<br />Meaningful protection.</h2><ul><li>Use unique, hard-to-guess passwords and multi-factor authentication.</li><li>Verify unexpected links and requests before sharing information.</li><li>Keep operating systems and applications patched.</li><li>Use encrypted connections for sensitive activity and minimize stored personal data.</li></ul></aside>
    </section>
  </div>
}

function ContactPage({ navigate }) {
  return <div className="source-page"><PageBanner index="06 / CONTACT" eyebrow="Soliman Corporate Center" title="A direct line to" emphasis="Makati." copy="For security services, employment enquiries, and company information, contact Soliman Security Services, Inc. at its published corporate office." action="Start a service enquiry" onAction={() => navigate('client_intake')} />
    <section className="office-map-section"><div className="office-map-heading"><div><Eyebrow index="SOLIMAN CORPORATE CENTER">Makati · Philippines</Eyebrow><h2>Find the office.</h2></div><a href="https://maps.google.com/?q=2182+Chino+Roces+Avenue+Makati+City+Philippines" target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={14} /></a></div><div className="office-map-frame"><div className="map-toolbar"><span className="map-live-mark"><i /> LIVE MAP</span><span>MAKATI · METRO MANILA</span><a href="https://maps.google.com/?q=2182+Chino+Roces+Avenue+Makati+City+Philippines" target="_blank" rel="noreferrer">OPEN IN MAPS <ArrowUpRight size={12} /></a></div><div className="map-canvas"><iframe title="Interactive map to Soliman Corporate Center in Makati City" src="https://maps.google.com/maps?q=2182%20Chino%20Roces%20Avenue%2C%20Makati%20City%2C%20Philippines&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><span className="map-target" aria-hidden="true"><i /><b>SOLIMAN CORPORATE CENTER</b></span><span className="map-coordinate map-coordinate-north">MAKATI CITY / PH</span><span className="map-coordinate map-coordinate-south">CHINO ROCES AVENUE</span></div><div className="map-caption"><MapPin size={15} /><span>2182 Chino Roces Avenue, Makati City, Philippines</span><span>Corporate office</span></div></div></section>
    <section className="contact-layout"><div className="contact-details"><Eyebrow>Corporate office</Eyebrow><h2>Soliman Corporate Center</h2><a className="contact-line contact-address" href="https://maps.google.com/?q=2182+Chino+Roces+Avenue+Makati+City+Philippines" target="_blank" rel="noreferrer"><MapPin size={18} /><span>2182 Chino Roces Avenue<br />Makati City, Philippines</span><ArrowUpRight size={14} /></a><a className="contact-line" href="tel:+6328928881"><Phone size={17} /><span>+63 2 892 8881 <small>Local 705</small></span></a><a className="contact-line" href="tel:+6328138226"><Phone size={17} /><span>+63 2 813 8226</span></a><a className="contact-line" href="tel:+6328138227"><Phone size={17} /><span>+63 2 813 8227</span></a><a className="contact-line" href="mailto:info@asisbiz.com"><Mail size={17} /><span>info@asisbiz.com</span><ArrowUpRight size={14} /></a><div className="contact-line"><Clock3 size={17} /><span>24-hour office operation stated on the source site<small>Please confirm current office availability by phone.</small></span></div><div className="contact-copy-tools"><CopyButton label="address" value="2182 Chino Roces Avenue, Makati City, Philippines" /><CopyButton label="main phone" value="+63 2 892 8881" /><CopyButton label="email" value="info@asisbiz.com" /></div></div>
      <div className="contact-secondary"><Eyebrow>Published fax numbers</Eyebrow><div className="fax-line"><span>Makati / Manila</span><strong>+63 2 817 0306</strong></div><div className="fax-line"><span>Alabang / Manila</span><strong>+63 2 842 8485</strong></div><div className="contact-caveat">Contact details are transcribed from the company website and may change. Call to confirm before sending sensitive material.</div><button className="button-primary" onClick={() => navigate('client_intake')}>Prepare a confidential enquiry <ArrowRight size={15} /></button></div>
    </section>
  </div>
}
function CopyButton({ label, value }) {
  const [status, setStatus] = useState('')
  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value)
      setStatus('Copied')
    } catch {
      setStatus('Copy unavailable')
    }
    window.setTimeout(() => setStatus(''), 1400)
  }
  return <button type="button" className="copy-button" onClick={copyValue} aria-label={`Copy ${label}`}><Copy size={13} />{status || `Copy ${label}`}</button>
}

function ClientIntake({ step, setStep, form, update, error, next, sent, transmit, navigate }) {
  const labels = ['Service', 'Engagement', 'Contact', 'Review']
  if (sent) return <Confirmation title="Your enquiry is prepared." copy="Your details are ready for Soliman Security Services, Inc. Contact the Makati office directly to complete your request. This demonstration does not transmit or store submissions." reference="CLIENT ENQUIRY / READY" action="Return to concierge" onAction={() => navigate('lobby')} />
  const fields = [['name', 'Name', 'Full name', 'text', true], ['organization', 'Organization', 'Company or site name', 'text', false], ['phone', 'Direct phone', '+63', 'tel', false], ['email', 'Email address', 'you@company.com', 'email', true]]
  return <IntakeLayout step={step} labels={labels} title="A service enquiry." subtitle="Tell us what you need. The summary helps you make a direct, informed enquiry to the Makati office.">
    {step === 0 && <StepBlock number="01" eyebrow="Service requirement" title="What can we assist with?" description="Select the service area closest to your requirement."><ChoiceList label="Service area" options={serviceDomains} value={form.scope} onChange={(value) => update('scope', value)} /></StepBlock>}
    {step === 1 && <StepBlock number="02" eyebrow="Engagement" title="Where are you in the process?" description="This helps frame the first conversation."><ChoiceList label="Engagement preference" options={servicePostures} value={form.posture} onChange={(value) => update('posture', value)} /></StepBlock>}
    {step === 2 && <StepBlock number="03" eyebrow="Direct contact" title="How may the office reach you?" description="Only name and email are required for this enquiry summary."><div className="field-grid">{fields.map(([key, label, placeholder, type, required]) => <label className="form-field" key={key}><span>{label}{required && <i> *</i>}</span><input type={type} value={form[key]} placeholder={placeholder} required={required} onChange={(event) => update(key, event.target.value)} /></label>)}</div></StepBlock>}
    {step === 3 && <StepBlock number="04" eyebrow="Enquiry summary" title="Review before contacting us." description="This site does not send form data to the source company. Use the provided contact details to complete your enquiry."><Receipt rows={[["Service", form.scope], ["Engagement", form.posture], ["Name", form.name], ["Organization", form.organization], ["Phone", form.phone], ["Email", form.email]]} /><div className="privacy-note"><LockKeyhole size={14} />No form details are uploaded or stored by this demo.</div></StepBlock>}
    {error && <p className="form-error" role="alert">{error}</p>}
    {step < 3 ? <IntakeActions step={step} setStep={setStep} next={next} total={4} /> : <div className="intake-actions"><button className="button-quiet" onClick={() => setStep(2)}><ArrowLeft size={15} />Edit details</button><button className="button-primary" onClick={transmit}>Prepare enquiry <ArrowRight size={15} /></button></div>}
  </IntakeLayout>
}

function CareerIntake({ step, setStep, form, update, error, next, sent, transmit, suggestedRole, fileInput }) {
  const labels = ['Role', 'Credentials', 'CV', 'Review']
  function toggleCredential(item) { update('credentials', form.credentials.includes(item) ? form.credentials.filter((entry) => entry !== item) : [...form.credentials, item]) }
  function receiveFile(file) {
    if (!file) return
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) return update('resume', null)
    if (file.size > 10 * 1024 * 1024) return update('resume', null)
    update('resume', file)
  }
  if (sent) return <Confirmation title="Your introduction is ready." copy="Your role and experience summary is prepared. Contact the HRD office directly to confirm current vacancies and submit your application. This demonstration does not transmit or store your CV." reference="EMPLOYMENT / READY" />
  return <IntakeLayout step={step} labels={labels} title="Introduce yourself." subtitle="Review the role and preparation process, then assemble a concise application summary.">
    {step === 0 && <StepBlock number="01" eyebrow="Published role categories" title="Which opportunity interests you?" description="Vacancies on the source site may be archived; confirm availability with HRD."><ChoiceList label="Position" options={positions} value={form.position} onChange={(value) => update('position', value)} /></StepBlock>}
    {step === 1 && <StepBlock number="02" eyebrow="Qualifications & clearances" title="Select credentials you hold." description="This helps you prepare for the company’s published screening process."><div className="credential-grid">{credentials.map((item) => <button className={`credential-pill ${form.credentials.includes(item) ? 'is-selected' : ''}`} key={item} aria-pressed={form.credentials.includes(item)} onClick={() => toggleCredential(item)}><span className="credential-check">{form.credentials.includes(item) && <Check size={13} />}</span>{item}</button>)}</div><p className="credential-note">The employment page also lists written examinations, background investigation, medical review, interview, and orientation.</p></StepBlock>}
    {step === 2 && <StepBlock number="03" eyebrow="Curriculum vitae" title="Attach a PDF résumé." description="PDF only, up to 10 MB. The file remains in this browser demo and is not uploaded."><input ref={fileInput} className="visually-hidden" type="file" accept="application/pdf,.pdf" onChange={(event) => receiveFile(event.target.files?.[0])} aria-label="Attach curriculum vitae PDF" /><button className={`upload-zone ${form.resume ? 'has-file' : ''}`} onClick={() => fileInput.current?.click()} onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); receiveFile(event.dataTransfer.files?.[0]) }}><span className="upload-icon">{form.resume ? <Check size={21} /> : <FileUp size={21} />}</span><strong>{form.resume ? form.resume.name : 'Attach Curriculum Vitae'}</strong><span>{form.resume ? 'PDF received · Select to replace' : 'PDF format · Maximum file size 10 MB'}</span></button></StepBlock>}
    {step === 3 && <StepBlock number="04" eyebrow="Application summary" title="Ready for a direct introduction." description="A suggested role is based on your selection. Confirm current hiring needs with HRD."><Receipt rows={[["Position", form.position], ["Credentials", form.credentials.join(', ') || 'To be confirmed'], ["Curriculum vitae", form.resume?.name]]} /><div className="role-match"><span className="match-label">SELECTED OPPORTUNITY</span><strong>{suggestedRole}</strong><small>From the company’s published employment categories; availability is not confirmed.</small></div></StepBlock>}
    {error && <p className="form-error" role="alert">{error}</p>}
    {step < 3 ? <IntakeActions step={step} setStep={setStep} next={next} total={4} /> : <div className="intake-actions"><button className="button-quiet" onClick={() => setStep(2)}><ArrowLeft size={15} />Edit details</button><button className="button-primary" onClick={transmit}>Prepare application <ArrowRight size={15} /></button></div>}
  </IntakeLayout>
}

function ProgressHeader({ step, labels, title, subtitle }) {
  return <div className="intake-heading"><Eyebrow index="SOLIMAN / PRIVATE OFFICE">Guided intake</Eyebrow><h1 id="focused-dialog-title">{title}</h1><p>{subtitle}</p><div className="progress-track" aria-label={`Step ${step + 1} of ${labels.length}`}>{labels.map((label, index) => <div className={`progress-item ${index < step ? 'is-complete' : ''} ${index === step ? 'is-current' : ''}`} key={label}><span className="progress-dot">{index < step ? <Check size={12} /> : `0${index + 1}`}</span><span className="progress-label">{label}</span></div>)}</div></div>
}
function IntakeLayout({ step, labels, title, subtitle, children }) { return <div className="intake-page"><div className="intake-layout"><ProgressHeader step={step} labels={labels} title={title} subtitle={subtitle} /><section className="intake-panel" aria-live="polite">{children}</section></div></div> }
function StepBlock({ number, eyebrow, title, description, children }) { return <div className="step-content"><Eyebrow index={number}>{eyebrow}</Eyebrow><h2>{title}</h2><p className="step-description">{description}</p>{children}</div> }
function ChoiceList({ options, value, onChange, label }) { return <div className="choice-list" role="radiogroup" aria-label={label}>{options.map((option) => <button className={`choice-row ${value === option ? 'is-selected' : ''}`} role="radio" aria-checked={value === option} key={option} onClick={() => onChange(option)}><span>{option}</span><span className="choice-indicator">{value === option && <Check size={14} />}</span></button>)}</div> }
function Receipt({ rows }) { return <div className="receipt-card">{rows.map(([label, value]) => <div className="receipt-row" key={label}><span>{label}</span><strong>{value || 'Not provided'}</strong></div>)}</div> }
function IntakeActions({ step, setStep, next, total }) { return <div className="intake-actions">{step > 0 && <button className="button-quiet" onClick={() => setStep((current) => Math.max(0, current - 1))}><ArrowLeft size={15} />Previous</button>}<button className="button-primary" onClick={next}>Continue <ArrowRight size={15} /></button></div> }
function Confirmation({ title, copy, reference, action, onAction }) { return <section className="confirmation-page"><div className="confirmation-mark"><Check size={23} /></div><Eyebrow>{reference}</Eyebrow><h1>{title}</h1><p>{copy}</p><div className="confirmation-rule" /><span className="confirmation-small">SOLIMAN SECURITY SERVICES, INC. · MAKATI</span>{action && <button className="text-action" onClick={onAction}>{action}<ArrowRight size={15} /></button>}</section> }
