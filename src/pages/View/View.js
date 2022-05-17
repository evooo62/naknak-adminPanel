import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./View.css";
import fireDb from "../../firebase";
import {
  Button,
  Card,
  Col,
  Row,

} from "react-bootstrap";



const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`drivers/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);
  console.log("user", user);
  return (
    <>
      <div style={{ marginTop: "2vh" }}>
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Header className="cardHeader">
                <strong>Kisisel Bilgiler</strong>
              </Card.Header>
              <Card.Body className="cardBody">
                <div className="container">
                  <Row>
                    <Col>
                      <p>
                        {" "}
                        <strong>ID: </strong>
                        {id}
                      </p>
                      <p>
                        <strong>Email: </strong>
                        {Object.keys(user).length === 0 ? "" : user.email}
                      </p>
                      <p>
                        <strong>Contact: </strong>
                        {Object.keys(user).length === 0 ? "" : user.phone}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <strong>Car Color: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.car_color}
                      </p>

                      <p>
                        <strong>Car Model: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.car_model}
                      </p>

                      <p>
                        <strong>Type: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.type}
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Header className="cardHeader">
                <strong>Surucu Durumu</strong>
              </Card.Header>
              <Card.Body className="cardBody">
                <Row>
                    <p>
                      <strong>Status: </strong>
                      {Object.keys(user).length === 0
                        ? ""
                        : user.approval_status}
                    </p>

                  <Col>
                  <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Pasif
                      </label>
                    </div>
                  </Col>
                  <Col>
                  <div class="form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexSwitchCheckDefault"
                      >
                        Aktif
                      </label>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Header className="cardHeader">
                <strong>Kisisel Bilgiler</strong>
              </Card.Header>
              <Card.Body className="cardBody">
                <div className="container">
                  <Row>
                    <Col>
                      <p>
                        {" "}
                        <strong>ID: </strong>
                        {id}
                      </p>
                      <p>
                        <strong>Email: </strong>
                        {Object.keys(user).length === 0 ? "" : user.email}
                      </p>
                      <p>
                        <strong>Contact: </strong>
                        {Object.keys(user).length === 0 ? "" : user.phone}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <strong>Car Color: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.car_color}
                      </p>

                      <p>
                        <strong>Car Model: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.car_model}
                      </p>

                      <p>
                        <strong>Type: </strong>
                        {Object.keys(user).length === 0
                          ? ""
                          : user.car_details.type}
                      </p>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            {/* <Card>
              <Card.Body>
                <Link to="/">
                  <button className="btn btn-edit">Go Back</button>
                </Link>
                <Link to={`/update/${id}`}>
                  <button className="btn btn-success">Edit</button>
                </Link>
              </Card.Body>
            </Card> */}

            <Link
              className="d-grid gap-2"
              style={{ textDecoration: "none", marginBottom: "1vh" }}
              to={`/update/${id}`}
            >
              <Button
                className="rounded-pill "
                variant="outline-success"
                size="lg"
              >
                Onayla
              </Button>
            </Link>
            <Link
              className="d-grid gap-2"
              style={{ textDecoration: "none", marginBottom: "1vh" }}
              to={`/update/${id}`}
            >
              <Button
                className="rounded-pill "
                variant="outline-danger"
                size="lg"
              >
                Reddet
              </Button>
            </Link>
            <Link
              className="d-grid gap-2"
              style={{ textDecoration: "none" }}
              to="/"
            >
              <Button
                className="rounded-pill "
                variant="outline-dark"
                size="lg"
              >
                Go Back
              </Button>
            </Link>
          </Col>
        </Row>

      </div>
    </>
  );
};

export default View;
