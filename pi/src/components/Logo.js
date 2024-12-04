import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import  logo from './images/Logo.png'

const Logo = () => {
    return(
        <div className='pt-5 pb-5 justify-content-center d-flex col-8 container-fluid '>

            <img className='justify-content-center' src={logo} alt="" />

        </div>
    )
}

export default Logo;