import { useState } from "react";
import Delete from "./Delete";
import Update from "./Update";
import UpdateColor from './UpdateInputs/UpdateColor'
import UpdateType from "./UpdateInputs/UpdateType";
import UpdateSeason from "./UpdateInputs/UpdateSeason";
import UpdatePicture from "./UpdateInputs/UpdatePicture";
import UpdateSize from "./UpdateInputs/UpdateSize";
import axios from "axios";

const Row = ({
  piece,
  clothesType,
  clothesSize,
  clothesSeason,
  data,
  setData
}) => {
  const colorStyle = piece.color;

  const [update, setUpdate] = useState(false);
  const [deletePiece, setDeletePiece] = useState(false);

  const handleSetDelete = () =>{
    if(!deletePiece)
    setDeletePiece(true);
    else setDeletePiece(false);
  }
  const [updateForm, setUpdateForm] = useState({
    type: piece.type,
    size: piece.size,
    color: piece.color,
    image: piece.image,
    season: piece.season,
  });

  const handleChangeUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateForm({ ...updateForm, [name]: value });
  };
  const getPiece = () => {
    setUpdate(true);
    axios.get(`http://localhost:3001/wardrobe/${piece.id}`).then((res) => {
      setUpdateForm(res.data);
    });
  };

  return (
    <>
      {update ? (
        <tr>
          <td>
            <UpdateType
              updateForm={updateForm}
              clothesType={clothesType}
              handleChange={handleChangeUpdate}
            />
          </td>
          <td>
            <UpdateSize
              updateForm={updateForm}
              clothesSize={clothesSize}
              handleChange={handleChangeUpdate}
            />
          </td>
          <td>
            <UpdateColor
              updateForm={updateForm}
              handleChange={handleChangeUpdate}
            />
          </td>
          <td>
            <UpdatePicture
              updateForm={updateForm}
              handleChange={handleChangeUpdate}
            />
          </td>
          <td>
            <UpdateSeason
              updateForm={updateForm}
              clothesSeason={clothesSeason}
              handleChange={handleChangeUpdate}
            />
          </td>
          <td id="buttonTd">
            <div className="optionButtons">
              <Update
                setData={setData}
                id={piece.id}
                setUpdate={setUpdate}
                updateForm={updateForm}
              />
              <button onClick={() => setUpdate(false)}>X</button>
            </div>
          </td>
        </tr>
      ) : (
        <tr>
          <td>{piece.type}</td>
          <td>{piece.size}</td>
          <td>
            <div
              style={{
                backgroundColor: piece.color,
                width: "18px",
                height: "18px",
                margin: "auto",
                borderRadius: "50%",
              }}
            ></div>
          </td>
          <td>
            <img src={piece.image} alt={piece.type} />
          </td>
          <td>{piece.season}</td>
          <td id="buttonTd">
            {deletePiece ? (
              <div className="optionButtons">
                <Delete id={piece.id} data={data} setData={setData} />
                <button onClick={handleSetDelete}>Cancel</button>
              </div>
            ) : (
              <div className="optionButtons">
                <button id="delete" onClick={handleSetDelete}>
                  Delete
                </button>
                <button id="update" onClick={getPiece}>
                  Update
                </button>
              </div>
            )}
          </td>
        </tr>
      )}
    </>
  );
};
export default Row;