import React,{Component} from 'react';
import { Link } from "react-router-dom";
class Navlist extends Component{
	
	
	render(){
	
	const {label,link}=this.props;
	
	return (
			<li className="nav-item nav-link ">
				<a className="nav-link smooth-scroll" href={link}><span>{label}</span></a>
			</li>
		);
	}
}
export default Navlist;
