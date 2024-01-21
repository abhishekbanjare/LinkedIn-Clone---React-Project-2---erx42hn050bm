import React from 'react';
import "./Login.css"
import { useState } from 'react';

function Login(){
    const [signup, setSignUp] = useState(false);
    // const [login, setLogIn] = useState(false);

    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // for not refressing page
    const register = (e)=>{
        e.preventDefault();   //default event e  

        if(!name){
            return alert("Name is required");
        }
        if(!photoURL){
            return alert("PhotoUrl is required");
        }
        if(!email){
            return alert("Email is required");
        }
        if(!password){
            return alert("Password is required");
        }

        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");

    }
    // async const loginfun = (e)=>{
    async function loginfun(){
        e.preventDefault();   //default event e  
        if(!email){
            return alert("Email is required");
        }
        if(!password){
            return alert("Password is required");
        }
        // setEmail("");
        // setPassword("");
        console.log(email, password);
        let item={email, password};
        let result = await fetch("https://academics.newtonschool.co/api/v1/user/login",{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user-info",JSON.stringify(result));
        // history.push("/add")
    }
    // ............................
    // .............................
      

    return(
          <div className='loginScreen'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'/>
        {
            signup===true ? (
                <form onSubmit={register}>
                <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
                <input type='text' placeholder='Profile Picture URL' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
                <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <input type='submit' value="Sign Up" />
                <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
            </form>
            )
            :
            (
                <form onSubmit={loginfun}>
                
                <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <input type='submit' value="Sign In" />
                <h4>Not a member ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
            </form>
            )

            
        } 
          </div>
    )
}
export default Login


