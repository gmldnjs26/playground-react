import { useState } from "react";

const useInput = (initValue, validate) => {
  const [value, setValue] = useState(initValue);
  const [isTouchedValue, setIsTouchedValue] = useState(false);

  const isValueValid = validate(value);

  const hasValueError = isTouchedValue && !isValueValid;

  const onChangeHandler = (e) => {
    console.log(e);
    setValue(e.target.value);
  };

  const onBlurHandler = (e) => {
    console.log(e);
    setIsTouchedValue(true);
  };

  return {
    value,
    isValueValid,
    hasValueError,
    onChangeHandler,
    onBlurHandler,
  };
};

export default useInput;
