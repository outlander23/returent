import React, { Component } from 'react';
import Menuhelp from "./menuhelp";
import Btn from "./button";
import Http from "./form/httpService";
import { toast } from "react-toastify";
const endPoint="https://miloy-back.herokuapp.com/api/foods/cat=";


class Menu extends Component {

	state = {
	  menu :[
	  ],
	    size: 3,
    	start:0,
    	count :9
	}

	
	async componentDidMount(){
		 const id= this.props.menuid;
		 try{
		 const data = await Http.get((endPoint+id).toString());
		 const contest= data['data']['results'];
		 this.setState({menu:contest});
		 const count= data['data']['count'];
		 this.setState({count});
		 }
		 catch (ex){
		   toast.error("An unexpected error occurrred.");		 
		 }
	};
	
	
	onPageChange =({currentTarget: event}) =>{
	const {size,start,count}=this.state;
	const sizex= size +1;
	const startx= start +1;
	this.setState({size:sizex ,start:startx});	
	};
	
	onPageChange2 =({currentTarget: event}) =>{
	const {size,start,count}=this.state;
	const sizex= size -1;
	const startx= start -1;
	this.setState({size:sizex ,start:startx});
	};
	async componentDidMount(){
		 const id= this.props.menuid;
		 try{
		 const data = await Http.get((endPoint+id).toString());
		 const contest= data['data']['results'];
		 this.setState({menu:contest});
		 const count= data['data']['count'];
		 this.setState({count});
		 }
		 catch (ex){
		   toast.error("An unexpected error occurrred.");		 
		 }
	};
	
	 render() { 
	 	const { size, start , count }=this.state;
	 	const { price, name, image }= this.state.menu;
	 	const { menuid, menuname } =this.props;
        return (
        
        <div className="container" id={menuid}>
			<marquee><h2 className="text-center mb-4">Our <strong className="color"> {menuname}</strong> Menu</h2></marquee>
			<div className="row">		
				{this.state.menu.slice(start, size).map(menu => 
				<Menuhelp name={menu.name} price={menu.price} img={menu.image} />)}<br/>                 
              </div>
          		<div className="container-fluid ">
					<Btn start={start} size={size} count={count} onPageChange2={this.onPageChange2} onPageChange={this.onPageChange} />
				 </div>
		<br /><hr className="hr" /><br />
          </div>
          
        );
       }
}

 
export default Menu;
