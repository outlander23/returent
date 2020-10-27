import Form from "./form";
import React from 'react';

import http from "../tutorial/httpService";

const endPoint="http://mah2020.herokuapp.com/api/register/";

class Register extends Form {
    
    state = {
        data: {email: "", username: "", password: ""},
        errors: {}
    };
    
    
    
   handleSubmit = async (event) => {
    	const {username,password,email}=this.state.data;
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        
       const info={ 'username' : username, 'password': password , 'email':email}
       const {data:jwt}= await http.post(endPoint,info);
       localStorage.setItem("token",jwt['jwt']);
      
       if (jwt['detail']==="User already exists"){
        			
       			const errors = {...this.state.errors};
                errors.username = "Username is all ready register";
                this.setState({errors});
                return null;

       }
       
       window.location = "/home" ;
   
    

    };
    
    render() {
        return (
        <React.Fragment>
     
			 <div className="container bg-light"><br/>
                <h2 className="text-center">Register</h2>
               
                <form >
                    {this.renderInput("email", "Email", "text")}
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
      
          </React.Fragment>
        );
    }
}

export default Register;
