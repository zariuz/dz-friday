import React, {ChangeEvent, useState} from "react";
import s from './Profile.module.css'
import {AppRootStateType} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {ChangeEmailAC, ChangeNameAC} from "../store/profile-reducer";

export const Profile = () => {

    const avatar = useSelector<AppRootStateType, string | undefined>(state => state.profile.avatar)
    const storeName = useSelector<AppRootStateType, string>(state => state.profile.name)
    const storeEmail = useSelector<AppRootStateType, string>(state => state.profile.email)

    const dispatch = useDispatch()

    const [name, setName] = useState<string>(storeName)
    const [email, setEmail] = useState<string>(storeEmail)

    const onChangeNick = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onClickSave = () => {
        dispatch(ChangeNameAC(name))
        dispatch(ChangeEmailAC(email))
    }

debugger

    return (
        <div className={s.profileBlock}>

            <h3>Personal Information</h3>

            <img className={s.avatar} src={avatar} alt={'avatar'}/>

            <div className={s.date}>

                <span className={s.description}>NickName</span>
                <input value={name} onChange={onChangeNick}/>

                <span className={s.description}>email</span>
                <input value={email} onChange={onChangeEmail}/>

            </div>

            <div className={s.buttons}>
                <button>Cancel</button>
                <button onClick={onClickSave}>Save</button>
            </div>


        </div>

    )
}