import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import { useParams } from "react-router-dom"

const Menu = ({ CurrentchaptersOfMenu, setchapterOfMenu }) => {




 

 

  
  

  const chaptersOfMenu = [
    {
      name: "Рюкзаки",
      identifier: "Backpacks",
    },
    {
      name: "Кожаные куртки",
      identifier: "LeatherJacket",
    },
    {
      name: "Рубашки",
      identifier: "Shirts",
    },
  ];

  return (
    <div className="Menu">
      {chaptersOfMenu.map((chapter) =>
        chapter.identifier === CurrentchaptersOfMenu ? (
          <div
            className="ActiveChapterOfMenu"
            key={chapter.name}
            onClick={() => {setchapterOfMenu(chapter.identifier)}}
          >
            {chapter.name}
          </div>
        ) : (
          <div
            className="ChapterOfMenu"
            key={chapter.name}
            onClick={() => {setchapterOfMenu(chapter.identifier)}}
          >
            {chapter.name}
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
