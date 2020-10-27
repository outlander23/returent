import React, { Component } from 'react';
import Register from "./form/registerFrom";
import { Fade } from "react-awesome-reveal";

class Customar extends Component {
    render() { 
        return (
        
      <div className="cont-box m-4">
		<div className="container-fluid ">
			<div className="row">
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4">
					<div className="inner-cont-box">
						<img src={require("./images/letsgo.png")} className="picon" />
						<h3 className="counter-number">1000+</h3>
						<h4>Happy customars</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4">
					<div className="inner-cont-box">
						<img src={require("./images/food.png")} className="picon" />
						<h3 className="counter-number">100</h3>
						<h4>Food Items</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4">
					<div className="inner-cont-box">
						<img src={require("./images/start.png")} className="picon" />
						<h3 className="counter-number">300+</h3>
						<h4>Positive Reviews</h4>
					</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-xs-12 mt-4">
					<div className="inner-cont-box">
						<img src={require("./images/bike.png")} className="picon" />
						<h3 className="counter-number">100%</h3>
						<h4>On Time Delevery</h4>
					</div>
				</div>
				
			</div>
		</div>
	</div>

       );
    }
}
export default Customar;
