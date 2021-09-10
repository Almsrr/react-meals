import React from "react";

import styles from "./Meal.module.css";

const Meal = (props) => {
  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <p className={styles.description}>{props.meal.description}</p>
        <p className={styles.price}>{formatPrice(props.meal.price)}</p>
      </div>
    </li>
  );
};

export default Meal;
