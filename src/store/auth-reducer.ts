import {Dispatch} from "redux";
import {authApi} from "../api/login-api";
import {setIsLoggedIn} from "./login-reducer";

const initialState = {
    status: "idle",
    isInitialized: false,
    error: null,
} as AuthInitialStateType;

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
        switch (action.type) {
            case "app/SET-STATUS":
                return {...state, status: action.status};
            case "app/IS-INITIALIZED":
                return {...state, isInitialized: action.isInitialized};
            case "app/SET-ERROR":
                return {...state, error: action.error};
            default:
                return state;
        }
    };


// actions
export const setAuthStatus = (status: StatusType) => ({type: "app/SET-STATUS", status} as const)
export const setAuthError = (error: string | null) => ({type: "app/SET-ERROR", error} as const)
export const setIsInitialized = (isInitialized: boolean) => ({type: "app/IS-INITIALIZED", isInitialized} as const)



// thunks
export const initializeApp = () => async (dispatch: Dispatch) => {
    try {
        await authApi.me();
        dispatch(setIsLoggedIn(true));
        dispatch(setIsInitialized(true));
    } catch (e: any) {
        dispatch(setIsInitialized(true));
        dispatch(setAuthStatus("failed"));
        const error = e.response.data.error === 'you are not authorized'
            ? null
            : e.response.data.error
                ? e.response.data.error
                : (e.message + ', more details in the console');
        dispatch(setAuthError(error));
    }
};


// types
export type ActionsType =
    ReturnType<typeof setAuthStatus> |
    ReturnType<typeof setAuthError> |
    ReturnType<typeof setIsInitialized>


export type InitialStateType = typeof initialState;
export type AuthInitialStateType = {
    status: StatusType
    isInitialized: boolean
    error: string | null
};
export type StatusType = "idle" | "loading" | "succeeded" | "failed";