import React from "react";
import Filter from "./Filter";

const Sorting = ({ filter, setFilter }) => {
  return (
    <Filter
      filter={filter}
      setFilter={setFilter}
      defaultName="Сортировка по:"
      options={[
        { name: "По цене", value: "Price_rub" },
        { name: "По популярности", value: "rating" },
      ]}
    />
  );
};

export default Sorting;
