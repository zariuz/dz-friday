import React from "react";
import style from "./Modal.module.css";

type ModalPropsType = {
    subtitle: string
}


export const Modal: React.FC<ModalPropsType> = (props) => {
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