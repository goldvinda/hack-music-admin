import { useState } from "react";
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

  const handleDeleteProduct = async () => {
    await axios.delete(
      process.env.REACT_APP_SERVER_URL + `/categories/` + categorie._id,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    setFlag((prev) => !prev);
    handleClose();
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faTrash}
        size="lg"
        onClick={handleShow}
        className="btn btn-danger"
      />
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{categorie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this admin? You can't undo this
          action.
          <Modal.Footer>
            <Button variant="danger" onClick={handleDeleteProduct}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}