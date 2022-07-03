import React, { useState } from "react";
import ButtonForBackOrSendOrder from './components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder';



const Form = ({createNewOrder,quantityThingForOrder,visiable}) => {


    const [FullInfo, setFullInfo] = useState({
        Name:'',
        Phone:'',
        Adress:''});

        const newOrder ={...FullInfo,
            id:Date.now()
        }



    return (
        <div>
        <form>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="InfoAboutClient"
                  onChange={(event) => setFullInfo({...FullInfo,Name:event.target.value})}
                ></input>
                <input
                  type="text"
                  placeholder="Телефон"
                  className="InfoAboutClient"
                  onChange={(event) => setFullInfo({...FullInfo,Phone:event.target.value})}
                ></input>
                <input
                  type="text"
                  placeholder="Адрес"
                  className="InfoAboutClient"
                  onChange={(event) => setFullInfo({...FullInfo,Adress:event.target.value})}
                ></input>
              </form>
              <ButtonForBackOrSendOrder
              create={createNewOrder}
              newOrder={newOrder}
              quantityThingForOrder={quantityThingForOrder}
              visiable={visiable}
            
            >
              Отправить
            </ButtonForBackOrSendOrder>
            </div>
    );
};

export default Form;