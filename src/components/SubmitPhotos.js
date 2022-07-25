import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPhotos() {
  const [images, setImages] = useState([]);
  const [englishName, setEnglishName] = useState("");
  // const [arabicName , setArabicName] = useState("")
  const [dessertId, setId] = useState(null);

  // let handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(images)
  // };

  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("id", dessertId);
    formData.append("images", images);
    // formData.append("id", 2)

    // let imagesLength = images.length;
    // for (var x = 0; x < imagesLength; x++) {
    //   formData.append("images", images[x]);
    // }

    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    // for (const value of formData.entries()) {
    //   console.log(value);
    // }

    console.log(images)
    // console.log(images[0]);

    fetch("/add-images", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
      },
    //   body: JSON.stringify({
    //     id: dessertId,
    //     images: images
    //   }),
        body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Form className="m-3 mb-6" onSubmit={handleSubmit}>
        <h1 className="text-center">Submit Dessert Photos</h1>

        <Form.Group className="my-3" controlId="formBasicEnglish">
          <Form.Label>English Name // id</Form.Label>
          <Form.Control
            type="englishName"
            placeholder="Enter the english name for the dessert"
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="my-3"
          controlId="formBasicFiles"
          //   onChange={(e) => setImages((prev) => [...prev, e.target.files])}
          onChange={(e) => setImages(e.target.files)}
        >
          <Form.Label>Upload one or multiple images</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            multiple="multiple"
            placeholder="upload one or multiple images"
          />
        </Form.Group>

        <div className="text-center mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SubmitPhotos;
