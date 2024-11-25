import './LoginStyles.css';
import { FaFacebook } from "react-icons/fa";
export const Login = () => {
  return (
    <main>
<h1>LOGIN <b><FaFacebook /></b></h1>
    <div className='contenedor'>
        <div className='cajaUsuario'>
           <input type="text" placeholder='Username' required></input> 
        </div>
        <div className='cajacontrasenia'>
            <input type="password" placeholder='Password' required/>
        </div>
        <div className='contraseniaOlvidada'>
            <p><a href="#">Forgot Password?</a></p>
        </div>

        <button type="submit">Login</button>
        <div className='resgistrarse'>
            <p>Dont have an account? <a href="#">Register</a></p>
        </div>
        
    </div>
    </main>
    
  )
}
