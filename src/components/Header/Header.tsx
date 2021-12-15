import {NavLink} from 'react-router-dom'
import s from './Header.module.css';

export const Header = () => {
    return (
        <div className={s.container}>
            <NavLink className={s.link} to='/profile'> profile </NavLink>
            <NavLink className={s.link} to='/register'> register </NavLink>
            <NavLink className={s.link} to='/set-new-password'> newPass </NavLink>
            <NavLink className={s.link} to='/forgot-password'> forgotPass</NavLink>
            <NavLink className={s.link} to='/login'> login </NavLink>
            <NavLink to='/testPage'> test </NavLink>
        </div>
    )
}

