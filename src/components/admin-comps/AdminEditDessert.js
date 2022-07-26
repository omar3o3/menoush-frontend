import React , {useState , useEffect} from 'react'

import EditEnglishName from "./EditEnglishName";
import EditArabicName from "./EditArabicName";
import EditPrice from "./EditPrice";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";


function AdminEditDessert() {

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => setDesserts(data));
  }, []);

  console.log(desserts)

  return (
    <div>
      {desserts.map((dessert) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={dessert.preview_image} />
          <ListGroup className="list-group-flush">

            {/* <ListGroup.Item> */}
              <EditEnglishName englishName ={desserts.english_name}/>
            {/* </ListGroup.Item> */}

            {/* <ListGroup.Item> */}
              <EditArabicName arabicName={dessert.arabic_name}/>
            {/* </ListGroup.Item> */}

            {/* <ListGroup.Item> */}
              <EditPrice price={dessert.price}/>
            {/* </ListGroup.Item> */}

          </ListGroup>
          <Button>Delete Dessert</Button>
        </Card>
      ))}
    </div>
  );
}

export default AdminEditDessert