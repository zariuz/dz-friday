type initialStateType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    // created: Date;
    // updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}

export const initialState: initialStateType = {
    _id: '1',
    email: 'someEmail@umail.com',
    name: 'Andrey',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    publicCardPacksCount: 2,
    isAdmin: false,
    verified: false,
    rememberMe: false
}

export const ChangeNameAC = (name: string) => (
    {
        type: 'CHANGE-NAME',
        name
    } as const
)

export const ChangeEmailAC = (email: string) => (
    {
        type: 'CHANGE-MAIL',
        email
    } as const
)


type ActionsType =
    ReturnType<typeof ChangeNameAC>
    | ReturnType<typeof ChangeEmailAC>

export const profileReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'CHANGE-NAME':
            return {...state, name: action.name}

        case 'CHANGE-MAIL':
            return {...state, email: action.email}
        default:
            return state
    }
}

