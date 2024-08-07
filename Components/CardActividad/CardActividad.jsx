import './CardActividad.css'
import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


// Este componente esta creado a partir de TOPActividades ya que quiero reutilizarlo en actividades general

export const Card = () => {
    const [card, setCard] = useState([])

  
    const {VITE_API} = import.meta.env

    const pedirActividad = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}/principal`, options)
            .then(res => res.json())
            .then(data => setCard(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }




    useEffect(() => {
        pedirActividad()
    }, [])

    return (
        <>
            {card.length == 0 && <p>Cargando Actividades</p>}
            {card.length != 0 && card.map((eachCard) =>
                <article key={eachCard._id} className="Card-article">
                    <picture className="Card-picture">
                        <source srcSet={`/assets/${eachCard.src}`} type="image/jpg" media="(max-width:1200px)" />
                        <source srcSet={`/assets/${eachCard.src_web}`} type="image/webp" media="(max-width:1200px)" />
                        <img className='Card-img' width={300} height={350} src={`/assets/${eachCard.src}`} alt={eachCard.alt} />
                    </picture>
                    <div className="Card-text">
                        <h2 className="Card-h2"> {eachCard.name} </h2>
                        <p className="Card-p"> {eachCard.intro}   </p>
                        <NavLink className="Card-btn" to={`/actividades/${eachCard.title}`}>Reservar</NavLink>

                    </div>
                </article>
                )}

    </>
    )
}