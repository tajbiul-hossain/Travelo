import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Book.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmation Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You have successfully booked this package. We will contact you soon.
          Please be ready on the day of journey. Happy Travel.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn default-btn" onClick={props.onHide}>
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Book = () => {
  const [service, setService] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const { user } = useAuth();
  const { serviceId } = useParams();
  const { name, inc, exc, price, img } = service;
  const phoneRef = useRef();
  const personRef = useRef();
  const journeyRef = useRef();
  const returnRef = useRef();

  useEffect(() => {
    fetch(`https://sleepy-springs-60612.herokuapp.com/packages/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, []);

  const handleConfirmBooking = (e) => {
    const packageName = name;
    const userName = user.displayName;
    const userEmail = user.email;
    const phone = phoneRef.current.value;
    const persons = personRef.current.value;
    const journeyDate = journeyRef.current.value;
    const returnDate = returnRef.current.value;
    const status = "Pending";

    const newBooking = {
      userName,
      userEmail,
      phone,
      persons,
      journeyDate,
      returnDate,
      packageName,
      price,
      img,
      status,
    };

    fetch("https://sleepy-springs-60612.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setModalShow(true);
          e.target.reset();
        }
      });

    e.preventDefault();
  };

  return (
    <div className="single-package">
      <div className="package-head">
        <img className="package-image" src={img} alt="" />
        <h2 className="package-title">{name}</h2>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-4 text-start">
            <h2 className="detailed-price">Cost: ${price}/P</h2>
            <h6>(4 NIGHTS / 5 DAYS)</h6>
            <p className="fw-normal mt-3">
              <b>Package includes:</b> {inc}
            </p>
            <p className="fw-normal">
              <b>Package excludes:</b> {exc}
            </p>
          </div>
          <div className="col-12 col-md-8 p-3">
            <Form className="d-flex" onSubmit={handleConfirmBooking}>
              <div>
                <Row className="g-2">
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        readOnly
                        defaultValue={user.displayName}
                      />
                      <label htmlFor="floatingInputCustom">Name</label>
                    </Form.Floating>
                  </Col>
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        readOnly
                        defaultValue={user.email}
                      />
                      <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                  </Col>
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="phone"
                        ref={phoneRef}
                      />
                      <label htmlFor="floatingInputCustom">Phone</label>
                    </Form.Floating>
                  </Col>
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Select
                        aria-label="Floating label select example"
                        id="floatingInputCustom"
                        type="text"
                        ref={personRef}
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5 Persons</option>
                        <option value="6">6 Persons</option>
                      </Form.Select>
                      <label htmlFor="floatingInputCustom">Person(s)</label>
                    </Form.Floating>
                  </Col>
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="date"
                        placeholder="mm/dd//yyyy"
                        ref={journeyRef}
                      />
                      <label htmlFor="floatingInputCustom">Journey Date</label>
                    </Form.Floating>
                  </Col>
                  <Col className="d-flex justify-content-center" md>
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="date"
                        placeholder="mm/dd//yyyy"
                        ref={returnRef}
                      />
                      <label htmlFor="floatingInputCustom">Return Date</label>
                    </Form.Floating>
                  </Col>
                </Row>

                <button className="btn default-btn mt-3" type="submit">
                  Confirm Booking
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
};

export default Book;
