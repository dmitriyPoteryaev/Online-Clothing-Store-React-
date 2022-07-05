import React from "react";
import classes from "./ModalForOrder.module.css";

const ModalForOrder = ({
  children,
  visiable,
  funcForModal2,
  quantityThingForOrder,
  setGoodBye
}) => {
  const StyleModal = [classes.modalForOrder];
  console.log(quantityThingForOrder);

  if (visiable) {
    StyleModal.push(classes.active);
  }

  return (
    <div className={StyleModal.join(" ")}
     onClick={() => {funcForModal2(false);setGoodBye(true)}}>
      
      <div
        className={classes.contentOfModal}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalForOrder;
