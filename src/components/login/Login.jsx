import React from 'react';
import "./Login.css"
import { useState } from 'react';
import Signup from './Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Login({ onLogin }){
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
          toast.success('Login successful!');
        }
        else{
          alert("Chek Your Email or Password");
        }
        console.log(result);
        console.log(result.status);
       
        onLogin(result);
    }

    return(
      <div className='loginScreen'>     
      {
          signUp===false ? (
                <Signup /> 
          )
          :
          ( 
            <div>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png'/>
                <form onSubmit={logInFun}>
                   <input type='email' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)}/>
                   <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>

                   <input type='submit' value="Sign In" />
                   <h4>Not a member ? <span onClick={e=>setSignUp(false)}>Register Here</span></h4>
               </form>
            </div>
          )    
      } 
      </div>
    )
}
export default Login;


