import React, { Component } from "react";
import "../Components/Cartpage.css"
import cartimg1 from '../images/cart-1.jpg';
import cartimg2 from '../images/cart-2.jpg';
import cartimg3 from '../images/cart-3.jpg';
import cartimg4 from '../images/cart-4.jpg';


function Cartpage() {
  return (
    <>
        <div className="grid_container2">
            <div className="grid_item2">
                 <img className="cartimg-1" src={cartimg1} />
                 <img className="cartimg-2" src={cartimg2} />
                 <img className="cartimg-3" src={cartimg3} />
                 <img className="cartimg-4" src={cartimg4} />
            </div>
            <div className="grid_item2">
                <p className="cartheading">Pebble Blissbuds Ultra</p>
                <p className="cartrupee">₹1,799<span className="cartgrey">M.R.P.: <strike>₹6,999</strike></span></p>
                <p className="carttaxes">Inclusive of all taxes Free Shipping.</p>
                <p className="cartcolor">Color</p>
                <span className="cartcolorbox">Cool White</span>
                <p className="cartplus"><span className="cartadding">-</span><span className="cartnumb">1</span><span className="cartadding">+</span></p>
                <p className="cartaddtocart"><b>Add to Cart</b></p>
                <p className="cartaddtocart"><b>Buy it Now</b></p>
                <p className="cartaddtocart1"><a href="#">VIEW FULL DETAILS </a> </p>

                </div>
        </div>
      
    </>
  );
}

export default Cartpage;