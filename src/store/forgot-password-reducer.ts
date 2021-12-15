const initialState = {
    forgotPasswordError: '',
    status: 'idle'
} as forgotPasswordType

export const forgotPasswordReducer = (state: forgotPasswordType = initialState, action: ActionTypes): forgotPasswordType => {
    switch (action.type) {
        case "forgot-password/FORGOT-ERROR":
            return {...state, forgotPasswordError: action.value};
        case "forgot-password/FORGOT-STATUS":
            return {...state, status: action.value};
        default:
            return state
    }
}

// actions
export const forgotPasswordError = (value: string) => ({type: "forgot-password/FORGOT-ERROR", value} as const)
export const forgotStatus = (value: forgotStatusType) => ({type: "forgot-password/FORGOT-STATUS", value} as const)

// types
type forgotPasswordType = {
    forgotPasswordError: string
    status: forgotStatusType
}
type ActionTypes = ReturnType<typeof forgotPasswordError> | ReturnType<typeof forgotStatus>
type forgotStatusType = "idle" | "loading" | "succeeded" | "failed";
