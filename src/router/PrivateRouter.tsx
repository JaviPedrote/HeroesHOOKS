import { useContext } from "react"
import { ReactNode } from "react";
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const PrivateRouter = ({ children }: { children: ReactNode }) => {

    const { isLoggedIn } = useContext(AuthContext)

    const { pathname, search } = useLocation()
    const lastPath = pathname + search
    localStorage.setItem('lastPath',lastPath)

    return (isLoggedIn)
        ? children
        : <Navigate to='/login' />
}