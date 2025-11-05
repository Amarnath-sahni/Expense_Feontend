import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/common/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Services from './pages/Services';
import ContactPage from './pages/ContactPage';
import Gemini_main from './pages/Gemini_main';
import FourCart from './Components/fourCart/FourCart';
import Home from './pages/Home';



export default function App() {
  return (
    <>
      <Navbar />
      <FourCart/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup/>} />
         <Route path="/Login" element={<Login/>} />
        <Route path="/services" element={<Services/>} />
         <Route path="/contact" element={<ContactPage/>} />
         <Route path='/ai' element={<Gemini_main/>} />
       </Routes>
      
    </>
  );
}

// import React from 'react'
// import Gemini_main from './pages/Gemini_main'

//  const App = () => {
//   return (
//     <>
//     {/* <Sidebar/>
//     <Main/> */}
//     <Gemini_main/>
//     </>
//   )
// }

// export default App