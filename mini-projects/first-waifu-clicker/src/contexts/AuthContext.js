import { createContext, useState } from "react";

export const authContext = createContext()

export default function AuthContextProvider(props){
    const [user, setUser] = useState()
    return(
        <authContext.Provider value={{ user, setUser }}>
            {props.children}
        </authContext.Provider>
    )
}