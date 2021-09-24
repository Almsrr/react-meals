import { useState } from "react";

function useInput(validate) {
  const [value, setValue] = useState("");
  const [valueConfirmed, setValueConfirmed] = useState(false);

  const invalidValue = validate(value);
  const invalidInput = invalidValue && valueConfirmed;

  const changeInputHandler = (event) => {
    setValue(event.target.value);
  };
  const blurInputHandler = () => {
    setValueConfirmed(true);
  };
  const resetInput = () => {
    setValue("");
    setValueConfirmed(false);
  };

  return {
    value,
    invalidValue,
    invalidInput,
    changeInputHandler,
    blurInputHandler,
    resetInput,
  };
}

export default useInput;
