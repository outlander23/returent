import React,{Component} from 'react';


let endPoint="https://mah2020.herokuapp.com/api/cf_problem/"





class Clientt extends Component{
	
	
	render(){
	const {review,name,address}=this.props;
	return (
			
			
				<div class="col-md-6 ">
					<div class="block-47 d-flex mb-5 ">
						<blockquote className="block-47-quote">
							<p>&ldquo;<p className=" color">{review}</p>&rdquo;</p>
							<cite className="block-47-quote-author white" >&mdash; {name}<br/><p>{address}</p></cite>
						</blockquote>
					</div>

				</div>
			
	);
	}

}
export default Clientt;
