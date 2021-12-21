import React from 'react';
import {useLocation} from "react-router";
import {Modal} from "../common/Modal/Modal";
import {EmailSvg} from "../../assets/icon/EmailSVG";
import style from "./ForgotPassword.module.scss";

export const CheckEmail: React.FC = () => {
    const location = useLocation()
    const mail = location.state

    return (
        <Modal subtitle='Check Email'>
            <div className={style.check}><EmailSvg/>
                <div className={style.checkEmail}>{`We’ve sent an Email with instructions to ${mail}`}</div>
            </div>
        </Modal>)
}
