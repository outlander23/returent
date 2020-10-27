import React, { Component } from 'react';
import Top from "./tempelet1";
import Body from "./body";


class Home extends Component {
	

	 render() { 
        return (
        <div className="content">
        <Top />
        <Body />
       </div>
       );
      }
}   
 export default Home;
