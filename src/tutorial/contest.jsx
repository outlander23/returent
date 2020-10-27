import React,{Component} from 'react';
import Host from "./host";
import {NavLink,Link} from "react-router-dom";
import Sidebar from "../navbar/sidebar";

class Table extends Component{
	

	render(){
	
	const {title,testers,hosts}=this.props;
	return (
		
		
   <tr>
      <td>{title}</td>
       <td><Host hosts={hosts}/></td>
        <td><Host hosts={testers}/></td>
   
     
    </tr>

			
			
			
			
		
	
		);
	}







}




export default Table;
