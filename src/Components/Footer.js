import React from "react";
import footerimg from "../images/Pebble_Logo-2.avif";
import "../Components/Footer.css";

function Footer() {
  return (
    <>
      <div className="grid_container7">
        <div className="grid_item7">
            <img className="footerimg" src={footerimg} alt="image"/>
            <p className="fcolor">Since inception in 2013, there has been one principle that we, at Pebble have held as holy grail
                 build experiences crafted around ‘you’. We are a technology brand that endeavours to get the perfect
                  blend of innovation, technology and design in each of our products.</p>

        </div>
        <div className="grid_item7">
            <p className="heading7">PRODUCTS</p>
            <ul className="flines">
                <li>Headphones</li>
                <li>Wireless Speakers</li>
            </ul>
        </div>
        <div className="grid_item7">
        <p className="heading7">COMPANY</p>
            <ul className="flines">
                <li>Our Story</li>
                <li>Corporate Orders</li>
                <li>Contact Us</li>

            </ul>
        </div>
        <div className="grid_item7">
        <p className="heading7">SUPPORT</p>
            <ul className="flines">
                <li>Register Product Warranty</li>
                <li>Raise Warranty Complaint</li>
                <li>Service Centre List</li>
                <li>FAQs</li>
                <li>Warranty Policy</li>
                <li>Replacement & Refund Policy</li>
                <li>Shipping Policy</li>
                <li>Privacy Policy</li>
                <li>E-waste Policy</li>
               <li> Terms of Service</li>
            </ul>
        </div>
        <div className="grid_item7">
        <p className="heading7">GET IN TOUCH</p>
            <ul className="flines">
                <li>Vaishnavi Properties, #30/1, Silicon Terraces,, 2nd and 3rd Floor, Adugodi, 
                    Hosur Main Road, Koramangala, Bengaluru – 560095</li>
                <li>Email: support@pebblecart.com
                    Phone: +91-8800271651
                    Mon-Sun: 10:00AM - 7:00PM</li>
                <li>Subscribe to Our Newsletter</li>
            </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;