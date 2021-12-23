import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.css';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    color: 'dark-blue' | 'light-blue' | 'red'
    rounded: boolean
    width?: string | number | undefined
};

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        color,
        className,
        children,
        rounded,
        width,
        ...restProps
    }
) => {
    const widthBtn = {
        width: width
    }

    const finalClassName = ` ${s.button} ${rounded ? s.buttonRounded : s.buttonDefault} 
    ${color === 'dark-blue' ? s.buttonBlue : color === 'light-blue' ? s.buttonLightBlue : s.buttonRed}`

    return (
        <button
            className={finalClassName}
            style={widthBtn}
            {...restProps}
        >
            <span>{children}</span>
        </button>
    );
};

export default SuperButton;
