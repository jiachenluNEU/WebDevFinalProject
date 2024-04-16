import React from 'react';

const RegisterForm = () =>{
    return(
        <div className = 'wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className = "input-box">
                    <input type="text" placeholder='Username' required />
                </div>
                <div className = "input-box">
                    <input type="text" placeholder='Email' required />
                </div>
                <div className = "input-box">
                    <input type="password" placeholder='Password' required />
                </div>
                <div className = "input-box">
                    <input type="password" placeholder='Confirm Password' required />
                </div>
                <button type="submit" >Register</button>
            </form>
        </div>

    )
}

export default RegisterForm;