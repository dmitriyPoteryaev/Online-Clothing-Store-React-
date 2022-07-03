import React from 'react';
import BigPitureButtonForOrder from "../../../assets/BigPitureButtonForOrder.png";
import cicleForOrder from "../../../assets/cicleForOrder.png";
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
            <img src={cicleForOrder}  className={classes.cicle} />
            <p className={classes.qualityOfOrder}>{quality}</p>
            </div>
    );
};

export default ButtonForOrder;