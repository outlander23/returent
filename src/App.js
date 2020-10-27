import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hotel from "./hotel/hoteltop";
import Menu from "./hotel/menuhome";
import Fotter from "./hotel/fotter";
import Chif from "./hotel/services";
import Contact from "./hotel/contact";
import Customar from "./hotel/customar";
import Tes from "./hotel/clint/clinte";
import "./App.css";


class App extends Component {


  render() {


    return (
      <React.Fragment>

     	<ToastContainer />
        <Hotel />
        <Customar />
        <Menu/>
        <Chif />
        <Tes />
        <Contact />
        <Fotter />
        
      </React.Fragment>
    );
  }
}

export default App;
