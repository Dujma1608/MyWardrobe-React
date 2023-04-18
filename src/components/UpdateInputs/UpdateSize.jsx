const UpdateSize = ({ updateForm, clothesSize, handleChange }) => {
  return (
    <div>
      <select
        name="size"
        value={updateForm.size}
        onChange={handleChange}
        required
      >
        <option value="">--select size--</option>
        {clothesSize.map((size) => (
          <option key={size.id} value={size.sign}>
            {size.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default UpdateSize;
