import React, { Component } from 'react'
import Form from './Form.js'
import Navbar from './Navbar.js'



export class Login extends Component 
{
        
    render() {
        return (
            <div>
                <Navbar />
                <Form />

            </div>
        )
    }
}

export default Login
