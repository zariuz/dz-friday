import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import {registerReducer} from "./register-Reducer";
import {setPasswordReducer} from "./set-password-reducer";
import {profileReducer} from "./profile-reducer";
import {forgotPasswordReducer} from "./forgot-password-reducer";
import {authReducer} from "./auth-reducer";

const RootReducer = combineReducers({
    register: registerReducer,
    forgotPassword: forgotPasswordReducer,
    login: loginReducer,
    profile: profileReducer,
    setPassword: setPasswordReducer,
    auth: authReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store;
