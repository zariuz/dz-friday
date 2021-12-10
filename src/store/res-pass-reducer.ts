let initialState = {}

export const resPassReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'res-pass': {
            return {...state}
        }
        default:
            return state
    }
}

