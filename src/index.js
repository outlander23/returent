import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  
  <BrowserRouter>
<div className="banner"><App /></div>
   </BrowserRouter>,
  
  
  document.getElementById('root')
);


serviceWorker.unregister();
