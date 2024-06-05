import React from "react";
import "../Components/Explorepage.css";
import Explo_1 from '../images/Exp_1.avif';
import Explo_2 from '../images/Exp_2.avif';
import Explo_3 from '../images/Exp_3.avif';
import Explo_4 from '../images/Exp_4.avif';


function Explorepage() {
  return (
    <>
    <h1 className="heading"><b>Explore Collection</b></h1>
    <div className="grid_container">
        <div className="grid_item">
             <img src={Explo_1} alt=""/>
             <p>Luxe Edition</p>  
        </div>
        <div className="grid_item">
             <img src={Explo_2} alt=""/> 
             <p>Best Sellers</p> 
        </div>
        <div className="grid_item">
             <img src={Explo_3} alt=""/> 
             <p>Women's Edition</p> 
        </div>
        <div className="grid_item">
             <img src={Explo_4} alt=""/> 
             <p>Value Edition</p> 
       </div>
            
    </div><br /><br /><br />
    
    </>
  );
}

export default Explorepage;