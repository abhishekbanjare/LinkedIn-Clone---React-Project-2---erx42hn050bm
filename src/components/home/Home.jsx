import './Home.css';
import Sidebar from './sidebar/Sidebar';
import Feed from './feed/Feed';
import Widget from './widget/Widget';
// import { useState } from 'react';

const Home = ()=> {
    //  const [user, setUser] = useState(false);

  return (
      <div>
        {
        <div className='app_wrapper'>
          <div className="app_body">
              <Sidebar />
              <Feed />
              <Widget />
          </div>
        </div>     
      }
      </div>
  )
}

export default Home
