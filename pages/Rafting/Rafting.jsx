// Rafting.js
import './Rafting.css';
import { Header } from '../../Components/Header/Header';
import { createContext, useState, useEffect } from 'react';
import { Footer } from '../../Components/Footer/Footer';
import { Reservation } from '../../Components/Reservation/Reservation';


export const RafContext = createContext();

export const Rafting = () => {
    const [rafting, setRafting] = useState([]);

    const pedirInfo = async () => {
        let controller = new AbortController();
        let options = {
            method: 'get',
            signal: controller.signal
        };

        await fetch('http://localhost:3000/actividades/rafting', options)
            .then(res => res.json())
            .then(data => setRafting(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort());
    };

    useEffect(() => {
        pedirInfo();
    }, []);

    return (
        <RafContext.Provider value={{ rafting }}>
            <>
                <Header />
                <main className="Rafting">
                    <div className="Rafting-wrapper">
                        {rafting.length === 0 && <p>Cargando información</p>}
                        {rafting.length !== 0 && rafting.map((eachRafting) =>
                            <Main key={eachRafting._id} {...eachRafting} />)}
                        <Reservation />
                    </div>
                </main>
                <Footer />
            </>
        </RafContext.Provider>
    );
}

const Main = (props) => {
    const { title, src, info, included, difficulty, stuff, apt, precio } = props
    return (
        <>
            <section className="Rafting-section">
                <h1 className='Rafting-h1'> {title} : {precio}€ por persona </h1>
                <div className="Rafting-img">
                    <Imagenes {...src} />
                </div>
                <p className="Rafting-p"> {info} </p>
            </section>
            <div className="Rafting-info Info">
                <Incluido {...included} />
                <Dificultad {...difficulty} />
                <Elementos {...stuff} />
                <Apto {...apt} />
            </div>
        </>
    );
}

const Imagenes = (props) => {
    const { general, specific, view } = props
    return (
        <>
            <img src={`/assets/${general}`} alt="general" />
            <img src={`/assets/${specific}`} alt="specific" />
            <img src={`/assets/${view}`} alt="view" />
        </>
    );
}

const Incluido = (props) => {
    const { guide, clothes, transport, insurance } = props
    return (
        <>
            <div className="Info-container">
                <ul className="Info-ul">Incluido en el precio</ul>
                <li className='Info-li'> {guide} </li>
                <li className='Info-li'> {clothes} </li>
                <li className='Info-li'> {transport} </li>
                <li className='Info-li'> {insurance} </li>
            </div>
        </>
    );
}

const Dificultad = (props) => {
    const { level, description, duration } = props
    return (
        <>
            <div className="Info-container">
                <ul className="Info-ul">Dificultad de la actividad</ul>
                <li className='Info-li'> {level} </li>
                <li className='Info-li'> {description} </li>
                <li className='Info-li'> {duration} </li>
            </div>
        </>
    );
}

const Elementos = (props) => {
    const { bikini, cream } = props
    return (
        <>
            <div className="Info-container">
                <ul className="Info-ul">Qué hay que llevar</ul>
                <li className='Info-li'> {bikini} </li>
                <li className='Info-li'> {cream} </li>
            </div>
        </>
    );
}

const Apto = (props) => {
    const { swim, age, mayor } = props
    return (
        <>
            <div className="Info-container">
                <ul className="Info-ul">Quién puede realizar esta actividad</ul>
                <li className='Info-li'> {swim} </li>
                <li className='Info-li'> {age}</li>
            </div>
        </>

    )
}