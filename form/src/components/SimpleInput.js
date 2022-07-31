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

    console.log(name);
    setName("");
  };

  return (
    <form onSubmit={onSumbitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={name} onChange={onInputHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
