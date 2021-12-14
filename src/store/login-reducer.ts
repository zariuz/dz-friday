export const initialState = {}

export const loginReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case 'login': {
            return {...state}
        }
        default:
            return state
    }
}
