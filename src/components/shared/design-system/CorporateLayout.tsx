import type { ReactNode } from 'react'
import { ThemeToggle } from '../ui/theme-toggle'

interface CorporateLayoutProps {
  children: ReactNode
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'branded' | 'minimal'
  showFooter?: boolean
  companyName?: string
  showThemeToggle?: boolean
}

export function CorporateLayout({ 
  children, 
  maxWidth = 'md',
  background = 'default',
  showFooter = true,
  companyName = "Yaldabaoth Ficticious Bank"
  , showThemeToggle = false
}: CorporateLayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl'
  }

  const backgroundClasses = {
    default: 'bg-white dark:bg-black',
    branded: 'bg-white dark:bg-black',
    minimal: 'bg-white dark:bg-black'
  }

  return (
    <div className={`min-h-screen ${backgroundClasses[background]} flex items-center justify-center p-4`}>
      <div className={`w-full ${maxWidthClasses[maxWidth]}`}>
        {children}
        
        {showFooter && (
          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--corporate-text-muted)]">
              © 2025 {companyName}. Todos os direitos reservados.
            </p>
            <div className="flex items-center justify-center gap-4 mt-2 text-xs text-[var(--corporate-text-muted)]">
              <a href="#" className="hover:text-[var(--corporate-text-secondary)] transition-colors">
                Política de Privacidade
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[var(--corporate-text-secondary)] transition-colors">
                Termos de Uso
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[var(--corporate-text-secondary)] transition-colors">
                Suporte
              </a>
            </div>
            {showThemeToggle && (
              <div className="mt-4 flex justify-center">
                <ThemeToggle className="px-3 py-1 text-sm" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
