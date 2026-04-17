import { useState } from 'react'
import { BrandedLogin } from './components/templates/LoginVariants'
import { EmailClient } from './components/EmailClient'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleLogin = (email: string) => {
    setUserEmail(email)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserEmail('')
  }

  if (isLoggedIn) {
    return <EmailClient userEmail={userEmail} onLogout={handleLogout} />
  }

  return <BrandedLogin onLogin={handleLogin} />
}
