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
    default: 'bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900',
    branded: 'bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900',
    minimal: 'bg-white dark:bg-gray-900'
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
