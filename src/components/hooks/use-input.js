import { useState } from "react";

const useInput = (checkValidity) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const touchHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  const isInputValid = checkValidity(value);
  const hasError = isTouched && !isInputValid;

  return {
    value,
    setValue,
    changeHandler,
    touchHandler,
    reset,
    isInputValid,
    hasError,
  };
};

export default useInput;
