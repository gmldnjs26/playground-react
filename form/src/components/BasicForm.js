import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValueValid: isFirstNameValid,
    hasValueError: hasFirstNameError,
    onBlurHandler: onFirstNameBlurHandler,
    onChangeHandler: onFirstNameChangeHandler,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: lastName,
    isValueValid: isLastNameValid,
    hasValueError: hasLastNameError,
    onBlurHandler: onLastNameBlurHandler,
    onChangeHandler: onLastNameChangeHandler,
  } = useInput("", (value) => value.trim() !== "");
  const {
    value: email,
    isValueValid: isEmailValid,
    hasValueError: hasEmailError,
    onBlurHandler: onEmailBlurHandler,
    onChangeHandler: onEmailChangeHandler,
  } = useInput("", (value) => value.includes("@"));

  const onSumbitHandler = (e) => {
    e.preventDefault();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
      alert("input is not valid");
      return;
    } else {
      alert("Good");
    }
  };

  const firstNameClasses = hasFirstNameError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = hasLastNameError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = hasEmailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onSumbitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            value={firstName}
            onBlur={onFirstNameBlurHandler}
            onChange={onFirstNameChangeHandler}
          />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            value={lastName}
            onBlur={onLastNameBlurHandler}
            onChange={onLastNameChangeHandler}
          />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          value={email}
          onBlur={onEmailBlurHandler}
          onChange={onEmailChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
