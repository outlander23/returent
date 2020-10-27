
import React, {Component} from 'react';
import Form from "./form";


import http from "../tutorial/httpService";

const endPoint="http://mah2020.herokuapp.com/api/login/";



class Login extends Form {
    
    state = {
        data: { username: "", password: ""},
        errors: {}
    };
    
    handleSubmit = async (event) => {
    	const {username,password}=this.state.data;
        event.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {}});
        if (errors) return;
        const info={ 'username' : username, 'password': password}
        const data= await http.post(endPoint,info);
       try{ 
       
       
       const {data:jwt}= await http.post(endPoint,info);
       localStorage.setItem("token",jwt['jwt']);
       window.location = "/home" ;
   
       }
       
       catch (ex) {
            
                const errors = {...this.state.errors};
                errors.username = "user or password is not valid";
                this.setState({errors});
              
         
         
            
       }
       
    

    };
   
    
    render() {
        return (
        <React.Fragment>
        

            <div className="container bg-light"><br/>
                <h2 className="text-center">Login</h2>
                <form >
                    {this.renderInput("username", "Username", "text")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("login")}
                </form>
            </div>
       
           </React.Fragment>
        );
    }
}

export default Login;
