import { useEffect, useRef, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const [login, setLogin] = useState()
    const [error, setError] = useState(false)
    const inicioSesion = useRef()
    const navigate = useNavigate()

    // Navegación => datos : true
    useEffect(() => {
        if (login) {
            navigate('/principal')
        }

    }, [login])



    //    Login de usuario
    const postLogin = async (e) => {
        e.preventDefault()

        const { current: form } = inicioSesion

        const nuevo = {
            username: form['username'].value,
            pass: form['pass'].value
        }
        let controller = new AbortController()

        let options = {
            method: 'post',
            signal: controller.signal,
            body: JSON.stringify(nuevo),
            headers: { "Content-type": "application/json" }
        }



        await fetch('http://localhost:3000/login', options)
            .then(res => res.json())
            .then(data => {
                if (data.login) {
                    setLogin(true)
                    setError(false)
                } else {
                    setLogin(false)
                    setError(true)
                }
            })
            .catch(err => console.log(err))
            .finally(() => controller.abort(),
                cleanForm())



    }

    // Limpieza del formulario y error
    const cleanForm = () => {
        const { current: form } = inicioSesion
        form["username"].value = '',
            form["pass"].value = '',
            setError('')
    }
    return (
        <>

            <div className="Login">

                <div className="Login-wrapper">
                    <div className="Login-info">
                        <img src="../../src/assets/rocroi.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Login-logo" loading='eager' />
                        <h1>Login</h1>

                        <form ref={inicioSesion} onSubmit={postLogin} className='Login-form'>
                            <input type="text" name="username" placeholder='Usuario' />
                            <input type="password" name='pass' placeholder='Contraseña' />
                            <input type="submit" value="Iniciar sesión" />

                        </form>

                        {error && <MensajeError />}
                    </div>
                    <div className="Login-images">
                        <img className='Login-img' src="" alt="" />
                    </div>

                </div>
            </div>

        </>
    )
}


const MensajeError = () => {
    return (
        <>
            <div className="Login-message">
                Nombre de usuario o contraseña incorrecta
            </div>


        </>
    )
}