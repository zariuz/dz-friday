import React from "react";
import style from "./Modal.module.css";

type AuthModalPropsType = {
    subtitle: string
}


export const AuthModal: React.FC<AuthModalPropsType> = (props) => {
    const {children, subtitle} = props

    return (
        <div className={style.container}>
            <div className={style.containerBody}>
                <h1 className={style.title}>Card</h1>
                <h2 className={style.subtitle}>{subtitle}</h2>
                {children}
            </div>
        </div>
    )
}