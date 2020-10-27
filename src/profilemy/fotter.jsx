import React, { Component } from 'react';

class Fotter extends Component {

    render() { 
        return (
            <footer className="site-footer bg-dark">
            <div className="container color">
    
                <div className="row mb-5">
                    <p className="col-12 text-center lead intro-text">
                
                        Copyright &copy; 2020 All rights reserved by S.M.Miloy Rahman 
                    </p>
                </div>
                
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <p>
                            <a href="https://web.facebook.com/smmiloy.rahman.161" className="social-item "><span className="icon-facebook2"></span></a>
                            <a href="https://www.fiverr.com/users/miloy23/seller_dashboard" className="social-item">
                            <span className=""><img src={require('./images/fi.png')} size="25" width="25" /></span></a>
                            <a href="https://github.com/miloy23" className="social-item"><span className="icon-github"></span></a>
                            
                           
                        </p>
                    </div>
                </div>
                
            </div>
        </footer>
    
          );
    }
}
 
export default Fotter;
