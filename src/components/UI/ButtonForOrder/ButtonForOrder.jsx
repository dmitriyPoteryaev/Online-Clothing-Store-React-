import React from 'react';
import BigPitureButtonForOrder from "../../BigPitureButtonForOrder.png";
import cicleForOrder from "../../cicleForOrder.png";
import classes from './ButtonForOrder.module.css';

const ButtonForOrder = ({funcForModal,quality}) => {
    return (
        <div className={classes.ButtonForOrder} >
            <img 
            className={classes.imgButtonForOrder}
            src={BigPitureButtonForOrder} 
            alt={'PitureButtonForOrder'}
            onClick={()=>{funcForModal(true)}}
            />
            <img src={cicleForOrder}  className={classes.cicle} />
            <p className={classes.qualityOfOrder}>{quality}</p>
            </div>
    );
};

export default ButtonForOrder;