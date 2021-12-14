import React from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Register} from "./components/Register/Register";
import {RecoveryPass} from "./components/Password/RecoveryPass";
import {NewPass} from "./components/Password/NewPass";
import {ErrorPage} from "./components/ErrorPage";
import {Header} from "./components/Header/Header";
import {Login} from "./components/Login/Login";
import {TestPage} from "./components/TestComponents/TestPage";

/*import {Switch} from 'react-router-dom';*/

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<BrowserRouter>*/}
            {/* <Switch>*/}
            <Routes>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/' element={<Profile/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/recoveryPass' element={<RecoveryPass/>}/>
                <Route path='/newPass' element={<NewPass/>}/>
                <Route path='/testPage' element={<TestPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>

            </Routes>
            {/* </Switch>*/}
            {/*  </BrowserRouter>*/}
        </div>
    )
        ;
}

export default App;
