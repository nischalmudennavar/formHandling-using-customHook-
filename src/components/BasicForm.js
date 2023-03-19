import { useState } from "react";

import useFormHook from "../hooks/useFormHook";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameInputHasError,
    isValid: enteredFirstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useFormHook((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    isValid: enteredLastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useFormHook((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useFormHook((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {firstNameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={lastNameBlurHandler}
            onChange={lastNameChangeHandler}
            value={enteredLastName}
          />
        </div>
      </div>
      {lastNameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )}

      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
      </div>
      {emailInputHasError && (
        <p className="error-text">Email must not be empty</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
