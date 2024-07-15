import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import './Reservas.css'
import { Footer } from '../../Components/Footer/Footer'
const ReservaContext = createContext()


export const Reservas = () => {

    const [reservas, setReservas] = useState([])
    const actualizarReserva = useRef()



    // Petición de las reservas en la API

    const pedirReserva = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch('http://localhost:3000/reservas', options)
            .then(res => res.json())
            .then(data => setReservas(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }

    // Eliminación de Reserva

    const deleteReserva = async (_id) => {
        let controller = new AbortController()
        let options = {
            method: 'delete',
            signal: controller.signal
        }

        await fetch(`http://localhost:3000/reservas/${_id}`, options)
            .then(res => res.json())
            .then(data => setReservas(data))
            .catch(err => console.log(err.message))
            .finally(() => controller.abort())
    }

    // Actualización de datos

    const putDatos = async (e) => {
        e.preventDefault()
        const { current: form } = actualizarReserva


        const fecha = form.elements['fecha'].value
        const hora = form.elements['hora'].value
        const date = `${fecha} ${hora}`
      
        


        const actualizada = {

            id: form.elements['id'].value,
            activity: form.elements['actividad'].value,
            email: form.elements['email'].value,
            date,
            hour: form.elements['hora'].value,
            users: form.elements['users'].value

        }

        let controller = new AbortController()
        let options = {
            method: 'put',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(actualizada)
        }

        await fetch(`http://localhost:3000/reservas`, options)
            .then(res => res.json())
            .then(data => setReservas(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())




    }


    const actualizarBtn = (_id) => {
        const buscar = reservas.find(reservas => reservas._id === _id)
        

        

        const { current: formulario } = actualizarReserva
        formulario.elements['id'].value = buscar._id
        formulario.elements['actividad'].value = buscar.activity
        formulario.elements['email'].value = buscar.email
        formulario.elements['fecha'].value = buscar.date.split(' ')[0]
        formulario.elements['hora'].value = buscar.hour
        formulario.elements['users'].value = buscar.users
    }




    useEffect(() => {
        pedirReserva()
    }, [])




    return (
        <ReservaContext.Provider value={{ reservas, deleteReserva, actualizarReserva, actualizarBtn, putDatos }}>
            <>
                <Header />

                <main className="Main-reservas Reserva">
                    <div className="Reserva-wrapper">
                        <h1 className="Reserva-h1">
                            Mis reservas
                        </h1>
                        <div className="Reserva-container">

                            {reservas.length == 0 && <p>No hay reservas</p>}
                            {reservas.length != 0 && reservas.map(eachReserva =>
                                <DatosReserva key={eachReserva._id}{...eachReserva} />
                            )}


                        </div>
                    </div>
                    <ActualizarReserva />
                </main>
                <Footer/>

            </>
        </ReservaContext.Provider>
    )

}


const DatosReserva = (props) => {
    const { deleteReserva, actualizarBtn } = useContext(ReservaContext)
    const { activity, email, date, users, _id, hour } = props

    // Usado el Split solo para que me muestre la fecha sin la hora
    const soloFecha = date.split(' ')[0]

    return (
        <>
            <ul className="Reserva-ul">
                <li className="Reserva-li"> <span className='Reserva-span'>Actividad: </span>  {activity} </li>
                <li className="Reserva-li">
                  <span className='Reserva-span'>Correo electrónico de la reserva: </span> {email} 
                </li>

                <li className="Reserva-li"> <span className="Reserva-span">Fecha: </span>  {soloFecha}</li>
                <li className="Reserva-li">
                    <h2 className="Reserva-h2"><span className="Reserva-span">Hora:</span> {hour} </h2>
                </li>
                <li className="Reserva-li"> <span className="Reserva-span">Número de personas : </span>  {users} </li>
                <div className="Reserva-btns">
                    <button onClick={() => actualizarBtn(_id)} className='Reserva-btnacc'>Actualizar</button>
                    <button onClick={() => deleteReserva(_id)} className='Reserva-btnacc'>Eliminar</button>


                </div>
            </ul>





        </>
    )
}

const ActualizarReserva = () => {
    const { putDatos, actualizarReserva } = useContext(ReservaContext)

    return (
        <>
            <div className="Reservas">
                <h2 className="Reservas-h2">Actualizar la reserva</h2>
                <form className="Reservas-form" ref={actualizarReserva} onSubmit={putDatos}>
                    <div className="Reservas-wrapper">
                        <div className="Reservas-invisible">
                            <input type="text" name="id" placeholder='id' />
                        </div>

                        <div className="Reservas-in">
                            <h3>Actividad*</h3>
                            <select className="Reservas-selector" name='actividad' defaultValue="Rafting" required >
                                <option className='Reservas-option' value="Rafting">Rafting</option>
                                <option className='Reservas-option' value="Ferratas">Vías Ferratas</option>
                                <option className='Reservas-option' value="Globo">Vuelos en Globo</option>
                                <option className='Reservas-option' value="Parapente">Parapente</option>
                                <option className='Reservas-option' value="Barranquismo">Baranquismo</option>
                                <option className='Reservas-option' value="Escalada">Escalada</option>
                            </select>
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="email">Correo electrónico*</label>
                            <input type="email" className="Reservas-input" id="email" name='email'
                                placeholder="holarocroi@hotmail.com" required
                            />
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="email">Selecciona la fecha*</label>
                            <input type="date" className="Reservas-input" name='fecha' required />

                        </div>

                        <div className="Reservas-in">
                            <h3>Selecciona la hora*</h3>
                            <select className="Reservas-selector" name='hora' required >
                                <option className='Reservas-option' value="9:00">9:00</option>
                                <option className='Reservas-option' value="11:30">11:30</option>
                            </select>
                        </div>
                        <div className="Reservas-in">
                            <h3>Número de personas*</h3>
                            <select className="Reservas-selector" name='users' required>
                                <option className='Reservas-option' value="1">1</option>
                                <option className='Reservas-option' value="2">2</option>
                                <option className='Reservas-option' value="3">3</option>
                                <option className='Reservas-option' value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <input className="Reservas-btn" type="submit" value="Actualizar" />

                </form>
            </div>


        </>
    )
}