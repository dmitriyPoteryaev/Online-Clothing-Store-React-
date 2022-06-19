import React, { useState } from "react";
import BlockOfContent from "./components/BlockOfContent/BlockOfContent";
import "./style/style.css";
import backpack from "./allProductPicture/Backpack.png";
import leatherJacket from "./allProductPicture/leatherJacket.png";
import shirts from "./allProductPicture/shirts.png";
import logo from "./Logo.png";
import starForRaiting from "./components/starForRaiting.png";
import ButtonForOrder from "./components/UI/ButtonForOrder/ButtonForOrder";
import BlockForOrder from "./components/UI/BlockForOrder/BlockForOrder";
import ButtonForBackOrSendOrder from "./components/UI/ButtonForBackOrSendOrder/ButtonForBackOrSendOrder";
import ModalForOrder from "./components/UI/ModalForOrder/ModalForOrder";
import Filter from "./components/UI/Filter/Filter";

function App() {
  const [filterSelector, setfilterSelector] = useState("");
  const [visiableOfModal, setVisiableOfModal] = useState(false);
  const [positionForOrder, setPositionForOrder] = useState([]);
  const [inputForName, setinputForName] = useState('');
  const [inputForPhone, setinputForPhone] = useState('');
  const [inputForAdress, setinputForAdress] = useState('');


  const chaptersOfMenu = [
    {
      chapter: "Рюкзаки",
    },
    {
      chapter: "Кожаные куртки",
    },
    {
      chapter: "Рубашки",
    },
  ];

  const [CurrentchaptersOfMenu, setchapterOfMenu] = useState("");

  const [somethingContent, setSomethingContent] = useState([]);

  const [Backpacks, setBlockOfBackpack] = useState([
    {
      id: 1,
      rating: 4.6,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 151,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 2,
      rating: 4.6,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 152,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 3,
      rating: 4.8,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 153,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 4,
      rating: 4.1,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 154,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 5,
      rating: 4.2,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 155,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 6,
      rating: 4.9,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 156,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 7,
      rating: 4.9,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 8,
      rating: 3.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 9,
      rating: 3.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 10,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 11,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 12,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 13,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 138,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 14,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 150,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 15,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 137,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 16,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 156,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 17,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 110,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 18,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 120,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 19,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 132,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 20,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 190,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 21,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 100,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 22,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 130,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 23,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 160,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 24,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 151,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 25,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 130,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 26,
      rating: 4.5,
      NameOfBackpack: "Рюкзак Louis Vuitton Discovery",
      Price_rub: 120,
      img_backpack: `${backpack}`,
      img_starForRaiting: `${starForRaiting}`,
    },
  ]);

  const [LeatherJacket, setBlockOfleatherJacket] = useState([
    {
      id: 27,
      rating: 4.6,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 28,
      rating: 4.6,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 51,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 29,
      rating: 4.8,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 53,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 30,
      rating: 4.1,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 54,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 31,
      rating: 4.2,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 55,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 32,
      rating: 4.9,
      NameOfBackpack: "Louis Vuitton Jacket",
      Price_rub: 56,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 33,
      rating: 4.9,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 60,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 34,
      rating: 3.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 61,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 35,
      rating: 3.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 62,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 36,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 37,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 38,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 39,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 38,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 40,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 41,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 37,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 42,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 56,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 43,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 10,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 44,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 20,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 45,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 32,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 46,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 90,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 47,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 50,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 48,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 30,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 49,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 60,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 50,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 51,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 51,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 30,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 52,
      rating: 4.5,
      NameOfBackpack: "Кожаная куртка Louis Vuitton Discovery",
      Price_rub: 20,
      img_backpack: `${leatherJacket}`,
      img_starForRaiting: `${starForRaiting}`,
    },
  ]);

  const [Shirts, setBlockOfShirts] = useState([
    {
      id: 53,
      rating: 4.6,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 54,
      rating: 4.6,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 51,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 55,
      rating: 4.8,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 53,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 56,
      rating: 4.1,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 54,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 57,
      rating: 4.2,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 55,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 58,
      rating: 4.9,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 56,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 59,
      rating: 4.9,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 60,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 60,
      rating: 3.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 61,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 61,
      rating: 3.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 62,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 62,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 63,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 64,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 65,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 38,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 66,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 67,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 37,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 68,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 56,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 69,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 10,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 70,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 20,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 71,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 32,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 72,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 90,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 73,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 50,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 74,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 30,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 75,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 60,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 76,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 51,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 77,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 30,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
    {
      id: 78,
      rating: 4.5,
      NameOfBackpack: "Рубашка Louis Vuitton Shirts",
      Price_rub: 20,
      img_backpack: `${shirts}`,
      img_starForRaiting: `${starForRaiting}`,
    },
  ]);

  const sort = (filterSelector) => {
    setfilterSelector(filterSelector);

    setSomethingContent(
      [...somethingContent].sort(
        (a, b) => b[filterSelector] - a[filterSelector]
      )
    );
  };

  const renderNewContent = (chapter) => {
    if (chapter.chapter === "Рюкзаки") {
      setchapterOfMenu(chapter.chapter);
      setfilterSelector("");
      setSomethingContent([...Backpacks]);
    }
    if (chapter.chapter === "Кожаные куртки") {
      setchapterOfMenu(chapter.chapter);
      setfilterSelector("");
      setSomethingContent([...LeatherJacket]);
    }
    if (chapter.chapter === "Рубашки") {
      setchapterOfMenu(chapter.chapter);
      setfilterSelector("");
      setSomethingContent([...Shirts]);
    }
  };

  const removeOrderPosition=(orderPosition)=>{
   

    setPositionForOrder( positionForOrder.filter((position)=>position.id !== orderPosition.id))

  }

  const createNewOrder=(first,second,third)=>{
   

    console.log( first,second,third)

  }


  return (
    <div className="App">
      <div className="Header">
        <div className="Logo">
          <img src={logo} />
        </div>
        <ButtonForOrder 
        quality={positionForOrder.length}
        funcForModal={setVisiableOfModal}

         />
      </div>
      <div className="Filter">
        <div className="TitleOfMenu">Каталог</div>
        <Filter
          value={filterSelector}
          functionChangeOfValue={sort}
          defaultName="Сортировка по:"
          options={[
            { name: "По цене", value: "Price_rub" },
            { name: "По популярности", value: "rating" },
          ]}
        />
      </div>
      <div className="Menu">
        {chaptersOfMenu.map((chapter) =>
          chapter.chapter === CurrentchaptersOfMenu ? (
            <div
              className="ActiveChapterOfMenu"
              key={chapter.chapter}
              onClick={() => renderNewContent(chapter)}
            >
              {chapter.chapter}
            </div>
          ) : (
            <div
              className="ChapterOfMenu"
              key={chapter.chapter}
              onClick={() => renderNewContent(chapter)}
            >
              {chapter.chapter}
            </div>
          )
        )}
      </div>

      <div className="Allcontent">
        {somethingContent.length !== 0 ? (
          somethingContent.map((content) => (
            <BlockOfContent
              value={content}
              key={content.id}
              addThingForOrder={setPositionForOrder}
              quantityThingForOrder1={positionForOrder}
            />
          ))
        ) : (
          <h1></h1>
        )}
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
              <form>
                <input type='text'
                 placeholder="Ваше имя"
                  className="InfoAboutClient"
                  onChange={(event)=>setinputForName(event.target.value)}
                  >
                  </input>
                <input type='text'
                placeholder="Телефон"
                className="InfoAboutClient"
                onChange={(event)=>setinputForPhone(event.target.value)}
                >

                  </input>
                <input type='text'
                 placeholder="Адрес" 
                 className="InfoAboutClient"
                 onChange={(event)=>setinputForAdress(event.target.value)}
                 >

                 </input>
              </form>
 <ButtonForBackOrSendOrder 
 create={createNewOrder}
//  
 quantityThingForOrder2={positionForOrder.length}
 visiable1={visiableOfModal}
// 
 name={inputForName}
 phone={inputForPhone}
 adress={inputForAdress}
 >
  Отправить
  </ButtonForBackOrSendOrder>
            </div>
            
           
          ) 
          
          
          : (
            <div className="NothingOrder">
              <h1 className="TitleNothingOrder">Корзина</h1>
              <div className="AttenrionNothingOrder">
                Пока что вы ничего не добавли в корзину
              </div>
              <ButtonForBackOrSendOrder
                funcForModal1={setVisiableOfModal}
              >
                Перейти к выбору
              </ButtonForBackOrSendOrder>
            </div>
          )}
        </ModalForOrder>
      </div>
    </div>
  );
}

export default App;
