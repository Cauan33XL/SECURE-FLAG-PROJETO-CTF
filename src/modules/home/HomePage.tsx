import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ReturnToSelector } from '../../components/shared/ui/ReturnToSelector'
import './styles/Home.css'

export function HomePage() {
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
      
      // Parallax effect for hero
      const heroShape = document.querySelector('.hero-background-shape') as HTMLElement
      if (heroShape && window.scrollY < 800) {
        heroShape.style.transform = `translateY(${window.scrollY * 0.3}px)`
      }
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId === '#') return
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerHeight = document.getElementById('header')?.offsetHeight || 0
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      setMenuOpen(false)
    }
  }

  return (
    <div className={`home-module-wrapper ${isDarkMode ? 'dark-theme' : ''}`}>
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
              <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Home</a></li>
              <li><a href="#ofertas" onClick={(e) => handleNavClick(e, '#ofertas')}>Ofertas</a></li>
              <li><a href="#como-solicitar" onClick={(e) => handleNavClick(e, '#como-solicitar')}>Como Solicitar</a></li>
              <li><a href="#lideres" onClick={(e) => handleNavClick(e, '#lideres')}>Nossos Líderes</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link to="/home/team" className="btn">Crédito</Link>
          </nav>
        </div>
        <ReturnToSelector />
      </header>

      <main>
        <section id="hero">
          <div className="hero-background-shape" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
              <path fill="#C8E6C9" d="M0,400.5C0,621,241,801,472,801c231,0,472-180,472-400.5S703,0,472,0C241,0,0,180,0,400.5Z" transform="translate(480 300) rotate(-15) scale(1.2)" />
            </svg>
          </div>
          <div className="container hero-content">
            <div className="hero-text fade-in">
              <h1>Se tem como <span style={{ color: 'var(--primary-green)' }}>pagar</span>, <br />podemos te emprestar!</h1>
              <p className="subtitle">Estamos aqui para te ajudar com empréstimos para as diversas ocasiões. SecureFlag&#123;ToNaRedeDoYaldabaothBank&#125; </p>
              <Link to="/home/team" className="btn">Solicite o seu Empréstimo</Link>
              <div className="sr-only">SecureFlag&#123;ToNaRedeDoYaldabaothBank&#125; </div>
            </div>
            <div className="hero-illustration-wrapper fade-in" style={{ '--delay': '0.2s' } as any}>
              <img src="/assets/home/velho.png" alt="Homem trabalhando em um laptop" />
            </div>
          </div>
        </section>

        <section id="ofertas">
          <div className="container offers-main-layout">
            <div className="offers-cards-stack">
              <div className="offer-card full-width fade-in" style={{ '--delay': '0s' } as any}>
                <div className="top-row">
                  <div className="icon-wrapper"><i className="fa-solid fa-dollar-sign" aria-hidden="true"></i></div>
                  <div className="rate">28.32%</div>
                </div>
                <div className="offer-details">
                  <h3>Crédito Pessoal</h3>
                  <p>Pague suas dívidas ou financie uma viagem.<br />em até 30 meses</p>
                </div>
              </div>
              <div className="offer-card fade-in" style={{ '--delay': '0.1s' } as any}>
                <div className="top-row">
                  <div className="icon-wrapper"><i className="fa-solid fa-house-chimney" aria-hidden="true"></i></div>
                  <div className="rate">17.4%</div>
                </div>
                <div className="offer-details">
                  <h3>Crédito Residencial</h3>
                  <p>Aquisição, construção, novos ou usados.<br />em até 80 anos</p>
                </div>
              </div>
              <div className="offer-card fade-in" style={{ '--delay': '0.2s' } as any}>
                <div className="top-row">
                  <div className="icon-wrapper"><i className="fa-solid fa-hand-holding-dollar" aria-hidden="true"></i></div>
                  <div className="rate">37.5%</div>
                </div>
                <div className="offer-details">
                  <h3>Crédito Rápido</h3>
                  <p>Empréstimo rápido, na sua conta em uma hora.<br />em até 15 meses</p>
                </div>
              </div>
            </div>
            <div className="offers-description fade-in" style={{ '--delay': '0.3s' } as any}>
              <h2>As melhores ofertas e condições</h2>
              <p>Não perca tempo com a concorrência! Temos as taxas mais rentáveis para crédito pessoal e empresarial.</p>
              <p>Ajude-nos a te ajudar a nos ajudar!</p>
              <Link to="/home/team" className="btn">Crédito Rápido</Link>
            </div>
          </div>
        </section>

        <section id="especialistas">
          <div className="container specialists-content">
            <div className="specialists-text fade-in">
              <h2>Nossos especialistas entram em contato e resolvem tudo pra você.</h2>
              <p>Estamos aqui para ajudá-lo e lhe proporcionar as melhores experiências.</p>
              <p>Afinal, com a gente o seu dinheiro estará bem guardado!</p>
              <Link to="/home/team" className="btn">Quero Crédito</Link>
            </div>
            <div className="specialists-image fade-in" style={{ '--delay': '0.2s' } as any}>
              <img src="/assets/home/especialista.png" alt="Jovem usando laptop" />
            </div>
          </div>
        </section>

        <section id="como-solicitar">
          <div className="container">
            <h2 className="fade-in">Rápido e fácil,<br />veja como solicitar</h2>
            <p className="fade-in">Basta entrar em contato com os nossos especialistas e o dinheiro estará na sua conta.</p>
            
            <div className="steps-container">
              <div className="step-card fade-in" style={{ '--delay': '0s' } as any} data-step="01">
                <div className="step-card-content">
                  <h3>Envie um e-mail</h3>
                  <p>Escolha um especialista e envie sua solicitação.</p>
                </div>
              </div>
              <div className="step-card fade-in" style={{ '--delay': '0.1s' } as any} data-step="02">
                <div className="step-card-content">
                  <h3>Analisamos o seu crédito</h3>
                  <p>Seu crédito será avaliado em tempo recorde!</p>
                </div>
              </div>
              <div className="step-card fade-in" style={{ '--delay': '0.2s' } as any} data-step="03">
                <div className="step-card-content">
                  <h3>Dinheiro na conta</h3>
                  <p>Simples assim, agora é só gastar... mas lembra de pagar!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="lideres">
          <div className="container">
            <h2 className="fade-in">Nossos Líderes</h2>
            <p className="fade-in">Os fundadores do Yaldabaoth Ficticious Bank</p>
            <div className="leaders-grid">
              <div className="leader-card fade-in" style={{ '--delay': '0s' } as any}>
                <div className="leader-avatar"><img src="/assets/home/ricardo.png" alt="Ricardo Moreira" /></div>
                <h3>Ricardo Moreira</h3>
                <span>CEO e Co-Founder</span>
              </div>
              <div className="leader-card fade-in" style={{ '--delay': '0.1s' } as any}>
                <div className="leader-avatar"><img src="/assets/home/Bruna.png" alt="Bruna Oliveira" /></div>
                <h3>Bruna Oliveira</h3>
                <span>Co-Founder</span>
              </div>
              <div className="leader-card fade-in" style={{ '--delay': '0.2s' } as any}>
                <div className="leader-avatar"><img src="/assets/home/Caio.png" alt="Caio José" /></div>
                <h3>Caio José</h3>
                <span>Co-Founder</span>
              </div>
              <div className="leader-card fade-in" style={{ '--delay': '0.3s' } as any}>
                <div className="leader-avatar"><img src="/assets/home/Lara.png" alt="Lara Silva" /></div>
                <h3>Lara Silva</h3>
                <span>Co-Founder</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <Link to="/home" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                <img src="/assets/home/logo.png" alt="Yaldabaoth Logo" />
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