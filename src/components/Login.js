import axios from "axios"
import { useHistory } from "react-router-dom"
import React, { useState } from "react"

const Login = () => {
    const { push } = useHistory();

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            push('/friends')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (

        <div>

            <h2>Login</h2>
            <form onSubmit={handleSubmit}>

                <div className='username-container'>
                    <label htmlFor="username">Username </label>
                    <input onChange={handleChange} name="username" id="username" />
                </div>

                <div className='password-container'>
                    <label htmlFor="password">Password </label>
                    <input onChange={handleChange} name="password" type="password" id="password" />
                </div>

                <button>SUBMIT</button>


            </form>
        </div>

    )
}

export default Login;