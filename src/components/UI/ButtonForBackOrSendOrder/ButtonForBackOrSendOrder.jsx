import React from 'react';
import classes from './ButtonForBackOrSendOrder.module.css';

const ButtonForBackOrSendOrder = ({
    children,
    funcModChoice,
    quantityThingForOrder,
    visiable,
    newOrder,
    create
}) => {
   
    return (
       <button 
       className={classes.bottomforBackorSendOrder}
       onClick={()=>{
        (quantityThingForOrder !==0 && visiable)
        ?
        (create(newOrder))
       :
        (funcModChoice(false))
    
    }}
       
       >
{children}
            </button>
    );
};

export default ButtonForBackOrSendOrder;