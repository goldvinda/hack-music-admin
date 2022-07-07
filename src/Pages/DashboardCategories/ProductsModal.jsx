import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";

export default function DashboardDeleteModal({ categorie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn btn-primary pt-1 pb-1 ms-1" onClick={handleShow}>
        <SearchIcon fontSize="medium" />
        {categorie.products.length}
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{categorie.alias}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ol>
            {categorie.products.map((product, index) => {
              return (
                <div>
                  <li key={index}>{product.name}</li>
                  <hr />
                </div>
              );
            })}
          </ol>
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
