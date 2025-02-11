import { useContext } from "react"
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate} from "react-router-dom";


import { ReactNode } from "react";

export const PublicRoute = ({ children }: { children: ReactNode }) => {

    const { isLoggedIn } = useContext(AuthContext)


    return (!isLoggedIn)
        ? children
        : <Navigate to={'/marvel'} />
}
