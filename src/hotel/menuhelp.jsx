import React, { Component } from 'react';

class Menuhelp extends Component {

	 render() { 
	 const { name , price ,img } =this.props;
        return (
        	<div className="col-md-6 col-lg-4">
                    <div className="services-inner-box">
						<div className="ser-icon">
							<img 
							src={img}  className="img-fluid
							img-thumbnail" alt="ff" />
						</div>
						<h2 className="color">{name}</h2>
						<a className="hvr-radial-in" href="#">$ {price}</a>
					</div>
                </div>
                );
               }
           }
    
export default Menuhelp;
