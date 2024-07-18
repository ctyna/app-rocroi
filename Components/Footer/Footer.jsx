import './Footer.css'
import { NavLink } from 'react-router-dom'
import aenorImage from '../../src/assets/aenor.webp';
import biosphereImage from '../../src/assets/biosphere.png';
import travelersImage from '../../src/assets/travelers.gif';


export const Footer = () => {
    return (
        <>
            <footer className="Footer">
                <div className="Footer-wrapper">
                    <div className="Footer-awards">
                        <img className='Footer-img' width={100} height={100} src={aenorImage} alt="Sello de calidad aenor" title='aenor' loading='lazy' />
                        <img className='Footer-img' width={100} height={100} src={biosphereImage} alt="Sello calidad Biosphere" title='Biosphere logo' loading='lazy' />
                        <img className='Footer-img' width={100} height={100}  src={travelersImage} alt="travelers choise 2023 " title='premio travelers choise' loading='lazy' />

                    </div>
                    <div className="Footer-links">
                        <ul className="Footer-ul">
                            <li className="Footer-li">
                                <NavLink to='/principal'>Home</NavLink>
                            </li>
                            <li className="Footer-li">
                                <NavLink to="/actividades">Actividades</NavLink>
                            </li>
                            <li className="Footer-li">
                                <NavLink to="/centros">Centros</NavLink>
                            </li>
                           
                            <li className="Footer-li">
                                <NavLink to='/reservas'>Reservas</NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="Footer-contact">

                        <img src="/assets/rocblanco.png" width={500} height={32} alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Footer-logo" loading='lazy' />

                        <ul className="Footer-ul">
                            <li className="Footer-li">
                                <a href="mailto:booking@rocroi.com">booking@rocroi.com</a>
                            </li>
                            <li className="Footer-li">
                                (+34) 973 62 20 35
                            </li>
                        </ul>
                    </div>

                </div>
            </footer>


        </>
    )
}