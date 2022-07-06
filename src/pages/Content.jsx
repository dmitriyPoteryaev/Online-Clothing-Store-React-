import React, { useState, useEffect } from "react";
import BlockOfContent from "../components/BlockOfContent/BlockOfContent";
import "../style/style.css";
import cross from "../assets/cross.png";

import BlockForOrder from "../components/UI/BlockForOrder/BlockForOrder";
import ButtonForBackOrSendOrder from "../components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder";
import ModalForOrder from "../components/UI/ModalForOrder/ModalForOrder";

import Header from "../Header";
import Sorting from "../Sorting";
import { useSortingContent } from "../customHooks/useSortingContent";
import Menu from "../Menu";
import Form from "../Form";
import { useFetching } from "../customHooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import { ContentServies } from "../API/ContentServies";
import GoodBye from "../components/UI/GoodBye/GoodBye";
import { useNavigate } from "react-router-dom"


function Content() {
  const [visiableOfModal, setVisiableOfModal] = useState(false);
  const [positionForOrder, setPositionForOrder] = useState([]);
  const [goodBye, setGoodBye] = useState(true);
  const [filterSelector, setfilterSelector] = useState("");
  const [somethingContent, setSomethingContent] = useState([]);
  

  const Content = useSortingContent(somethingContent, filterSelector);

 
 

  const [CurrentchaptersOfMenu, setchapterOfMenu] = useState("Backpacks");

  const [fetching, isLoading, error] = useFetching(async (ind) => {
    setfilterSelector("");

    const res = await ContentServies.GetQuery(ind);

    setSomethingContent(res);
    


 

   
  }, CurrentchaptersOfMenu);

  const router = useNavigate();

  useEffect(() => {
    fetching();
    router(`/louis_Vuitton/${CurrentchaptersOfMenu}`)
    if(visiableOfModal){

      router(`/louis_Vuitton/${CurrentchaptersOfMenu}+modal`)
      
    }
  }, [CurrentchaptersOfMenu,visiableOfModal]);

  const removeOrderPosition = (orderPosition) => {
    setPositionForOrder(
      positionForOrder.filter((position) => position.id !== orderPosition.id)
    );
  };

 
  return (
    <div >
      <Header
        quality={positionForOrder.length}
        getVisModal={setVisiableOfModal}
      />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1 className="Error">Произошла ошибка ${error}</h1>
      ) : (
        <div>
          <div className="Filter">
            <div className="TitleOfMenu">Каталог</div>
            <Sorting
              filterSelector={filterSelector}
              setfilterSelector={setfilterSelector}
            />
          </div>
          <Menu
            CurrentchaptersOfMenu={CurrentchaptersOfMenu}
            setchapterOfMenu={setchapterOfMenu}
          
          />

          <div className="Allcontent">
            {Content.map((content) => (
              <BlockOfContent
                value={content}
                key={content.id}
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
                  <div className="ContetnForOrder">
                    <div className="HeaderOfModal">
                      <h1 className="TitleNothingOrder">Корзина</h1>
                      <img
                        src={cross}
                        className="cross"
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className="FullInfoAboutThingOrder">
                      Товары в корзине
                    </div>
                    {positionForOrder.map((contentForOrder) => (
                      <BlockForOrder
                        value={contentForOrder}
                        key={contentForOrder.id}
                        remove={removeOrderPosition}
                      />
                    ))}
                    <p className="FullInfoAboutClient">Оформить заказ</p>
                    <Form
                      quantityThingForOrder={positionForOrder.length}
                      visiable={visiableOfModal}
                      ThingForOrderForm={positionForOrder}
                      setPositionForOrder={setPositionForOrder}
                      setGoodBye={setGoodBye}
                    />
                  </div>
                ) : (
                  <div className="NothingOrder">
                    <div className="HeaderOfModal">
                      <h1 className="TitleNothingOrder">Корзина</h1>
                      <img
                        src={cross}
                        className="cross"
                        onClick={() => setVisiableOfModal(false)}
                      />
                    </div>
                    <div className="AttenrionNothingOrder">
                      Пока что вы ничего не добавли в корзину
                    </div>
                    <ButtonForBackOrSendOrder
                      funcModChoice={setVisiableOfModal}
                    >
                      Перейти к выбору
                    </ButtonForBackOrSendOrder>
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
