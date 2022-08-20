import React from "react";
import classes from "./Header.module.css";
import ButtonForOrder from "../../components/UI/ButtonForOrder/ButtonOrder";
import logo from "../../assets/Logo.png";

const Header = ({ QualPosOrder, setVisibMod }) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Logo}>
        <img src={logo} />
      </div>
      <ButtonForOrder QualPosOrder={QualPosOrder} setVisibMod={setVisibMod} />
    </header>
  );
};

export default Header;
