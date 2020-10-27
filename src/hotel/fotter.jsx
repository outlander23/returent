import React, { Component } from 'react';

class Fotter extends Component {

    render() { 
        return (
            <footer className="site-footer bg-dark text-center">
            <div className="container color">
    
                <div className="row">
                    <p className="col-12 text-center lead intro-text text-center mt-4">
                
                        Copyright &copy; 2020 All rights reserved by S.M.Miloy Rahman 
                    </p>
                </div>
                
                <div className="row ">
                    <div className="col-md-12 text-center mb-4">
                        <p>
                            <a href="https://web.facebook.com/smmiloy.rahman.161" className="">
                            <img src={require('./common/facebook.png')} size="30" width="30" /></a>
                            <a href="https://www.fiverr.com/users/miloy23/seller_dashboard" className="ml-4 mr-4">
                            <span className=""><img src={require('./images/fi.png')} size="25" width="25" /></span></a>
                            <a href="https://github.com/miloy23" >
                            <span className=""><img src={require('./common/github.png')} size="30" width="30" /></span></a>
                           
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
    
          );
    }
}
 
export default Fotter;
