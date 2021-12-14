import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.profileBlock}>

            <h3>Personal Information</h3>

            <div className={s.avatar}>Avatar</div>

            <div className={s.date}>

                <span className={s.description}>NickName</span>
                <input/>

                <span className={s.description}>email</span>
                <input/>

            </div>

            <div className={s.buttons}>
                <button>Cancel</button>
                <button>Save</button>
            </div>


        </div>

    )
}