import { useState } from "react";

const Filter = ({ clothesType, typeCheck, handleFilter }) => {
  return (
    <div className="filter">
      <label>
        Filter:
        {clothesType.map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="type"
              value={type}
              checked={typeCheck === type}
              onChange={handleFilter}
            />{" "}
            {type}
          </label>
        ))}
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            checked={typeCheck === "all"}
            onChange={handleFilter}
          />{" "}
          all
        </label>
      </label>
    </div>
  );
};
export default Filter;