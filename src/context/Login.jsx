// Hello am abhishek
import { createContext, useState} from "react";


export  const LoginContext = createContext();   //here we have create context

// provider....................

export const LoginProvider = (props) =>{
    const [user, setUser] = useState(false)

    return(
        <LoginContext.Provider value={{user, setUser}}>
           {props.children}
        </LoginContext.Provider>
    )
}