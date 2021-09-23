import React from "react";
import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h1>Delicious food, delivered to you</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.{" "}
        <b>All our meals are cooked with high-quality ingredients</b>,
        just-in-time and of course <b>by experienced chefs!</b>
      </p>
    </section>
  );
};

export default MealsSummary;
