import React from 'react';
import classes from './Header.module.css';
import ButtonForOrder from '../../components/UI/ButtonForOrder/ButtonForOrder';
import logo from "../../assets/Logo.png";


const Header = ({quality,getVisModal}) => {

    
    return (
        <div className={classes.Header}>
        <div className={classes.Logo}>
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