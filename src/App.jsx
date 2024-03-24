import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

// import { Link } from 'react-router-dom'


function App() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/gallery")
  }

  return (
    <>
      <h1>Vite + React - Projeto Senai CRUD</h1>
      <div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div>
          <h2>Login</h2>
          <form action="">
            <div>
              <label htmlFor="name">Nome:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input type="password" />
            </div>
            <button onClick={handleLogin}>Entrar</button>
           {/* <Link to="/gallery">Entrar</Link> */}
          </form>
        </div>

      </div>
    
    </>
  )
}

export default App
