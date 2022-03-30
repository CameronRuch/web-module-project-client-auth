import React from "react"

const Login = () => {
    return (

        <div>

            <h2>Login</h2>
            <form>

                <div className='username-container'>
                    <label for="username">Username </label>
                    <input id="username" />
                </div>

                <div className='password-container'>
                    <label for="password">Password </label>
                    <input type="password" id="password" />
                </div>

                <button>SUBMIT</button>


            </form>
        </div>

    )
}

export default Login;