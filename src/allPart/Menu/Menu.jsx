import React from "react";
import classes from './Menu.module.css';

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
    <div className={classes.Menu}>
      {chaptersOfMenu.map((chapter) =>
        chapter.identifier === CurrentchaptersOfMenu ? (
          <div
            className={classes.ActiveChapterOfMenu}
            key={chapter.name}
            onClick={() => {
              setchapterOfMenu(chapter.identifier);
            }}
          >
            {chapter.name}
          </div>
        ) : (
          <div
            className={classes.ChapterOfMenu}
            key={chapter.name}
            onClick={() => {
              setchapterOfMenu(chapter.identifier);
            }}
          >
            {chapter.name}
          </div>
        )
      )}
    </div>
  );
};

export default Menu;
