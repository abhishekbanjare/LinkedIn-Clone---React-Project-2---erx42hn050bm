import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './components/home/Home.jsx'
import Mynetwork from './components/pages/mynetwork/Mynetwork.jsx'
import Job from './components/pages/job/Job.jsx';
import Messaging from './components/pages/messaging/Messaging.jsx';
import Notification from './components/pages/notification/Notification.jsx';
// import Layout from './Layout.jsx';
import Userpost from './components/userpost/Userpost.jsx';
import { LoginProvider } from './context/Login.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
         <Route path='' element={<Home />} />
         <Route path='mynetwork' element={<Mynetwork />}/>
         <Route path='job' element={<Job />}/>
         <Route path='messaaging' element={<Messaging />}/>
         <Route path='notification' element={<Notification />}/>
         <Route path='userpost' element={<Userpost />}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
        {/* <App /> */}
        <RouterProvider router={router} />
    </LoginProvider>
  </React.StrictMode>,
)
