const SelectSeason = ({ formData, handleChange, clothesSeason }) => {
  return (
    <div>
      <select
        name="season"
        value={formData.season}
        onChange={handleChange}
        required
      >
        <option value="">--select season--</option>
        {clothesSeason.map((season) => (
          <option key={season} value={season}>
            {season}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectSeason;