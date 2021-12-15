import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import {registerReducer} from "./register-Reducer";
import {newPasswordReducer} from "./new-password-reducer";
import {profileReducer} from "./profile-reducer";
import {forgotPasswordReducer} from "./forgot-password-reducer";

const RootReducer = combineReducers({
    register: registerReducer,
    forgotPassword: forgotPasswordReducer,
    login: loginReducer,
    profile: profileReducer,
    newPassword: newPasswordReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store;
