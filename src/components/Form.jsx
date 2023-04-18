import axios from "axios";
import { useEffect, useState } from "react";
import SelectType from "./FormInputs/SelectType";
import SelectSize from "./FormInputs/SelectSize";
import InputColor from "./FormInputs/InputColor";
import InputPicture from "./FormInputs/InputPicture";
import SelectSeason from "./FormInputs/SelectSeason";

const Form = ({
  oldData,
  setData,
  formData,
  setFormData,
  clothesType,
  setClothesType,
  clothesSize,
  setClothesSize,
  typeCheck,
  clothesSeason,
  setClothesSeason,
}) => {

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/ClothesType/"),
      axios.get("http://localhost:3001/PieceSize/"),
      axios.get("http://localhost:3001/Season/"),
    ])
      .then(([resType, resSize, resSeason]) => {
        setClothesType(resType.data);
        setClothesSize(resSize.data);
        setClothesSeason(resSeason.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:3001/wardrobe", formData).then((resp) => {
      axios.get("http://localhost:3001/wardrobe").then((res) => {

        if (typeCheck === resp.data.type) {
          const newData = {
            wardrobe: res.data,
            filteredData: [...oldData.filteredData, resp.data],
          };
          setData(newData);
        } else {
          const newData = {
            wardrobe: res.data,
            filteredData: res.data,
          };
          setData(newData);
        }
      });
    });
    setFormData({
      type: "",
      size: "",
      color: "#ffffff",
      image: "",
      season: "",
    });

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Type: </label>
      <SelectType
        formData={formData}
        clothesType={clothesType}
        handleChange={handleChange}
      />
      <label>Size: </label>
      <SelectSize
        formData={formData}
        clothesSize={clothesSize}
        handleChange={handleChange}
      />
      <label>Color: </label>
      <InputColor formData={formData} handleChange={handleChange} />
      <label>Picture: </label>
      <InputPicture formData={formData} handleChange={handleChange} />
      <label>Season: </label>
      <SelectSeason
        formData={formData}
        clothesSeason={clothesSeason}
        handleChange={handleChange}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};
export default Form;
