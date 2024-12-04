import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import  logo from './components/images/Logo.png'
import './components/styles.css'
import App from './App'

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ),
    document.querySelector('#root')
);