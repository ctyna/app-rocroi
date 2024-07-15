import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { Login } from '../pages/Login/Login'
import { Principal } from '../pages/Principal/Principal'
import { Register } from '../pages/Register/Register'
import { Actividades } from '../pages/Actividades/Actividades'
import { Centros } from '../pages/Centros/Centros'
import { Usuario } from '../pages/Usuario/Usuario'
import { Rafting } from '../pages/Rafting/Rafting'
import { Reservas } from '../pages/Reservas/Reservas'
import { ViasFerratas } from '../pages/ViasFerratas/ViasFerratas'

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/principal' element={<Principal />} />
          <Route path='/actividades' element={<Actividades />}/>
          <Route path='/actividades/*' element={<Outlet />}>
                <Route path='rafting' element={<Rafting/>}/>
                <Route path='vias_ferratas' element={<ViasFerratas/>}/>

          </Route>
          <Route path='/centros' element={<Centros />} />
          <Route path='/usuario' element={<Usuario />} />
          <Route path='/reservas' element={<Reservas />} />


        </Routes>

      </>
    </BrowserRouter>
  )
}

export default App
