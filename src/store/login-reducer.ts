import {authApi, CommonResponseType, LoginParamsType, UserDataType} from "../api/login-api";
import {Dispatch} from "redux";


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
        case "LOGIN/GET-USER":
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

export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const getUserAC = (data: CommonResponseType) => ({type: "LOGIN/GET-USER", data} as const)


//thunks

export const loginTC = (data: LoginParamsType) => async (dispatch: Dispatch) => {
    try {
        let res = await authApi.login(data)
        dispatch(setIsLoggedInAC(true))
        dispatch(getUserAC(res.data))
    } catch (e: any) {

    }
};

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        await authApi.logout()
        dispatch(setIsLoggedInAC(false))
    } catch (e: any) {

    }
};

//types

export type ActionsType =
    ReturnType<typeof setIsLoggedInAC> |
    ReturnType<typeof getUserAC>

export type InitialStateType = typeof initialState;

export type UserDataDomainType = UserDataType & { isLoggedIn: boolean };

