const UpdateColor = ({ updateForm, handleChange }) => {
  return (
    <div>
      <input
        type="color"
        name="color"
        value={updateForm.color}
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default UpdateColor;
