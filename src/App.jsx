import{BrowserRouter , Routes , Route } from 'react-router-dom'
import './App.css'
import { Login } from '../pages/Login/Login'
import { Principal } from '../pages/Principal/Principal'

function App() {

  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route path='/'          element={ <Login/>}/>
      <Route path='/principal' element={<Principal/>}/>

    </Routes>
     
    </>
    </BrowserRouter>
  )
}

export default App
