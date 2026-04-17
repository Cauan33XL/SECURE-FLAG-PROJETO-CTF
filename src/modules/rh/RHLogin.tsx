import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const emailCorreto = 'sebastiao.santos@yaldabaothbank.com'
const senhaCorreta = 'kRzM36SU9e'

export function RHLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === emailCorreto && senha === senhaCorreta) {
      localStorage.setItem('usuario', email)
      navigate('/rh/action=registrar')
    } else {
      setErro('Email ou senha incorretos!')
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Sistema de RH</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Usuário:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nome de usuário"
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha de acesso"
              style={styles.input}
              required
            />
          </div>
          {erro && <p style={styles.erro}>{erro}</p>}
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {/*//TODO:Precisamos melhorar a action de listar registros SecureFlag{CaiuNaRedeÉPeixe} */}
      </div>
      <style>{`
        body { margin: 0; font-family: Calibri, Helvetica, sans-serif; background-color: rgb(248, 178, 178); }
      `}</style>
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
    marginTop: '10px',
    transition: 'opacity 0.3s',
  } as React.CSSProperties,
  erro: {
    color: '#d32f2f',
    fontSize: '0.9rem',
    textAlign: 'center' as const,
  } as React.CSSProperties,
}