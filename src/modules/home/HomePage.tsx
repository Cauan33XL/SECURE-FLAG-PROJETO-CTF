import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={isDarkMode ? 'dark-theme' : ''}>
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
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#ofertas">Ofertas</a></li>
              <li><a href="#como-solicitar">Como Solicitar</a></li>
              <li><a href="#lideres">Nossos Líderes</a></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema">
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link to="/home/team" className="btn">Crédito</Link>
          </nav>
        </div>
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
              <img src="/1-home/img/velho.png" alt="Homem trabalhando em um laptop" />
            </div>
          </div>
        </section>

        <section id="ofertas">
          <div className="container offers-main-layout">
            <div className="offers-cards-stack">
              <div className="offer-card full-width fade-in">
                <div className="top-row">
                  <div className="icon-wrapper"><i className="fa-solid fa-dollar-sign" aria-hidden="true"></i></div>
                  <div className="rate">28.32%</div>
                </div>
                <div className="offer-details">
                  <h3>Crédito Pessoal</h3>
                  <p>Pague suas dívidas ou financie uma viagem.<br />em até 30 meses</p>
                </div>
              </div>
              <div className="offer-card fade-in">
                <div className="top-row">
                  <div className="icon-wrapper"><i className="fa-solid fa-house-chimney" aria-hidden="true"></i></div>
                  <div className="rate">17.4%</div>
                </div>
                <div className="offer-details">
                  <h3>Crédito Residencial</h3>
                  <p>Aquisição, construção, novos ou usados.<br />em até 80 anos</p>
                </div>
              </div>
              <div className="offer-card fade-in">
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
            <div className="offers-description fade-in">
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
            <div className="specialists-image fade-in">
              <img src="/assets/home/especialista.png" alt="Jovem usando laptop" />
            </div>
          </div>
        </section>

        <section id="como-solicitar">
          <div className="container">
            <h2 className="fade-in">Rápido e fácil,<br />veja como solicitar</h2>
            <p className="fade-in">Basta entrar em contato com os nossos especialistas e o dinheiro estará na sua conta.</p>
            
            <div className="steps-container">
              <div className="step-card fade-in" data-step="01">
                <div className="step-card-content">
                  <h3>Envie um e-mail</h3>
                  <p>Escolha um especialista e envie sua solicitação.</p>
                </div>
              </div>
              <div className="step-card fade-in" data-step="02">
                <div className="step-card-content">
                  <h3>Analisamos o seu crédito</h3>
                  <p>Seu crédito será avaliado em tempo recorde!</p>
                </div>
              </div>
              <div className="step-card fade-in" data-step="03">
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
              <div className="leader-card fade-in">
                <div className="leader-avatar"><img src="/assets/home/ricardo.png" alt="Ricardo Moreira" /></div>
                <h3>Ricardo Moreira</h3>
                <span>CEO e Co-Founder</span>
              </div>
              <div className="leader-card fade-in">
                <div className="leader-avatar"><img src="/assets/home/Bruna.png" alt="Bruna Oliveira" /></div>
                <h3>Bruna Oliveira</h3>
                <span>Co-Founder</span>
              </div>
              <div className="leader-card fade-in">
                <div className="leader-avatar"><img src="/assets/home/Caio.png" alt="Caio José" /></div>
                <h3>Caio José</h3>
                <span>Co-Founder</span>
              </div>
              <div className="leader-card fade-in">
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
              <Link to="/home" className="logo">
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
              <p>Website for educational purpose. The Yaldabaoth Ficticious Bank é uma fictitious organization used for information security trainings.</p>
            </div>
          </div>
          <div className="copyright">
            Copyright &copy; Yaldabaoth Ficticious Bank. All rights reserved.
          </div>
        </div>
      </footer>

      <button id="scrollTopBtn" title="Voltar ao topo" aria-label="Voltar ao topo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fas fa-arrow-up"></i>
      </button>

      <style>{`
        :root {
          --primary-green: #4CAF50;
          --light-green-bg: #F1F8E9;
          --light-green-accent: #C8E6C9;
          --dark-green: #388E3C;
          --text-dark: #212121;
          --text-light: #757575;
          --background-white: #FFFFFF;
          --background-grey: #FAFAFA;
          --border-color: #E0E0E0;
          --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.07);
          --shadow-medium: 0 8px 25px rgba(0, 0, 0, 0.12);
          --shadow-heavy: 0 12px 35px rgba(0, 0, 0, 0.15);
          --dark-bg-primary: #121212;
          --dark-bg-secondary: #1e1e1e;
          --dark-text-primary: #f5f5f5;
          --dark-text-secondary: #b0b0b0;
          --dark-border: #333333;
          --dark-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        body.dark-theme {
          --text-dark: var(--dark-text-primary);
          --text-light: var(--dark-text-secondary);
          --background-white: var(--dark-bg-primary);
          --background-grey: var(--dark-bg-secondary);
          --border-color: var(--dark-border);
          --shadow-light: var(--dark-shadow);
          --shadow-medium: 0 8px 25px rgba(0, 0, 0, 0.4);
          --shadow-heavy: 0 12px 35px rgba(0, 0, 0, 0.5);
          --light-green-bg: #1a331a;
          --light-green-accent: #2a4d2a;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 90px; }
        body { font-family: 'Inter', sans-serif; color: var(--text-dark); background-color: var(--background-white); overflow-x: hidden; line-height: 1.6; }
        .container { max-width: 1140px; margin: 0 auto; padding: 0 20px; }
        section { padding: 100px 0; position: relative; overflow: hidden; }
        h1, h2, h3 { font-weight: 800; color: var(--text-dark); line-height: 1.2; }
        h1 { font-size: clamp(2.8rem, 5vw, 4rem); margin-bottom: 20px; }
        h2 { font-size: clamp(2.2rem, 4vw, 3rem); margin-bottom: 25px; text-align: center; }
        h3 { font-size: 1.4rem; margin-bottom: 10px; }
        p { font-size: 1.1rem; line-height: 1.7; color: var(--text-light); margin-bottom: 1em; }
        .btn { display: inline-flex; align-items: center; justify-content: center; background-color: var(--primary-green); color: var(--background-white); padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 1rem; transition: all 0.4s; border: none; cursor: pointer; box-shadow: var(--shadow-light); }
        .btn:hover { background-color: var(--dark-green); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(76, 175, 80, 0.3); }
        .fade-in { opacity: 0; transform: translateY(40px); transition: opacity 0.8s, transform 0.8s; }
        .fade-in.visible { opacity: 1; transform: translateY(0); }
        header { width: 100%; padding: 30px 0; position: fixed; top: 0; left: 0; background-color: rgba(255, 255, 255, 0.9); backdrop-filter: blur(20px); z-index: 1000; transition: all 0.4s; border-bottom: 1px solid transparent; }
        body.dark-theme header { background-color: rgba(18, 18, 18, 0.9); }
        header.scrolled { padding: 20px 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border-bottom: 1px solid rgba(0, 0, 0, 0.05); }
        .navbar { display: flex; justify-content: space-between; align-items: center; }
        .logo { display: flex; align-items: center; text-decoration: none; }
        .logo img { width: 60px; height: auto; margin-right: 15px; }
        .logo-text { font-size: 1.5rem; font-weight: 800; line-height: 1; color: var(--text-dark); }
        .logo-text span { display: block; font-size: 0.9rem; font-weight: 500; color: var(--text-light); }
        .nav-menu { display: flex; align-items: center; gap: 40px; }
        .nav-links { list-style: none; display: flex; gap: 35px; }
        .nav-links a { text-decoration: none; color: var(--text-dark); font-weight: 600; }
        .theme-toggle { background: none; border: none; cursor: pointer; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--text-dark); }
        .hamburger { display: none; flex-direction: column; justify-content: space-between; width: 30px; height: 21px; background: transparent; border: none; cursor: pointer; }
        .hamburger span { width: 100%; height: 3px; background-color: var(--text-dark); border-radius: 3px; transition: all 0.3s; }
        #hero { padding-top: 190px; padding-bottom: 120px; background: linear-gradient(135deg, #E8F5E9 0%, #DCEAD9 100%); position: relative; }
        body.dark-theme #hero { background: linear-gradient(135deg, #1a331a 0%, #152015 100%); }
        .hero-background-shape { position: absolute; top: 0; right: 0; width: 70%; height: 100%; z-index: 0; overflow: hidden; }
        .hero-content { display: flex; align-items: center; justify-content: space-between; gap: 40px; position: relative; z-index: 1; }
        .hero-text { flex: 0 0 50%; padding-right: 20px; }
        .hero-text .subtitle { font-size: 1.25rem; margin: 25px 0 35px; max-width: 480px; }
        .hero-illustration-wrapper { position: absolute; bottom: -80px; right: -5%; width: 45%; max-width: 800px; z-index: 0; clip-path: ellipse(80% 90% at 90% 50%); transition: all 0.5s; }
        .hero-illustration-wrapper img { width: 100%; height: auto; display: block; filter: drop-shadow(0 0 40px rgba(76, 175, 80, 0.25)); }
        #ofertas { background-color: var(--background-grey); position: relative; }
        .offers-main-layout { display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: center; }
        .offers-cards-stack { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
        .offer-card { background: var(--light-green-bg); padding: 20px; border-radius: 16px; box-shadow: var(--shadow-light); text-align: left; transition: transform 0.3s; display: flex; flex-direction: column; gap: 10px; }
        .offer-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-medium); }
        .offer-card .top-row { display: flex; align-items: center; gap: 15px; margin-bottom: 10px; }
        .offer-card .icon-wrapper { background: var(--light-green-bg); border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
        .offer-card .icon-wrapper i { font-size: 1.8rem; color: var(--dark-green); }
        .offer-card .rate { font-size: 2.2rem; font-weight: 700; color: var(--dark-green); }
        .offer-card .offer-details h3 { font-size: 1.2rem; margin: 0; }
        .offer-card .offer-details p { font-size: 0.9rem; margin: 5px 0 0; }
        .offer-card.full-width { grid-column: span 2; }
        .offers-description { text-align: left; }
        .offers-description h2 { text-align: left; margin-bottom: 20px; }
        #especialistas { position: relative; overflow: hidden; }
        .specialists-content { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 80px; }
        .specialists-text h2 { text-align: left; }
        .specialists-text .btn { margin-top: 30px; }
        .specialists-image img { width: 100%; max-width: 500px; border-radius: 20px; box-shadow: var(--shadow-medium); }
        #como-solicitar { background-color: var(--background-grey); }
        .steps-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; margin-top: 80px; }
        .step-card { background: var(--background-white); padding: 30px; border-radius: 20px; text-align: center; box-shadow: var(--shadow-light); transition: all 0.5s; position: relative; overflow: hidden; border-top: 4px solid var(--primary-green); }
        .step-card:hover { transform: translateY(-15px); box-shadow: 0 20px 50px rgba(76, 175, 80, 0.25); }
        .step-card::before { content: attr(data-step); position: absolute; top: -20px; left: -10px; font-size: 8rem; font-weight: 800; color: var(--light-green-bg); z-index: 0; line-height: 1; }
        .step-card-content { position: relative; z-index: 1; }
        #lideres .container > p { text-align: center; max-width: 600px; margin: -20px auto 60px; }
        .leaders-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
        .leader-card { text-align: center; transition: transform 0.5s; }
        .leader-card:hover { transform: translateY(-12px); }
        .leader-avatar { width: 160px; height: 160px; border-radius: 50%; margin: 0 auto 20px; background-color: #e5e0d5; overflow: hidden; box-shadow: var(--shadow-medium); }
        .leader-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .leader-card h3 { font-size: 1.25rem; margin-bottom: 5px; }
        footer { background-color: var(--text-dark); color: #ccc; padding: 80px 0; font-size: 0.95rem; }
        body.dark-theme footer { background-color: #0a0a0a; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px; }
        .footer-social { margin-top: 20px; display: flex; gap: 15px; }
        .footer-social a { color: white; font-size: 1.3rem; transition: all 0.4s; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); }
        .footer-social a:hover { transform: translateY(-5px); box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4); }
        .footer-column h3 { color: white; margin-bottom: 20px; font-size: 1.2rem; }
        .footer-column p { color: #ccc; }
        .copyright { text-align: center; margin-top: 60px; padding-top: 30px; border-top: 1px solid #444; color: #aaa; }
        footer .logo-text { color: white; }
        footer .logo-text strong { color: white; }
        body.dark-theme footer .logo-text { color: var(--dark-text-primary); }
        #scrollTopBtn { position: fixed; bottom: 25px; right: 25px; width: 50px; height: 50px; background: linear-gradient(135deg, var(--primary-green), var(--dark-green)); color: white; border: none; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4); opacity: 0; visibility: hidden; transform: translateY(30px); transition: all 0.4s; z-index: 999; }
        #scrollTopBtn.show { opacity: 1; visibility: visible; transform: translateY(0); }
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        @media (max-width: 992px) { .offers-main-layout { grid-template-columns: 1fr; } .specialists-content { grid-template-columns: 1fr; } .hero-illustration-wrapper { position: relative; width: 100%; right: 0; bottom: 0; clip-path: none; margin-top: 40px; } .leaders-grid { grid-template-columns: 1fr 1fr; } .footer-grid { grid-template-columns: 1fr 1fr; } .footer-about { grid-column: 1 / -1; text-align: center; } }
        @media (max-width: 768px) { section { padding: 60px 0; } h1 { font-size: 2.5rem; } h2 { font-size: 2rem; } .nav-menu { display: none; position: fixed; top: 0; right: 0; width: 70%; height: 100vh; background: var(--background-white); flex-direction: column; justify-content: center; transform: translateX(100%); transition: transform 0.3s; } .nav-menu.active { display: flex; transform: translateX(0); } .nav-links { flex-direction: column; gap: 30px; } .hamburger { display: flex; } .hero-content { flex-direction: column; text-align: center; } .hero-text { max-width: 100%; } .steps-container, .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  )
}