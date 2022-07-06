import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

export default function BuyerModal({ order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBuyerDetails = (buyer) => {
    let details = [];
    for (let detail of buyer) {
      details.push(<li key={detail.id}>{detail}</li>);
    }
    return details;
  };

  return (
    <>
      <Button className="btn btn-secondary pt-1 pb-1 ms-1" onClick={handleShow}>
        <SearchIcon fontSize="medium" />
        Buyer info
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ORDER: {order._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol> {handleBuyerDetails(order.buyer)} </ol>
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
