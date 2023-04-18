import axios from 'axios'
const Delete = ({ id, deletePiece, data, setData }) => {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/wardrobe/${id}`);
    const newData = {
        wardrobe: data.wardrobe.filter((item) => item.id !== id),
        filteredData: data.filteredData.filter((item) => item.id !== id)
    }
    setData(newData);
  };
  return (
    <>
      <button id="save" onClick={handleDelete}>
       Confirm
      </button>
    </>
  );
};
export default Delete;