import {forgotAPI, SetType} from "../api/forgot-api";
import {Dispatch} from "redux";

let initialState = {
    setPasswordError: '',
    status: 'idle'
} as setPasswordType;

export const setPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "set-password/SET-ERROR":
            return {...state, setPasswordError: action.value};
        case "set-password/SET-STATUS":
            return {...state, status: action.value};
        default:
            return state;
    }
}

// actions
export const setPasswordError = (value: string) => ({type: "set-password/SET-ERROR", value} as const)
export const setStatus = (value: setStatusType) => ({type: "set-password/SET-STATUS", value} as const)


// thunks
export const getPassword = (data: SetType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setStatus("loading"));
        await forgotAPI.setNewPassword(data);
        dispatch(setStatus("succeeded"));
    } catch (e: any) {
        dispatch(setStatus("failed"));
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setPasswordError(error))
    }
};


// types
export type setPasswordType = {
    setPasswordError: string
    status: setStatusType
};

export type InitialStateType = typeof initialState;
export type ActionsType =
    ReturnType<typeof setPasswordError> |
    ReturnType<typeof setStatus>

export type setStatusType = "idle" | "loading" | "succeeded" | "failed";

