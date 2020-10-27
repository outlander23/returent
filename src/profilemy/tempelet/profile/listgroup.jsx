import React,{Component} from 'react';
import { Fade,Zoom } from "react-awesome-reveal";
class Listgroup extends Component{

     
	
	render(){
	const{ thead, td}=this.props;
	return (
	

	

  	
  		<tr>
  			<td><Fade delay={500}><b>{thead}</b></Fade></td>
  			<td><Fade delay={1000}><p>{td}</p></Fade></td>
  		</tr>
  	
  	

	

	
	);
	}
}
export default Listgroup;
