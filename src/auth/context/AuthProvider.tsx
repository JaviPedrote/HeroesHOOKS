import { AuthContext } from "./AuthContext"
import { ReactNode, useReducer } from 'react';
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const initialState = {
  isLoggedIn: false,
  user: 'usuario'
}
const init = () => {

  localStorage.setItem('user', JSON.stringify({ id: 'ABC', name: 'Usuario' }))
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : 'null';

  return {
    isLoggedIn: !!user, //retorna true si user es diferente de null
    user: user,
  }

}
export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name = '') => {

    const user = { id: 'ABC', name: name }
    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify(user))

    dispatch(action)
  }

  const logout = () => {

    localStorage.removeItem('user')

    const action = {
      type: types.logout
    }
    dispatch(action)
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
