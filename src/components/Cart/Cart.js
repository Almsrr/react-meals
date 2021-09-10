import React from "react";

import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [];

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={styles.cartItems}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>45.33</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
