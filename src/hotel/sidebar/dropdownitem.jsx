import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Dropdownitem extends Component {

    render() { 
        const { address, label } =this.props;
        

        return ( 
             <li className="nav-item">
	              <Link to={address}>{label}</Link>
	          </li>
         );
    }
}
 
export default Dropdownitem;
