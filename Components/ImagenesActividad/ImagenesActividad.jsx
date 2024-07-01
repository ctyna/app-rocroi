import './ImagenesActividad'

export 
const Imagenes = ({ general, specific, view }) => {
    return (
        <>
            <img src={general} alt="Imagen general" />
            <img src={specific} alt="Imagen específica" />
            <img src={view} alt="Vista de la imagen" />
        </>
    )
}
