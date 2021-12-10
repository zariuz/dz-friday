export const initialState = {}

export const profileReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'login':
            return {...state}
        default:
            return state
    }
}

