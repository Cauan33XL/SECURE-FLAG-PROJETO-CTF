import { LoginTemplate } from './LoginTemplate'

// Variação com branding forte - Usada no projeto
export function BrandedLogin({ onLogin }: { onLogin?: (email: string) => void }) {
  const handleSubmit = async (email: string, password: string) => {
    // Validar email único
    if (email !== 'sebastiao.santos@yaldabaothbank.com') {
      throw new Error('Email inválido. Use o Email Correto.')
    }
    // Validar senha única (atualizada)
    if (password !== 'kRzM36SU9e') {
      throw new Error('Senha incorreta')
    }

    // Simular delay de autenticação de alguns segundos
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Chamar callback de login bem-sucedido
    if (onLogin) {
      onLogin(email)
    }
  }

  return (
    <LoginTemplate 
      companyName="Yaldabaoth"
      companySubtitle="Corporate Banking"
      variant="branded"
      showRememberMe={true}
      showForgotPassword={true}
      onSubmit={handleSubmit}
    />
  )
}
