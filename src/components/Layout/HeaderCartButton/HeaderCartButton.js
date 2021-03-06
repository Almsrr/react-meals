import React, { useContext, useState, useEffect } from "react";

import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const [highlightBtn, setHighlighBtn] = useState(false);

  const numberOfCartItems = items.reduce((num, item) => {
    return num + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length > 0) {
      setHighlighBtn(true);
      const animationTimer = setTimeout(() => {
        setHighlighBtn(false);
      }, 300);
      return () => {
        clearTimeout(animationTimer);
      };
    }
    return;
  }, [items]);

  const btnClasses = `${styles.button} ${highlightBtn ? styles.bump : " "}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <i className={`fas fa-shopping-cart ${styles.icon}`}></i>
      <span>Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
