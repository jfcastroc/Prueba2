import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/ActualizarOrdenes'
import './components/CrearOrdenes'
import './components/ListaOrdenes'
import { Login } from'./components/Login'
import './components/Registrar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Login />
        </div>
  )
}

export default App
