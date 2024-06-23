import { useNavigate } from 'react-router-dom'
import './Register.css'


export const Register = () => {
    const navigate = useNavigate()
    const goLogin =()=>{
        navigate('/')
    }
    return (
        <>
            {/* Login del usuario  */}
            <div className="Register">

                <div className="Register-wrapper">
                    <div className="Register-info">
                        <h1 className='Register-h1'>RocRoi centro de deportes de aventura</h1>
                        <img src="../../src/assets/rocroi_logo.png" alt="roc roi sitio dónde hay muchas actividades de aventura" title='ROCROI centro actividades' className="Register-logo" loading='eager' />
                        <h2 className='Register-h2' >Registro usuario</h2>

                        <form className='Register-form'>
                            <h3 className='Register-h3'>Usuario</h3>
                            <input type="text" name="username" placeholder='Usuario' className='Register-input' />
                            <h3 className='Register-h3'>Contraseña</h3>
                            <input type="password" name='pass' placeholder='Contraseña' className='Register-input' />
                            <input type="submit" value="Registrarme"
                                className='Register-submit' />

                            <h3 className='Register-h3'>¿Ya tienes cuenta?
                                <span className='Register-span' onClick={goLogin}>   Iniciar sesión</span></h3>


                        </form>



                    </div>




                </div>

            </div>
        </>
    )
}