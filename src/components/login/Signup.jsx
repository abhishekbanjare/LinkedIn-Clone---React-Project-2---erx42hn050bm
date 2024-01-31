import React from 'react';
import "./Login.css";
import Login from './Login';
import { useState } from 'react';

function Signup({user, setUser}) {
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [logIn, setLogIn] = useState(false); // login nahi hua hai mtlb hame signup karna hai
    

    
    const registerFun = async (e)=>{
        e.preventDefault();   //default event e  // for not refressing page

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
        // ..............................................................................................

        let signUpApi = {   
            "name": name,
            "email": email,
            "password": password,
            "appType": "linkedin"
        };
        const response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
            method: 'POST',
            body: JSON.stringify(signUpApi),
            headers: {
                'projectId':'erx42hn050bm',
                'Content-Type': 'application/json'
            }
        });
        const result = await response.json();
        if(result.status === "success"){
            setUser(true);
            // console.log("You are successfully Registered");
            alert("You are successfully Registered");
        }
        else{
            // alert("Invalid input data || User already exists");
            var errorMessage = document.getElementById("error-message");
            errorMessage.innerHTML = "User already exists";
        }
        // console.log(result);
        // console.log(result.status);

    }

  return (
    <div className='loginScreen'>
    {
        logIn === false ? (
        <div className='innerdiv'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'/>
          <form onSubmit={registerFun}>

             <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
             <input type='text' placeholder='Profile Picture URL' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
             <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
             <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

             <input type='submit' value="Sign Up" />
             <p id='error-message'></p>
             <h4>Already a member ? <span onClick={e=>setLogIn(true)}>Login Here</span></h4>
          </form>
        </div>
       
        ):(
            <Login user={user} setUser={setUser}/>
        )
    }
     </div>
  )
}
export default Signup