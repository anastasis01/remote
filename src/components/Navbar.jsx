import React,{useState} from "react";
import "./Navbar.css";
import menu from "../assets/images/icon-menu.svg";
import closeMenu from "../assets/images/icon-close-menu.svg";
function Menu(){
    return (
        <div className="displayMenu">
            <div className="navbar-links2">
                 <a href="#Features">Features</a>
                 <a href="#Company">Company</a>
                 <a href="Careers">Careers</a>
                 <a href="#About">About</a>
            </div>
            <div className="Login">
                <a href="#Login">Login</a>
            </div>
            <div className="Register">
              <button>Register</button>
            </div>

            
        </div>
    );
}
function Navbar(){
    const [toggleMenu,setToggleMenu]=useState(true);
    return (
        <div className="start"> 
        <div className="navbar">
            <div className="navbar-snap">
                <h1>snap</h1>
            </div>
            <div className="navbar-links">
                 <a href="#Features">Features</a>
                 <a href="#Company">Company</a>
                 <a href="#Careers">Careers</a>
                 <a href="#About">About</a>
            </div>
        </div>
        <div className="navbar-sign-in">
             <a className="no-link" href="#login">Login</a>
            <div className="navbar-sign-in__Register">
               <button>Register</button>
            </div>
            <div className="favicon">
                 {toggleMenu?<img onClick={()=>setToggleMenu(false)} src={menu} alt="menu"/>:
                 <div className="favicon2"><img src={closeMenu} alt="close-menu" onClick={()=>setToggleMenu(true)}/><Menu/></div>}
            </div>
        </div>
        </div>
     
    );
}
export default Navbar;