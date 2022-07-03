import React, { useState, useEffect } from "react";
import BlockOfContent from "./components/BlockOfContent/BlockOfContent";
import "./style/style.css";

import BlockForOrder from "./components/UI/BlockForOrder/BlockForOrder";
import ButtonForBackOrSendOrder from "./components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder";
import ModalForOrder from "./components/UI/ModalForOrder/ModalForOrder";

import axios from "axios";
import Header from "./Header";
import Sorting from "./Sorting";
import { useSortingContent } from "./customHooks/useSortingContent";
import Menu from "./Menu";
import Form from "./Form";
import { useFetching } from "./customHooks/useFetching";
import Loader from "./components/UI/Loader/Loader";



function App() {
  const [visiableOfModal, setVisiableOfModal] = useState(false);
  const [positionForOrder, setPositionForOrder] = useState([]);

  const [filterSelector, setfilterSelector] = useState("");
  const [somethingContent, setSomethingContent] = useState([]);

  const Content = useSortingContent(somethingContent, filterSelector);

  const [CurrentchaptersOfMenu, setchapterOfMenu] = useState("Backpacks");
  

 
const [fetching,isLoading,error] =useFetching( async(ind)=>{

  
    setfilterSelector("");

    const response = await axios.get(` http://localhost:3000/${ind}`);

    setSomethingContent([...response.data]);
  
  

},CurrentchaptersOfMenu)
  







  
  useEffect(() => {
    fetching();
  }, [CurrentchaptersOfMenu]);

  const removeOrderPosition = (orderPosition) => {
    setPositionForOrder(
      positionForOrder.filter((position) => position.id !== orderPosition.id)
    );
  };

  const createNewOrder = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Header
        quality={positionForOrder.length}
        getVisModal={setVisiableOfModal}
      />
         {isLoading ?
      
     <Loader/>
      :
      <div><div className="Filter">
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
    
    { Content.map((content) => (
       <BlockOfContent
         value={content}
         key={content.id}
         addThingForOrder={setPositionForOrder}
         quantityThingForOrder1={positionForOrder}
       />
     ))
    }
   
 
   <ModalForOrder
     visiable={visiableOfModal}
     funcForModal2={setVisiableOfModal}
     quantityThingForOrder={positionForOrder}
   >
     {positionForOrder.length !== 0 ? (
       <div className="ContetnForOrder">
         <h1 className="TitleNothingOrder">Корзина</h1>
         <div className="FullInfoAboutThingOrder">Товары в корзине</div>
         {positionForOrder.map((contentForOrder) => (
           <BlockForOrder
             value={contentForOrder}
             key={contentForOrder.id}
             remove={removeOrderPosition}
           />
         ))}
         <p className="FullInfoAboutClient">Оформить заказ</p>
         <Form
           createNewOrder={createNewOrder}
           quantityThingForOrder={positionForOrder.length}
           visiable={visiableOfModal}
         />
       </div>
     ) : (
       <div className="NothingOrder">
         <h1 className="TitleNothingOrder">Корзина</h1>
         <div className="AttenrionNothingOrder">
           Пока что вы ничего не добавли в корзину
         </div>
         <ButtonForBackOrSendOrder funcModChoice={setVisiableOfModal}>
           Перейти к выбору
         </ButtonForBackOrSendOrder>
       </div>
     )}
   </ModalForOrder>
 
 </div></div>
      }
    </div>
  );
}

export default App;
