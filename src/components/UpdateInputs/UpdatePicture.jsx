const UpdatePicture = ({ updateForm, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        name="image"
        value={updateForm.image}
        onChange={handleChange}
      />
    </div>
  );
};
export default UpdatePicture;
