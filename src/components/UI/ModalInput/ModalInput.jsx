import React from "react";

import classes from "./ModalInput.module.css";
import InputMask from "react-input-mask";

const ModalInput = ({
  value,
  attention,
  CurentPositionInf,
  setFullInfo,
  FullInfo,
}) => {
  return CurentPositionInf == "Name" || CurentPositionInf == "Adress" ? (
    <input
      type="text"
      value={CurentPositionInf == "Name" ? FullInfo.Name: FullInfo.Adress}
      placeholder={CurentPositionInf == "Name" ? "Ваше имя" : "Ваш адрес"}
      className={
        !attention && !value.trim()
          ? classes.AttenClient
          : classes.InfoAboutClient
      }
      onChange={(event) =>
        CurentPositionInf == "Name"
          ? setFullInfo({
              ...FullInfo,

              Name: event.target.value,
            })
          : setFullInfo({
              ...FullInfo,

              Adress: event.target.value,
            })
      }
    ></input>
  ) : (

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
              !attention && !value.trim()
                ? classes.AttenClient
                : classes.InfoAboutClient
            }
          />
        )}
      </InputMask>
  )

};

export default ModalInput;
