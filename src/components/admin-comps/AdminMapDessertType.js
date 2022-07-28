import React, { useState, useEffect } from "react";
import AdminEditDessert from "./AdminEditDessert";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminMapDessertType({desserts}) {
  // const [desserts, setDesserts] = useState([]);

  // useEffect(() => {
  //   fetch("/desserts")
  //     .then((resp) => resp.json())
  //     .then((data) => setDesserts(data));
  // }, []);

  let cookies = desserts.filter((dessert) => dessert.dessert_type === "cookie");
  let qatayefs = desserts.filter(
    (dessert) => dessert.dessert_type === "qatayef"
  );
  let platters = desserts.filter(
    (dessert) => dessert.dessert_type === "platter"
  );
  let kunafas = desserts.filter((dessert) => dessert.dessert_type === "kunafa");
  let cakes = desserts.filter((dessert) => dessert.dessert_type === "cake");

  return (
    <>
      <Row className="my-3 mx-5">
        <h1 className="display-4">Cookies...</h1>
        {cookies.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} />
          </Col>
        ))}
        <h1 className="display-4">Qatayefs...</h1>
        {qatayefs.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} />
          </Col>
        ))}
        <h1 className="display-4">Platters...</h1>
        {platters.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} />
          </Col>
        ))}
        <h1 className="display-4">Kunafas...</h1>
        {kunafas.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} />
          </Col>
        ))}
        <h1 className="display-4">Cakes...</h1>
        {cakes.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} />
          </Col>
        ))}
      </Row>
      <br />
      <br />
    </>
  );
}

export default AdminMapDessertType;
