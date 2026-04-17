import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CorporateBrand } from '../../../components/shared/design-system/CorporateBrand'
import { ShieldCheck, Lock, User } from 'lucide-react'
import { ThemeToggle } from '../../../components/shared/ui/theme-toggle'

export default function RHLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simular delay de autenticação
    await new Promise(resolve => setTimeout(resolve, 1500))

    const emailCorreto = "sebastiao.santos@yaldabaothbank.com"
    const senhaCorreta = "kRzM36SU9e"

    if (email === emailCorreto && password === senhaCorreta) {
      localStorage.setItem("usuario_rh", email)
      navigate('/rh/dashboard')
    } else {
      setError('Credenciais inválidas para o sistema de RH.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4 font-sans transition-colors duration-300">
      <div className="w-full max-w-md">
        {/* Container Minimalista - Referência ao layout original com polimento premium */}
        <div className="bg-white dark:bg-[#0a0a0a] border-2 border-green-600 rounded-lg overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(22,163,74,0.1)]">

          {/* Header do Sistema - Verde sólido para autoridade */}
          <div className="bg-[#166534] dark:bg-green-600 p-8 flex flex-col items-center text-white">
            <div className="bg-white/10 p-2.5 rounded-full mb-3 shadow-inner">
              <ShieldCheck className="h-9 w-9 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">SISTEMA DE RH</h1>
            <div className="h-1 w-12 bg-green-300 mt-2"></div>
            <p className="text-[10px] text-green-100 mt-3 uppercase tracking-[0.3em] font-bold">Yaldabaoth Ficticious Bank</p>
          </div>

          <div className="p-8 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded text-center">
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[var(--corporate-text-secondary)] uppercase tracking-wide flex items-center gap-2">
                  <User className="h-3 w-3" /> Usuário Geral
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome.sobrenome@yaldabaothbank.com"
                  className="w-full bg-white dark:bg-black border-2 border-green-600/50 focus:border-green-600 outline-none p-3 rounded text-sm transition-all text-[var(--corporate-text-primary)]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[var(--corporate-text-secondary)] uppercase tracking-wide flex items-center gap-2">
                  <Lock className="h-3 w-3" /> Senha de Acesso
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white dark:bg-black border-2 border-green-600/50 focus:border-green-600 outline-none p-3 rounded text-sm transition-all text-[var(--corporate-text-primary)]"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#166534] hover:bg-[#14532d] text-white font-bold py-3 rounded shadow-md transition-all active:scale-[0.98]"
                >
                  {isLoading ? 'AUTENTICANDO...' : 'LOGIN NO SISTEMA'}
                </button>
              </div>
            </form>

            <div className="text-center">
              <p className="text-[10px] text-[var(--corporate-text-muted)] uppercase tracking-tighter">
                Acesso restrito a funcionários autorizados.
                <br />
                Monitoramento de rede ativo via SecureFlag™
              </p>
            </div>
          </div>
        </div>

        {/* Footer Minimalista e Seletor de Tema */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <ThemeToggle className="bg-white dark:bg-black border-green-600/30 dark:border-green-600/50 text-green-700 dark:text-green-500 hover:bg-green-50" />
          <CorporateBrand size="sm" companyName="Yaldabaoth" serverTypeText="Servidor de RH Corporativo" />
        </div>
      </div>
    </div>
  )
}
