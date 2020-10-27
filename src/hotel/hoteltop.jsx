import React, { Component } from 'react';
import Topchild from "./hoteltopchild"
import "./style.css";
import Navlist from "./navlist";
import Body from "./body";
import Dropdown from "./dropdown";


class Topdiv extends Component {

    render() { 
        return ( 
        <div id ="home">
           <nav className="navbar navbar-expand-lg navbar-dark my fixed-top" >
      <div className="container-fluid">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
        
			<img className="img-fluid" src={require('./images/hotel.png')} width="40px" height="40px" alt="" /><br/>
			
		</a>
        <button 
        className="navbar-toggler navbar-toggler-right" 
        type="button" 
        data-toggle="collapse" data-target="#navbarResponsive" 
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          Menu
          <i className="fa fa-bars"></i>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
          <Navlist label="Home" link="#home" />
           <Navlist label="About" link="#about" />
           <li class="nav-item dropdown mt-2">
        	<a 
        	class="nav-link dropdown-toggle" 
        	href="#" id="navbarDropdown" 
        	role="button" 
        	data-toggle="dropdown" 
        	aria-haspopup="true" 
        	aria-expanded="false">
          Menu
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#ffood">Fast Food</a>
          <a class="dropdown-item" href="#cfood">Chainess Food</a>
          <a class="dropdown-item" href="#icream">Ice Cream</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#cdrinks">Cold Drinks</a>
        </div>
      </li>
           <Navlist label="Chef" link="#chef" />
           <Navlist label="Contect Us" link="#contact" />
          </ul>
        </div>
      </div>
    </nav>
    
        <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
        <ol className="carousel-indicators">
    		<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    		<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    		<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  		</ol>
  		 <div className="carousel-inner justify-content-between">
  		 
  		 <Topchild 
  		 	active="active" 
  		 	head="Miloy Restaurant, Share The Wellness"  
  		 	label="Eat good , live good &  heathy" 
  		 	img={require('./images/slider-01.jpg')} />
  		 
  		 <Topchild  
  		 	head="Miloy Restaurant, The Best Vegetarian Restaurant " 
  		 	label="Eat good , live good &  heathy" 
  		 	img={require('./images/slider-02.jpg')} />
  		 	
  		 <Topchild  
  		 	head="What grows together, goes together. " 
  		 	label="Eat good , live good &  heathy" 
  		 	img={require('./images/slider-03.jpg')} />
  		 
  		 </div>
		 
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>



   < Body />

</div>















         );
    }
}
 
export default Topdiv;
