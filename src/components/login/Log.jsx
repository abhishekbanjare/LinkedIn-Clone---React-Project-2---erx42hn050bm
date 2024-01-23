import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Log() {
    const [apiData, setApiData] = useState([]);

    let loginapidata = {   
        "email": "rakesh@gmail.com",
        "password": "rakesh123",
        "appType": "linkedin"
        };
    
    let ApiUrl = "https://academics.newtonschool.co/api/v1/user/login";
  
    const fetchApiData = async (url) => {
      try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(loginapidata),
            headers: {
                'projectId':'erx42hn050bm',
              'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        const oneData = data.data;
        console.log(data);
  
        // Store the data in the state variable
        setApiData(oneData);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      fetchApiData(ApiUrl);
    }, []);
  

  return (
    <div>Log</div>
  )
}

export default Log

// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Login and signup both with one component
import React from 'react';
import "./Login.css"
import { useState } from 'react';
import Signup from './Signup';


function Login({ onLogin }){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    const [signup, setSignUp] = useState(false);

    // const [name, setName] = useState("");
    // const [photoURL, setPhotoURL] = useState("");
    // const [signupEmail, setSignupEmail] = useState("");
    // const [signupPassword, setsignupPassword] = useState("");
    

    // // for not refressing page
    // const register = (e)=>{
    //     e.preventDefault();   //default event e  

    //     if(!name){
    //         return alert("Name is required");
    //     }
    //     if(!photoURL){
    //         return alert("PhotoUrl is required");
    //     }
    //     if(!signupEmail){
    //         return alert("Email is required");
    //     }
    //     if(!signupPassword){
    //         return alert("Password is required");
    //     }

    //     setName("");
    //     setPhotoURL("");
    //     setSignupEmail("");
    //     setsignupPassword("");

    // }

    const loginFun = async (e) => {
        e.preventDefault();
        let loginapidata = {   
                        "email": email,
                        "password": password,
                        "appType": "linkedin"
                        };
        const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
          method: 'POST',
          body: JSON.stringify(loginapidata),
          headers: {
            'projectId':'erx42hn050bm',
            'Content-Type': 'application/json'
          }
        });
        const result = await response.json();
        // setResult(result);
        // console.log(result);
       
        onLogin(result);
    }

    return(
          <div className='loginScreen'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'/>
        {
            signup===true ? (
                <Signup />
            //     <form onSubmit={register}>
            //     <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/>
            //     <input type='text' placeholder='Profile Picture URL' value={photoURL} onChange={e=>setPhotoURL(e.target.value)}/>
            //     <input type='email' placeholder='Email' value={signupEmail} onChange={e=>setSignupEmail(e.target.value)}/>
            //     <input type='password' placeholder='Password' value={signupPassword} onChange={e=>setsignupPassword(e.target.value)}/>

            //     <input type='submit' value="Sign Up" />
            //     <h4>Already a member ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
            // </form>
            )
            :
            (
                <form onSubmit={loginFun}>
                
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


