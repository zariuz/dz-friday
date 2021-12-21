import {Dispatch} from 'redux'
import {RegisterDataType, registrationAPI} from "../api/register-api";

const initialState = {
    isRegistered: false,
    isFetching: false,
    error: "",
}

export const registerReducer = (state: InitialRegisterStateType = initialState, action: ActionTypes): InitialRegisterStateType => {
    switch (action.type) {
        case 'register/SET-IS-REGISTERED':
            return {...state, isRegistered: action.isRegistered}
        case "register/SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "register/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state
    }
}

// Actions
export const setIsRegistered = (isRegistered: boolean) => ({type: "register/SET-IS-REGISTERED", isRegistered,} as const)
export const setIsRegistrationFetching = (isFetching: boolean) => ({
    type: "register/SET-IS-FETCHING",
    isFetching,
} as const)
export const setRegistrationError = (error: string) => ({type: "register/SET-ERROR", error,} as const)

// Thunks
export const register = (data: RegisterDataType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setIsRegistrationFetching(true))
        await registrationAPI.register(data)
        dispatch(setIsRegistered(true))
        dispatch(setIsRegistrationFetching(false))
    } catch (e: any) {
        debugger
        dispatch(setRegistrationError(e.response?.data.error))
        dispatch(setIsRegistrationFetching(false))
    }
};

// Types
export type InitialRegisterStateType = typeof initialState

type ActionTypes =
    | ReturnType<typeof setIsRegistered>
    | ReturnType<typeof setIsRegistrationFetching>
    | ReturnType<typeof setRegistrationError>
