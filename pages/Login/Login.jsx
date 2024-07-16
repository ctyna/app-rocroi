import { useEffect, useRef, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'


export const Login = () => {
    const [login, setLogin] = useState()
    const [error, setError] = useState(false)
    const inicioSesion = useRef()
    const navigate = useNavigate()

    const {VITE_API} = import.meta.env

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



        await fetch(`${VITE_API}/login`, options)
            .then(res => res.json())
            .then(data => {
                if (data.login) {
                    setLogin(true)
                    setError(false)
                    localStorage.setItem('usuario' , JSON.stringify({login:true}))
                } else {
                    setLogin(false)
                    setError(true)
                }
            })
            .catch(err => console.log(err))
            .finally(() => controller.abort(),
                cleanForm())



    }

    // Limpieza del formulario
    const cleanForm = () => {
        const { current: form } = inicioSesion
        form["username"].value = '',
        form["pass"].value = ''
        
    }

    const goRegister = () =>{
        navigate('/register')
    }
    return (
        <>
            {/* Login del usuario  */}
            <div className="Login">

                <div className="Login-wrapper">
                    <div className="Login-info">
                        <h1 className='Login-h1'>RocRoi centro de deportes de aventura</h1>
                        <img src="../../src/assets/rocroi_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Login-logo" loading='eager' />
                        <h2 className='Login-h2' >Iniciar sesión</h2>

                        <form ref={inicioSesion} onSubmit={postLogin} className='Login-form'>
                            <h3 className='Login-h3'>Usuario</h3>
                            <input type="text" name="username" placeholder='Usuario' className='Login-input' required />
                            <h3 className='Login-h3'>Contraseña</h3>
                            <input type="password" name='pass' placeholder='Contraseña' className='Login-input' required/>
                            <input type="submit" value="Iniciar sesión"
                                className='Login-submit' />

                            <h3 className='Login-h3'>¿No tienes una cuenta?
                                <span className='Login-span' onClick={goRegister}>  Regístrate</span></h3>


                        </form>


                        {error && <MensajeError />}
                    </div>
                    <div className="Login-asset">
                        <video className='Login-video' autoPlay muted playsInline loop  >
                            <source src="../../src/assets/rafting_clasico.mp4" type='video/mp4' />
                            <source src="../../src/assets/rafting_clasico.webm" type='video/webm' />

                        </video>


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
                <h4 className="Login-error">
                    El usuario o contraseña no se corresponden con ninguna cuenta
                </h4>
            </div>


        </>
    )
}