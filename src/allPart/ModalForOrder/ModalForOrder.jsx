import React from "react";
import classes from "./ModalForOrder.module.css";
import GoodBye from "../../components/UI/GoodBye/GoodBye";
import cross from "../../assets/cross.png";
import BlockForOrder from "../../components/UI/BlockForOrder/BlockForOrder";
import Form from "../Form/Form";
import ModalButton from "../../components/UI/ModalButton/ModalButton";

const ModalForOrder = ({
  visibMod,
  setVisibMod,

  setGoodBye,
  goodBye,

  PosOrder,
  setPosOrder,
  QualPosOrder
}) => {
  const StyleModal = [classes.modalForOrder];

  if (visibMod) {
    StyleModal.push(classes.active);
  }

  const removeOrderPosition = (orderPosition) => {
    setPosOrder(
      PosOrder.filter((position) => position.id !== orderPosition.id)
    );
  };


  disableScroll()


  function disableScroll(){

    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px'

    console.log(paddingOffset);

    console.log(window)
    



  }

 


  return (
    <div className={StyleModal.join(" ")}
      onClick={() => { setVisibMod(false); setGoodBye(true) }}>

      <div
        className={classes.contentOfModal}
        onClick={(event) => event.stopPropagation()}
      >
        {goodBye ? (
          QualPosOrder !== 0 ? (
            <div className={classes.OrderPosition}>
              <div className={classes.HeaderModal}>
                <h1 className={classes.TitleBasket}>Корзина</h1>
                <img
                  src={cross}
                  className={classes.cross}
                  onClick={() => setVisibMod(false)}
                />
              </div>
              <div className={classes.ProductBasket}>
                Товары в корзине
              </div>
              {PosOrder.map((contentForOrder) => (
                <BlockForOrder
                  value={contentForOrder}
                  key={contentForOrder.id}
                  remove={removeOrderPosition}
                />
              ))}
              <p className={classes.SetOrder}>Оформить заказ</p>
              <Form
                QualPosOrder={QualPosOrder}
                PosOrder={PosOrder}

                visibMod={visibMod}
                
                setPosOrder={setPosOrder}
                setGoodBye={setGoodBye}
              />
            </div>
          ) : (
            <div className={classes.NothingOrder}>
              <div className={classes.HeaderModal}>
                <h1 className={classes.TitleBasket}>Корзина</h1>
                <img
                  src={cross}
                  className={classes.cross}
                  onClick={() => setVisibMod(false)}
                />
              </div>
              <div className={classes.BasketAttention}>
                Пока что вы ничего не добавли в корзину
              </div>
              <ModalButton
                setVisibMod={setVisibMod}
              >
                Перейти к выбору
              </ModalButton>
            </div>
          )
        ) : (
          <GoodBye setGoodBye={setGoodBye} />
        )}
      </div>
    </div>
  );
};

export default ModalForOrder;
