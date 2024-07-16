
import { useEffect, useState } from 'react'
import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { Reservation } from '../../Components/Reservation/Reservation'
import './VuelosGlobo.css'



export const VuelosGlobo = () =>{
 
    const [globo, setGlobo] = useState([])

    const {VITE_API} = import.meta.env 

    const pedirGlobo= async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}/actividades/vuelos_en_globo`, options)
            .then(res => res.json())
            .then(data => setGlobo(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }


    useEffect(() => {
        pedirGlobo()
    }, [])

    return (

        <>
            <Header />
            <main className="Activity">
                <div className="Activity-wrapper">
                    {globo.length === 0 && <p>Cargando información</p>}
                    {globo.length !== 0 && globo.map((eachFerrata) =>
                        <Principal key={eachFerrata._id} {...eachFerrata} />)}


                    <Reservation />
                </div>
            </main>



            <Footer />
        </>
    )
}

const Principal = (props) => {
    const { title, src, info, included, difficulty, stuff, apt, precio } = props
    return (
        <>
            <section className="Activity-section">
                <h1 className='Activity-h1'> {title} : {precio}€ por persona </h1>
                <div className="Activity-img">
                    <Imagenes {...src} />
                </div>
                <p className="Activity-p"> {info} </p>
            </section>
            <div className="Activity-info Info">
                <Incluido {...included} />
                <Dificultad {...difficulty} />
                <Elementos {...stuff} />
                <Apto {...apt} />
            </div>
        </>
    )
}

const Imagenes = (props) => {
    const { general, specific, view } = props
    return (
        <>
            <img className='Activity-photo' width={400} height={400} src={`/assets/${general}`} alt="general" loading='lazy' />
            <img className='Activity-photo' width={400} height={400} src={`/assets/${specific}`} alt="specific" loading='lazy' />
            <img className='Activity-photo' width={400} height={400} src={`/assets/${view}`} alt="view" loading='lazy' />
        </>
    )
}

const Incluido = (props) => {
    const { transport, insurance, food, photos } = props;
    return (
        <div className="Info-container">
            <h2 className="Info-h2">Incluido en el precio</h2>
            <ul className="Info-ul">
                <li className='Info-list'> {transport} </li>
                <li className='Info-list'> {insurance} </li>
                <li className='Info-list'> {food} </li>
                <li className='Info-list'> {photos} </li>
            </ul>
        </div>
    )
}

const Dificultad = (props) => {
    const { level, duration } = props;
    return (
        <div className="Info-container">
            <h2 className="Info-h2">Dificultad de la actividad</h2>
            <ul className="Info-ul">
                <li className='Info-list'> {level} </li>
                <li className='Info-list'> {duration} </li>
            </ul>
        </div>
    )
}

const Elementos = (props) => {
    const { dress, ticket } = props;
    return (
        <div className="Info-container">
            <h2 className="Info-h2">Qué hay que llevar</h2>
            <ul className="Info-ul">
                <li className='Info-list'> {dress} </li>
                <li className='Info-list'> {ticket} </li>
            </ul>
        </div>
    )
}

const Apto = (props) => {
    const { age, mayor, exclusion } = props;
    return (
        <div className="Info-container">
            <h2 className="Info-h2">Quién puede realizar esta actividad</h2>
            <ul className="Info-ul">
                <li className='Info-list'> {age} </li>
                <li className='Info-list'> {mayor} </li>
                <li className='Info-list'> {exclusion} </li>
            </ul>
        </div>
   
    )
}