import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Header } from '../../Components/Header/Header'
import './Reservas.css'
import { Footer } from '../../Components/Footer/Footer'
const ReservaContext = createContext()


export const Reservas = () => {

    const [reservas, setReservas] = useState([])
    const actualizarReserva = useRef()


    const { VITE_API } = import.meta.env

    // Petición de las reservas en la API

    const pedirReserva = async () => {
        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_API}/reservas`, options)
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

        await fetch(`${VITE_API}/reservas/${_id}`, options)
            .then(res => res.json())
            .then(data => setReservas(data))
            .catch(err => console.log(err.message))
            .finally(() => controller.abort())
    }

    // Actualización de datos

    const putDatos = async (e) => {
        e.preventDefault()
        const { current: form } = actualizarReserva

        const fecha = form['fecha'].value
        const hora = form['hora'].value
        const date = `${fecha} ${hora}`

        const actualizada = {
            id: form['id'].value,
            activity: form['actividad'].value,
            email: form['email'].value,
            date,
            hour: form['hora'].value,
            users: form['users'].value
        }

        let controller = new AbortController()
        let options = {
            method: 'put',
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(actualizada)
        }

        await fetch(`${VITE_API}/reservas`, options)
            .then(res => res.json())
            .then(data => setReservas(data))
            .catch(err => console.log(err))
            .finally(() => controller.abort())




    }

    // Botón actualización de los datos
    const actualizarBtn = (_id) => {
        const buscar = reservas.find(reservas => reservas._id === _id)

        const { current: formulario } = actualizarReserva

        formulario['id'].value = buscar._id,
            formulario['actividad'].value = buscar.activity,
            formulario['email'].value = buscar.email,
            formulario['fecha'].value = buscar.date.split(' ')[0],
            formulario['hora'].value = buscar.hour,
            formulario['users'].value = buscar.users
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
                <Footer />
            </>
        </ReservaContext.Provider>
    )
}

// Datos de la reserva del usuario
const DatosReserva = (props) => {
    const { deleteReserva, actualizarBtn } = useContext(ReservaContext)
    const { activity, email, date, users, _id, hour } = props

    // Usado el Split solo para que me muestre la fecha sin la hora
    const soloFecha = date.split(' ')[0]

    return (
        <>
            <ul className="Reserva-ul">
                <li className="Reserva-li">
                    <span className='Reserva-span'>Actividad: </span> {activity}
                </li>
                <li className="Reserva-li">
                    <span className='Reserva-span'>Correo electrónico de la reserva: </span> {email}
                </li>
                <li className="Reserva-li">
                    <span className="Reserva-span">Fecha: </span> {soloFecha}
                </li>
                <li className="Reserva-li">
                    <h2 className="Reserva-h2">
                        <span className="Reserva-span">Hora:</span> {hour}
                    </h2>
                </li>
                <li className="Reserva-li">
                    <span className="Reserva-span">Número de personas: </span> {users}
                </li>
                <li className="Reserva-li Reserva-btns">
                    <button onClick={() => actualizarBtn(_id)} className='Reserva-btnacc'>Actualizar</button>
                    <button onClick={() => deleteReserva(_id)} className='Reserva-btnacc'>Eliminar</button>
                </li>
            </ul>

        </>
    )
}
// Formulario de actualización de la reserva
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
                            <label htmlFor="actividad">Actividad*</label>
                            <select className="Reservas-selector" id="actividad" name='actividad' defaultValue="Rafting" required>
                                <option className='Reservas-option' value="Rafting">Rafting</option>
                                <option className='Reservas-option' value="Ferratas">Vías Ferratas</option>
                                <option className='Reservas-option' value="Globo">Vuelos en Globo</option>
                                <option className='Reservas-option' value="Parapente">Parapente</option>
                                <option className='Reservas-option' value="Barranquismo">Barranquismo</option>
                                <option className='Reservas-option' value="Escalada">Escalada</option>
                            </select>
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="email">Correo electrónico*</label>
                            <input type="email" className="Reservas-input" id="email" name='email' placeholder="holarocroi@hotmail.com" required />
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="fecha">Selecciona la fecha*</label>
                            <input type="date" className="Reservas-input" id="fecha" name='fecha' required />
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="hora">Selecciona la hora*</label>
                            <select className="Reservas-selector" id="hora" name='hora' required>
                                <option className='Reservas-option' value="9:00">9:00</option>
                                <option className='Reservas-option' value="11:30">11:30</option>
                            </select>
                        </div>

                        <div className="Reservas-in">
                            <label htmlFor="users">Número de personas*</label>
                            <select className="Reservas-selector" id="users" name='users' required>
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