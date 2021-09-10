import React from "react";

import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [];

  return (
    <div>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Ammount</span>
        <span>45.33</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
