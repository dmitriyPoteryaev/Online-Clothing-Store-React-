import React from 'react';
import exclamation from "../../assets/modal/exclamation_mark.png";
import classes from"./Attention.module.css"


const Attention = ({attention}) => {


    return (
        <div   className={attention ? classes.Attention_hide: classes.Attention_vis }>
        <img src={exclamation} />
        <div>Все поля обязательные.</div>
      </div>
    );
};

export default Attention;