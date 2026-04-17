import { useState } from 'react'
import { CorporateLayout } from '../design-system/CorporateLayout'
import { CorporateBrand } from '../design-system/CorporateBrand'
import { CorporateForm } from '../design-system/CorporateForm'
import { CorporateInput } from '../design-system/CorporateInput'
import { Button } from '../ui/button'
import { Alert, AlertDescription } from '../ui/alert'
import { Eye, EyeOff, Mail, Shield } from 'lucide-react'

interface LoginTemplateProps {
  companyName?: string
  companySubtitle?: string
  variant?: 'default' | 'minimal' | 'branded'
  showRememberMe?: boolean
  showForgotPassword?: boolean
  onSubmit?: (email: string, password: string) => void
}

export function LoginTemplate({
  companyName = "Yaldabaoth",
  companySubtitle = "Ficticious Bank", 
  variant = 'default',
  showRememberMe = true,
  showForgotPassword = true,
  onSubmit
}: LoginTemplateProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.')
      return
    }

    if (!email.includes('@')) {
      setError('Por favor, insira um email válido.')
      return
    }

    setIsLoading(true)
    
    try {
      if (onSubmit) {
        await onSubmit(email, password)
      } else {
        // Simulação padrão
        setTimeout(() => {
          setIsLoading(false)
          console.log('Login attempt:', { email, password })
        }, 2000)
        return
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro na autenticação. Tente novamente.')
      setIsLoading(false)
    }
  }

  const securityFooter = (
    <>
      <div className="flex items-center justify-center gap-2 text-xs text-[var(--corporate-text-muted)]">
        <Shield className="h-3 w-3" />
        <span>Conexão segura SSL/TLS</span>
      </div>
      <p className="text-xs text-[var(--corporate-text-muted)] text-center mt-2">
        Este é um sistema restrito. O acesso não autorizado é proibido.
      </p>
    </>
  )


  return (
    <CorporateLayout 
      background={variant === 'branded' ? 'branded' : variant === 'minimal' ? 'minimal' : 'default'}
      companyName={`${companyName} ${companySubtitle}`}
      showThemeToggle={true}
    >
      <CorporateBrand 
        companyName={companyName}
        companySubtitle={companySubtitle}
        size={variant === 'minimal' ? 'sm' : 'md'}
        layout={variant === 'minimal' ? 'horizontal' : 'horizontal'}
      />
      
      <div className="mt-8">
        <CorporateForm
          title="Acesso Corporativo"
          description="Digite suas credenciais para acessar o sistema"
          footer={variant !== 'minimal' ? securityFooter : undefined}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <CorporateInput
              id="email"
              type="email"
              label="Email Corporativo"
              placeholder="Digite o seu Email Corporativo"
              icon={<Mail className="h-4 w-4" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <CorporateInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              label="Senha"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-[var(--corporate-text-secondary)] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
              showIcon="right"
              required
            />

            {(showRememberMe || showForgotPassword) && (
              <div className="flex items-center justify-between text-sm">
                {showRememberMe ? (
                  <label className="flex items-center space-x-2 text-[var(--corporate-text-secondary)]">
                    <input
                      type="checkbox"
                      className="rounded border-[var(--corporate-border)] text-[var(--corporate-primary)] focus:ring-[var(--corporate-primary)]"
                    />
                    <span>Lembrar-me</span>
                  </label>
                ) : <div />}
                
                {showForgotPassword && (
                  <a 
                    href="#" 
                    className="text-[var(--corporate-primary)] hover:text-[var(--corporate-primary-dark)] transition-colors"
                  >
                    Esqueceu a senha?
                  </a>
                )}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[var(--corporate-primary)] hover:bg-[var(--corporate-primary-dark)] text-white py-2.5"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Autenticando...
                </div>
              ) : (
                'Entrar no Sistema'
              )}
            </Button>
          </form>
        </CorporateForm>
      </div>
    </CorporateLayout>
  )
}
