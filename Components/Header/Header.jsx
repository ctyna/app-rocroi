import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'


export const Header = () => {

    // Menú responsive 
    const [menu, setMenu] = useState(false)
    const toogle = () => setMenu(!menu)

    //    Extraído de ChatGPT (uso para indicar si se encuentra en principal 
    //    que sea h1, sino no)
    const location = useLocation()

    // LocalStorage cierre de sesión
    const navigate = useNavigate()
    const cerrarSesión = () => {
        localStorage.removeItem('usuario')
        navigate('/')
    }


    return (

        <>
            <header className="Header">
                <div className="Header-wrapper">
                    {location.pathname === '/principal' && (
                        <h1 className='Header-h1'>RocRoi centro de deportes de aventura</h1>
                    )}

                    <div className="Header-container">
                    <img src="/assets/roc_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Header-logo" loading='eager' />
                   </div> 
                   {/*SVG para responsive + toogle */}
                    <svg onClick={toogle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Header-svg" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    {/* Booleano con la propiedad isActive */}
                    <nav className={`Header-nav Nav ${menu ? 'isActive' : ''}`}>
                        <ul className="Nav-ul">
                            <li className="Nav-li">
                                <NavLink to='/principal'>Home</NavLink>
                            </li>
                            <li className="Nav-li">
                                <NavLink to="/actividades">Actividades</NavLink>
                            </li>
                            <li className="Nav-li">
                                <NavLink to='/centros'>Centros</NavLink>
                            </li>

                            <li className="Nav-li">
                                <NavLink to='/reservas'>Reservas</NavLink>
                            </li>
                            <li onClick={cerrarSesión} className="Nav-li">
                                Cerrar sesión
                            </li>

                        </ul>
                        
                    </nav>
                </div>


            </header>


        </>

    )
}
