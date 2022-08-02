import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);

  const onInputHandler = (e) => {
    setName(e.target.value);
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }
    setName("");
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSumbitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} onChange={onInputHandler} />
        {nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
