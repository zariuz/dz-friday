const initialState = {}

export const registerReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'register':
            return {...state}
        default:
            return state
    }
}

