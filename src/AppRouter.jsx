import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import Login from './pages/Login';
import  NotFound  from './pages/NotFound'
import { TaskContextProvider } from './context/TaskContext'
import Navbar from './components/Navbar';
 const AppRouter = () => {
  return (
    <div>
         <TaskContextProvider>
         <Navbar />
         <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
         </TaskContextProvider>
      
    </div>
  )
}
export default AppRouter;