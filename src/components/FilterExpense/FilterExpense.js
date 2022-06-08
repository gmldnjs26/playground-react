const FilterExpense = ({ onFilterExpense }) => {

  const onChnageHandler = (e) => {
    onFilterExpense(e.target.value)
  }

  return (
    <div>
      <select onChnage={onChnageHandler}>
        <option value="2019"></option>
        <option value="2020"></option>
        <option value="2021"></option>
        <option value="2022"></option>
      </select>
    </div>
  );
};

export default FilterExpense;