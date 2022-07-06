import React from 'react';
import classes from './BlockOfContent.module.css';
import PitureButtonForOrder from '../../assets/PitureButtonForOrder.png';
import blackButtonForOrder from '../../assets/blackButtonForOrder.png';
import starForRaiting from '../../assets/starForRaiting.png';
import backpack from '../../assets/backpack.png';
import shirts from '../../assets/shirts.png';
import leatherJacket from '../../assets/leatherJacket.png';

const BlockOfContent = ({value,key,addThingForOrder,quantityThingForOrder1}) => {


    const {TitleOfThing,Price_rub,id,img_content,img_starForRaiting,rating} = value;
  
    return (
        <div className={classes.blockForContent}>
            <p className={classes.raiting}>{rating}</p>
            <p className={classes.TitleOfThing}> {TitleOfThing}</p>
            <p className={classes.Price}>{Price_rub} 000 ₽</p>
            <img src={
              img_content==="backpack"
              ?
              backpack
              :
              img_content==="leatherJacket"
              ?
              leatherJacket
              :
              shirts
            } 
              
              className={classes.content_picture}  
              alt={'PictureOfSomethingContent'}/>
            <img 
            src={PitureButtonForOrder} 
             className={classes.ForOrder} 
              alt={'PitureButtonForOrder'} 
              onClick={()=>{addThingForOrder([...quantityThingForOrder1,
                
                
            {TitleOfThing
            ,Price_rub,
            id:Date.now(),
            img_content,
            img_starForRaiting,
            rating}])}}
              onMouseOver={(event)=>(event.currentTarget.src = blackButtonForOrder)}
              onMouseOut={(event)=>(event.currentTarget.src = PitureButtonForOrder)}
              />
            <img src={starForRaiting}  className={classes.img_starForRaiting}  alt={'PictureForRaiting'}/>
        </div>
    );
};

export default BlockOfContent;