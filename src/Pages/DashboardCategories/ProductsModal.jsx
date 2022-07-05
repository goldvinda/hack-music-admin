import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DashboardDeleteModal({ categorie, setFlag }) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-secondary" onClick={handleShow}>{categorie.products.length}</Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{categorie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {console.log(categorie.products)}
            {categorie.products.map((product, index) => {
              return <li key={index}>{product.name}</li>;
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
