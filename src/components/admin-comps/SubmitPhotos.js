import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPhotos() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => setDesserts(data));
  }, []);

  console.log(desserts);
  // desserts.map(dessert => console.log(dessert.images_url))

  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

     const dessertId = document.getElementById("dessertId").value;
     formData.append("[id]", dessertId);

    let imagesLength = e.target.images.files.length;
    let eachImage = e.target.images.files;

    for (var x = 0; x < imagesLength; x++) {
      formData.append("images[]", eachImage[x]);
    }
    // for (let blah in formData.entries()) {
    //   console.log(blah);
    // }
    // for (var pair of formData.values()) {
    //   console.log(pair);
    // }
    submitToApi(formData);
    e.target.reset();
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
        <h1 className="text-center">Submit Dessert Gallery Photos</h1>

        {/* <Form.Group className="my-3">
          <Form.Label>English Name</Form.Label>
          <Form.Control type="text" name="english_name" id="english_name" />
        </Form.Group> */}
        <Form.Group className="my-3">
          <Form.Label>Dessert id</Form.Label>
          <Form.Control type="number" name="dessertId" id="dessertId" />
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
