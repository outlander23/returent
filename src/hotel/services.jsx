import React, { Component } from 'react';


class Service extends Component {

    render() { 
        return ( 

	<section className="site-section pb-0"  id="chef">
	<br />
	<br />
    <div className="container">

        <div className="row mb-4">
            <div className="col-md-12">
                <div className="section-heading text-center">
                    <h2>Meet  <strong>Our Team</strong></h2>
                </div>
            </div>
        </div>
        <div className="row">
        
        
               <div class="col-md-6 col-lg-4 mb-2" >
                    <div class="our-team">
                        <img src={require("./images/img-1.png")}  className="img-fluid img-thumbnail mb-2"/>
                        <div class="container team-content">
                            <h3 >Williamson</h3>
                            <span>Senior Chef</span>
                        </div>
                    </div>
                </div>
               <div class="col-md-6 col-lg-4 mb-2" >
                    <div class="our-team">
                        <img src={require("./images/img-2.png")}  className="img-fluid img-thumbnail mb-2"/>
                        <div class="container team-content">
                            <h3 >Williamson</h3>
                            <span>Senior Chef</span>
                        </div>
                    </div>
                </div>
               <div class="col-md-6 col-lg-4 mb-2" >
                    <div class="our-team">
                        <img src={require("./images/img-1.png")}  className="img-fluid img-thumbnail mb-2"/>
                        <div class=" team-content">
                            <h3 >Williamson</h3>
                            <span>Senior Chef</span>

                        </div>
                    </div>
                </div>

            

        </div>
        <br />
    </div>
    <br />
</section>

         );
    }
}
 
export default Service;
