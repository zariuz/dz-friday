import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent,} from 'react';
import s from './SuperInput.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void;
    onEnter?: () => void;
    error?: string;
    spanClassName?: string;
    label?: string
};

export const SuperInput: React.FC<SuperInputTextPropsType> = ({
                                                           label, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
                                                           onChange,
                                                           onChangeText,
                                                           onKeyPress,
                                                           onEnter,
                                                           error,
                                                           className,
                                                           spanClassName,
                                                           ...restProps // все остальные пропсы попадут в объект restProps
                                                       }) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange &&
        onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);

        onEnter &&
        e.key === 'Enter' &&
        onEnter();
    };


    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`;
    const finalInputClassName = `${s.input} ${error && s.input__error}`;

    return (
        <div className={s.inputField}>
            <label aria-required={true}>{label}</label>
            <input
                onChange={onChangeCallback}
                onKeyPress={onKeyPressCallback}
                className={finalInputClassName}
                {...restProps}
            />
            <div className={s.inputField__error}>{error && <span className={finalSpanClassName}>{error}</span>}</div>
        </div>
    )
};
