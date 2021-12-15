let initialState = {}

export const newPasswordReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'res-pass': {
            return {...state}
        }
        default:
            return state
    }
}

