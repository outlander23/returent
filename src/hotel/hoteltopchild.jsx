import React, { Component } from 'react';
import { Fade,Zoom } from "react-awesome-reveal";

class Topchild extends Component {

    render() { 
    const { active='', img , head , label }=this.props;
    const classx= "carousel-item  " + active.toString();
   
        return ( 
                <div className={classx}>
      				<Zoom ><div><img className="d-block w-100" src={img} alt="Third slide"/></div></Zoom>
            			<div className="container">
							<div className="slider-content text-white">
								<div className="in-box">
								<h2>{head} </h2>
								<p>{label}</p>
								<a className="btn btn-primary" href="#">Let's Go</a>
							</div>
						</div>
					
						</div>
 
    				</div>
  				
  
         );
    }
}
 
export default Topchild;
