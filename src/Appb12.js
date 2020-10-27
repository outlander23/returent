import React, { Component } from 'react';
import "./profilemy/css/animate.css";
import "./profilemy/css/style.css";
import "./profilemy/css/flexslider.css";
import "./profilemy/newstyle.css";
import "./profilemy/css/bootstrap.css";
import Sidebar from "./profilemy/sidebar/sidebar";
import Contests from "./profilemy/tempelet/tutorial/contests";
import Home from "./profilemy/tempelet/home";
import Login from "./profilemy/tempelet/login/loginForm";
import Register from "./profilemy/tempelet/login/registerFrom";
import Logout from "./profilemy/tempelet/login/logout";
import {Route, Switch} from 'react-router-dom'		
import jwtDecode from "jwt-decode";
import Profile from "./profilemy/tempelet/profile/profile";

class App extends Component  {
	state={};
  	componentDidMount (){
  	try{
    	const jwty =localStorage.getItem("token");
    	const user =jwtDecode(jwty);
    	console.log(user);
    	this.setState({user});
    	}
    catch (ex){
    
    }
    };
    render() { 
        return (
    <React.Fragment>
    <div className="wrapper d-flex align-items-stretch">
 	<Sidebar user={this.state.user}/>
 	<Switch>
		<Route path="/home" component={Home} />
        <Route path="/contests" component={Contests} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
                
    </Switch>
 
  	</div>
   	</React.Fragment>
   	
  )};
}

export default App;
