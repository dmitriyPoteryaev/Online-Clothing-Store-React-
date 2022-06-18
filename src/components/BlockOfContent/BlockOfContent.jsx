import React from 'react';
import classes from './BlockOfContent.module.css';
import PitureButtonForOrder from '../PitureButtonForOrder.png';
import blackButtonForOrder from '../blackButtonForOrder.png';
import starForRaiting from '../starForRaiting.png';


const BlockOfContent = (props) => {
    return (
        <div className={classes.blockForContent}>
            <p className={classes.raiting}>{props.value.rating}</p>
            <p className={classes.NameOfBackpack}> {props.value.NameOfBackpack}</p>
            <p className={classes.Price}>{props.value.Price_rub} 000 ₽</p>
            <img src={props.value.img_backpack}  className={classes.content_picture}  alt={'PictureOfSomethinContent'}/>
            <img 
            src={PitureButtonForOrder} 
             className={classes.ForOrder} 
              alt={'PitureButtonForOrder'} 
              onClick={()=>{props.addThingForOrder([props.value,...props.quantityThingForOrder1])}}
              onMouseOver={(event)=>(event.currentTarget.src = blackButtonForOrder)}
              onMouseOut={(event)=>(event.currentTarget.src = PitureButtonForOrder)}
              />
            <img src={starForRaiting}  className={classes.img_starForRaiting}  alt={'PictureForRaiting'}/>
        </div>
    );
};

export default BlockOfContent;