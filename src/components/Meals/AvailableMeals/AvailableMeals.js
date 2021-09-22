import React, { useState, useEffect, useCallback } from "react";

import Meal from "../Meal/Meal";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(
        "https://react-http-18ddb-default-rtdb.firebaseio.com/meals.json"
      );
      if (response.ok) {
        const data = await response.json();
        const fetchedMeals = [];
        for (const key in data) {
          fetchedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(fetchedMeals);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setHttpError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  if (isLoading) {
    return (
      <section className={styles.loadingSection}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={styles.errorSection}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealItems = meals.map((meal, index) => (
    <Meal key={index} meal={meal} />
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
