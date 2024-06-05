import React, { Component } from "react";
import "../Components/Officalpage.css";
import offimg1 from "../images/off-1.jpg";
import offimg2 from "../images/off-2.jpg";
import offimg3 from "../images/off-3.jpg";
import offimg4 from "../images/off-4.jpg";
import offimg5 from "../images/off-5.jpg";
import offimg6 from "../images/off-6.jpg";
import offimg7 from "../images/off-7.jpg";
import offimg8 from "../images/off-8.jpg";




function Officalpage() {
  return (
    <>
    <h1 className="heading5"><b>Official Partners</b></h1>
      <div className="grid_container5">
            <div className="grid_items5">
           <img className="offimgchange" src={offimg1} />
            </div>
            <div className="grid_items5">
        <img className="offimgchange" src={offimg2} />
        
            </div>
            <div className="grid_items5">
        <img className="offimgchange" src={offimg3} />
        
            </div>
            <div className="grid_items5">
        <img className="offimgchange" src={offimg4} />
       
           </div>
           <div className="grid_items5">
        <img className="offimgchange" src={offimg5} />
      
           </div>
           <div className="grid_items5">
        <img className="offimgchange" src={offimg6} />
          
           </div>
    
           <div className="grid_items5">
        <img className="offimgchange" src={offimg7} />
        
           </div>
        
            <div className="grid_items5">
        <img className="offimgchange" src={offimg8} />
        
           </div>
      </div><br/><br/><br/>
    
    </>
  );
}

export default Officalpage;