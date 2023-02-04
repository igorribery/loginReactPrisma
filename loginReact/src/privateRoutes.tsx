import { useContext } from "react"
import { AuthContext } from "./contexts/auth"
import { Navigate, Outlet } from "react-router-dom"


export const PrivateRoute = () => {

    const { signed }: any = useContext(AuthContext)

    return signed ? <Outlet /> : <Navigate to='/' />
}