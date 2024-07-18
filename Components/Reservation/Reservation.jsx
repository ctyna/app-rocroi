import './Reservation.css'
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Reservation = () => {
    const [completada, setCompletada] = useState(false)
    const reservarActividad = useRef()
    const navigate = useNavigate()

    
    const {VITE_API} = import.meta.env

    // POST RESERVA NUEVA

    const hacerReserva = async (e) => {
        e.preventDefault()
        const form = reservarActividad.current

        const { fecha, hora, actividad, email, users } = form.elements
        const date = `${fecha.value} ${hora.value}`

        const nueva = {
            activity: actividad.value,
            email: email.value,
            fecha: date,
            hour: hora.value,
            users: users.value
        };

        let controller = new AbortController()

        let options = {
            method: 'post',
            signal: controller.signal,
            body: JSON.stringify(nueva),
            headers: { "Content-type": "application/json" }
        }

        await fetch(`${VITE_API}/reservas`, options)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setCompletada(true)
                } else {
                    console.log('Error al realizar la reserva')
                }
            })
            .catch(err => console.log(err))
            .finally(() => controller.abort())
    }

    const goReservas = () => {
        navigate('/reservas')
    }
// Formulario de la reserva
    return (
        <div className="Reservas">
            <h2 className="Reservas-h2">Reserva de la actividad</h2>
            <form className="Reservas-form" onSubmit={hacerReserva} ref={reservarActividad}>
                <div className="Reservas-wrapper">
                    <div className="Reservas-in">
                        <label htmlFor="actividad">Actividad*</label>
                        <select id="actividad" className="Reservas-selector" name='actividad' defaultValue="Rafting" required>
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
                        <select id="hora" className="Reservas-selector" name='hora' defaultValue="9:00" required>
                            <option className='Reservas-option' value="9:00">9:00</option>
                            <option className='Reservas-option' value="11:30">11:30</option>
                        </select>
                    </div>

                    <div className="Reservas-in">
                        <label htmlFor="users">Número de personas*</label>
                        <select id="users" className="Reservas-selector" name='users' defaultValue="1" required>
                            <option className='Reservas-option' value="1">1</option>
                            <option className='Reservas-option' value="2">2</option>
                            <option className='Reservas-option' value="3">3</option>
                            <option className='Reservas-option' value="4">4</option>
                        </select>
                    </div>
                </div>
                <input className="Reservas-btn" type="submit" value="Reservar" />
            </form>
            <div className="Reserva-completada">
                {completada && (
                    <p className='Reserva-ok'>
                        Reserva completada con éxito. Accede a tus reservas:
                        <span onClick={goReservas} className="Reservas-span"> Aquí </span>
                    </p>
                )}
            </div>
        </div>
    )
}
