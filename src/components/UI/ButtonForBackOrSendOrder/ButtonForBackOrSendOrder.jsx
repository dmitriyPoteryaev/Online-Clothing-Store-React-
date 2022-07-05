import React from "react";
import classes from "./ButtonForBackOrSendOrder.module.css";

const ButtonForBackOrSendOrder = ({
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
          ? newOrder.Adress === null ||
            newOrder.Phone === null ||
            newOrder.Name === null ||
            newOrder.Adress === "" ||
            newOrder.Phone === "" ||
            newOrder.Name === ""
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

export default ButtonForBackOrSendOrder;
