import React , {useState} from 'react'
import HorizontalLine from "../HorizontalLine";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitDessertForm({ changeSubmissionStateTrue }) {
  const [englishName, setEnglishName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [price, setPrice] = useState(0);
  const [dessertType, setDessertType] = useState("cookie");
  // const [images , setImages] = useState([])

  // console.log(setEnglishName);
  // console.log(setArabicName);
  // console.log(setPrice);
  // console.log(setDessertType);
  // console.log(setImages);

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("/create-dessert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        english_name: englishName,
        arabic_name: arabicName,
        price: price,
        dessert_type: dessertType,
      }),
    })
      .then((resp) => resp.json())
      .then(
        (data) => console.log(data),
        setEnglishName(""),
        setArabicName(""),
        setPrice(0),
        changeSubmissionStateTrue()
      );
  };

  return (
    <Form className="m-3 mb-6 mt-4" onSubmit={handleSubmit}>
      {/* <h1 className="text-center">Submit a New Dessert</h1> */}
      <HorizontalLine title={"Submit a New Dessert"} />
      <Form.Group className="my-3" controlId="formBasicEnglish">
        <Form.Label style={{ color: "white" }}>English Name</Form.Label>
        <Form.Control
          type="text"
          value={englishName}
          placeholder="Enter the english name for the dessert"
          onChange={(e) => setEnglishName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicArabic">
        <Form.Label style={{ color: "white" }}>Arabic Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the arabic name for the dessert"
          value={arabicName}
          onChange={(e) => setArabicName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicPrice">
        <Form.Label style={{ color: "white" }}>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter the price for the dessert"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="my-3">
        <Form.Label style={{ color: "white" }}>Dessert Type</Form.Label>
        <Form.Select onChange={(e) => setDessertType(e.target.value)}>
          <option value="kunafa">Cookie</option>
          <option value="qatayef">Qatayef</option>
          <option value="platter">Platter</option>
          <option value="kunafa">Kunafa</option>
          <option value="cake">Cake</option>
        </Form.Select>
      </Form.Group>
      {/* <Form.Group className="my-3" controlId="formBasicFiles" onChange={(e) => setImages(prev => [...prev , e.target.files])}>
        <Form.Label>Upload one or multiple images</Form.Label>
        <Form.Control type="file" placeholder="upload one or multiple images" />
      </Form.Group> */}
      <div className="text-center mt-3">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default SubmitDessertForm