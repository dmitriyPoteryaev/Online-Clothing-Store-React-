import React from 'react';
import BigButtonOrder from "../../../assets/Logo/header/BigPitureButtonForOrder.png";
import classes from './ButtonOrder.module.css';

const ButtonOrder = ({QualPosOrder,setVisibMod}) => {
    return (
        <div className={classes.ButtonOrder} >
            <img 
            className={classes.imgButtonOrder}
            src={BigButtonOrder} 
            alt={'ButtonOrder'}
            onClick={()=>{setVisibMod(true)}}
            />
            <div className={classes.cicle} >
            <div className={classes.QualPosOrder}>{QualPosOrder}</div>
            </div>
            </div>
    );
};

export default ButtonOrder;