const InputPicture = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
    </div>
  );
};
export default InputPicture;