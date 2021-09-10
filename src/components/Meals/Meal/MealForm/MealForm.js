import React from "react";

import Input from "../../../UI/Input/Input";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
        label="Ammount"
        input={{
          id: props.mealId,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealForm;