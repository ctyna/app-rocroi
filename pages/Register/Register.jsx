import { useNavigate } from 'react-router-dom'
import './Register.css'
import { useState, useRef } from 'react'


export const Register = () => {
    const [usuarios, setUsuarios] = useState()
    const [registro, setRegistro] = useState(false)
    const formAnadir = useRef()
    const navigate = useNavigate()
    
    const {VITE_API}= import.meta.env


    const goLogin = () => {
        navigate('/')
    }

    // POST Nuevo usuario
    const postUser = async (e) => {
        e.preventDefault()

        const [username, pass] = formAnadir.current
        const nuevo = {
            username: username.value,
            pass: pass.value
        }

        let controller = new AbortController()
        let options = {
            method: 'post',
            signal: controller.signal,
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(nuevo)

        }
        await fetch(`${VITE_API}/register`, options)
            .then(res => res.json())
            .then(data => setUsuarios(data),
                          setRegistro(true))
            .catch(err => console.log(err.message))
            .finally(() => controller.abort())


    }



    return (
        <>
            {/* Registro del usuario  */}
            <div className="Register">

                <div className="Register-wrapper">
                    <div className="Register-info">
                        <h1 className='Register-h1'>RocRoi centro de deportes de aventura</h1>
                        <img src="../../src/assets/rocroi_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Register-logo" loading='eager' />
                        <h2 className='Register-h2' >Registro usuario</h2>




                        <form className='Register-form' ref={formAnadir} onSubmit={postUser}>
                            <h3 className='Register-h3'>Usuario</h3>
                            <input type="text" name="username" placeholder='Usuario' className='Register-input' required/>
                            <h3 className='Register-h3'>Contraseña</h3>
                            <input type="password" name='pass' placeholder='Contraseña' className='Register-input' required />
                            <input type="submit" value="Registrarme"
                                className='Register-submit' />
                            {registro && <p className='Register-message'>Te has registrado exitosamente : <span className='Register-span' onClick={goLogin}>   Inicia sesión</span> </p>}
                            <h3 className='Registers-h3'>¿Ya tienes cuenta?
                                <span className='Register-span' onClick={goLogin}>   Iniciar sesión</span></h3>


                        </form>



                    </div>




                </div>

            </div>
        </>
    )
}