import { Component } from "solid-js";
import classes from './Header.module.css'

const Header: Component = () => {
  return <header class={classes.Header}>
    <a href="/">To DO</a>
  </header>
}

export default Header;
