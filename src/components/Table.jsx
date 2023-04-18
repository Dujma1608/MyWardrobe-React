import { useState } from "react";
import Row from "./Row";
import Filter from "./Filter";

const Table = ({
  clothesType,
  clothesSize,
  clothesSeason,
  filterData,
  data,
  setData,
  filteredData,
  typeCheck,
}) => {
  const handleFilter = (e) => {
    filterData(e.target.value);
  };
  return (
    <div className="table-page">
      <Filter
        clothesType={clothesType}
        handleFilter={handleFilter}
        typeCheck={typeCheck}
      />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Size</th>
              <th>Color</th>
              <th>Image</th>
              <th>Season</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((piece) => (
              <Row
                key={piece.id}
                clothesType={clothesType}
                clothesSize={clothesSize}
                clothesSeason={clothesSeason}
                data={data}
                setData={setData}
                piece={piece}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
