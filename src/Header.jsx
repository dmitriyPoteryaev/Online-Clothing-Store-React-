import React from 'react';
import ButtonForOrder from './components/UI/ButtonForOrder/ButtonForOrder';
import logo from "./assets/Logo.png";


const Header = ({quality,getVisModal}) => {

    
    return (
        <div className="Header">
        <div className="Logo">
          <img src={logo} />
        </div>
        <ButtonForOrder 
   quality={quality}
   getVisModal={getVisModal}
         />
      </div>
    );
};

export default Header;