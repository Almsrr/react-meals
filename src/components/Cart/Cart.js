import React, { useContext, useState } from "react";

import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";
import { v4 as uuidv4 } from "uuid";
import Checkout from "./Checkout/Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const checkoutHandler = () => {
    setIsCheckout(true);
  };

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles.buttonAlt} onClick={props.onCloseCart}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClick={props.onCloseCart}>
      <ul className={styles.cartItems}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={uuidv4()}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onCloseCart} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
