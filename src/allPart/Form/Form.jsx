import React, { useState } from "react";
import { ContentServies } from "../../API/ContentServies";
import ModalButton from "../../components/UI/ModalButton/ModalButton";
import Attention from "../../utilits/Attention/Attention";
import InputMask from "react-input-mask";
import classes from "./Form.module.css";

const Form = ({
  QualPosOrder,
  PosOrder,

  visibMod,

  setPosOrder,
  setGoodBye,
}) => {
  const [FullInfo, setFullInfo] = useState({
    Name: "",
    Phone: "",
    Adress: "",
  });

  const [attention, setAttention] = useState(true);

  const newOrder = { ...FullInfo, id: Date.now(), PosOrder };

  async function createOrder(data) {
    await ContentServies.PostQuery(data);

    setFullInfo({
      Name: "",
      Phone: "",
      Adress: "",
    });
    setGoodBye(false);
    setPosOrder("");
  }

  function TimeAttention() {
    setAttention(false);

    setTimeout(() => {
      setAttention(true);
    }, 3000);
  }

  return (
    <div>
      <form>
        <Attention attention={attention} />
        <input
          type="text"
          placeholder="Ваше имя"
          value={FullInfo.Name}
          className={
            !attention && !FullInfo.Name.trim()
              ? classes.AttenClient
              : classes.InfoAboutClient
          }
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Name: event.target.value })
          }
        ></input>

        <InputMask
          mask="+79 99 999-99-99"
          value={FullInfo.Phone}
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Phone: event.target.value })
          }
        >
          {() => (
            <input
              placeholder="Телефон"
              type="tel"
              className={
                !attention && !FullInfo.Phone.trim()
                  ? classes.AttenClient
                  : classes.InfoAboutClient
              }
            />
          )}
        </InputMask>

        <input
          type="text"
          placeholder="Адрес"
          value={FullInfo.Adress}
          className={
            !attention && !FullInfo.Adress.trim()
              ? classes.AttenClient
              : classes.InfoAboutClient
          }
          onChange={(event) =>
            setFullInfo({ ...FullInfo, Adress: event.target.value })
          }
        ></input>
      </form>
      <ModalButton
        createOrder={createOrder}
        newOrder={newOrder}
        QualPosOrder={QualPosOrder}
        visibMod={visibMod}
        setFullInfo={setFullInfo}
        TimeAttention={TimeAttention}
      >
        Отправить
      </ModalButton>
    </div>
  );
};

export default Form;
