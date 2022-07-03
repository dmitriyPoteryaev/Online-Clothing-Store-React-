import React from 'react';
import classes from './BlockOfContent.module.css';
import PitureButtonForOrder from '../../assets/PitureButtonForOrder.png';
import blackButtonForOrder from '../../assets/blackButtonForOrder.png';
import starForRaiting from '../../assets/starForRaiting.png';


const BlockOfContent = ({value,key,addThingForOrder,quantityThingForOrder1}) => {


    const {NameOfBackpack,Price_rub,id,img_content,img_starForRaiting,rating} = value;
  
    return (
        <div className={classes.blockForContent}>
            <p className={classes.raiting}>{rating}</p>
            <p className={classes.NameOfBackpack}> {NameOfBackpack}</p>
            <p className={classes.Price}>{Price_rub} 000 ₽</p>
            <img src={`./${img_content}.png`} className={classes.content_picture}  alt={'PictureOfSomethinContent'}/>
            <img 
            src={PitureButtonForOrder} 
             className={classes.ForOrder} 
              alt={'PitureButtonForOrder'} 
              onClick={()=>{addThingForOrder([...quantityThingForOrder1,
                
                
            {NameOfBackpack
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