import React from 'react';
import BigPitureButtonForOrder from "../../../assets/BigPitureButtonForOrder.png";
import classes from './ButtonForOrder.module.css';

const ButtonForOrder = ({quality,getVisModal}) => {
    return (
        <div className={classes.ButtonForOrder} >
            <img 
            className={classes.imgButtonForOrder}
            src={BigPitureButtonForOrder} 
            alt={'PitureButtonForOrder'}
            onClick={()=>{getVisModal(true)}}
            />
            <div className={classes.cicle} >
            <div className={classes.qualityOfOrder}>{quality}</div>
            </div>
            </div>
    );
};

export default ButtonForOrder;