import React from 'react';
import "../css/About.scss"
import chris from "../Image/chris.jpg"

const About = () => {
  return (
    <section id="about-us">
      <div>
        <h1 className="aboutUs title">Something about me.....</h1>
        <img className="pic" src={chris} alt="Christian Matos"/>
        <div className="paragraphDiv">
      
          <div className="innerParaDiv">
            <p className="aboutUsPara">
              I am a Software Engineer with strong analytical and problem-solving skills. My background in technology and client services has resulted in increasing product usability for clients. My transition into programming and software engineering allows me to continue this using my past experience in tech to better serve the community. My approachable demeanor, work ethic, adaptability, and ability to work well in high-pressure situations allow me to thrive in the ever-changing landscape of the tech industry.
                                </p>
          </div>
        </div>
      </div>
  
    </section>

  );
}

export default About;