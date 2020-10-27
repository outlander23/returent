import React, { Component } from 'react';
import { Fade } from "react-awesome-reveal";
class Topdiv extends Component {
    
    render() { 
        return (
        <Fade cascade>
    <section 
	className="site-hero topdiv" 
	id="section-home" 
	data-stellar-background-ratio="0.5">
	
		<div className="container">
			<div className="row intro-text align-items-center justify-content-center">
				<div class="col-md-10 text-center pt-5">
				<Fade delay={100} cascade>
						<h1 className="display-3 font" >I'm S.M.Miloy</h1>
				</Fade >
						<Fade delay={1000} cascade><p className="lead text-center">I am a professional web designer and developer. I have a passion for web designing and love to create web site. I ❤ programming.</p></Fade>

				</div>
			</div>
		</div>
		
	</section>
	</Fade >
          );
    }
}
 
export default Topdiv;
