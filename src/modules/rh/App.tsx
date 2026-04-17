import { Routes, Route, Navigate } from 'react-router-dom'
import RHLogin from './pages/Login'
import RHDashboard from './pages/Dashboard'
import SecretAudit from './pages/SecretAudit'
import EmployeeRegister from './pages/EmployeeRegister'

export default function RHApp() {
  return (
    <Routes>
      <Route path="/" element={<RHLogin />} />
      <Route 
        path="/dashboard" 
        element={<RHDashboard />} 
      />
      {/* Rotas administrativas modernas - Acesso direto permitido para o desafio CTF */}
      <Route 
        path="/registrar" 
        element={<EmployeeRegister />} 
      />
      <Route 
        path="/audit" 
        element={<SecretAudit />} 
      />
      {/* Rota legada para o desafio CTF - compatibilidade */}
      <Route 
        path="/listar" 
        element={<SecretAudit />} 
      />
    </Routes>
  )
}
