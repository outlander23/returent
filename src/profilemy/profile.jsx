import React, { Component } from 'react';
import { Fade,Zoom } from "react-awesome-reveal";

class Profile extends Component {
    state = {  }
    render() { 
        return ( 
     <Zoom >

        	<div className="site-section container" id="section-portfolio">
		<div className="container">
			<div className="row">
				<div className="section-heading text-center col-md-12">
					<h2>My <strong>Hobies</strong></h2>
				</div>
			</div>
			<div className="filters">
				<ul>
					<li className="active" data-filter="*">All</li>
					<li data-filter=".packaging">Programing</li>
					<li data-filter=".mockup">Web Desing</li>
					<li data-filter=".typography">Traveling</li>
					<li data-filter=".photography">Photography</li>
				</ul>
			</div>

			<div className="filters-content">
				<div className="row grid">
				<div className="single-portfolio col-sm-4 all packaging">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/computer.png')} alt=""/>
							</div>                             
						</div>
						<div className="p-inner">
							<h4>I love programing So match</h4>
							<div className="cat">Programing</div>
						</div>
						<div className="m-4"></div>
					</div>
					
					
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/web.png')} alt=""/>
								
							</div>
							                             
						</div>
						<div className="p-inner">
							<h4>I love Web Development So match</h4>
							<div className="cat">Web Development</div>
						</div>
						<div className="m-4"></div>
					</div>
					<div className="single-portfolio col-sm-4 all mockup">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/cir.png')} alt=""/>
								
							</div>
							                           
						</div>
						<div className="p-inner">
							<h4>I love Web Desinging So match</h4>
							<div className="cat">Web Desinging</div>
						</div>
						<div className="m-4"></div>
					</div>
					
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p1.jpg')} alt="" />
							</div>
							                              
						</div>
						<div className="p-inner">
							<h4>The Shadow </h4>
							<div className="cat">photography</div>
						</div>  
						<div className="m-4"></div>                                       
					</div>
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p2.jpg')} alt=""/>
							</div>
							                             
						</div>
						<div className="p-inner">
							<h4>The Beauty of Sky</h4>
							<div className="cat">Photography</div>
						</div> 
						<div className="m-4"></div>                                        
					</div> 
					
					      
					<div className="single-portfolio col-sm-4 all photography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p4.jpg')} alt=""/>
							</div>                    
						</div>
						<div className="p-inner">
							<h4>The Star</h4>
							<div className="cat">Photography</div>
						</div>
						<div className="m-4"></div>                                         
					</div>                          
					
					
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p5.jpg')} alt=""/>
							</div>                           
						</div>
						<div className="p-inner">
							<h4>Visiting BRUR</h4>
							<div className="cat">Traveling</div>
						</div>
						<div className="m-4"></div>
					</div>
					
					
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p6.jpg')} alt=""/>
							</div>                           
						</div>
						<div className="p-inner">
							<h4>Visiting Kantojir Mondir </h4>
							<div className="cat">Traveling</div>
						</div>
						<div className="m-4"></div>
					</div>
					
					<div className="single-portfolio col-sm-4 all typography">
						<div className="relative">
							<div className="thumb">
								<div className="overlay overlay-bg"></div>
								<img className="image img-fluid" src={require('./images/p3.jpg')} alt=""/>
							</div>                           
						</div>
						<div className="p-inner">
							<h4>Visiting Pharpur </h4>
							<div className="cat">Traveling</div>
						</div>
						<div className="m-4"></div>
					</div>
					
					
					
				</div>
			</div>
		</div>
	</div>
	</Zoom>
         );
    }
}
 
export default Profile;
