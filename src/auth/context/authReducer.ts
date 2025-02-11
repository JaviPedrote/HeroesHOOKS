import { types } from "../types/types"

interface User {
    id: string;
    name: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
}

interface AuthAction {
    type: string;
    payload?: User;
}

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case types.login:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload || null
            }
        case types.logout:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        default:
            return state
    }

}