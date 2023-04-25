import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return ( 
        <div>
            <div id='signin-form'>
                <h1 class='logo' style={{fontSize: '90px'}}>MedAlert</h1>
                <h1>Please sign in to continue</h1>
                <label>
                    Username:
                    <input type='text'></input>
                </label>
                <label>
                    Password:
                    <input type='password' label='password'></input>
                </label>
                <Link to="main"><button>Go</button></Link>
            </div>
            
        </div>
    
     );
}
 
export default Signin;