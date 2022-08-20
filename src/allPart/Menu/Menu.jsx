import React from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Menu = () => {
  const chaptersOfMenu = ["Backpacks", "LeatherJacket", "Shirts"];
  const IndOfMenu = ["Рюкзаки", "Кожаные куртки", "Рубашики"];

  const params = useParams();

  return (
    <div className={classes.BlockMenu}>
      <nav className={classes.Menu}>
        {chaptersOfMenu.map((chapter,i) =>
          chapter === params.chapter ? (
            <Link
              className={classes.ActiveChapterOfMenu}
              to={`/louis_Vuitton/${chapter}`}
              key={chapter}
            >
              {IndOfMenu[i]}
            </Link>
          ) : (
            <Link
              className={classes.ChapterOfMenu}
              to={`/louis_Vuitton/${chapter}`}
              key={chapter}
            >
              {IndOfMenu[i]}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};

export default Menu;
