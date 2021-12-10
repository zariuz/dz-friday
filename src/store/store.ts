import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./auth-reducer";
import {registerReducer} from "./register-Reducer";
import {resPassReducer} from "./res-pass-reducer";
import {profileReducer} from "./profile-reducer";
import {passwordReducer} from "./password-reducer";

const RootReducer = combineReducers({
    register: registerReducer,
    password: passwordReducer,
    auth: authReducer,
    profile: profileReducer,
    resPass: resPassReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof RootReducer>

// @ts-ignore
window.store = store;
