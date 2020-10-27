import React,{Component} from 'react';
import Http from "../form/httpService";
import { toast } from "react-toastify";
import Clientt from "./table";

import { Fade,Zoom } from "react-awesome-reveal";
let endPoint="https://miloy-back.herokuapp.com/api/customers/"





class Client extends Component{
	state={

	  contest: [
      
    ],
    size: 2,
    start:0,
    count :0
	 

	}
	
	
	
	
	
	async componentDidMount(){
		 try{
		 const data = await Http.get(endPoint);
		 const contest= data['data']['results'];
		 this.setState({contest});
		 const count= data['data']['count'];
		 this.setState({count});
		 
		 }
		 catch (ex){
		   toast.error("An unexpected error occurrred.");
		 
		 }
		
	
	};
	onPageChange =() =>{
	const {size,start,count}=this.state;
	const sizex= size +1;
	const startx= start +1;

	this.setState({size:sizex ,start:startx});
	
	};
	onPageChange2 =() =>{
	const {size,start,count}=this.state;
	const sizex= size -1;
	const startx= start -1;
	this.setState({size:sizex ,start:startx});
	
	};

	render(){
	const {name,address,review,size,start,count}=this.state;
	return (
		<section className="site-section">
		
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-12">
					<div className="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<Zoom>
			<div className="row">
			{this.state.contest.slice(start, size).map(contest => 
     
	<Clientt
	
		name={contest.name}
	
		address={contest.address}
		review={contest.review}
	
	
	/>)}
	<br />
	
	
			</div>
			</Zoom>
			<div className="container-fluid ">
			<div className="row center">

			<button className="btn btn-primary mr-4" onClick={this.onPageChange2}  disabled={start<=0 ? "disabled":""} >Preview</button>
		
			<button className="btn btn-primary" onClick={this.onPageChange} disabled={size>=count ? "disabled":""} >Next</button>
			</div>
			<br />
			
			</div>
			<br />
		</div>
		<br />
	</section>

			
			
			
			
		
	
		);
	}







}




export default Client;
