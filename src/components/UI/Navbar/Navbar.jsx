import React from 'react';
import {  Link } from "react-router-dom";



const Navbar = () => {



    return (
        <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">О сайте </Link>
          <a href='/louis_Vuitton/Backpacks'> Перейти на сайт магазина</a>
        </div>
      </div>
    );
};

export default Navbar;



