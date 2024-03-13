// Hello am abhishek
import { createContext, useState} from "react";


export  const PostContext = createContext();   //here we have create context

// provider....................

export const PostProvider = (props) =>{
    const [post, setPost] = useState(false)

    return(
        <PostContext.Provider value={{post, setPost}}>
           {props.children}
        </PostContext.Provider>
        
    )
}