import React, { Component } from 'react';
import Register from "./form/registerFrom";
import { Fade } from "react-awesome-reveal";

class Contact extends Component {
    state = {  }
    render() { 
        return (
       
            <section className="site-section" id="section-contact">
            <Fade cascade>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="section-heading text-center">
                            <h2>Get <strong>In Touch</strong></h2>
                        </div>
                    </div>
    
                    <div className="col-md-7 mb-5 mb-md-0">
                        <form action="" className="site-form">
                            <Register />
                        </form>
                    </div>
                    <div className="col-md-5 pl-md-5">
                        <h3 className="mb-5">My Contact Details</h3>
                        <ul className="site-contact-details">
                            <li>
                                <h4><span className="text-uppercase color">Email</span></h4>
                                smmiloyrahman@gmail.com
                            </li>
              
                 
                            <li>
                                <h4><span className="text-uppercase color">Address</span></h4>
                                <p clasName="color">
                                Talukdar Mas<br></br>
                                Park-mor ,Rangpur city  <br></br>
                                
                                Rangpur, Bangladesh
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </Fade>
            <br />
        </section>
        
          );
    }
}
 
export default Contact;
