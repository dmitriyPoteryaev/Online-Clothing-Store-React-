import React from "react";

import ok from "../../../assets/ok.png";

import classes from "./GoodBye.module.css";

import cross from "../../../assets/cross.png";

const GoodBye = ({setGoodBye}) => {
  return (
    <div className={classes.successful}>
      <div className={classes.HeaderOfModal}>
        <h1 className={classes.TitleNothingOrder}>Корзина</h1>
        <img src={cross}
        className={classes.cross}
        onClick={()=>setGoodBye(true)}
        />
      </div>
      <div className={classes.ok}>
        <img src={ok} />
        <div>Заявка успешно отправлена</div>
        <div>Вскоре наш менеджер свяжется с Вами</div>
      </div>
    </div>
  );
};

export default GoodBye;
