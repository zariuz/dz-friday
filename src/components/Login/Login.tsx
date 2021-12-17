import React, {FormEvent, useState} from 'react'
import {Link} from "react-router-dom"
import './login.module.css';
import {useDispatch} from "react-redux";
import {loginTC} from "../../store/login-reducer";
import {Modal} from "../common/Modal/Modal";
import style from "../Password/ForgotPassword.module.scss";
import {SuperInput} from "../common/SuperInput/SuperInput";
import SuperButton from "../common/SuperButton/SuperButton";

export const Login = () => {
    const [data, setData] = useState({email: '', password: '', rememberMe: false});
    const dispatch = useDispatch();


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(loginTC(data));
        e.preventDefault();
    };

    return (
        <Modal subtitle='Sign In'>
            <form onSubmit={handleSubmit} className={style.forgot}>
                <SuperInput
                    label='Email'
                    type='email'
                    id='email'
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}
                />
                <SuperInput
                    label='Password'
                    type='password'
                    id='email'
                    value={data.password}
                    onChange={e => setData({...data, password: e.target.value})}
                />
                <div>
                    <SuperButton>Login</SuperButton>
                </div>

            </form>

            <div>
                <Link to="/forgot-password">Forgot password</Link>
            </div>


            <p>Don't have an account?</p>

            <div>
                <Link to="/register">Sign Up</Link>
            </div>

        </Modal>)
}

