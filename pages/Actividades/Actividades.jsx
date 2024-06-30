import { Card } from '../../Components/CardActividad/CardActividad'
import { Header } from '../../Components/Header/Header'
import './Actividades.css'
// Las actividades al ser elementos más generales reutilizan componentes: Header, Card o Footer
export const Actividades = () =>{
    return(
        <>
        <Header/>

        <main className="Actividades">
        <div className="Actividades-wrapper">

        <Card/>   
        </div> 
        </main>
   
        </>
    )
}