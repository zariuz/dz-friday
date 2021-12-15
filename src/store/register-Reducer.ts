import {Dispatch} from 'redux'
import {authAPI} from '../api'
import axios from 'axios'

const initialState = {
    email: '',
    password: '',
    isError: true,
    errorText: '',
    isLoading: false
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'register':
            return {...state, email: action.email, password: action.password}
        case 'error':
            return {...state, isError: action.error}
        case 'errorText':
            return {...state, errorText: action.errorText}
        case 'resetErrorText':
            return {...state, errorText: action.value}
        case 'loading':
            return {...state, isLoading: action.value}
        default:
            return state
    }
}

// Actions
export const register = (email: string, password: string) => ({type: 'register', email, password} as const)
export const setError = (error: boolean) => ({type: 'error', error} as const)
export const errorText = (errorText: string) => ({type: 'errorText', errorText} as const)
export const resetErrorText = (value: string) => ({type: 'resetErrorText', value} as const)
export const setLoading = (value: boolean) => ({type: 'loading', value} as const)

// Thunks
export const userRegistration = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(setLoading(true))
        await authAPI.registration(email, password)
        dispatch(setLoading(false))
        dispatch(register(email, password))
        dispatch(setError(false))
    } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
            dispatch(errorText(err.response.data.error))
        }
    }
}

// Types
type InitialStateType = {
    email: string
    password: string
    isError: boolean
    errorText?: string
    isLoading: boolean
}

type ActionTypes =
    | ReturnType<typeof register>
    | ReturnType<typeof setError>
    | ReturnType<typeof errorText>
    | ReturnType<typeof resetErrorText>
    | ReturnType<typeof setLoading>