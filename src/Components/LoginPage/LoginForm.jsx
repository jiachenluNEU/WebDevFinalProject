import React from 'react';
import './LoginForm.css';

const LoginPage = () =>{
    return(
        <div className = 'wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className = "input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className = "input-box">
                    <input type="password" placeholder='Password' required />
                </div>

                <div className = "remember-forget">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forget Password?</a>
                </div>
                <button type="submit" >Login in</button>

                <div className="register-lin">
                    <p>Need a new account?<a href='#'>Register</a></p> 
                </div>
            </form>
        </div>

    )
}

export default LoginPage