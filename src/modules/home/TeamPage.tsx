import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const specialists = [
  { name: 'Kaori Ayumi', role: 'Consultora de Crédito', email: 'kaori.ayumi@yaldabaothbank.com', image: '/assets/home/pessoas/kaori.png' },
  { name: 'Lucas Rocha', role: 'Consultor de Crédito', email: 'lucas.rocha@yaldabaothbank.com', image: '/assets/home/pessoas/lucas.png' },
  { name: 'Francisco Neto', role: 'Consultor de Crédito', email: 'francisco.neto@yaldabaothbank.com', image: '/assets/home/pessoas/francisco.png' },
  { name: 'Paulo Almeida', role: 'Consultor de Crédito', email: 'paulo.almeida@yaldabaothbank.com', image: '/assets/home/pessoas/paulo.png' },
  { name: 'Clara Florence', role: 'Consultora de Crédito', email: 'clara.florence@yaldabaothbank.com', image: '/assets/home/pessoas/clara.png' },
  { name: 'Sebastião Santos', role: 'Consultor de Crédito', email: 'sebastiao.santos@yaldabaothbank.com', image: '/assets/home/pessoas/sebastiao.png' },
]

export function TeamPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-theme')
    else document.body.classList.remove('dark-theme')
  }, [isDarkMode])

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
            <span></span><span></span><span></span>
          </button>
          <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><a href="/home">Home</a></li>
              <li><a href="/home#ofertas">Ofertas</a></li>
              <li><a href="/home#como-solicitar">Como Solicitar</a></li>
              <li><a href="/home#lideres">Nossos Líderes</a></li>
            </ul>
            <button className="theme-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <Link to="/home" className="btn">Home</Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="team-hero">
          <div className="container team-hero-content">
            <h1 className="fade-in">Time de Especialistas</h1>
            <p className="fade-in">Entre em contato por e-mail e eles retornam com crédito!<br />Equipe focada em resolver seus problemas financeiros!</p>
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
                <img src="/assets/home/logo.png" alt="Yaldabaoth Logo" />
                <div className="logo-text">
                  <strong>YALDABAOTH</strong>
                  <span>FICTICIOUS BANK</span>
                </div>
              </Link>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
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

      <style>{`
        :root { --primary-green: #4CAF50; --dark-green: #388E3C; --text-dark: #212121; --text-light: #757575; --background-white: #FFFFFF; --background-grey: #FAFAFA; --shadow-light: 0 4px 15px rgba(0, 0, 0, 0.07); --shadow-medium: 0 8px 25px rgba(0, 0, 0, 0.12); }
        body.dark-theme { --text-dark: #f5f5f5; --text-light: #b0b0b0; --background-white: #121212; --background-grey: #1e1e1e; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; color: var(--text-dark); background-color: var(--background-white); }
        .container { max-width: 1140px; margin: 0 auto; padding: 0 20px; }
        section { padding: 100px 0; position: relative; }
        h1 { font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 800; color: var(--text-dark); line-height: 1.2; margin-bottom: 20px; }
        h3 { font-size: 1.4rem; margin-bottom: 10px; color: var(--text-dark); }
        p { font-size: 1.1rem; line-height: 1.7; color: var(--text-light); }
        a { text-decoration: none; color: inherit; }
        .btn { display: inline-flex; align-items: center; justify-content: center; background-color: var(--primary-green); color: var(--background-white); padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 1rem; }
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
        #team-hero { padding-top: 190px; padding-bottom: 80px; background: linear-gradient(135deg, #E8F5E9 0%, #DCEAD9 100%); text-align: center; }
        body.dark-theme #team-hero { background: linear-gradient(135deg, #1a331a 0%, #152015 100%); }
        .team-hero-content h1 { text-align: center; }
        .team-hero-content p { text-align: center; max-width: 600px; margin: 0 auto; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; }
        .team-card { background: var(--background-white); border-radius: 16px; padding: 30px; text-align: center; transition: all 0.5s; box-shadow: var(--shadow-light); display: flex; flex-direction: column; align-items: center; }
        .team-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-medium); }
        .team-avatar { width: 120px; height: 120px; border-radius: 50%; margin-bottom: 20px; overflow: hidden; }
        .team-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .team-info h3 { font-size: 1.2rem; }
        .team-contact { margin-top: 15px; }
        .team-contact a { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--primary-green); color: white; transition: all 0.3s; }
        .team-contact a:hover { transform: scale(1.1); }
        footer { background-color: var(--text-dark); color: #ccc; padding: 80px 0; font-size: 0.95rem; }
        body.dark-theme footer { background-color: #0a0a0a; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px; }
        .footer-social { margin-top: 20px; display: flex; gap: 15px; }
        .footer-social a { color: white; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: rgba(255,255,255,0.1); }
        .footer-column h3 { color: white; margin-bottom: 20px; font-size: 1.2rem; }
        .copyright { text-align: center; margin-top: 60px; padding-top: 30px; border-top: 1px solid #444; color: #aaa; }
        @media (max-width: 768px) { .nav-menu { display: none; position: fixed; top: 0; right: 0; width: 70%; height: 100vh; background: var(--background-white); flex-direction: column; justify-content: center; transform: translateX(100%); } .nav-menu.active { display: flex; transform: translateX(0); } .hamburger { display: flex; } }
      `}</style>
    </div>
  )
}