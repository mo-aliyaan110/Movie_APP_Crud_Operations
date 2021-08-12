import React from 'react';
import { useHistory } from 'react-router-dom';
import './login.css'

function Login() {
    const history = useHistory();
    return (
        <div className='main'>
            <div className='parent__div'>
                <form>
                <h1 className='login__text'> Sign-up</h1>
                    <label> Fullname </label>
                    <input type='text' placeholder='username'/>
                    <label> Password </label>
                    <input type='password' placeholder='password'/>
                    <label> Re-type Password </label>
                    <input type='password' placeholder='password'/>
                    <button type='submit' onClick='handleSubmit'> Register </button>
                    <h4> Already a member? <span onClick={() => history.push('/login')} className='sign__up'> Login</span> </h4>
                </form>
                
            </div>  
        </div>
    )
}

export default Login
