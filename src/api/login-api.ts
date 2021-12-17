
import {instance} from "./index";

export const authApi = {
    login(data: LoginParamsType) {
        return instance.post<CommonResponseType>('auth/login', data)
    },
/*    me() {
        return instance.get<CommonResponseType<{id: number, email: string, login:string}>>('auth/me')
    },*/
    logout(){
        return instance.delete<CommonResponseType>('auth/me')
    }
}



//Types

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    token: string
    tokenDeathTime: Date
    __v: number
};
type ErrorType = { error?: string };
export type CommonResponseType = UserDataType & ErrorType;