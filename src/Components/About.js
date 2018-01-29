import React from 'react';
import '../Styles/About.css'
import FontAwesome from 'react-fontawesome';

const About = () => (
    <div className="about-main-container">
        <div className="about-content-wrapper">
            <div>
                <span className="about-bryan">BRYAN </span>

                <span className="about-mccoy">MCCOY</span>
            </div>
            <div className="blue-font about-address-container">
                <span className="yellow-font">DENHAM SPRINGS LA </span>- BRYANMCCOY04@GMAIL.COM
            </div>
            <div className="blue-font about-aboutme">
                Self motivated Software Developer capable of working in a wide range of environments.  Experience developing different types of applications such as web applications, RESTful services, windows forms, mobile sites, and native mobile applications.  Over six years of full time professional programming as well as two years of part time programming.  Strong problem solving skills stemming from time spent maintaining and expanding existing software as well as creating new innovative applications catering to a customer's needs.
            </div>
            <div className="about-social-container">
                <a href="https://github.com/bmccoy04" target="blank" title="github">
                    <FontAwesome
                        className="about-social"
                        name="github"
                        size="3x"
                    /></a>
                <a href="https://twitter.com/BMcCoy04" target="blank" title="twitter">
                    <FontAwesome
                        className="about-social"
                        name="twitter"
                        size="3x"
                    /></a>
                <a href="http://www.linkedin.com/in/bryan-mccoy-89015464" target="blank" title="linkedIn">
                    <FontAwesome
                        className="about-social"
                        name="linkedin"
                        size="3x"
                    /></a>
                <a href="http://starwars.wikia.com/wiki/Alliance_to_Restore_the_Republic" target="blank" title="Rebel Alliance">
                    <FontAwesome
                        className="about-social"
                        name="rebel"
                        size="3x"
                    /></a>
            </div>
        </div>
    </div>
);

export default About;