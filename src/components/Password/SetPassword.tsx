import React, {FormEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Navigate, useParams} from 'react-router-dom';
import {Dispatch} from 'redux';
import {SuperInput} from "../common/SuperInput/SuperInput";
import SuperButton from "../common/SuperButton/SuperButton";
import {AppRootStateType} from "../../store/store";
import {StatusType} from "../../store/auth-reducer";
import style from "./SetPassword.module.css";
import {Preloader} from "../common/Preloader/Preloader";
import {Modal} from "../common/Modal/Modal";
import {Error} from "../common/Error/Error";
import {getPassword, setPasswordError} from "../../store/set-password-reducer";

export const SetPassword: React.FC = () => {
    const [data, setData] = useState({
        password: '',
        resetPasswordToken: ''
    });

    const status = useSelector<AppRootStateType, StatusType>(state => state.setPassword.status);
    const error = useSelector<AppRootStateType, string | null>(state => state.setPassword.setPasswordError);

    const dispatch: Dispatch<any> = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getPassword(data))

    };
    // @ts-ignore
    const {token} = useParams<{ token: string }>();

    if (status === "succeeded") {
        dispatch(setPasswordError(''))
        return <Navigate to='/login'/>
    }
    if (status === "loading") {
        return <Preloader/>
    }
    return (
        <Modal subtitle='Create new password'>
            <form onSubmit={handleSubmit} className={style.setPassword}>
                <SuperInput
                    label='New password'
                    type="password"
                    id="password"
                    value={data.password}
                    onChange={e => setData({resetPasswordToken: token, password: e.target.value})}
                />

                <p>Create new password and we will send you further instructions to email</p>
                <Error error={error}/>
                <SuperButton
                    type={"submit"}
                    rounded
                    color='dark-blue'
                >Create new password</SuperButton>
            </form>
        </Modal>
    );
}
