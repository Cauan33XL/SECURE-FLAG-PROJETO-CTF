import { useEffect, useState } from 'react'
import { Button } from './button'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch {
      // localStorage may be unavailable in some environments; ignore failures
    }
  }, [isDark])

  const toggle = () => setIsDark((v) => !v)

  // botão mais compacto por padrão (útil para footer)
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggle}
      className={`px-3 py-1 text-sm transition-all ${className}`}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 mr-2" />
          Claro
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 mr-2" />
          Escuro
        </>
      )}
    </Button>
  )
}
