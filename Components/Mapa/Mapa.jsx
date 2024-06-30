import './Mapa.css'


export const Mapa = () => {
    return (
        <>



            <div className="Mapa">
                <h2 className="Mapa-h2">¿Dónde estamos?</h2>
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1BDo34-mAe4TprCpZeaS1PCyNksug_mY"
                    width="640"
                    height="480"
                    title="Ubicación de la empresa"
                    referrerPolicy="no-referrer"
                    allowFullScreen
                ></iframe>
            </div>

        </>
    )
}