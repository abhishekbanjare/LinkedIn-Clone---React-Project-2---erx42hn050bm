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
           <Header />
           <Outlet/> 
        </div>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
