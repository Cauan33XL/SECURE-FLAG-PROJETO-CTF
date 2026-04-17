import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import EmailApp from './modules/email/App'
import RHApp from './modules/rh/App'
import { 
  Home, Users, Mail, ShieldCheck, ChevronRight, Moon, Sun, 
  Info, Shield, Target, Zap, Cpu, Layers, Award, Terminal, 
  Clock, CheckCircle, Search, Database, Globe, BookOpen, AlertCircle, FileText, MapPin, 
  LayoutGrid
} from 'lucide-react'
import { ReturnToSelector } from './components/shared/ui/ReturnToSelector'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModuleSelector />} />
        <Route path="/home" element={<HomeFrame />} />
        <Route path="/home/team" element={<HomeTeamFrame />} />
        <Route path="/rh/*" element={<RHFrame />} />
        <Route path="/email/*" element={<EmailFrame />} />
      </Routes>
    </BrowserRouter>
  )
}

function ModuleSelector() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState('modulos')

  const teamMembers = [
    { name: 'Cauan Gabriel Matos Silva', email: 'cauan.silva@ads.uniceplac.edu.br' },
    { name: 'Caio Luiz Matos de Oliveira', email: 'caio.oliveira@ads.uniceplac.edu.br' },
    { name: 'Filipe Augusto da Silva Cardoso', email: 'filipe.cardoso@ads.uniceplac.edu.br' },
    { name: 'Gabriel de Lima Adriano', email: 'gabriel.adriano@ads.uniceplac.edu.br' }
  ]

  const modules = [
    { 
      to: 'https://secureflagctf.svxsec.com/page', 
      name: 'Plataforma CTF', 
      alias: 'PLATAFORMA',
      color: '#334155', 
      icon: <ShieldCheck className="h-8 w-8 text-white" />,
      desc: 'Plataforma oficial de gerenciamento de desafios. Submeta suas flags, acompanhe o ranking em tempo real e gerencie sua jornada hacker.',
      tags: ['Gerenciamento', 'Ranking', 'Submissão']
    },
    { 
      to: '/home', 
      name: 'Yaldabaoth Home', 
      alias: 'HOME',
      color: '#4CAF50', 
      icon: <Home className="h-8 w-8 text-white" />,
      desc: 'Ponto de partida do ataque. Explore o portal público, identifique funcionários e capture as primeiras flags de reconhecimento.',
      tags: ['Reconhecimento', 'OSINT', 'Web']
    },
    { 
      to: '/rh', 
      name: 'Sistema de RH', 
      alias: 'RH',
      color: '#2196F3', 
      icon: <Users className="h-8 w-8 text-white" />,
      desc: 'Alvo interno de alta criticidade. Explore vulnerabilidades no gerenciamento de funcionários e sistemas de auditoria corporativa.',
      tags: ['Privilege Escalation', 'Lógica', 'Forensics']
    },
    { 
      to: '/email', 
      name: 'E-mail Corporate', 
      alias: 'EMAIL',
      color: '#FF9800', 
      icon: <Mail className="h-8 w-8 text-white" />,
      desc: 'Acesso à caixa de entrada corporativa. Analise comunicações internas para encontrar credenciais e pistas estratégicas.',
      tags: ['Social Engineering', 'Data Leakage', 'Análise']
    },
  ]

  const journeySteps = [
    { title: 'Acesso Inicial', desc: 'Usuário acessa Yaldabaoth-Home', icon: <Globe className="h-5 w-5" /> },
    { title: 'Exploração', desc: 'Navega por páginas e coleta pistas', icon: <Search className="h-5 w-5" /> },
    { title: 'Investigação', desc: 'Interage com e-mail e assets', icon: <Terminal className="h-5 w-5" /> },
    { title: 'Descoberta', desc: 'Encontra flags através de técnicas', icon: <Shield className="h-5 w-5" /> },
    { title: 'Submissão', desc: 'Envia na plataforma Secure Flag', icon: <CheckCircle className="h-5 w-5" /> },
    { title: 'Ranking', desc: 'Atualização em tempo real', icon: <Award className="h-5 w-5" /> },
  ]

  const stats = [
    { label: 'Déficit Profissional', value: '750k', info: 'Vagas em TI/Security no BR', icon: <AlertCircle className="h-4 w-4" /> },
    { label: 'Incidentes 2023', value: '87%', info: 'Empresas atacadas', icon: <ShieldCheck className="h-4 w-4" /> },
    { label: 'Idiomas Plataforma', value: '20', info: 'Suporte global', icon: <Globe className="h-4 w-4" /> },
    { label: 'Desafios Core', value: '10+', info: 'Categorizados', icon: <Target className="h-4 w-4" /> },
  ]

  const timeline = [
    { phase: 'Setembro/2025', task: 'Pesquisa, Prototipação & Design UI/UX', status: 'Concluído', color: 'bg-green-500' },
    { phase: 'Outubro/2025', task: 'Implementação Core & Ambientes de Ataque', status: 'Concluído', color: 'bg-green-600' },
    { phase: 'Novembro/2025', task: 'Testes de Vulnerabilidades & Refinamentos', status: 'Concluído', color: 'bg-green-700' },
    { phase: 'Dezembro/2025', task: 'Documentação Final, Vídeo & Entrega', status: 'Concluído', color: 'bg-green-800' },
  ]

  const coveredContent = [
    { title: 'Segurança da Informação', icon: <Shield className="h-4 w-4" /> },
    { title: 'Simulação de Ataques', icon: <Zap className="h-4 w-4" /> },
    { title: 'Análise Forense de Logs', icon: <Search className="h-4 w-4" /> },
    { title: 'Engenharia Reversa', icon: <Cpu className="h-4 w-4" /> },
    { title: 'Análise de Redes', icon: <Globe className="h-4 w-4" /> },
  ]

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0a] text-[#1a1a1a] dark:text-[#f3f4f6] font-sans transition-colors duration-500 overflow-x-hidden">
        
        {/* Navbar Flutuante */}
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-white/50 dark:bg-black/50 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-green-600" />
            <span className="font-black text-xl tracking-tighter uppercase text-gray-900 dark:text-white">PROJETO SECURE FLAG <span className="text-green-600 font-bold">CTF</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative pt-32 pb-10 px-6 flex flex-col items-center text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-green-500/10 blur-[100px] rounded-full -z-10" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in text-center">
            <ShieldCheck className="h-3.5 w-3.5" />
            Academic CTF Project - UNICEPLAC 2025
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent uppercase text-center">
            PROJETO SECURE FLAG CTF
          </h1>
          
          <div className="flex justify-center gap-4 mb-10">
            <button 
              onClick={() => setActiveTab('modulos')}
              className={`pb-2 px-6 font-bold text-xs uppercase tracking-[0.2em] transition-all border-b-2 ${activeTab === 'modulos' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-400'}`}
            >
              Módulos
            </button>
            <button 
              onClick={() => setActiveTab('detalhes')}
              className={`pb-2 px-6 font-bold text-xs uppercase tracking-[0.2em] transition-all border-b-2 ${activeTab === 'detalhes' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-400'}`}
            >
              Documentação
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6 h-full pb-20">
          {activeTab === 'modulos' ? (
            <main className="fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {modules.map((m, idx) => {
                  const isExternal = m.to.startsWith('http');
                  const Content = (
                    <>
                      <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform"
                        style={{ background: m.color }}
                      >
                        {m.icon}
                      </div>
                      
                      <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide flex items-center justify-between">
                        <span>Módulo {String(idx + 1).padStart(2, '0')}</span>
                        <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800">{m.alias}</span>
                      </div>
                      
                      <h2 className="text-2xl font-black mb-4 group-hover:text-green-600 transition-colors uppercase tracking-tight">
                        {m.name}
                      </h2>
                      
                      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                        {m.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {m.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 uppercase tracking-tighter">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-2 font-bold text-[10px] text-green-600 group-hover:gap-4 transition-all uppercase tracking-widest mt-auto">
                        {isExternal ? 'Ir para Plataforma' : 'Acessar Módulo'} <ChevronRight className="h-4 w-4" />
                      </div>
                    </>
                  );

                  return isExternal ? (
                    <a 
                      key={m.to}
                      href={m.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
                    >
                      {Content}
                    </a>
                  ) : (
                    <Link 
                      key={m.to} 
                      to={m.to}
                      className="group relative flex flex-col bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10"
                    >
                      {Content}
                    </Link>
                  );
                })}
              </div>
            </main>
          ) : (
            <main className="fade-in space-y-20">
              {/* Seção Principal: Resumo & Equipe */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-green-600" /> Resumo do Projeto
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      O Secure Flag é um ambiente didático de **Capture The Flag (CTF)** focado em cibersegurança forense. 
                      O projeto entrega sites fictícios interconectados que simulam cenários reais de ataques a instituições financeiras.
                    </p>
                    <p>
                      Projetado para enfrentar o déficit de profissionais na área e a escassez de experiências práticas acadêmicas, 
                      utiliza gamificação para ensinar investigação digital, análise de logs e segurança defensiva.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                      {stats.map((s, i) => (
                        <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-gray-800">
                           <span className="block text-xl font-black text-green-600 mb-1">{s.value}</span>
                           <span className="text-[10px] uppercase font-bold tracking-widest block opacity-70 mb-1">{s.label}</span>
                           <span className="text-[9px] block opacity-50">{s.info}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" /> A Equipe
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em] block mb-3">Orientador</span>
                      <div className="p-3 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800">
                         <p className="font-bold text-sm mb-0.5">Prof. Rômulo Valadares</p>
                         <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Perícia Computacional</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-green-600 uppercase tracking-[0.2em] block mb-3">Desenvolvedores</span>
                      <ul className="space-y-4">
                        {teamMembers.map((m, i) => (
                          <li key={i} className="group">
                             <p className="text-sm font-bold group-hover:text-green-600 transition-colors uppercase tracking-tight">{m.name}</p>
                             <p className="text-[10px] text-gray-500 opacity-60 font-medium tracking-tight">ADS - UNICEPLAC</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arquitetura e Fluxo */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                   <h2 className="text-2xl font-black mb-10 uppercase tracking-tighter flex items-center gap-3 text-center lg:text-left">
                     <Cpu className="h-6 w-6 text-green-600" /> Arquitetura do Sistema
                   </h2>
                   <div className="relative space-y-12">
                      <div className="absolute left-[24px] top-6 bottom-6 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block" />
                      
                      <div className="flex gap-6 relative">
                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border-2 border-green-600 flex items-center justify-center text-green-600 z-10 shadow-lg">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase mb-1">Frontend Layer</h4>
                          <p className="text-xs text-gray-500 max-w-sm">Websites Estáticos (Yaldabaoth Home & Corporate) desenvolvidos em React 18 e Vite.</p>
                        </div>
                      </div>

                      <div className="flex gap-6 relative">
                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border-2 border-green-600 flex items-center justify-center text-green-600 z-10 shadow-lg">
                          <Terminal className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase mb-1">Challenge Engine</h4>
                          <p className="text-xs text-gray-500 max-w-sm">Plataforma CTFd para gestão dinâmica de submissões, flags e ranking em tempo real.</p>
                        </div>
                      </div>

                      <div className="flex gap-6 relative">
                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-black border-2 border-green-600 flex items-center justify-center text-green-600 z-10 shadow-lg">
                          <Database className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm uppercase mb-1">Data Storage</h4>
                          <p className="text-xs text-gray-500 max-w-sm">Persistência via MariaDB controlada por ambiente containerizado Docker.</p>
                        </div>
                      </div>
                   </div>
                </div>

                <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                   <h2 className="text-2xl font-black mb-10 uppercase tracking-tighter text-center">Jornada do Usuário</h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {journeySteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-gray-800">
                           <div className="text-green-600 mb-3">{step.icon}</div>
                           <h5 className="font-bold text-[11px] uppercase tracking-wide mb-1">{step.title}</h5>
                           <p className="text-[9px] text-gray-500 leading-tight">{step.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Cronograma e Fases */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                  <h2 className="text-2xl font-black mb-12 uppercase tracking-tighter flex items-center gap-3">
                    <Clock className="h-6 w-6 text-green-600" /> Cronograma de Execução
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {timeline.map((t, i) => (
                      <div key={i} className="relative group">
                         <div className={`h-1.5 w-full rounded-full mb-4 ${t.color} transition-all duration-500`} />
                         <div className="px-2">
                            <span className="text-[10px] font-black text-green-600 uppercase tracking-widest block mb-1">{t.phase}</span>
                            <p className="font-bold text-xs uppercase tracking-tight mb-2 leading-tight">{t.task}</p>
                            <span className="text-[9px] px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-400 uppercase font-bold tracking-tighter">{t.status}</span>
                         </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#111111] p-10 rounded-3xl border border-gray-200 dark:border-gray-800">
                  <h2 className="text-xl font-black mb-8 uppercase tracking-tighter">Conteúdo</h2>
                  <div className="space-y-4">
                    {coveredContent.map((c, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 group hover:border-green-600/50 transition-colors">
                        <div className="text-green-600 group-hover:scale-110 transition-transform">{c.icon}</div>
                        <span className="text-[10px] font-bold uppercase tracking-tight text-gray-500 dark:text-gray-400">{c.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer de Documentação (Licença/Local) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-gray-200 dark:border-gray-800">
                <div className="flex gap-4 items-start">
                   <FileText className="h-6 w-6 text-gray-400" />
                   <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Licenciamento</h4>
                      <p className="text-[10px] text-gray-500 uppercase leading-relaxed font-medium">
                        Código Fonte: **MIT LICENSE**<br />
                        Conteúdo e Documentação: **CREATIVE COMMONS BY-NC-SA 4.0**
                      </p>
                   </div>
                </div>
                <div className="flex gap-4 items-start justify-end text-right">
                   <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Institucional</h4>
                      <p className="text-[10px] text-gray-500 uppercase leading-relaxed font-medium">
                        Centro Universitário do Planalto Central (UNICEPLAC)<br />
                        Gama-DF, 2025 — Projeto Integrado
                      </p>
                   </div>
                   <MapPin className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </main>
          )}
        </div>

        {/* Footer Geral */}
        <footer className="py-20 px-6 text-center border-t border-gray-200 dark:border-gray-900 bg-gray-50/50 dark:bg-black/20">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-4 opacity-50">
              <ShieldCheck className="h-5 w-5" />
              <span className="font-black tracking-tighter uppercase">PROJETO SECURE FLAG CTF</span>
            </div>
            <p className="text-sm text-gray-500 max-w-lg mx-auto text-center font-medium opacity-60">
              Ambiente didático desenvolvido para treinamento ciber-forense institucional.<br />
              &copy; 2025 Yaldabaoth Ficticious Bank & UNICEPLAC.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

function BaseWrapper({ src, title }: { src: string; title: string }) {
  return (
    <iframe
      src={src}
      title={title}
      style={{
        width: '100vw',
        height: '100vh',
        border: 'none',
        overflow: 'auto',
      }}
      allow="accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-top-navigation"
    />
  )
}

function HomeFrame() {
  return (
    <>
      <ReturnToSelector />
      <BaseWrapper src="/1-home/index.html" title="Yaldabaoth Home" />
    </>
  )
}

function HomeTeamFrame() {
  return (
    <>
      <ReturnToSelector />
      <BaseWrapper src="/1-home/team.html" title="Time de Especialistas" />
    </>
  )
}

function RHFrame() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ReturnToSelector />
      <RHApp />
    </div>
  )
}

function EmailFrame() {
  // Wrap the email module in a container to fill the screen
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ReturnToSelector />
      <EmailApp />
    </div>
  )
}

export default App