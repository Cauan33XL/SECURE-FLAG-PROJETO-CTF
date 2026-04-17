import type { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface CorporateFormProps {
  title: string
  description?: string
  children: ReactNode
  footer?: ReactNode
  className?: string
}

export function CorporateForm({ 
  title, 
  description, 
  children, 
  footer,
  className = ""
}: CorporateFormProps) {
  return (
    <Card className={`shadow-[var(--corporate-shadow-lg)] border-[var(--corporate-border)] ${className}`}>
      <CardHeader className="space-y-1 pb-6">
        <CardTitle className="text-2xl text-center text-[var(--corporate-text-primary)]">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-center text-[var(--corporate-text-secondary)]">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent>
        {children}
        {footer && (
          <div className="mt-6 pt-6 border-t border-[var(--corporate-border)]">
            {footer}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
