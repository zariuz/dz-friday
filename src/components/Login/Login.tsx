import React, {FormEvent, FocusEvent, useState} from 'react'
import {Link, Navigate} from "react-router-dom"
import style from './login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../store/login-reducer";
import {Modal} from "../common/Modal/Modal";
import {SuperInput} from "../common/SuperInput/SuperInput";
import SuperButton from "../common/SuperButton/SuperButton";
import {AppRootStateType} from "../../store/store";
import {StatusType} from "../../store/auth-reducer";
import SuperCheckbox from "../common/SuperCheckbox/SuperCheckbox";
import {Error} from "../common/Error/Error";

export const Login = () => {
    const [data, setData] = useState({email: '', password: '', rememberMe: false});
    const [errors, setErrors] = useState({
        emailValid: false,
        passwordValid: false,
        formErrors: {
            email: '',
            password: '',
        },
    });

    const status = useSelector<AppRootStateType, StatusType>(state => state.auth.status);
    const error = useSelector<AppRootStateType, string | null>(state => state.auth.error);
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const dispatch = useDispatch();

    const validate = (e: FocusEvent<HTMLInputElement>) => {
        switch (e.currentTarget.type) {
            case "email":
                if (!e.currentTarget.value) {
                    setErrors({...errors, emailValid: true, formErrors: {...errors.formErrors, email: "Required"}});
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.currentTarget.value)) {
                    setErrors({
                        ...errors,
                        emailValid: true,
                        formErrors: {...errors.formErrors, email: "Invalid email address"}
                    });
                }
                break;
            case "password":
                if (!e.currentTarget.value) {
                    setErrors({
                        ...errors,
                        passwordValid: true,
                        formErrors: {...errors.formErrors, password: "Required"},
                    });
                } else if (e.currentTarget.value.length < 6) {
                    setErrors({
                        ...errors,
                        passwordValid: true,
                        formErrors: {...errors.formErrors, password: "Invalid password, minimum length 8 characters"},
                    });
                }
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(loginTC(data));
        e.preventDefault();
    };

    if (isLoggedIn) {
        return <Navigate to='/profile'/>
    }

    return (
        <Modal subtitle='Sign In'>
            <form onSubmit={handleSubmit} className={style.forgot}>
                <SuperInput
                    label='Email'
                    type='email'
                    value={data.email}
                    onBlur={e => validate(e)}
                    onChange={e => setData({...data, email: e.target.value})}
                    error={errors.emailValid ? errors.formErrors.email : null}
                />
                <SuperInput
                    label='Password'
                    type='password'
                    onBlur={e => validate(e)}
                    value={data.password}
                    onChange={e => setData({...data, password: e.target.value})}
                    error={errors.passwordValid ? errors.formErrors.password : null}
                />

                <div className={style.checkboxBlock}>
                    <SuperCheckbox
                        checked={data.rememberMe}
                        onChange={e => setData({...data, rememberMe: e.target.checked})}
                    >Remember Me</SuperCheckbox>
                    <Link to='/forgot-password'>Forgot Password</Link>
                </div>
                <Error error={error}/>
                <div className={style.buttonBlock}>
                    <SuperButton
                        color='dark-blue'
                        rounded
                        type={"submit"}
                        disabled={status === "loading"}
                    >Login</SuperButton>
                </div>
            </form>

            <div className={style.bottom}>
                <p>Don't have an account?</p>
                <Link to="/register">Sign Up</Link>
            </div>
        </Modal>)
}
