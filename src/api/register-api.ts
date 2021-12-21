import {instance} from "./index";

export const registrationAPI = {
    register(data: RegisterDataType) {
        return instance.post<RegisterResponseType>("auth/register", data);
    },
};

//types
export type RegisterDataType = {
    email: string
    password: string
};

type RegisterResponseType = {
    addedUser: {}
    error?: string
}
