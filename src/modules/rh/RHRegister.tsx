import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export function RHRegister() {
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [cargo, setCargo] = useState('')
  const [salario, setSalario] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Funcionário ${nome} registrado com sucesso!`)
    navigate('/rh/action=listar')
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Registrar Funcionário</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome completo"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>CPF:</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Cargo:</label>
            <input
              type="text"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              placeholder="Cargo"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Salário:</label>
            <input
              type="text"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
              placeholder="Salário"
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Registrar</button>
          <Link to="/rh/action=listar" style={styles.linkButton}>Listar Funcionários</Link>
        </form>
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
    maxWidth: '420px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  } as React.CSSProperties,
  title: {
    textAlign: 'center' as const,
    color: '#306e32',
    marginBottom: '30px',
    fontSize: '2rem',
  } as React.CSSProperties,
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '15px',
  } as React.CSSProperties,
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  } as React.CSSProperties,
  label: {
    color: '#333',
    fontWeight: 600,
  } as React.CSSProperties,
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '2px solid #306e32',
    fontSize: '1rem',
    outline: 'none',
  } as React.CSSProperties,
  button: {
    backgroundColor: '#306e32',
    color: 'orange',
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.3s',
  } as React.CSSProperties,
  linkButton: {
    display: 'block',
    textAlign: 'center' as const,
    padding: '15px',
    borderRadius: '8px',
    background: '#2196F3',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 600,
  } as React.CSSProperties,
}