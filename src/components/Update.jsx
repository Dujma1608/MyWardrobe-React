import axios from "axios"

const Update = ({ id, setData, setUpdate, updateForm }) => {

    const handleUpdatePiece = () => {
        axios.put(`http://localhost:3001/wardrobe/${id}`, {
          type: updateForm.type,
          size: updateForm.size,
          color: updateForm.color,
          image: updateForm.image,
          season: updateForm.season,
        })
        .then( resp => {
            axios.get('http://localhost:3001/wardrobe/')
            .then( res => {
                const newData = {
                  wardrobe: res.data,
                  filteredData: res.data,
                };
                setData(newData);
            } )
        })
        
        setUpdate(false);
    }
    return <button id="save" onClick={handleUpdatePiece}>Save</button>
}
export default Update;