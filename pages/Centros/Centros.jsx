import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { Mapa } from '../../Components/Mapa/Mapa'
import './Centros.css'

export const Centros = () => {
    return (
        <>
            <Header />
            <main className='Centros'>
                <div className="Centros-wrapper">
                    <h1 className="Centros-h1">CENTROS DE AVENTURA Y DEPORTES EN LA NATURALEZA</h1>

                    <section className="Centros-section">
                        <h2 className="Centros-h2">
                            ¿Estás preparado para vivir una de las aventuras más divertidas de tu vida?
                        </h2>
                        <p className="Centros-p">
                            ¿Qué preferís: actividades al aire libre de la montaña, en un lago, en el río, en la nieve pirenaica o en aguas mediterráneas?
                           Cada uno de nuestros cuatro centros te ofrece un estilo de actividad distinta, teniendo todos en común la ubicación en un entorno natural de aúpa.
                           Si se trata de pasárselo bien al aire libre, hay RocRoi en (casi) todas partes.
                        </p>
                    </section>

                <div className="Centros-image">
                    <img src="../../src/assets/mar.jpg" width={400} height={711} alt="Fotografía del mar en menorca" title='Mar' className="Centros-img" loading='lazy' />
                    <img src="../../src/assets/actividad.jpg"  width={400} height={711} alt="Fotografía de gente haciendo actividades en el mar" title='Mar kayak' className="Centros-img" loading='lazy' />
                    <img src="../../src/assets/montana.jpg"  width={400} height={711} alt="Fotografía del valle de TENA " title='Montaña' className="Centros-img" loading='lazy' />
                </div>


                </div>

              <Mapa/>

            </main>
            <Footer />
        </>
    )
}