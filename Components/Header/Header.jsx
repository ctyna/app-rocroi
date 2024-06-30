import { NavLink } from 'react-router-dom'
import './Header.css'
import { useState, useEffect, createContext, act } from 'react'

const HeaderContext = createContext()

export const Header = () => {
    const [actividades, setActividades] = useState([])
    const [temporada, setTemporada] = useState([])

    const pedirActividades = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch('http://localhost:3000/principal', options)
            .then(res => res.json())
            .then(data => setActividades(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }


    const filtrarActividad = (season) => {
        const filtradasActividades = season ? actividades.filter((actividad) => actividad.season === season) : actividades
        setTemporada(filtradasActividades)
    }


    useEffect(() => {
        pedirActividades()
    }, [])

    return (
        <HeaderContext.Provider value={{ actividades }}>
            <>
                <header className="Header">
                    <div className="Header-left">
                        <h1 className='Header-h1'>RocRoi centro de deportes de aventura</h1>


                        <img src="../../src/assets/roc_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Header-logo" loading='eager' />
                        <nav className="Header-nav Nav">
                            <ul className="Nav-ul">
                                <li className="Nav-li">
                                    <NavLink to='/principal'>Home</NavLink>
                                </li>

                                {/* Creación de un submenú con todas las actividades */}
                                <li className="Nav-li">
                                    <NavLink to="/actividades">Actividades</NavLink>
                                    {/* <ul className="Subnav-ul">
                                        <div className="Subnav-selectores">
                                        <li className='Subnav-li' onClick={() => filtrarActividad('todo')}>Todo el año</li>
                                        <li className='Subnav-li' onClick={() => filtrarActividad('verano')}>Verano</li>
                                        <li className='Subnav-li' onClick={() => filtrarActividad('invierno')}>Invierno</li> 
                                        
                                       
                                        </div>
                                       
                                     
                                    </ul> */}
                                </li>
                                <li className="Nav-li">Centros</li>
                                <li className="Nav-li">Grupos</li>
                            </ul>
                        </nav>
                    </div>
                    <div className="Header-right">
                        <ul className="ul-right">
                            <li className="li-right">
                                Reservas
                            </li>
                            <li className="li-right">
                                Espacio personal
                            </li>
                        </ul>
                    </div>

                </header>
                {/* <div className="Subnav-list">
                                            <h3 className='Subnav-h3'>Actividades disponibles:</h3>
                                            {temporada.length === 0 && <p>Selecciona estación</p>}
                                            {temporada.length != 0 && temporada.map((eachActividad) => (
                                                <Submenu key={eachActividad.id} {...eachActividad} />
                                            ))}
                                        </div> */}


            </>
        </HeaderContext.Provider>
    )
}

// const Submenu = (props) => {
//     const {title} = props
//     return (
//         <>
//         <div className="Subnav-container">
       
//             <NavLink className="Subnav-h4" to={`/actividades/${title}`}>{title}</NavLink>
        
//     </div>
//     </>
//     )
// }