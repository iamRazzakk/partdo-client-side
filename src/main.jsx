import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Router'
import AuthProvider from './components/Probider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='font-salsa lg:w-[1280px] mx-auto'>
        <AuthProvider>
          <RouterProvider router={myCreatedRouter}></RouterProvider>
        </AuthProvider>
      </div>
  </React.StrictMode>,
)