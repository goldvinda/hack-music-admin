import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

export default function AddressModal({ order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddressModal = (address) => {
    let details = [];
    for (let detail in address) {
      if (
        detail !== "password" &&
        detail !== "addresses" &&
        detail !== "orders" &&
        detail !== "__v"
      ) {
        details.push(
          <div>
            <li key={detail.id}>{detail + " : " + order.address[detail]}</li>
            <hr />
          </div>
        );
      }
    }
    return details;
  };

  return (
    <>
      <Button
        className="btn bg-white btn-outline-secondary pt-1 pb-1 ms-1"
        onClick={handleShow}
      >
        <SearchIcon fontSize="small" />
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER: {order._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Buyer Address:</h5>
          <ul>{handleAddressModal(order.address)}</ul>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
