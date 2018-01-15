import React from 'react';
import '../Styles/MainContent.css'
import About from '../Components/About'
import Experience from '../Components/Experience'

const MainContent = () => (
    <div className="maincontent-maincontainer">
        <About></About>
        <Experience></Experience>
    </div>
);

export default MainContent;