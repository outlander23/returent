import React, { Component } from 'react';

class Button extends Component {
	
	
	render() { 
	const { start, onPageChange2, onPageChange, count, size }= this.props;
		return (
		<div className="row center">		
				<button className="btn btn-primary mr-4" onClick={onPageChange2}  disabled={start<=0 ? "disabled":""}>Preview</button>
				<button className="btn btn-primary" onClick={onPageChange}  disabled={size>=count ? "disabled":""} >Next</button>		
		</div>
		  
		);
	}
}
export default Button;
	
