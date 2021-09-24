import React, { useRef } from "react";

import Input from "../../../UI/Input/Input";
import styles from "./MealForm.module.css";

const MealForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const insertedAmount = Number(amountInputRef.current.value);
    if (insertedAmount > 0 && insertedAmount < 6) {
      props.onAddCartItem(insertedAmount);
      return;
    }
    window.alert("Invalid amount");
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
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
