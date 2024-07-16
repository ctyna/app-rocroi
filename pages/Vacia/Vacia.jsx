import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { Reservation } from '../../Components/Reservation/Reservation'
import './Vacia.css'

export const Vacia = () =>{
    return(
        <>
        <Header/>
       <div className="Vacia-wrapper">
        <h2 className="Vacia-h2"> Esta actividad no se encuentra disponible</h2>
        <h3 className="Vacia-h3">No te pierdas nuestras actividades:</h3>
        
        <Reservation/>
      
       </div>
        <Footer/>
        
        </>
    )
}