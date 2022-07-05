import React from 'react';
import exclamation from "../../assets/exclamation_mark.png";
import classes from"./Attention.module.css"


const Attention = ({visiable}) => {


    return (
        <div   className={visiable ? [classes.Attention_hide].join(''): [classes.Attention_vis].join('') }>
        <img src={exclamation} />
        <div>Все поля обязательные.</div>
      </div>
    );
};

export default Attention;