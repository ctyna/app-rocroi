import { createContext, useEffect, useState } from 'react'
import './TopActividades.css'
import { NavLink } from 'react-router-dom';
const TopContext = createContext()



// Componente de las actividades TOP de la página en el momento actual 
// Los resultados de la API se muestran filtrados directamente con las actividades TOP
// No se ha reutilizado el componente CARDS porque tiene filtrado los resultados por top === true
export const TopActividades = () => {

    const [top, setTop] = useState([])

    const {VITE_API} = import.meta.env

    const pedirDatos = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}/principal`, options)
            .then(res => res.json())
            .then(data => setTop(data.filter(actividad => actividad.top === true)))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }




    useEffect(() => {
        pedirDatos()
    }, [])

    return (

        <TopContext.Provider value={{}}>
            <>
                <div className="Top">
                    <h2 className="Top-h2">Top experiencias</h2>
                    <div className="Top-wrapper">
                        {top.length == 0 && <p>Cargando Actividades</p>}
                        {top.length != 0 && top.map((eachTop) =>
                            <Article key={eachTop._id} {...eachTop} />)}
                    </div> 
                 </div>
            </>

        </TopContext.Provider>
    )
}
const Article = (props) => {

    const { title, intro, alt, src, src_web, name } = props

    return (
        <>
            <article className="Top-article">
                <picture className="Top-picture">
                    <source srcSet={`/assets/${src}`} type="image/jpg" media="(max-width:1200px)"/>
                    <source srcSet={`/assets/${src_web}`} type="image/webp" media="(max-width:1200px)"/>
                    <img className='Top-img' width={300} height={350} src={`/assets/${src}`} alt={alt} />
                </picture>
                <div className="Top-text">
                    <h3 className="Top-h3"> {name} </h3>
                    <p className="Top-p"> {intro}   </p>
                    <NavLink className="Top-btn" to={`/actividades/${title}`}>Reservar</NavLink>

                </div>
            </article>


        </>
    )
}