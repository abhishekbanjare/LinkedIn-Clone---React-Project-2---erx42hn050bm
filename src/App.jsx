import './App.css';
import Home from './components/home/Home';
import { useState } from 'react';
import Header from './components/header/Header';
import Login from './components/login/Login';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/home/sidebar/Sidebar';
import { useContext } from 'react';
import { LoginContext } from './context/Login';


function App() {
  
  const loginObj = useContext(LoginContext)  //login context api

  return (
    <div className='blur'>
    {/* context API */}
      {loginObj.user ? (
        <div>
          {/* <Header user={user} setUser={setUser} /> */}
          <Header />
          <Outlet/>
              {/* <Sidebar user={user} setUser={setUser} />
          </Outlet> */}
          
        </div>
      ) : (
        <Login />
        // <Login user={user} setUser={setUser} />
      )}
    </div>
  )
}

export default App
