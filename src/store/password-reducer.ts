export const initialState = {}

export const passwordReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'password':
            return {...state}
        default:
            return state
    }
}
