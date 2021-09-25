import React, { useState, useEffect, useCallback } from "react";

import Meal from "../Meal/Meal";
import Card from "../../UI/Card/Card";
import styles from "./AvailableMeals.module.css";
import { v4 as uuid } from "uuid";
import db from "../../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState("");

  const fetchMeals = useCallback(async () => {
    try {
      const mealsCol = collection(db, "meals");
      const data = await getDocs(mealsCol);

      if (!data.empty) {
        const fetchedMeals = data.docs.map((doc) => doc.data());
        const mealsList = fetchedMeals.map((meal) => {
          return {
            id: uuid(),
            name: meal.name,
            description: meal.description,
            price: meal.price,
          };
        });
        setMeals(mealsList);
      } else {
        throw new Error("Meals not found");
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

  const mealItems = meals.map((meal) => <Meal key={meal.id} meal={meal} />);
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealItems}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
