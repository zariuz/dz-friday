import {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {resetErrorText, setError, userRegistration} from '../../store/register-Reducer'
import {Navigate} from 'react-router-dom'
import {AppRootStateType} from '../../store/store'

export const Register = () => {

    const dispatch = useDispatch()

    const error = useSelector<AppRootStateType, boolean | null>(state => state.register.isError)
    const errorText = useSelector<AppRootStateType, string | undefined>(state => state.register.errorText)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {dispatch(setError(true))}, [error])

    const onClickRegistration = () => dispatch(userRegistration(email, password))
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        dispatch(resetErrorText(''))
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        dispatch(resetErrorText(''))
    }

    return (
        <div>
            {errorText}
            {!error && <Navigate replace to={'/login'}/>}
            <br/>
            <input type="text" placeholder="email" onChange={onChangeEmail}/>
            <br/>
            <input type="text" placeholder="password" onChange={onChangePassword}/>
            <br/>
            <button onClick={onClickRegistration}>Registration</button>
        </div>
    )
}
