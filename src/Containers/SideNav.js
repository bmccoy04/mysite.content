import React from 'react';
import '../Styles/SideNav.css';
import PortraitCircle from '../Components/PortraitCircle';

const SideNav = () => (
    <div className="sideNav-outer-container">
       <div className="sideNav-inner-nav">
           <PortraitCircle></PortraitCircle>
           <br />
           <ul>
               <li><a href="#">ABOUT</a></li>
               <li><a href="#">EXPERIENCE</a></li>
               <li><a href="#">EDUCATION</a></li>
               <li><a href="#">SKILLS</a></li>
               <li><a href="#">INTEREST</a></li>
               <li><a href="#">OTHER</a></li>
               
           </ul>
       </div> 
    </div>
);

export default SideNav;