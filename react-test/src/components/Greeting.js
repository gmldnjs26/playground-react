import { useState } from "react";

const Greeting = () => {
  const [isChanged, setIsChanged] = useState(false);

  const changeTextHandler = () => {
    setIsChanged(!isChanged);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!isChanged ? <p>It's good to see you!</p> : <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change</button>
    </div>
  );
};

export default Greeting;
