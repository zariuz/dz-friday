import React, {useEffect} from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {Register} from "./components/Register/Register";
import {ForgotPassword} from "./components/Password/ForgotPassword";
import {NewPassword} from "./components/Password/NewPassword";
import {ErrorPage} from "./components/ErrorPage";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {CheckEmail} from "./components/Password/CheckEmail";
import {initializeApp} from "./store/auth-reducer";
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./components/common/Preloader/Preloader";


export const App = () => {
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn);
    const isInitialized = useSelector<AppRootStateType, boolean>(state => state.auth.isInitialized);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initializeApp())
    }, []);

    return (
        <div className="App">
            {!isInitialized && <Preloader/>}
            {isLoggedIn && <Header/>}
            <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/set-new-password' element={<NewPassword/>}/>
                <Route path='/check-email' element={<CheckEmail/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}
