import React, { useState, useEffect } from "react";
import CardForHomeComp from "./CardForHomeComp";
import HorizontalLine from "../HorizontalLine";
import UserCarousal from "./UserCarousal";
import menoushBlackLogo from "../../images/menoushBlackLogo.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function UserHome({ user }) {
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

  // console.log("hi from userHome");

  return (
    <>
      <div className="text-center mb-3 mt-1">
        <img
          src={menoushBlackLogo}
          alt=""
          style={{
            // width: "20%",
            maxHeight: "15rem",
            border: "white",
            marginTop: ".5%",
            position: "relative",
          }}
        />
        <h1 className="landingPageHeader" style={{ color: "#d8a941" }}>
          Welcome to Menoush Bakery
        </h1>
      </div>
      <UserCarousal />
      <Row className="my-3 mx-3">
        <HorizontalLine title={"Cookies"} />
        {cookies.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <CardForHomeComp dessert={dessert} user={user} />
          </Col>
        ))}
        <HorizontalLine title={"Qatayefs"} />
        {qatayefs.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <CardForHomeComp dessert={dessert} user={user} />
          </Col>
        ))}
        <HorizontalLine title={"Platters"} />
        {platters.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <CardForHomeComp dessert={dessert} user={user} />
          </Col>
        ))}
        <HorizontalLine title={"Kunafas"} />
        {kunafas.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <CardForHomeComp dessert={dessert} user={user} />
          </Col>
        ))}
        <HorizontalLine title={"Cakes"} />
        {cakes.map((dessert) => (
          <Col lg={true} key={dessert.id} className="mx-4 my-3">
            <CardForHomeComp dessert={dessert} user={user} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default UserHome;
