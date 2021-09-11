import React, { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {};

  const addCartItemHandler = (item) => {};

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={styles.cartItems}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler}
            onRemove={removeCartItemHandler}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
