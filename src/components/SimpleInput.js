import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          type="email"
          id="name"
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

// const [enteredName, setEnteredName] = useState("");
// // const [formIsValid, setFormIsValid] = useState(false);
// // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
// // this is jugaad for now because we are not using any validation logic ...we are just hiding the message

// //  overcoming the cheating
// const [enteredNameTouched, setEnteredNameTouched] = useState(false);

// const enteredNameIsValid = enteredName.trim() !== ""; // true if not empty
// const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched; // true if not valid and touched

// const inputChangeHandler = (event) => {
//   setEnteredName(event.target.value);
// };

// const inputBlurHandler = (event) => {
//   setEnteredNameTouched(true);
// };

// const emailInputChangeHandler = (event) => {
//   setEnteredEmail(event.target.value);
// };

// const emailInputBlurHandler = (event) => {
//   setEnteredEmailTouched(true);
// };

// const [enteredEmail, setEnteredEmail] = useState("");
// const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

// const enteredEmailIsValid = enteredEmail.includes("@"); // true if not empty
// const emailInputIsInValid = !enteredEmailIsValid && enteredEmailTouched; // true if not valid and touched

// setEnteredName("");
// setEnteredEmail("");
// setEnteredEmailTouched(false);
