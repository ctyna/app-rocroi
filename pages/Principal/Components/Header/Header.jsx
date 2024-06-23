import './Header.css'


export const Header = () =>{
    return(
        <>
           <header className="Header">
            <div className="Header-left">
            <h1 className='Header-h1'>RocRoi centro de deportes de aventura</h1>
            <img src="../../src/assets/roc_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Header-logo" loading='eager' />
            <ul className="Header-ul">
                <li className="Header-li">Actividades</li>
                <li className="Header-li">Centros</li>
                <li className="Header-li">Grupos</li>
                <li className="Header-li">Regala Aventura</li>
                <li className="Header-li">Casales</li>
                
            </ul>
            </div>
            <div className="Header-right">
              <span>busc

              </span>
              <span>bus
                
                </span>
            </div>

        </header>


        </>
    )
}