import React,{Component} from 'react';
import Http from "../form/httpService";
import { toast } from "react-toastify";
import Clientt from "./table";
let endPoint="https://miloy-back.herokuapp.com/api/customers/"





class Client extends Component{
	state={

	  contest: [
      
    ]
	 

	}
	
	
	
	async componentDidMount(){
		 try{
		 const data = await Http.get(endPoint);
		 const contest= data['data']['results'];
		 this.setState({contest});
		 
		 }
		 catch (ex){
		   toast.error("An unexpected error occurrred.");
		 
		 }
		
	
	};
	
	
	
	render(){
	const {name,address,review}=this.state;
	return (
		<section class="site-section">
		<div class="container">
			<div class="row mb-5">
				<div class="col-md-12">
					<div class="section-heading text-center">
						<h2>Client <strong>Testimonial</strong></h2>
					</div>
				</div>
			</div>
			<div class="row">
			{this.state.contest.map(contest => 
     
	<Clientt
	
	
		name={contest.name}
	
		address={contest.address}
		review={contest.review}
	
	
	/>)}

			</div>
		</div>
	</section>

			
			
			
			
		
	
		);
	}







}




export default Client;
