import React from 'react'

export const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>

                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
<div>
    <label htmlFor="">
        <input type="checkbok" />
        <span>Remember Me</span>
    </label>
</div>
            

            </form>
        </div>
    )
}

export default Login;