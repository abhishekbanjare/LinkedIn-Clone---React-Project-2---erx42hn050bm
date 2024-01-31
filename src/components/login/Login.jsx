import React from 'react';
import "./Login.css"
import { useState } from 'react';
import Signup from './Signup';

function Login({user, setUser}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUp, setSignUp] = useState(true);  //signup ho chuka hai to hame login page open karna hai

    const logInFun = async (e) => {
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
        if(result.status === "success"){
          // alert("You are successfully Login");
          setUser(true);
        }
        else{
          var errorMessage = document.getElementById("error-message");
          errorMessage.innerHTML = "Wrong email or password. Try again .";
          // alert("Chek Your Email or Password");
        }
        // console.log(result);
        // console.log(result.status);
       
        // onLogin(result);
        // setUser(true);
    }

    return(
      <div className='loginScreen'>     
      {
          signUp===false ? (
                <Signup user={user} setUser={setUser}/> 
          )
          :
          ( 
            <div className='innerdiv'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'/>
                <form onSubmit={logInFun}>
                   <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                   <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

                   <input type='submit' value="Sign In" />
                   <p id="error-message"></p>
                   <h4>Not a member ? <span onClick={e=>setSignUp(false)}>Register Here</span></h4>
               </form>
               
            </div>
          )    
      } 
      </div>
    )
}
export default Login;


