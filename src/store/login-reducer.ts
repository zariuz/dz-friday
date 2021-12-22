import {authApi, CommonResponseType, LoginParamsType, UserDataType} from "../api/login-api";
import {Dispatch} from "redux";
import {setAuthError, setAuthStatus, setIsInitialized} from "./auth-reducer";


const initialState = {
    _id: '',
    avatar: '',
    email: '',
    isAdmin: false,
    name: '',
    publicCardPacksCount: 0,
    rememberMe: false,
    verified: false,
    updated: {},
    created: {},
    isLoggedIn: false,
} as UserDataDomainType;


export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        case "login/GET-USER":
            return {
                ...state,
                name: action.data.name,
                avatar: action.data.avatar,
                email: action.data.email,
                _id: '',
                isAdmin: action.data.isAdmin,
                publicCardPacksCount: action.data.publicCardPacksCount,
                rememberMe: action.data.rememberMe,
                verified: action.data.verified,
                updated: action.data.updated,
                created: action.data.created,
                isLoggedIn: true,
            };
        default:
            return state
    }
}

// action

export const setIsLoggedIn = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const getUser = (data: CommonResponseType) => ({type: "login/GET-USER", data} as const)


//thunks

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch) => {
    try {
        dispatch(setAuthStatus("loading"))
        let res = await authApi.login(data)
        dispatch(setIsLoggedIn(true))
        dispatch(setAuthStatus("succeeded"))
        dispatch(getUser(res.data))
    } catch (e: any) {
        dispatch(setAuthStatus("failed"))
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console')
        dispatch(setAuthError(error))
    }
};

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAuthStatus("loading"))
        await authApi.logout()
        dispatch(setAuthStatus("succeeded"))
        dispatch(setIsLoggedIn(false))
        dispatch(setIsInitialized(true));
    } catch (e: any) {
        dispatch(setAuthStatus("failed"));
        const error = e.response
            ? e.response.data.error
            : (e.message + ', more details in the console');
        dispatch(setAuthError(error))
    }
};

//types

export type ActionsType =
    ReturnType<typeof setIsLoggedIn> |
    ReturnType<typeof getUser>

export type InitialStateType = typeof initialState;

export type UserDataDomainType = UserDataType & { isLoggedIn: boolean };

