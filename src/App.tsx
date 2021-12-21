import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Register} from "./components/Register/Register";
import {ForgotPassword} from "./components/Password/ForgotPassword";
import {NewPassword} from "./components/Password/NewPassword";
import {ErrorPage} from "./components/ErrorPage";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {TestPage} from "./components/TestComponents/TestPage";
import {CheckEmail} from "./components/Password/CheckEmail";


export const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/set-new-password' element={<NewPassword/>}/>
                <Route path='/check-email' element={<CheckEmail/>}/>
                <Route path='/testPage' element={<TestPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </div>
    )
}
