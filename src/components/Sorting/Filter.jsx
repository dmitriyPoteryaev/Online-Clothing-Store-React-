import React from "react";
import classes from "./Filter.module.css";
const Select = ({
  defaultName,
  options,
  filter,
  setFilter,
}) => {
  return (
    <select
      className={classes.select}
      value={filter}
      onChange={(event) => setFilter(event.target.value)}
    >
      <option disabled value="">
        {defaultName}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
