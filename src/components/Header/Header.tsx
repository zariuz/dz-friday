import {NavLink} from 'react-router-dom'
import style from './Header.module.css';
import {CardSvg} from "../../assets/icon/CardSVG";
import {UserSvg} from "../../assets/icon/UserSVG";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {logoutTC} from "../../store/login-reducer";
import {AppRootStateType} from "../../store/store";

export const Header = () => {
    const status = useSelector<AppRootStateType>(state => state.auth.status);
    const dispatch: Dispatch<any> = useDispatch();

    const handleSubmit = () => {
        dispatch(logoutTC())
    };

    return (
        <header className={style.header}>
            <h2>Cards</h2>
            <nav className={style.headerNav}>
                <ul className={style.headerList}>
                    <li className={style.headerListItem}>
                        <NavLink to='/profile' ><CardSvg/>Packs list</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' ><UserSvg/>Profile</NavLink>
                    </li>
                </ul>
            </nav>
            <button className={style.logout} onClick={handleSubmit} disabled={status === "loading"}>Logout</button>
        </header>
    )
}

