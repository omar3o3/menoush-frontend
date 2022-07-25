import React , {useState} from 'react'

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SubmitPhotos() {

    const [images , setImages] = useState([])
    const [englishName , setEnglishName] = useState("")
    // const [arabicName , setArabicName] = useState("")

    let handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div>
      <Form className="m-3 mb-6" onSubmit={handleSubmit}>
        <h1 className="text-center">Submit Dessert Photos</h1>

        <Form.Group className="my-3" controlId="formBasicEnglish">
          <Form.Label>English Name</Form.Label>
          <Form.Control
            type="englishName"
            placeholder="Enter the english name for the dessert"
            onChange={(e) => setEnglishName(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="my-3"
          controlId="formBasicFiles"
          onChange={(e) => setImages((prev) => [...prev, e.target.files])}
        >
          <Form.Label>Upload one or multiple images</Form.Label>
          <Form.Control
            type="file"
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

export default SubmitPhotos