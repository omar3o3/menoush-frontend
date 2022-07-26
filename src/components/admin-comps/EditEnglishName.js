import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function EditEnglishName({ englishName }) {
  return (
    <ListGroup.Item>
      <span>English Name:</span>
      <span>{englishName}</span>
      <div>
        <Button>
            Edit English Name
        </Button>
      </div>
    </ListGroup.Item>
  );
}

export default EditEnglishName;
