import { Header } from './Components/Header/Header'
import './Principal.css'

export const Principal = () =>{
    return(
        <>
        <Header/>

        <main className="Main">
         <video muted autoPlay loop playsInline className='Main-video' >
            <source src='../../src/assets/rocroi_banner.webm' />
         </video>

         <div className="Insight">
            <h2 className="Insight-h2">pura experiencia</h2>
            <h3 className="Insight-h3">Actividades de aventura en toda España para conectar con la naturaleza y el deporte de manera segura</h3>
         </div>









         <div className="Mapa">
            <h2 className="Mapa-h2">¿Dónde estamos?</h2>
            <iframe src="https://www.google.com/maps/d/embed?mid=1BDo34-mAe4TprCpZeaS1PCyNksug_mY&ehbc=2E312F" 
            width="640" height="480"
            referrerPolicy="no-referrer"
            http-equiv="Content-Security-Policy" content="default-src 'self'; frame-ancestors 'none';"

            >
           
            </iframe>
         </div>



     

            
        </main>
        </>
    )
}