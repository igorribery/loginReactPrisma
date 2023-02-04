import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { api } from "../services/api";
import { Navigate } from "react-router-dom";

type ChildrenProps = {
    children: ReactNode
}
type Props = {
    email: string,
    password: string
}

export const AuthContext = createContext({});

export const AuthProvider = ({children}: ChildrenProps) => {
    const [user, setUser] = useState('');

    useEffect(() => {
        
        const loadingStoreData = async () => {

        const storageUser = localStorage.getItem('@Auth:user');
        const storageToken = localStorage.getItem('@Auth:token');
    
        if(storageUser && storageToken) {
            setUser(storageUser)
            }
        }
        loadingStoreData();
    }, []);


    const signIn = async ({ email, password}: Props) => {
        const response = await api.post('/auth', {
            email,
            password
        });

        if(response.data.error) {
            alert(response.data.error)
        } else {
            setUser(response.data.user);

            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;

            localStorage.setItem('@Auth:token', response.data.token);
            localStorage.setItem('@Auth:user', JSON.stringify(response.data.user));

        }  
    }

    const signOut = () => {
        localStorage.clear();
        setUser('');
        return <Navigate to="/login" />

    }
    
    
    return <AuthContext.Provider value={{user, signOut, signIn, signed: !!user}}>{children}</AuthContext.Provider>
}