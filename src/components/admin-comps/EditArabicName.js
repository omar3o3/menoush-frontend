import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function EditArabicName({arabicName}) {
  return (
    <ListGroup.Item>
      <span>Arabic Name:</span>
      <span>{arabicName}</span>
      <div>
        <Button>Edit Arabic Name</Button>
      </div>
    </ListGroup.Item>
  );
}

export default EditArabicName