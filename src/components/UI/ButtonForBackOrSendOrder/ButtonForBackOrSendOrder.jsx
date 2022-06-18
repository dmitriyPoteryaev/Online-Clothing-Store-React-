import React from 'react';
import classes from './ButtonForBackOrSendOrder.module.css';

const ButtonForBackOrSendOrder = ({children,funcForModal1,Info,functFullInfoFullInfo}) => {
   
    return (
       <button 
       className={classes.bottomforBackorSendOrder}
       onClick={()=>{funcForModal1(false)}}
       
       >
{children}
            </button>
    );
};

export default ButtonForBackOrSendOrder;