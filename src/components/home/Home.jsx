import './Home.css';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
import Header from './header/Header'
import Login from '../login/Login';
import { useState } from 'react';


const Home = ()=> {
     const [user, setUser] = useState(false);

  return (
      <div>
        {
        !user ? (<Login user={user} setUser={setUser}/>)
        :
        (
        <div className='app_wrapper'>
          <Header setUser={setUser} user={user}/>
          <div className="app_body">
              <Sidebar user={user} setUser={setUser} />
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
