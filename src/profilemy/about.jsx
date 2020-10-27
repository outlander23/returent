import React, { Component } from 'react';
import { Fade, LightSpeed } from "react-awesome-reveal";
class About extends Component {
  
    render() { 
        return ( 
        <Fade delay={500}>
            <section className="site-section m-2" id="section-about">
            <div class="container">
                <div class="row mb-5 align-items-center">
                    <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <img src={require("./images/miloy1.jpg")}  width="450" height="400"  alt="Image placeholder" className="img-fluid"/>
                    </div>
                    <div class="col-lg-5 pl-lg-5">
                        <div className="section-heading">
                            <h2>About <strong>Me</strong></h2>
                        </div>
                        <p className="lead">My name is S.M.Miloy. I am a student of Begum Rokeya University, Rangpur . I am a professional web designer, developer & Compatative Programmer. I have a passion for web design . I ❤ Compatative programming, music & Photography.</p>
                        <p className="mb-5  ">
                        As a compatative programmer, I know many language & where to apply them. I mostly know Python, C, C++ & JS .
I like to keep  all my task simple. My goals are to focus on typography, content and conveying the message that you want to send. I'm a developer, so I know how to create your website to run across devices using the latest technologies available.I am a full stack web developer . I have a lot of skill in Frontend and Backend web Development. </p>
                        <p>
                            <a href="#section-contact" className="btn btn-primary px-4 py-2 btn-sm smoothscroll">Hire Me</a>
                           
                        </p>
                    </div>
                </div>
    
    
            </div>
            
        </section>
        </Fade >
         );
    }
}
 
export default About;
