import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table';
import Form from './components/Form';
import './App.css'

function App() {
  const [data, setData] = useState({
    wardrobe: [],
    filteredData : []
  });

  const [formData, setFormData] = useState({
    type: "",
    size: "",
    color: "#ffffff",
    image: "",
    season: "",
  });

  const [clothesType, setClothesType] = useState([]);
  const [clothesSize, setClothesSize] = useState([]);
  const [clothesSeason, setClothesSeason] = useState([]);
  const [typeCheck, setTypeCheck] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:3001/wardrobe/")
    .then(response => {
      const newData = {
        wardrobe: response.data,
        filteredData: response.data
      }
      setData(newData);
    })
  }, [])

  const filterData = (value) => {
    if(value !== "all"){

      setTypeCheck(value);

      const newFilteredData = data.wardrobe.filter(
        (item) => item.type === value
      );
      setData(prev => ({
        ...prev,
        filteredData: newFilteredData
      }))
    }
    else { 
      setTypeCheck("all");
      setData({...data, filteredData: data.wardrobe})
    }

  }
  return (
    <div className="container">
    <h2 style={{fontWeight: "bold"}}>My Wardrobe</h2>
      <div className="wardrobe">
        <Form
          oldData={data}
          setData={setData}
          typeCheck={typeCheck}
          formData={formData}
          setFormData={setFormData}
          clothesType={clothesType}
          setClothesType={setClothesType}
          clothesSize={clothesSize}
          setClothesSize={setClothesSize}
          clothesSeason={clothesSeason}
          setClothesSeason={setClothesSeason}
          filterData={filterData}
        />
        <Table
          data={data}
          setData={setData}
          typeCheck={typeCheck}
          filteredData={data.filteredData}
          clothesType={clothesType}
          clothesSize={clothesSize}
          clothesSeason={clothesSeason}
          filterData={filterData}
        />
      </div>
    </div>
  );
}

export default App
