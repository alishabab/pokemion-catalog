import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => (
  <nav className={classes.Navbar}>
    <h1><a href="/#" className={classes.Logo}> Pokemon Catalog </a></h1>
  </nav>
);

export default Navbar;
