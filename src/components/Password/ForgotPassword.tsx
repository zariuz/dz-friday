import React, {FormEvent, useState} from 'react';
import style from "./ForgotPassword.module.scss";
import {Modal} from "../common/Modal/Modal";
import {NavLink} from "react-router-dom";
import SuperButton from "../common/SuperButton/SuperButton";
import {SuperInput} from "../common/SuperInput/SuperInput";
import {Error} from "../common/Error/Error";
import {forgotPassword, forgotPasswordError, forgotStatusType} from "../../store/forgot-password-reducer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import { Navigate } from "react-router-dom";
import {AppRootStateType} from "../../store/store";
import {Preloader} from "../common/Preloader/Preloader";

export const ForgotPassword: React.FC = () => {
    const [data, setData] = useState({
        email: '',
        from: 'dz-friday-admin <jek-n@mail.ru>',
        message: `<div style="background-color: orange; padding: 15px;">
        <a href='https://zariuz.github.io/dz-friday/#/set-new-password/$token$'>
        Password recover link
        </a></div>`
    });

    const status = useSelector<AppRootStateType, forgotStatusType>(state => state.forgotPassword.status)
    const error = useSelector<AppRootStateType, string>(state => state.forgotPassword.forgotPasswordError);

    const dispatch: Dispatch<any> = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(forgotPassword(data));
        e.preventDefault();
    };

    if (status === "succeeded") {
        dispatch(forgotPasswordError(''))

        return <Navigate to='/check-email' state={data.email} />
    }

    if (status === "loading") {
        return <Preloader/>
    }

    return (
        <Modal subtitle='Forgot your password?'>
            <form onSubmit={handleSubmit} className={style.forgot}>
                <SuperInput
                    label='Email'
                    type='email'
                    id='email'
                    value={data.email}
                    onChange={e => setData({...data, email: e.target.value})}
                />
                <p>Enter your email address and we will send you further instructions</p>
                <Error error={error}/>
                <SuperButton>Send Instructions</SuperButton>
            </form>
            <div className={style.forgotBottom}>
                <p>Did you remember your password?</p>
                <NavLink to='/login'>Try logging in</NavLink>
            </div>
        </Modal>

    );
}