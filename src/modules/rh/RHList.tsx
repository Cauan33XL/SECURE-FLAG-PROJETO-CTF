import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Funcionario {
  id: number
  nome: string
  cpf: string
  cargo: string
  salario: string
}

export function RHList() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('funcionarios')
    if (stored) {
      setFuncionarios(JSON.parse(stored))
    }
  }, [])

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Lista de Funcionários</h1>
        
        {funcionarios.length === 0 ? (
          <p style={styles.empty}>Nenhum funcionário cadastrado.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Nome</th>
                <th style={styles.th}>CPF</th>
                <th style={styles.th}>Cargo</th>
                <th style={styles.th}>Salário</th>
              </tr>
            </thead>
            <tbody>
              {funcionarios.map((func) => (
                <tr key={func.id} style={styles.tr}>
                  <td style={styles.td}>{func.nome}</td>
                  <td style={styles.td}>{func.cpf}</td>
                  <td style={styles.td}>{func.cargo}</td>
                  <td style={styles.td}>{func.salario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        
        <div style={styles.buttonGroup}>
          <Link to="/rh/action=registrar" style={styles.buttonPrimary}>
            Novo Funcionário
          </Link>
          <Link to="/rh" style={styles.buttonSecondary}>
            Sair
          </Link>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    padding: '20px',
  } as React.CSSProperties,
  card: {
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    padding: '50px 40px',
    width: '100%',
    maxWidth: '800px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  } as React.CSSProperties,
  title: {
    textAlign: 'center' as const,
    color: '#306e32',
    marginBottom: '30px',
    fontSize: '2rem',
  } as React.CSSProperties,
  table: {
    width: '100%' as const,
    borderCollapse: 'collapse' as const,
    marginBottom: '30px',
  } as React.CSSProperties,
  th: {
    padding: '12px',
    textAlign: 'left' as const,
    background: '#306e32',
    color: 'white',
  } as React.CSSProperties,
  td: {
    padding: '12px',
    borderBottom: '1px solid #ddd',
  } as React.CSSProperties,
  tr: {
    background: '#fff',
  } as React.CSSProperties,
  empty: {
    textAlign: 'center' as const,
    color: '#666',
    marginBottom: '30px',
  } as React.CSSProperties,
  buttonGroup: {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
  } as React.CSSProperties,
  buttonPrimary: {
    display: 'inline-block',
    padding: '15px 30px',
    borderRadius: '8px',
    background: '#306e32',
    color: 'orange',
    textDecoration: 'none',
    fontWeight: 600,
  } as React.CSSProperties,
  buttonSecondary: {
    display: 'inline-block',
    padding: '15px 30px',
    borderRadius: '8px',
    background: '#d32f2f',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
  } as React.CSSProperties,
}