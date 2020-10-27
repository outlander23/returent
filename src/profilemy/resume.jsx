import React, { Component } from 'react';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 

            <section className="site-section" id="section-resume">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5 ">
                        <div className="section-heading text-center">
                            <h2>My <strong>Resume</strong></h2>
                        </div>
                    </div>
                    
    
                    <div className="col-md-6 ">
                        <h2 className="mb-5">Education</h2>
                        
                          <div className="resume-item mb-4 color">
                            <span className="date"><span className="icon-calendar"></span> January 2020 - Present</span>
                            <h3>Masteral in Information Technology</h3>
                            <p>Still now I am learning new things and It's my pleasure.</p>
                            <span className="school">Dhaka University</span>
                        </div>
                        
                        <div className="resume-item mb-4 color ">
                            <span className="date"><span className="icon-calendar"></span> January 2016 - March 2019</span>
                            <h3>Bsc in Computer Science & Engineering</h3>
                            <p>At first I am proud to be a part of CSE family in BRUR. I just wants to learn about computer sciences.</p>
                            <span className="school lead">Begum Rokeya University, Rangpur</span>
                        </div>
    
                      

                        <div className="resume-item mb-4 color">
                            <span className="date"><span className="icon-calendar"></span> January 2015 - 2016 Deacember.</span>
                            <h3>HSC In Science</h3>
                            <p>My journy started from here.</p>
                            <span className="school lead">Collectorate School & College, Rangpur</span>
                        </div>
    
            
    
                    </div>

                    <div className="col-md-6 color">
    
    
                        <h2 className="mb-5">Experience</h2>
    
                        <div className="resume-item mb-4 bg-primary">
                            <span className="date"><span className="icon-calendar"></span> March 2019 - Present</span>
                            <h3>Web Developer</h3>
                            <p>I started My career as a Full Stack Web Developer . I have created and Maintained some websites. I worked there two years .  </p>
                            <span className="timeline-icon icon-pen"></span>
                        </div>
    
                        <div className="resume-item mb-4 bg-primary">
                            <span className="date"><span className="icon-calendar"></span> March 2020 - Present</span>
                            <h3>Green Coder</h3>
                            <p>I am proud to be an Green Coder at codeforces</p>
                            <span className="school icon-pen">Codeforces</span>
                        </div>
    
                        <div className="resume-item mb-4 bg-primary">
                            <span className="date"><span className="icon-calendar"></span> January 2020 - Present</span>
                            <h3>Question Writer</h3>
                            <p>For Online contest I write questions for B12-An online Judge</p>
                            <span className="school lead icon-pen"></span>
                        </div>
    
                   
    
    
                    </div>
                </div>
            </div>
        </section>
         );
    }
}
 
export default Resume;
