const InputColor = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
      />
    </div>
  );
};
export default InputColor;