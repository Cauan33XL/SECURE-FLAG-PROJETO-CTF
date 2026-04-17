import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ReturnToSelector } from '../../components/shared/ui/ReturnToSelector'
import './styles/Team.css'

const specialists = [
  { name: 'Kaori Ayumi', role: 'Consultora de Crédito', email: 'kaori.ayumi@yaldabaothbank.com', image: '/assets/home/pessoas/kaori.png' },
  { name: 'Lucas Rocha', role: 'Consultor de Crédito', email: 'lucas.rocha@yaldabaothbank.com', image: '/assets/home/pessoas/lucas.png' },
  { name: 'Francisco Neto', role: 'Consultor de Crédito', email: 'francisco.neto@yaldabaothbank.com', image: '/assets/home/pessoas/francisco.png' },
  { name: 'Paulo Almeida', role: 'Consultor de Crédito', email: 'paulo.almeida@yaldabaothbank.com', image: '/assets/home/pessoas/paulo.png' },
  { name: 'Clara Florence', role: 'Consultora de Crédito', email: 'clara.florence@yaldabaothbank.com', image: '/assets/home/pessoas/clara.png' },
  { name: 'Sebastião Santos', role: 'Consultor de Crédito', email: 'sebastiao.santos@yaldabaothbank.com', image: '/assets/home/pessoas/sebastiao.png' },
]

export function TeamPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Theme Management
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // Scroll Effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowScrollBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for Animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement
          const delay = target.style.getPropertyValue('--delay') || '0s'
          target.style.transitionDelay = delay
          target.classList.add('visible')
          observerRef.current?.unobserve(target)
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    document.querySelectorAll('.fade-in').forEach(el => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`team-module-wrapper ${isDarkMode ? 'dark-theme' : ''}`}>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <div className="container navbar">
          <Link to="/home" className="logo">
            <img src="/assets/home/logo.png" alt="Yaldabaoth Logo" />
            <div className="logo-text">
              <strong>YALDABAOTH</strong>
              <span>FICTICIOUS BANK</span>
            </div>
          </Link>
          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/home#ofertas">Ofertas</Link></li>
              <li><Link to="/home#como-solicitar">Como Solicitar</Link></li>
              <li><Link to="/home#lideres">Nossos Líderes</Link></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link to="/home" className="btn">Home</Link>
          </nav>
        </div>
        <ReturnToSelector />
      </header>

      <main>
        <section id="team-hero">
          <div className="container team-hero-content">
            <h1 className="fade-in">Time de Especialistas</h1>
            <p className="fade-in" style={{ '--delay': '0.1s' } as any}>Entre em contato por e-mail e eles retornam com crédito!<br />Equipe focada em resolver seus problemas financeiros!</p>
          </div>
        </section>

        <section id="especialistas">
          <div className="container">
            <div className="team-grid">
              {specialists.map((specialist, index) => (
                <div key={index} className="team-card fade-in" style={{ '--delay': `${index * 0.1}s` } as any}>
                  <div className="team-avatar">
                    <img src={specialist.image} alt={specialist.name} />
                  </div>
                  <div className="team-info">
                    <h3>{specialist.name}</h3>
                    <p>{specialist.role}</p>
                    <div className="team-contact">
                      <a href={`mailto:${specialist.email}`} aria-label={`Enviar e-mail para ${specialist.name}`}>
                        <i className="fas fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Link to="/home" className="logo">
                <img src="/assets/home/img/logo.png" alt="Yaldabaoth Logo" />
                <div className="logo-text">
                  <strong>YALDABAOTH</strong>
                  <span>FICTICIOUS BANK</span>
                </div>
              </Link>
              <div className="footer-social">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>IMPORTANTE</h3>
              <p>Site para fins educativos. O Yaldabaoth Ficticious Bank é uma organização fictícia criada e mantida para fins de treinamentos em Segurança da Informação.</p>
            </div>
            <div className="footer-column">
              <h3>IMPORTANT</h3>
              <p>Website for educational purpose. The Yaldabaoth Ficticious Bank is a fictitious organization used for information security trainings.</p>
            </div>
          </div>
          <div className="copyright">
            Copyright &copy; Yaldabaoth Ficticious Bank. All rights reserved.
          </div>
        </div>
      </footer>

      <button 
        id="scrollTopBtn" 
        className={showScrollBtn ? 'show' : ''} 
        title="Voltar ao topo" 
        aria-label="Voltar ao topo" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  )
}