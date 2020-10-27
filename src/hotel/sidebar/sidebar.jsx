import React, { Component } from 'react';
import Dropdown from "./dropdown";
import Item from "./dropdownitem";
import Menu from "../menu";
import Http from "../form/httpService";
import { toast } from "react-toastify";
const endPoint ="http://miloy-back.herokuapp.com/api/categories/";


class Sidebar extends Component {
	state={
		arr:[
		],
		count:6,
		startarr:0,
		sizearr:0
		
	}
	

    scriptHtml = "(function($) {\n" +
        "\n" +
        "    \"use strict\";\n" +
        "\n" +
        "    var fullHeight = function() {\n" +
        "\n" +
        "        $('.js-fullheight').css('height', $(window).height());\n" +
        "        $(window).resize(function(){\n" +
        "            $('.js-fullheight').css('height', $(window).height());\n" +
        "        });\n" +
        "\n" +
        "    };\n" +
        "    fullHeight();\n" +
        "\n" +
        "    $('#sidebarCollapse').on('click', function () {\n" +
        "      $('#sidebar').toggleClass('active');\n" +
        "  });\n" +
        "\n" +
        "})(jQuery);"
        

   async componentDidMount() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerText = this.scriptHtml;
        document.body.appendChild(script);
         try{
		 const data = await Http.get(endPoint);
		 const arr= data['data']['results'];
		 this.setState({arr});
		 const count= data['data']['count'];
		 this.setState({count,sizearr:count,startarr:0});
		 
		 
		 }
		 catch (ex){
		   toast.error("An unexpected error occurrred.");
		 
		 }
    };
    
    
    
	
	onPageChange =  (arr, arrname) => {
    	
        
       	 
    	const arrArray = [...this.state.arr];
   	 	const id = arrArray.indexOf(arr) +1;
   		const idx = id -1;
    	this.setState({sizearr: id, startarr: idx});
    	
      
       
      
   
    

    };
    
    onPageChangeall=()=>{
   	const c=this.state.count;
    this.setState({sizearr:c,startarr:0});
    };
    
    onPageChangex=()=>{
   	const c=this.state.count;
    this.setState({sizearr:0,startarr:0});
    
    };
   	
 	
    
    
    render() { 

    const { startarr, sizearr, count, arr } =this.state;
	 
	 
	 
    
        return ( 
		<div>
        	<div className="wrapper  d-flex align-items-stretch">
        		<br/><br/>
        <nav id="sidebar" className="sidebar2 mt-4">
			<div className="custom-menu ">
				<button type="button" id="sidebarCollapse" className="btn btn-light">
					<span className="text-center ">></span>
	        	</button>
       	 	</div>
        	<div className="p-4 pt-5">
		  		<h1><a href="#menu" className="logo">Menu</a></h1>
	        	<ul className="list-unstyled components mb-5">
	          		<li>
	            		<a onClick={this.onPageChangeall}>All</a>
	          		</li>
	           		
	          		{this.state.arr.map(arr => 
	          		<li>
	            		<a onClick={() => this.onPageChange(arr,arr.name) }>{arr.name}</a>
	          		</li>
     
	)}
					<li>
	            		<a onClick={this.onPageChangex}>Re-Fresh</a>
	          		</li>
	      
	      
	      
	          
	       </ul>
	    </div>
	  </nav>  
	  <div className="content">
        			<h6 className="text-center">        
        			<span>
        					<img className="center" sizearr="100px" width="100px" src={require("../images/menu.png")} /><br/><br/>
       								 All dishes Are Made With The Freshest Quality Products.
        												</span></h6><br />
        
        		<div className="content">
       				 {this.state.arr.slice(startarr, sizearr).map(arr => 
     
	<Menu
	
		menuname={arr.name}
		menuid={arr.name}
	
	
		
	
	/>)}
	<br />
	
       			</div>
       </div>
       </div>
       </div>  
         );
    }
}
 
export default Sidebar;
