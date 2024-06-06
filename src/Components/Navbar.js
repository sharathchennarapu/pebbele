import React from "react";
import "../Components/Navbar.css";
import logo from '../images/Pebble_Logo-2.avif';
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <>

    <div className="fullnavbar">
    
      <ul className="navbar">
      <li>
      <img className="image" src={logo} alt="logoimg"/>
   
        </li>
        <li>
          <button >SMART WATCHES</button>
        </li>
        <li>
          <button>NEW LAUNCHES</button>
        </li>

        <li>
          <button>EARPHONES </button>
        </li>
        <li>
          <button>SPEAKERS</button>
        </li>
        <li>
          <button>KEYBOARDS</button>
        </li>
        <li>
          <button>SMART HOME</button>
        </li>
        <li>
          <button>ACCESSORIES</button>
        </li>
        <li>
          <button>BLOGS</button>
        </li>
        <li>
           <ul className="icons">
           
             <li><button className="icon1" ><CiSearch /></button></li>
             <li><button className="icon1" ><CiUser /></button></li>
             <li><button className="icon1" ><CiShoppingCart /></button></li>
           </ul>
        </li>
      </ul>
      </div>
      <div>
        <h3>Extra 5% off on all prepaid orders</h3>
      </div>
      
    </>
  );
}

export default Navbar;