import { Building2, Shield } from 'lucide-react'

interface CorporateBrandProps {
  companyName: string
  companySubtitle?: string
  showSecurityBadge?: boolean
  size?: 'sm' | 'md' | 'lg'
  layout?: 'horizontal' | 'vertical'
}

export function CorporateBrand({ 
  companyName,
  companySubtitle,
  showSecurityBadge = true,
  size = 'md',
  layout = 'horizontal'
}: CorporateBrandProps) {
  const sizeClasses = {
    sm: {
      icon: 'h-6 w-6',
      iconContainer: 'p-2',
      title: 'text-lg',
      subtitle: 'text-xs'
    },
    md: {
      icon: 'h-8 w-8',
      iconContainer: 'p-3',
      title: 'text-2xl',
      subtitle: 'text-sm'
    },
    lg: {
      icon: 'h-10 w-10',
      iconContainer: 'p-4',
      title: 'text-3xl',
      subtitle: 'text-base'
    }
  }

  const currentSize = sizeClasses[size]

  return (
    <div className="text-center">
      <div className={`flex items-center justify-center ${layout === 'horizontal' ? 'gap-3 mb-4' : 'flex-col gap-2 mb-6'}`}>
        <div className={`${currentSize.iconContainer} bg-[var(--corporate-primary)] rounded-lg`}>
          <Building2 className={`${currentSize.icon} text-white`} />
        </div>
        <div className={layout === 'horizontal' ? 'text-left' : 'text-center'}>
          <h1 className={`${currentSize.title} font-bold text-[var(--corporate-text-primary)]`}>
            {companyName}
          </h1>
          {companySubtitle && (
            <p className={`${currentSize.subtitle} text-[var(--corporate-text-secondary)]`}>
              {companySubtitle}
            </p>
          )}
        </div>
      </div>
      
      {showSecurityBadge && (
        <div className="flex items-center justify-center gap-2 text-[var(--corporate-text-muted)]">
          <Shield className="h-4 w-4" />
          <span className="text-sm">Servidor de E-mail Corporativo</span>
        </div>
      )}
    </div>
  )
}
