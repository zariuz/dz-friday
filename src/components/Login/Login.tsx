import React from 'react'
import './login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";

export const Login = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)


    return (<div className="login-wrapper">
        <h1>It-Incubator</h1>
        <h2>Sign In</h2>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>

            <div>
                Forgot password
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <p>Don't have an account?</p>
            <div>
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>)
}

