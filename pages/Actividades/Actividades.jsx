import { Card } from '../../Components/CardActividad/CardActividad'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import './Actividades.css'
// Las actividades al ser elementos más generales reutilizan componentes: Header, Card o Footer
export const Actividades = () =>{
    return(
        <>
        <Header/>

        <main className="Actividades">
            <h1 className="Actividades-h1">Actividades de aventura</h1>
        <div className="Actividades-wrapper">

        <Card/>   
        </div> 
        </main>
        <Footer/>
   
        </>
    )
}