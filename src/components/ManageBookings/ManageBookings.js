import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Bookings from "../Bookings/Bookings";
import "./ManageBookings.css";

function CancelationDialogModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to cancel this booking?</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn default-btn cancel-btn" onClick={props.onHide}>
          Cancel
        </button>
        <button
          className="btn default-btn confirm-btn"
          onClick={props.onConfirm}
        >
          Confirm
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function CancelConfirmationModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Success Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You have successfully canceled this booking</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn default-btn confirm-btn" onClick={props.onHide}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  );
}
function UpdateConfirmationModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Success Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Booking status updated to confirmed.</p>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn default-btn confirm-btn" onClick={props.onHide}>
          Done
        </button>
      </Modal.Footer>
    </Modal>
  );
}

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [CancelationDialogModalShow, setCancelationDialogModalShow] =
    useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  const [bookingId, setBookingId] = useState("");

  useEffect(() => {
    fetch("https://sleepy-springs-60612.herokuapp.com/managebookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [bookings]);

  const showModal = (id) => {
    setBookingId(id);
    setCancelationDialogModalShow(true);
  };

  //Delete Booking
  const handleDeleteBooking = (id) => {
    const url = `https://sleepy-springs-60612.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setConfirmModalShow(true);
          const remainingBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(remainingBookings);
        }
      });
  };

  //update booking status
  const handleUpdateStatus = (id) => {
    const booking = bookings.filter((booking) => booking._id === id);
    const updatedBooking = booking[0];
    updatedBooking.status = "Confirmed";
    const url = `https://sleepy-springs-60612.herokuapp.com/managebookings/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setUpdateModalShow(true);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div>
        <h2 className="mt-5 section-heading">My Bookings</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="user-bookings">
        {bookings.map((booking) => (
          <Bookings
            key={booking._id}
            booking={booking}
            showModal={showModal}
            handleUpdateStatus={handleUpdateStatus}
          ></Bookings>
        ))}
      </div>
      <CancelationDialogModal
        show={CancelationDialogModalShow}
        onHide={() => setCancelationDialogModalShow(false)}
        onConfirm={() => {
          setCancelationDialogModalShow(false);
          handleDeleteBooking(bookingId);
        }}
        backdrop="static"
        keyboard={false}
      />
      <CancelConfirmationModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
      <UpdateConfirmationModal
        show={updateModalShow}
        onHide={() => setUpdateModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
};

export default ManageBookings;
