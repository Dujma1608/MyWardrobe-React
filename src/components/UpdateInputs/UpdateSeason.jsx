const UpdateSeason = ({ updateForm, handleChange, clothesSeason }) => {
  return (
    <div>
      <select
        name="season"
        value={updateForm.season}
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
export default UpdateSeason;
