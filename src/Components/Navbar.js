import React, { Component, useState } from "react";
import "../Components/Navbar.css";
import logo from '../images/Pebble_Logo-2.avif';
import { CiSearch, CiUser, CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <>

    <div className="fullnavbar">
    
      <ul className="navbar">
      <li>
      <img className="image" src={logo}/>
   
        </li>
        <li>
          <a href="#">SMART WATCHES</a>
        </li>
        <li>
          <a href="#">NEW LAUNCHES</a>
        </li>

        <li>
          <a href="#">EARPHONES </a>
        </li>
        <li>
          <a href="#">SPEAKERS</a>
        </li>
        <li>
          <a href="#">KEYBOARDS</a>
        </li>
        <li>
          <a href="#">SMART HOME</a>
        </li>
        <li>
          <a href="#">ACCESSORIES</a>
        </li>
        <li>
          <a href="#">BLOGS</a>
        </li>
        <li>
           <ul className="icons">
           
             <li><a className="icon1" href="#"><CiSearch /></a></li>
             <li><a className="icon1" href="#"><CiUser /></a></li>
             <li><a className="icon1" href="#"><CiShoppingCart /></a></li>
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