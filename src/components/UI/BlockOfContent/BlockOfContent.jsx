import React, { useState, useEffect } from "react";
import classes from "./BlockOfContent.module.css";
import starForRaiting from "../../../assets/UI/starForRaiting.png";
import backpack from "../../../assets/content/backpack.png";
import new_shop from "../../../assets/UI/new_shop.png";
import new_shop_black from "../../../assets/UI/new_shop_black.png";
import shirts from "../../../assets/content/shirts.png";
import leatherJacket from "../../../assets/content/leatherJacket.png";
import CheckTitle from "../../../utilits/CheckTitle";

const BlockOfContent = ({
  value,
  addThingForOrder,
  quantityThingForOrder1,
}) => {
  const {
    TitleOfThing,
    Price_rub,
    id,
    img_content,
    img_starForRaiting,
    rating,
  } = value;


 

  return (
    <div className={classes.blockForContent} key={id}>
      <p className={classes.raiting}>{rating}</p>
      <p className={classes.TitleOfThing}>
        {CheckTitle(TitleOfThing)}    
      </p>
      <p className={classes.Price}>{Price_rub} 000 ₽</p>
      <img
        src={
          img_content === "backpack"
            ? backpack
            : img_content === "leatherJacket"
            ? leatherJacket
            : shirts
        }
        className={classes.content_picture}
        alt={"PictureOfSomethingContent"}
      />
      <img
        src={new_shop}
        className={classes.ForOrder}
        alt={"PitureButtonForOrder"}
        onClick={() => {
          addThingForOrder([
            ...quantityThingForOrder1,
            {
              TitleOfThing,
              Price_rub,
              id: Date.now(),
              img_content,
              img_starForRaiting,
              rating,
            },
          ]);
        }}
        onMouseOver={(event) => (event.currentTarget.src = new_shop_black)}
        onMouseOut={(event) => (event.currentTarget.src = new_shop)}
      />
      <img
        src={starForRaiting}
        className={classes.img_starForRaiting}
        alt={"PictureForRaiting"}
      />
    </div>
  );
};

export default BlockOfContent;
