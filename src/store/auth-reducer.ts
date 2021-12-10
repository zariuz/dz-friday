export const initialState = {}

export const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'login': {
            return {...state}
        }
        default:
            return state
    }
}
