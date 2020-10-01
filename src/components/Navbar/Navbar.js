import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => (
  <nav>
    <h1><a href="/#" className={classes.logo}> Pokemon Catalog </a></h1>
  </nav>
);

export default Navbar;
