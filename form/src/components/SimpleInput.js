import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [error, setError] = useState(false);
  const {
    value: name,
    isValueValid: isNameValid,
    hasValueError: hasNameError,
    onChangeHandler: onChangeNameHandler,
    onBlurHandler: onBlurNameHandler,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: email,
    isValueValid: isEmailValid,
    hasValueError: hasEmailError,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
  } = useInput("", (value) => value.trim() !== "");

  const onSumbitHandler = (e) => {
    e.preventDefault();
    if (!isNameValid || !isEmailValid) {
      setError(true);
      return;
    }
    alert("Submit!!!");
  };

  const nameInputClasses = !hasNameError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !hasEmailError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSumbitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChangeNameHandler}
          onBlur={onBlurNameHandler}
        />
        {hasNameError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {hasEmailError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
