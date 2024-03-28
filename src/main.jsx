import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
import AuthProvider from './components/Probider/AuthProvider'
import {  HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='font-salsa lg:w-[1280px] mx-auto'>
        <AuthProvider>
          <RouterProvider router={myCreatedRouter}></RouterProvider>
        </AuthProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)