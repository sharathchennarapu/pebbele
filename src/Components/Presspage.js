import React from "react";
import pressimg1 from "../images/press-1.jpg";
import pressimg2 from "../images/press-2.jpg";
import pressimg3 from "../images/press-3.jpg";
import "../Components/Presspage.css"



function Presspage() {
  return (
    <>
    <h1 className="heading6"><b>In The Press</b></h1>
      <div className="grid_container6">
            <div className="grid_items6">
           <img className="pressimgchange" src={pressimg1} alt="image"/>
            </div>
            <div className="grid_items6">
        <img className="pressimgchange" src={pressimg2} alt="image"/>
            </div>
            <div className="grid_items6">
        <img className="pressimgchange" src={pressimg3} alt="image"/>
            </div>
      </div><br/><br/><br/>
    
    </>
  );
}

export default Presspage;