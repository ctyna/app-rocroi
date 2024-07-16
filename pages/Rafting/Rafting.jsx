// Rafting.js
import './Rafting.css';
import { Header } from '../../Components/Header/Header';
import { createContext, useState, useEffect } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { Reservation } from '../../Components/Reservation/Reservation';

// GET RAFTING Y TODOS SUS APARTADOS
const RafContext = createContext()

export const Rafting = () => {
    const [rafting, setRafting] = useState([])

    const {VITE_API} = import.meta.env

    const pedirInfo = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}/actividades/rafting`, options)
            .then(res => res.json())
            .then(data => setRafting(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }

    useEffect(() => {
        pedirInfo()
    }, [])

    return (
        <RafContext.Provider value={{ rafting }}>
            <>
                <Header />
                <main className="Activity">
                    <div className="Activity-wrapper">
                        {rafting.length == 0 && <p>Cargando información</p>}
                        {rafting.length != 0 && rafting.map((eachRafting) =>
                            <Main key={eachRafting._id} {...eachRafting} />)}
                        <Reservation />
                    </div>
                </main>
                <Footer />
            </>
        </RafContext.Provider>
    )
}

const Main = (props) => {
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
            <img src={`/assets/${general}`} width={400} height={400} alt="general" loading='lazy' />
            <img src={`/assets/${specific}`} width={400} height={400}alt="specific" loading='lazy' />
            <img src={`/assets/${view}`}  width={400} height={400} alt="view" loading='lazy' />
        </>
    )
}

const Incluido = (props) => {
    const { guide, clothes, transport, insurance } = props
    return (
        <>
            <div className="Info-container">
                <h2 className='Info-h2'>Incluido en el precio</h2>
                <ul className="Info-ul">
                    <li className='Info-list'> {guide} </li>
                    <li className='Info-list'> {clothes} </li>
                    <li className='Info-list'> {transport} </li>
                    <li className='Info-list'> {insurance} </li>
                </ul>
            </div>
        </>
    )
}

const Dificultad = (props) => {
    const { level, description, duration } = props
    return (
        <>
            <div className="Info-container">
                <h2 className='Info-h2'>Dificultad de la actividad</h2>
                <ul className="Info-ul">
                    <li className='Info-list'> {level} </li>
                    <li className='Info-list'> {description} </li>
                    <li className='Info-list'> {duration} </li>
                </ul>
            </div>
        </>
    )
}

const Elementos = (props) => {
    const { bikini, cream } = props
    return (
        <>
            <div className="Info-container">
                <h2 className='Info-h2'>Qué hay que llevar</h2>
                <ul className="Info-ul">
                    <li className='Info-list'> {bikini} </li>
                    <li className='Info-list'> {cream} </li>
                </ul>
            </div>
        </>
    )
}

const Apto = (props) => {
    const { swim, age, mayor } = props
    return (
        <>
            <div className="Info-container">
                <h2 className='Info-h2'>Quién puede realizar esta actividad</h2>
                <ul className="Info-ul">
                    <li className='Info-list'> {swim} </li>
                    <li className='Info-list'> {age}</li>
                    <li className='Info-list'> {mayor}</li>
                </ul>
            </div>
        </>

    )
}