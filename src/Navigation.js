import React from "react";
import logo from './Foodorder.jfif'
import { Link } from "react-router-dom";


function Navigation(){
    return(
        
         <div className="topNav">
            <nav>
                <div className="logoImage">
                <img src={logo} alt="Logo" />
                </div>
                <div className="navList">
                
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        
                        
                    </div>
                <div>
                    <button className="loginButton"><Link to="/Login-Signup">Login/Signup</Link></button>
                </div>
            </nav>
            
         </div>
    );
}
export default Navigation;