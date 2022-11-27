import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import './App.css'
import './components/ActualizarOrdenes'
import './components/CrearOrdenes'
import './components/ListaOrdenes'
import { Login } from'./components/Login'
import { Registrar } from'./components/Registrar'
import { ListaOrdenes } from'./components/ListaOrdenes'
import { CrearOrdenes } from './components/CrearOrdenes';
import { ActualizarOrdenes } from './components/ActualizarOrdenes';
import './components/Registrar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='listaOrdenes' element={<ListaOrdenes />} />
            <Route path='crearOrdenes' element={<CrearOrdenes />} />
            <Route path='actualizarOrdenes' element={<ActualizarOrdenes />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
