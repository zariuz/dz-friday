import React, {ChangeEvent, useState} from 'react'
import './login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {passwordLoginAC, setIsLoggedInAC, usernameLoginAC} from "../../store/login-reducer";

export const Login = () => {
    const dispatch = useDispatch();

    const storeIsLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const storeUsername = useSelector<AppRootStateType, string>(state => state.login.username)
    const storePassword = useSelector<AppRootStateType, string>(state => state.login.password)


    const [value, setValue] = useState<boolean>(storeIsLoggedIn)
    const [username, setUsername] = useState<string>(storeUsername)
    const [password, setPassword] = useState<string>(storePassword)

    const onChangeUsername = () => {
        // (e: ChangeEvent<HTMLInputElement>) => {
        //     setUsername(e.currentTarget.value)
        // }
    }
    const onChangePassword = () => {
        // (e: ChangeEvent<HTMLInputElement>) => {
        //     setPassword(e.currentTarget.value)
        // }
    }



    const onClickForgotPassword = () => {
        //redirect
    }
    const onClickSignUp = () => {
        //redirect
    }

    const onClickLogin = () => {
        dispatch(usernameLoginAC(username))
        dispatch(passwordLoginAC(password))
        dispatch(setIsLoggedInAC(value))
    }

    return (<div className="login-wrapper">

        <h1>It-Incubator</h1>

        <h2>Sign In</h2>

        <div>
            <p>Username</p>
            <input value={username} onChange={onChangeUsername}/>
            <p>Password</p>
            <input value={password} onChange={onChangePassword}/>
        </div>

        <div>
            <button onClick={onClickForgotPassword}> Forgot password</button>
        </div>

        <div>
            <button onClick={onClickLogin}>Login</button>
        </div>

        <p>Don't have an account?</p>

        <div>
            <button onClick={onClickSignUp}>Sign Up</button>
        </div>

    </div>)
}

