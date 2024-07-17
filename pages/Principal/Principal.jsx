import { Mapa } from '../../Components/Mapa/Mapa'
import { Header } from '../../Components/Header/Header'
import './Principal.css'
import { TopActividades } from '../../Components/TopActividades/TopActividades'
import { Footer } from '../../Components/Footer/Footer'

import rocroiMp4 from '/assets/rocroi_banner.mp4'
import rocroiWebm from '/assets/rocroi_banner.webm'


export const Principal = () => {
    return (
        <>
            <Header />
            <main className="Main">
                <video muted autoPlay loop playsInline className='Main-video' >
                <source src={rocroiMp4} type='video/mp4' />
                <source src={rocroiWebm} type='video/webm' />
               
                <track kind="captions" src="../../src/assets/subtitles_es.vtt" srcLang="es" label="Español" />

                </video>

                <div className="Insight">
                    <h2 className="Insight-h2">pura experiencia</h2>
                    <h3 className="Insight-h3">Actividades de aventura en toda España para conectar con la naturaleza y el deporte de manera segura</h3>
                </div>

                <TopActividades />
                <Mapa/>
                <Footer/>



            </main>
        </>
    )
}