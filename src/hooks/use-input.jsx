import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return {
    value: "",
    isTouched: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  //  validate value is a function that returns true or false based on the value passed to it
  //  this function is passed as an argument to the useInput hook

  //   const [enteredValue, setEnteredValue] = useState(""); //useState
  //   const [isTouched, setIsTouched] = useState(false); //useState

  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    // setEnteredValue(event.target.value); //useState
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    // setIsTouched(true);  //useState
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    // setEnteredValue("");  //useState
    // setIsTouched(false);  //useState
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError: hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
