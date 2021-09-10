import React, { Fragment } from "react";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
import mealsImage from "../../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={mealsImage} alt="meal" />
      </div>
    </Fragment>
  );
};

export default Header;
