const UpdateType = ({ updateForm, clothesType, handleChange }) => {
  return (
    <div className="select-type">
      <select
        name="type"
        value={updateForm.type}
        onChange={handleChange}
        required
      >
        <option value="">--select type--</option>
        {clothesType.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
export default UpdateType;
