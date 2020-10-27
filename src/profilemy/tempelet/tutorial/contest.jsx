import React,{Component} from 'react';
import Host from "./host";
import {NavLink,Link} from "react-router-dom";

import { Fade,Zoom } from "react-awesome-reveal";

class Table extends Component{
	

	render(){
	
	const {title,testers,hosts}=this.props;
	return (
		
		
   		<div className="bg-light m-4">
   		
     		<h1 className="text-center color"> <Fade>{title}</Fade></h1>
     		<p className="m-2">Written by :<Fade><Host hosts={hosts}/></Fade></p>
     
     			
     			
     			<div className="text-right m-2">Tested by :<Fade><Host hosts={testers}/></Fade></div>
   				
    	</div>

			
			
			
			
		
	
		);
	}







}




export default Table;
