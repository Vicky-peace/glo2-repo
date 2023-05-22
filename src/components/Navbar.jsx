import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className= "nav">
    <h2 className="nav-brand">Glory</h2>
    <ul className='navlinks'>
   <li><Link to= './' >Home</Link></li>  
   <li> <Link to = '/about'> About</Link></li> 
    <li><Link to= './blog' >Blog</Link></li> 
    </ul>
  </div>
  )
}

export default Navbar
