import React, { useState, useEffect } from "react";
import AdminEditDessert from "./AdminEditDessert";
import HorizontalLine from "../HorizontalLine";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AdminMapDessertType() {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    fetch("/desserts")
      .then((resp) => resp.json())
      .then((data) => setDesserts(data));
  }, []);

  let cookies = desserts.filter((dessert) => dessert.dessert_type === "cookie");
  let qatayefs = desserts.filter(
    (dessert) => dessert.dessert_type === "qatayef"
  );
  let platters = desserts.filter(
    (dessert) => dessert.dessert_type === "platter"
  );
  let kunafas = desserts.filter((dessert) => dessert.dessert_type === "kunafa");
  let cakes = desserts.filter((dessert) => dessert.dessert_type === "cake");

    let handleDelete = (dessertID) => {
      // console.log(dessertID);
      let filteredDesserts = desserts.filter(item => item.id !== dessertID)
      // console.log(filteredDesserts);

      fetch("/delete-dessert", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          dessert_id: dessertID,
        }),
      }).then((resp) => {
        if (resp.ok) {
          setDesserts(filteredDesserts);
        }
      });
    };

  return (
    <>
      <Row className="my-3 mx-5" style={{ paddingBottom: "40%" }}>
        {/* <h1 className="display-4">Cookies...</h1> */}
        <HorizontalLine title={"Cookies"} />
        {cookies.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} handleDelete={handleDelete} />
          </Col>
        ))}
        {/* <h1 className="display-4">Qatayefs...</h1> */}
        <HorizontalLine title={"Qatayefs"} />
        {qatayefs.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} handleDelete={handleDelete} />
          </Col>
        ))}
        {/* <h1 className="display-4">Platters...</h1> */}
        <HorizontalLine title={"Platters"} />
        {platters.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} handleDelete={handleDelete} />
          </Col>
        ))}
        {/* <h1 className="display-4">Kunafas...</h1> */}
        <HorizontalLine title={"Kunafas"} />
        {kunafas.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} handleDelete={handleDelete} />
          </Col>
        ))}
        {/* <h1 className="display-4">Cakes...</h1> */}
        <HorizontalLine title={"Cakes"} handleDelete={handleDelete} />
        {cakes.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <AdminEditDessert dessert={dessert} handleDelete={handleDelete} />
          </Col>
        ))}
      </Row>
      <br />
      <br />
    </>
  );
}

export default AdminMapDessertType;
