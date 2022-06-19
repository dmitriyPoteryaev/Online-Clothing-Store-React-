import React from 'react';
import classes from './ButtonForBackOrSendOrder.module.css';

const ButtonForBackOrSendOrder = ({children,
    funcForModal1,
    quantityThingForOrder2,
    visiable1,
    create,
    name,
    phone,
    adress

}) => {
   
    return (
       <button 
       className={classes.bottomforBackorSendOrder}
       onClick={()=>{
        (quantityThingForOrder2 !==0 && visiable1)
        ?
        (create(name,phone,adress))
       :
        (funcForModal1(false))
    
    }}
       
       >
{children}
            </button>
    );
};

export default ButtonForBackOrSendOrder;