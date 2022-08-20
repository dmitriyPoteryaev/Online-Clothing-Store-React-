import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to="/about" className={classes.link}>
          О сайте{" "}
        </Link>
        <Link to="/louis_Vuitton/Backpacks" className={classes.link}>
          Перейти на сайт магазина
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
