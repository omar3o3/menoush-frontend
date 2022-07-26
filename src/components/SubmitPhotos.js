import React, { useState, useEffect, useRef } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPhotos() {
  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    const englishValue = document.getElementById("english_name").value;

    formData.append("[english_name]", englishValue);

    let imagesLength = e.target.images.files.length;
    let eachImage = e.target.images.files;

    for (var x = 0; x < imagesLength; x++) {
      formData.append("images", eachImage[x]);
    }

    submitToApi(formData);
  };

  let submitToApi = (data) => {
    fetch("/add-images", {
      method: "POST",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Form className="m-3 mb-6" onSubmit={handleSubmit}>
        <h1 className="text-center">Submit Dessert Photos</h1>

        <Form.Group className="my-3">
          <Form.Label>English Name</Form.Label>
          <Form.Control type="text" name="english_name" id="english_name" />
        </Form.Group>

        <Form.Group className="my-3">
          <Form.Label>Upload one or multiple images</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            multiple="multiple"
            name="images"
            id="images"
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

//   const [images, setImages] = useState([]);
//   const [englishName, setEnglishName] = useState("");
// const [arabicName , setArabicName] = useState("")
//   const [dessertId, setId] = useState(null);

// let formData = new FormData();
// formData.append("id", dessertId);
// formData.append("images", images);
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

// console.log(images)
// console.log(images[0]);

// fetch("/add-images", {
//   method: "POST",
//   headers: {
//     "Content-Type": "multipart/form-data",
//     // "Content-Type": "application/json",
//   },
// //   body: JSON.stringify({
// //     id: dessertId,
// //     images: images
// //   }),
//     body: formData,
// })
//   .then((resp) => resp.json())
//   .then((data) => console.log(data));
