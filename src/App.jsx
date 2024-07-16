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
import { VuelosGlobo } from '../pages/VuelosGlobo/VuelosGlobo'
import { Parapente } from '../pages/Parapente/Parapente'
import { Barranquismo } from '../pages/Barranquismo/Barranquismo'
import { Escalada } from '../pages/Escalada/Escalada'

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/principal' element={<Principal />} />
          <Route path='/actividades' element={<Actividades />} />
          <Route path='/actividades/*' element={<Outlet />}>
            <Route path='rafting' element={<Rafting />} />
            <Route path='vias_ferratas' element={<ViasFerratas />} />
            <Route path='vuelos_en_globo' element={< VuelosGlobo />} />
            <Route path='parapente' element={<Parapente />} />
            <Route path='barranquismo' element={<Barranquismo />} />
            <Route path='escalada' element={<Escalada />} />

          </Route>
         
          <Route path='/usuario' element={<Usuario />} />
          <Route path='/reservas' element={<Reservas />} />


        </Routes>

      </>
    </BrowserRouter>
  )
}

export default App
