import React from 'react';
import {  Link } from "react-router-dom";



const Navbar = () => {



    return (
        <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">О сайте </Link>
          <Link to="/louis_Vuitton/Backpacks">Перейти на сайт магазина </Link>
          
        </div>
      </div>
    );
};

export default Navbar;



