import React from 'react';
import classes from './BlockForOrder.module.css';
import starForRaiting from '../../../assets/starForRaiting.png';
import new_trash from '../../../assets/trash.png';
import new_trash_black from '../../../assets/new_trash_black.png';
import backpack from '../../../assets/backpack.png';
import shirts from '../../../assets/shirts.png';
import leatherJacket from '../../../assets/leatherJacket.png';

const BlockForOrder = (props) => {

    
    return (
        <div className={classes.BlockOrder}>
        <div className={classes.raiting}>{props.value.rating}</div>
        <div className={classes.Title}> {props.value.TitleOfThing}</div>
        <div className={classes.Price}>{props.value.Price_rub} 000 ₽</div>
        <img src={
              props.value.img_content==="backpack"
              ?
              backpack
              :
              props.value.img_content==="leatherJacket"
              ?
              leatherJacket
              :
              shirts
            } 
         className={classes.content_picture}
           alt={'PicContent'}/>
        <img src={starForRaiting}  className={classes.img_starForRaiting}  alt={'PictureForRaiting'}/>
        <img
         src={new_trash} 
          className={classes.img_trash} 
           alt={'PictureForTrash'}
            onClick={()=>props.remove(props.value)}
            onMouseOver={(event)=>(event.currentTarget.src = new_trash_black)}
            onMouseOut={(event)=>(event.currentTarget.src = new_trash)}/>
    </div>
    );
};

export default BlockForOrder;