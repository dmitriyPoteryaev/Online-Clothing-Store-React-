import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [check,setCheck] = useState(false);
  const router = useNavigate();
  
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__links}>
        <Link to="/about" className={classes.link}>
          О сайте{" "}
        </Link>
        {check
        ?
        <div>
          Нельзя
        </div>
        :
        <Link to="/louis_Vuitton/Backpacks" className={classes.link}>
          Перейти на сайт магазина
        </Link>
}
      </div>
    </div>
  );
};

export default Navbar;
