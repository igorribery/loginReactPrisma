import { Route, Routes } from "react-router-dom"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import Home from "./components/Home"
import { PrivateRoute } from "./privateRoutes"

export const Router = () => {
    return (
        
        <Routes>
            <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
            </Route>   
            <Route path='/login' element={<Login />} />
            <Route path="/register" element={<Register />} />
            
        </Routes>
    

    )
}