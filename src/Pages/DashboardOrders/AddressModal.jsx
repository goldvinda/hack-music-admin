import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

export default function AddressModal({ order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-secondary pt-1 pb-1 ms-1" onClick={handleShow}>
        <SearchIcon fontSize="medium" />
        View address
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER: {order._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Buyer Address:</h3>
          <ul>
            {[...order.address].map((prop, index) => {
              return (
                <div>
                  <li key={index}>
                    {index}" : "{String(prop)}
                  </li>
                  <hr />
                </div>
              );
            })}
          </ul>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
