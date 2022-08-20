import React from "react";
import classes from "./ModalButton.module.css";

const ModalButton = ({
  children,
  setVisibMod,

  QualPosOrder,
  visibMod,

  newOrder,
  createOrder,

  TimeAttention,
}) => {
  return (
    <button
      className={classes.bottomBlack}
      onClick={() => {
        QualPosOrder !== 0 && visibMod
          ? !newOrder.Adress.trim() ||
            !newOrder.Phone.trim() ||
            !newOrder.Name.trim()
            ? TimeAttention()
            : createOrder(newOrder)
            : setVisibMod(false);
      }}
      onMouseOver={(event) => {
        QualPosOrder !== 0 && visibMod
          ? (event.currentTarget.className = classes.bottomGrey)
          : (event.currentTarget.className = classes.bottomBlack);
      }}
      onMouseOut={(event) => {
        event.currentTarget.className === classes.bottomGrey
          ? (event.currentTarget.className = classes.bottomBlack)
          : (event.currentTarget.className = classes.bottomBlack);
      }}
    >
      {children}
    </button>
  );
};

export default ModalButton;
