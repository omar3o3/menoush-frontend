import React, { useState, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPreviewImage() {
  
  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // const englishValue2 = document.getElementById("english_name2").value;
  //  formData.append("[english_name]", englishValue2);
  
    const dessertId = document.getElementById("dessertId").value;
    formData.append("[id]", dessertId);

    let eachImage = e.target.preview_image.files[0];

    formData.append("[preview_image]", eachImage);

    submitToApi(formData);
  };

  let submitToApi = (data) => {
    fetch("/add-preview-image", {
      method: "POST",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <Form className="m-3 mb-6" onSubmit={handleSubmit}>
        <h1 className="text-center">Submit Main Dessert Photo</h1>

        {/* <Form.Group className="my-3">
          <Form.Label>English Name</Form.Label>
          <Form.Control type="text" name="english_name2" id="english_name2" />
        </Form.Group> */}
        <Form.Group className="my-3">
          <Form.Label>Dessert id</Form.Label>
          <Form.Control type="number" name="dessertId" id="dessertId" />
        </Form.Group>

        <Form.Group className="my-3">
          <Form.Label>Upload one image</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            name="preview_image"
            id="preview_image"
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

export default SubmitPreviewImage;
