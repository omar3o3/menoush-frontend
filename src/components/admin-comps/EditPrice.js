import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function EditPrice({price}) {
  return (
    <ListGroup.Item>
      <span>Price:</span>
      <span>{price}</span>
      <div>
        <Button>Edit Price</Button>
      </div>
    </ListGroup.Item>
  );
}

export default EditPrice