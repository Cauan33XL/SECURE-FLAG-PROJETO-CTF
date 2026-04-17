import type { ReactNode } from 'react'
import { forwardRef } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { cn } from '../ui/utils'

interface CorporateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  icon?: ReactNode
  showIcon?: 'left' | 'right'
  error?: string
  helperText?: string
}

export const CorporateInput = forwardRef<HTMLInputElement, CorporateInputProps>(
  ({ label, icon, showIcon = 'left', error, helperText, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label 
          htmlFor={props.id} 
          className="text-[var(--corporate-text-primary)]"
        >
          {label}
        </Label>
        
        <div className="relative">
          {icon && showIcon === 'left' && (
            <div className="absolute left-3 top-3 h-4 w-4 text-[var(--corporate-text-muted)]">
              {icon}
            </div>
          )}
          
          <Input
            ref={ref}
            className={cn(
              "bg-[var(--corporate-secondary)] border-[var(--corporate-border)]",
              "focus:border-[var(--corporate-primary)] focus:ring-[var(--corporate-primary)]",
              icon && showIcon === 'left' && "pl-10",
              icon && showIcon === 'right' && "pr-10",
              error && "border-red-500 focus:border-red-500",
              className
            )}
            {...props}
          />
          
          {icon && showIcon === 'right' && (
            <div className="absolute right-3 top-3 h-4 w-4 text-[var(--corporate-text-muted)]">
              {icon}
            </div>
          )}
        </div>
        
        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}
        
        {helperText && !error && (
          <p className="text-sm text-[var(--corporate-text-muted)]">{helperText}</p>
        )}
      </div>
    )
  }
)

CorporateInput.displayName = "CorporateInput"
