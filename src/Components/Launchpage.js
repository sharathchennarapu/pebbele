import React from "react";
import "../Components/Launchpage.css";
import lau_1 from '../images/lau-1.jpg';
import lau_2 from '../images/lau-2.jpg';
import lau_3 from '../images/lau-3.jpg';
import lau_4 from '../images/lau-4.jpg';


function Launchpage() {
  return (
    <>

    <h1 className="heading1"><b>New Launches</b></h1>
    <div className="grid_container1">
        <div className="grid_item1">
             <img src={lau_1} alt="image"/>
             <p className="headingmain"> Pebble Rio</p> 
             <span className="rbox">Premium Metal Build</span> 
             <p className="grey">1.39" HD Display, Polygonal Dial Design</p>
             <p className="rupee">₹1,999<strike className="rupee2">₹6,499</strike></p>
             <p className="lastline">₹1,899 with bank offer</p> 
        </div>
        <div className="grid_item1">
             <img src={lau_2} alt="image"/> 
             <p className="headingmain"> Pebble Mega</p> 
             <span className="rbox">Premium Metal Build</span> 
             <p className="grey">2.06” Amoled Display, BT Calling, Health Suite, AO</p>
             <p className="rupee">₹2,699<strike className="rupee2">₹7,999</strike></p>
             <p className="lastline">₹2,564 with bank offer</p>

        </div>
        <div className="grid_item1">
             <img src={lau_3} alt="image"/> 
             <p className="headingmain"> Pebble Vienna</p> 
             <span className="rbox">BT Calling</span> 
             <p className="grey">1.27" HD Display, BT Calling, Diamond Cut Design, Female health Monitoring</p>
             <p className="rupee">₹2,299<strike className="rupee2">₹6,999</strike></p>
             <p className="lastline">₹2,184 with bank offer</p>

        </div>
        <div className="grid_item1">
             <img src={lau_4} alt="image"/> 
             <p className="headingmain"> Pebble Cosmos Luxe 3</p> 
             <span className="rbox">BT Calling</span> 
             <p className="grey">1.43" Amoled Display, BT Calling, Heart Rate Monitoring, SpO2 Monitoring,</p>
             <p className="rupee">₹1,899<strike className="rupee2">₹7,499</strike></p>
             <p className="lastline">₹1,804 with bank offer</p> 
       </div>
            
    </div>
    
    </>
  );
}

export default Launchpage;