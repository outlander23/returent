import React, { Component } from 'react';
import Dropdown from "./dropdown";
import Item from "./dropdownitem";

class Sidebar extends Component {

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

    componentDidMount() {
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.innerText = this.scriptHtml;
        document.body.appendChild(script);
    }
 
    render() { 
    const { user }= this.props;
    console.log(user);
        return ( 

        <nav id="sidebar">
			<div className="custom-menu ">
				<button type="button" id="sidebarCollapse" className="btn btn-primary float">
					<span className="text-center ">></span>
	        	</button>
       	 	</div>
        	<div className="p-4 pt-5">
		  		<h1><a href="/home" className="logo">B12</a><br/><span><h6> A online judge </h6></span></h1>
		  		
		  		
	        <ul className="list-unstyled components mb-5">
	          <li className="active">
	            <Dropdown id="homeSubmenu" name="Judge" />
	            <ul className="collapse list-unstyled" id="homeSubmenu">
               			<Item address="/contests" label="Contests" />
               			<Item address="http://login-mah.herokuapp.com/tutorials" label="Tutorials" />
               <Item address="http://login-mah.herokuapp.com/cf" label="Codeforces" />
             
	            </ul>
	          </li>
	          {!user && <div>
	           <li className="active">
	            <Dropdown id="user" name="User" />
	            	<ul className="collapse list-unstyled" id="user">
               		<Item address="/register" label="Register" />
               		<Item address="/login" label="Log In" />
              
	            </ul>
	          </li>
	          </div>
	          }
	           {user && <div>
	           <li className="active">
	            <Dropdown id="user" name="User" />
	            	<ul className="collapse list-unstyled" id="user">
               		<Item address="/profile" label="Profile" />
               		<Item address="/logout" label="Log out" />
              
	            </ul>
	          </li>
	          </div>
	          }
	          
	          <li>
	              <a href="#">BRUR</a>
	          </li>
	          <li>
	              <a href="#">About</a>
	          </li>
	       </ul>
	    </div>
	  </nav>  
         );
    }
}
 
export default Sidebar;
