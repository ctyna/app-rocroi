import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import { Login } from '../pages/Login/Login'
import { Principal } from '../pages/Principal/Principal'
import { Register } from '../pages/Register/Register'
import { Actividades } from '../pages/Actividades/Actividades'
import { Centros } from '../pages/Centros/Centros'
import { Usuario } from '../pages/Usuario/Usuario'
import { Rafting } from '../pages/Rafting/Rafting'

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

          </Route>
          <Route path='/centros' element={<Centros />} />
          <Route path='/usuario' element={<Usuario />} />


        </Routes>

      </>
    </BrowserRouter>
  )
}

export default App
