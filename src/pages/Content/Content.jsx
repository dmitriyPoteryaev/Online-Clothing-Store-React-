import React, { useState, useEffect } from "react";
import BlockOfContent from "../../components/BlockOfContent/BlockOfContent";
import classes from "./Content.module.css";
import cross from "../../assets/cross.png";
import "../../style/style.css";
import BlockForOrder from "../../components/UI/BlockForOrder/BlockForOrder";
import ModalButton from "../../components/UI/ModalButton/ModalButton";
import ModalForOrder from "../../components/UI/ModalForOrder/ModalForOrder";

import Header from "../../allPart/Header/Header";
import Sorting from "../../allPart/Sorting/Sorting";
import { useSortingContent } from "../../customHooks/useSortingContent";
import Menu from "../../allPart/Menu/Menu";
import Form from "../../allPart/Form/Form";
import { useFetching } from "../../customHooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";
import { ContentServies } from "../../API/ContentServies";
import GoodBye from "../../components/UI/GoodBye/GoodBye";
import { useParams } from "react-router-dom";

function Content() {
  const [visiableOfModal, setVisiableOfModal] = useState(false);
  const [positionForOrder, setPositionForOrder] = useState([]);
  const [goodBye, setGoodBye] = useState(true);
  const [filterSelector, setfilterSelector] = useState("");
  const [somethingContent, setSomethingContent] = useState([]);

  const Content = useSortingContent(somethingContent, filterSelector);

  const params = useParams();

  const [fetching, isLoading, error] = useFetching(async (par) => {
    setfilterSelector("");

    const res = await ContentServies.GetQuery();

    setSomethingContent(res[par]);
  }, params.chapter);

  useEffect(() => {
    fetching(params.chapter);
  }, [params.chapter]);

  const removeOrderPosition = (orderPosition) => {
    setPositionForOrder(
      positionForOrder.filter((position) => position.id !== orderPosition.id)
    );
  };

  return (
    <div>
      <Header
        quality={positionForOrder.length}
        getVisModal={setVisiableOfModal}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className={classes.Error}>Произошла ошибка ${error}</h1>
      ) : (
        <div>
          <div className={classes.Filter}>
            <div className={classes.TitleMenu}>Каталог</div>
            <Sorting
              filterSelector={filterSelector}
              setfilterSelector={setfilterSelector}
            />
          </div>
          <Menu />

          <div className={classes.Allcontent}>
            {Content.map((content) => (
              <BlockOfContent
                value={content}
                addThingForOrder={setPositionForOrder}
                quantityThingForOrder1={positionForOrder}
              />
            ))}

            <ModalForOrder
              visiable={visiableOfModal}
              funcForModal2={setVisiableOfModal}
              quantityThingForOrder={positionForOrder}
              setGoodBye={setGoodBye}
            >
              {goodBye ? (
                positionForOrder.length !== 0 ? (
                  <div className={classes.OrderPosition}>
                    <div className={classes.HeaderModal}>
                      <h1 className={classes.TitleBasket}>Корзина</h1>
                      <img
                        src={cross}
                        className={classes.cross}
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className={classes.ProductBasket}>
                      Товары в корзине
                    </div>
                    {positionForOrder.map((contentForOrder) => (
                      <BlockForOrder
                        value={contentForOrder}
                        key={contentForOrder.id}
                        remove={removeOrderPosition}
                      />
                    ))}
                    <p className={classes.SetOrder}>Оформить заказ</p>
                    <Form
                      quantityThingForOrder={positionForOrder.length}
                      visiable={visiableOfModal}
                      ThingForOrderForm={positionForOrder}
                      setPositionForOrder={setPositionForOrder}
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
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className={classes.BasketAttention}>
                      Пока что вы ничего не добавли в корзину
                    </div>
                    <ModalButton
                      funcModChoice={setVisiableOfModal}
                    >
                      Перейти к выбору
                    </ModalButton>
                  </div>
                )
              ) : (
                <GoodBye setGoodBye={setGoodBye} />
              )}
            </ModalForOrder>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
