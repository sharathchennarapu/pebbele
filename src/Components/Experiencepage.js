import React, { Component } from "react";
import "../Components/Experiencepage.css";
import expimg1 from "../images/e-1.jpg";
import expimg2 from "../images/e-2.jpg";
import expimg3 from "../images/e-3.jpg";
import expimg4 from "../images/e-4.jpg";
import expimg5 from "../images/e-5.jpg";
import expimg6 from "../images/e-6.jpg";


function Experiencepage() {
  return (
    <>
    <h1 className="heading4"><b>Experience Pebble</b></h1>
      <div className="grid_container4">
        <div className="grid_items4">
           <img className="expimgchange" src={expimg1} alt="image"/>
           <p className="exptext">10+ Years Legacy</p>
        </div>
        <div className="grid_items4">
        <img className="expimgchange" src={expimg2} alt="image"/>
        <p className="exptext">Trusted Product</p>
        </div>
        <div className="grid_items4">
        <img className="expimgchange" src={expimg3} alt="image"/>
        <p className="exptext">Hassle Free Replacement</p>
        </div>
        <div className="grid_items4">
        <img className="expimgchange" src={expimg4} alt="image"/>
        <p className="exptext"> Assured Warranty</p>
        </div>
        <div className="grid_items4">
        <img className="expimgchange" src={expimg5} alt="image"/>
        <p className="exptext">Fast & Free Delivery</p>
        </div>
        <div className="grid_items4">
        <img className="expimgchange" src={expimg6} alt="image"/>
        <p className="exptext">Quick Support</p>
        </div>
      </div><br/><br/><br/>
    </>
  );
}

export default Experiencepage;