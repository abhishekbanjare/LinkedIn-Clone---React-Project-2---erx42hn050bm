import './Home.css';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import Header from './header/Header'
import Login from '../login/Login';
import { useState } from 'react';




const Home = ()=> {
     const [user, setUser] = useState(null);

  const handleLogin = (loginData) => {
      console.log("Befor: ......."+loginData);
      if(loginData.status === "success"){
         setUser(loginData);
      console.log("After: ........"+loginData);
      }

  };

  return (
      <div>
        {
        !user ? (<Login onLogin={handleLogin}/>)
        :
        (
        <div className='app_wrapper'>
          <Header />
          <div className="app_body">
              <Sidebar />
              <Feed />
              <Widget />
          </div>
        </div>

        )
      }
      </div>
  )
}

export default Home
