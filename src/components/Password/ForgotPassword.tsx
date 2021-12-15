import React, {FormEvent} from 'react';
import style from "./ForgotPassword.module.scss";
import {AuthModal} from "../SuperComponents/Modal/Modal";
import {NavLink} from "react-router-dom";
import SuperButton from "../SuperComponents/SuperButton/SuperButton";
import SuperInputText from "../SuperComponents/SuperInputText/SuperInputText";


export const ForgotPassword = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <AuthModal subtitle='Forgot your password?'>
            <form onSubmit={handleSubmit} className={style.forgot}>
                <SuperInputText
                    type="email"
                    id="email"
                />
                <p>Enter your email address and we will send you further instructions</p>

                <SuperButton>Send Instructions</SuperButton>

            </form>
            <div className={style.forgotBottom}>
                <p>Did you remember your password?</p>
                <NavLink to='/login'>Try logging in</NavLink>
            </div>
        </AuthModal>

    );
}