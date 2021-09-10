import React, { useContext } from "react";

import styles from "./Meal.module.css";
import MealForm from "./MealForm/MealForm";
import CartContext from "../../../store/cart-context";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  const addCartItemHandler = (amount) => {
    const newItem = {
      name: props.name,
      amount: amount,
      price: props.price,
    };
    cartCtx.addItem(newItem);
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={styles.description}>{props.meal.description}</p>
        <p className={styles.price}>{formatPrice(props.meal.price)}</p>
      </div>
      <div>
        <MealForm mealId={props.meal.id} onAddCartItem={addCartItemHandler} />
      </div>
    </li>
  );
};

export default Meal;
