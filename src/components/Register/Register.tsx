import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from "./Register.module.css";
import {Navigate, useNavigate} from 'react-router-dom'
import {AppRootStateType} from '../../store/store'
import SuperButton from "../common/SuperButton/SuperButton";
import {Error} from "../common/Error/Error";
import {register, setRegistrationError} from "../../store/register-Reducer";
import {Modal} from "../common/Modal/Modal";
import {SuperInput} from "../common/SuperInput/SuperInput";

export const Register = () => {
    const isRegistered = useSelector<AppRootStateType, boolean>(
        (state) => state.register.isRegistered
    );
    const isFetching = useSelector<AppRootStateType, boolean>(
        (state) => state.register.isFetching
    );
    const error = useSelector<AppRootStateType, string>(
        (state) => state.register.error
    );
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setRegistrationError(""));
        };
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const navigate = useNavigate();

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
        dispatch(setRegistrationError(""));
    };
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
        dispatch(setRegistrationError(""));
    };
    const onConfirmedPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmedPassword(e.currentTarget.value);
        dispatch(setRegistrationError(""));
    };
    const onCancelBtnClick = () => navigate('/login');
    const onRegisterBtnClick = () => {
        if (
            email &&
            password &&
            confirmedPassword &&
            password === confirmedPassword
        ) {
            dispatch(register({email, password: confirmedPassword}));
        } else {
            dispatch(setRegistrationError("not valid email/password /ᐠ-ꞈ-ᐟ\\"));
        }
        // setEmail("");
        setPassword("");
        setConfirmedPassword("");
    };

    if (!isRegistered) {
        return (
            <Modal subtitle='Sign Up'>
                <SuperInput
                    label='Email'
                    type='email'
                    value={email}
                    disabled={isFetching}
                    onChange={onEmailChange}
                />
                <SuperInput
                    label='Password'
                    type='password'
                    value={password}
                    disabled={isFetching}
                    onChange={onPasswordChange}
                />
                <SuperInput
                    label='Confirm password'
                    type='password'
                    value={confirmedPassword}
                    disabled={isFetching}
                    onChange={onConfirmedPasswordChange}
                />
                <Error error={error}/>
                <div className={style.button_block}>
                    <SuperButton rounded
                                 color='light-blue'
                                 disabled={isFetching}
                                 width={125} onClick={onCancelBtnClick}>
                        Cancel
                    </SuperButton>
                    <SuperButton rounded
                                 color='dark-blue'
                                 onClick={onRegisterBtnClick}
                                 disabled={isFetching}
                                 width={190}>
                        Register
                    </SuperButton>
                </div>
            </Modal>
        );
    } else {
        return <Navigate to='/login'/>;
    }
}
