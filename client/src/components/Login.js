import React from 'react'
import { useHistory } from 'react-router-dom';
import './login.css'

function Login() {
    const history = useHistory();
    return (
        <div className='main'>
            <div className='parent__div'>
                <form>
                <h1 className='login__text'> Login</h1>
                    <label> Username </label>
                    <input type='text' placeholder='username'/>
                    <label> Password </label>
                    <input type='password' placeholder='password'/>
                    <button type='submit' onClick='handleSubmit'> Login </button>
                    <h4> New to Webflix? <span onClick={() => history.push('/signup')} className='sign__up'> Signup</span> </h4>
                </form>
                
            </div>  
        </div>
    )
}

export default Login
