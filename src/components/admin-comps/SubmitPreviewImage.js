import React, { useState, useEffect } from "react";
import HorizontalLine from "../HorizontalLine";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPreviewImage() {
  
  let handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    const dessertId2 = document.getElementById("dessertId2").value;
    formData.append("[id]", dessertId2);

    let eachImage2 = e.target.preview_image.files[0];

    formData.append("[preview_image]", eachImage2);

    submitToApi(formData);
    e.target.reset();
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
    <div className="submitPreviewImageComp">
      <Form className="m-3 mb-6" onSubmit={handleSubmit}>
        <HorizontalLine title={"Submit Main Dessert Photo"} />
        {/* <Form.Group className="my-3">
          <Form.Label>English Name</Form.Label>
          <Form.Control type="text" name="english_name2" id="english_name2" />
        </Form.Group> */}
        <Form.Group className="my-3">
          <Form.Label style={{ color: "white" }}>Dessert id</Form.Label>
          <Form.Control type="number" name="dessertId2" id="dessertId2" />
        </Form.Group>
        <Form.Group className="my-3">
          <Form.Label style={{ color: "white" }}>Upload one image</Form.Label>
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
