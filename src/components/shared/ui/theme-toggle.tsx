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
    const root = window.document.documentElement
    try {
      if (isDark) {
        root.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        root.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    } catch (e) {
      console.error('ThemeToggle Error:', e)
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
