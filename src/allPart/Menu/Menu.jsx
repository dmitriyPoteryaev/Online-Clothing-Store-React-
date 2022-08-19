import React, { useState, useEffect } from "react";
import classes from "./Menu.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Menu = () => {
  const chaptersOfMenu = ["Backpacks", "LeatherJacket", "Shirts"];

  const params = useParams();

  return (
    <div className={classes.BlockMenu}>
      <div className={classes.Menu}>
        {chaptersOfMenu.map((chapter) =>
          chapter == params.chapter ? (
            <Link
              className={classes.ActiveChapterOfMenu}
              to={`/louis_Vuitton/${chapter}`}
              // key={chapter.name}
            >
              {chapter}
            </Link>
          ) : (
            <Link
              className={classes.ChapterOfMenu}
              to={`/louis_Vuitton/${chapter}`}
              // key={chapter.name}
            >
              {chapter}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
