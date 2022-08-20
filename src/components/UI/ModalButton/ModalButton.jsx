import React from "react";
import classes from "./ModalButton.module.css";

const ModalButton = ({
  children,
  funcModChoice,
  quantityThingForOrder,
  visiable,
  newOrder,
  createNewOrder,
  TimeAttention,
}) => {
  return (
    <button
      className={classes.bottomforBackorSendOrderBlack}
      onClick={() => {
        quantityThingForOrder !== 0 && visiable
          ? !newOrder.Adress.trim() ||
            !newOrder.Phone.trim() ||
            !newOrder.Name.trim()
            ? TimeAttention()
            : createNewOrder(newOrder)
          : funcModChoice(false);
      }}
      onMouseOver={(event) => {
        quantityThingForOrder !== 0 && visiable
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderGrey)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack);
      }}
      onMouseOut={(event) => {
        event.currentTarget.className === classes.bottomforBackorSendOrderGrey
          ? (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack)
          : (event.currentTarget.className =
              classes.bottomforBackorSendOrderBlack);
      }}
    >
      {children}
    </button>
  );
};

export default ModalButton;
