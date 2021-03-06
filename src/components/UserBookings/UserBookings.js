import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Booking from "../Booking/Booking";
import { useHistory } from "react-router-dom";
import "./UserBookings.css";

function DialogModal(props) {
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
function ConfirmationModal(props) {
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

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [dialogModalShow, setDialogModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bookingId, setBookingId] = useState("");
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const uri = `https://sleepy-springs-60612.herokuapp.com/userbookings?email=${user.email}`;
    fetch(uri, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setBookings(data);
        setLoading(false);
      });
  }, [user.email, history]);

  const showModal = (id) => {
    setBookingId(id);
    setDialogModalShow(true);
  };

  //Delete Booking
  const handleDeleteBooking = (id) => {
    const url = `https://sleepy-springs-60612.herokuapp.com/package/${id}`;
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

  if (loading)
    return (
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
    );

  return (
    <div className="container mt-5">
      <div>
        <h2 className="mt-5 section-heading">My Bookings</h2>
        <div className="heading-underline"></div>
      </div>
      <div className="bookings">
        {bookings.map((booking) => (
          <Booking
            key={booking._id}
            booking={booking}
            showModal={showModal}
          ></Booking>
        ))}
      </div>
      <DialogModal
        show={dialogModalShow}
        onHide={() => setDialogModalShow(false)}
        onConfirm={() => {
          setDialogModalShow(false);
          handleDeleteBooking(bookingId);
        }}
        backdrop="static"
        keyboard={false}
      />
      <ConfirmationModal
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </div>
  );
};

export default UserBookings;
