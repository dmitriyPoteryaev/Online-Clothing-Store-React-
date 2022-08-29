import React, { useState } from "react";
import { ContentServies } from "../../API/ContentServies";
import ModalButton from "../UI/ModalButton/ModalButton";
import Attention from "../../utilits/Attention/Attention";
import classes from "./Form.module.css";
import AttentModal from "../../assets/modal/AttentModal.svg";
import ModalInput from "../UI/ModalInput/ModalInput";

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
  }

  return (
    <div>
      <form>
        <Attention attention={attention} />

        {Object.values(FullInfo).map((value, i) => (
          <div className={classes.BlockModule}>
            <ModalInput
              FullInfo={FullInfo}
              CurentPositionInf={Object.keys(FullInfo)[i]}
              setFullInfo={setFullInfo}
              attention={attention}
              value={value}
            ></ModalInput>
            <img
              className={
                !attention && !value.trim()
                  ? classes.AttentSign
                  : classes.Hide_Atent
              }
              src={AttentModal}
            />
            <small
              className={
                !attention && !value.trim()
                  ? classes.AttentTitle
                  : classes.Hide_Atent
              }
            >
              {Object.keys(FullInfo)[i] === "Name"
                ? "Введите Ваше имя"
                : Object.keys(FullInfo)[i] === "Phone"
                ? "Введите Ваш телефон"
                : "Введите Ваш адрес"}
            </small>
          </div>
        ))}
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
