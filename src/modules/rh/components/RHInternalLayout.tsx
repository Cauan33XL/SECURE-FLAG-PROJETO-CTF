import type { ReactNode } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ThemeToggle } from '../../../components/shared/ui/theme-toggle'
import { 
  Database, 
  Users, 
  UserPlus, 
  ShieldAlert, 
  Power,
  ChevronRight,
  Menu,
  Box
} from 'lucide-react'
import { useState } from 'react'

interface RHInternalLayoutProps {
  children: ReactNode
}

export function RHInternalLayout({ children }: RHInternalLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const menuItems = [
    { title: 'SISTEMA_DASHBOARD', icon: <Box className="h-4 w-4" />, path: '/rh/dashboard' },
    { title: 'AUDITORIA_DB', icon: <Database className="h-4 w-4" />, path: '/rh/listar' },
    { title: 'NOVO_CADASTRO', icon: <UserPlus className="h-4 w-4" />, path: '/rh/registrar' },
    { title: 'SEGURANÇA_LOGS', icon: <ShieldAlert className="h-4 w-4" />, path: '/rh/audit' },
  ]

  const handleLogout = () => {
    localStorage.removeItem('usuario_rh')
    navigate('/rh')
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex overflow-hidden font-mono transition-colors duration-300">
      {/* Sidebar - Estilo Industrial Polido */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-card text-card-foreground border-r-2 border-green-600 dark:border-green-700 transition-all duration-300 flex flex-col z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] dark:shadow-2xl`}
      >
        <div className="p-6 border-b border-gray-100 dark:border-white/5 flex flex-col items-center">
          <div className="h-12 w-12 bg-[#166534] dark:bg-green-600 rounded flex items-center justify-center mb-2 shadow-md">
            <span className="text-white font-black text-xl">RH</span>
          </div>
          {isSidebarOpen && (
            <span className="text-[10px] text-green-700 dark:text-green-500 font-black tracking-[0.2em] animate-pulse">SYSTEM_ONLINE</span>
          )}
        </div>

        <nav className="flex-1 p-3 space-y-1 mt-6">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-none transition-all border-l-2
                  ${isActive 
                    ? 'bg-green-600/10 border-green-500 text-green-600' 
                    : 'border-transparent text-gray-500 hover:text-green-600 hover:bg-gray-50 dark:hover:bg-white/5'}
                `}
              >
                {item.icon}
                {isSidebarOpen && <span className="text-[11px] font-bold tracking-tight">{item.title}</span>}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-gray-100 dark:border-white/5 space-y-6">
          <div className="flex justify-center transition-opacity">
            <ThemeToggle />
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2 text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-600/10 transition-colors uppercase text-[10px] font-bold"
          >
            <Power className="h-4 w-4" />
            {isSidebarOpen && <span>Encerrar_Sessão</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Tecnocrático */}
        <header className="h-14 bg-card border-b border-border flex items-center px-6 justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-muted-foreground hover:text-green-600 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden md:flex items-center gap-2 text-[10px] text-muted-foreground">
              <span className="px-1.5 py-0.5 bg-secondary rounded">SECURE_NODE_01</span>
              <span className="opacity-30">/</span>
              <span className="text-green-600 font-bold">ESTADO_OPERACIONAL</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right flex flex-col">
              <span className="text-[10px] font-black text-foreground">S_SANTOS_ADM</span>
              <span className="text-[9px] text-green-600 font-bold uppercase tracking-tighter">Access_Lvl: 05</span>
            </div>
            <div className="h-8 w-8 bg-green-900 border border-green-500/30 flex items-center justify-center text-green-400 text-xs font-bold">
              SS
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-background p-8">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
