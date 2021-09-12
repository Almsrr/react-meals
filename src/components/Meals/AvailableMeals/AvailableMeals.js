import React from "react";

import Meal from "../Meal/Meal";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import { v4 as uuidv4 } from "uuid";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealItems = DUMMY_MEALS.map((meal) => (
    <Meal key={uuidv4()} meal={meal} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
