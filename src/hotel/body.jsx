import React, { Component } from 'react';
import { Fade,Zoom } from "react-awesome-reveal";

class Body extends Component {

	 render() { 
        return (
       <div >
        <div  className="container mt-4 " id="about">
				<div className="inner split">
		
					<div>
			<img src={require('./images/hotel.png')} className="img-fluid" alt="" />
						<h3>Welcome to Miloy's Restaurant.</h3><br/>
						<p className="lead"> Using all-natural ingredients, the Little Beet is committed to cooking up plant-inspired, veggie-forward food that gives people the nutrients they need to live well. Visit or order from one of our vegetarian friendly restaurants in Manhattan, New York City, Jersey City, Westchester, Long Island & the DC Area today </p>

						<a href="#" className="btn btn-primary">Contact Us</a>
					</div>
					
					<div >
						<ul className="checklist mt-4 lead">
							<li>100% halal meals, Pure ingredent</li>
							<li>100% pure ingredient  Pure ingredent</li>
							<li>100% best quality  Pure ingredent</li>
							<li>100% best quality  Pure ingredent</li>
							<li>100% best quality  Pure ingredent</li>
							<li>100% halal meals, Pure ingredent</li>
							<li>100% pure ingredient  Pure ingredent</li>
							<li>100% best quality  Pure ingredent</li>
						</ul>
					</div>
					
				</div>
			</div> 
			
			
			</div>
        
        );
     }
}
export default Body;
