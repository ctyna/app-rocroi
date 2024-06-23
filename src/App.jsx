import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from '../pages/Login/Login'
import { Principal } from '../pages/Principal/Principal'
import { Register } from '../pages/Register/Register'

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/principal' element={<Principal />} />


        </Routes>

      </>
    </BrowserRouter>
  )
}

export default App
