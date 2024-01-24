import React from 'react'
import Login from './Login';
import Signup from './Signup';

const AuthContainer = () => {
    const [signUp, setSignUp] = useState(true);

    const handleLogin = (result) => {
      // Handle login logic here if needed
      console.log('Login successful:', result);
    };
    return (
    <div className='authContainer'>
      {signUp ? (
        <Signup setSignUp={setSignUp} />
      ) : (
        <Login onLogin={handleLogin} setSignUp={setSignUp} />
      )}
    </div>
  );
}

export default AuthContainer