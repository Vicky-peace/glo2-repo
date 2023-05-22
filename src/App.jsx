import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css'

function App() {
 
  return (
    <>
      <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route  path= "/" element = {<Home/>}/>
      <Route  path= "/about" element = {<About/>}/>
      <Route  path= "/blog" element = {<Blog/>}/>
      
     
      
      </Routes>
      <Footer/>
      </Router>
       
        
      </div>
      
    </>
  )
}

export default App

