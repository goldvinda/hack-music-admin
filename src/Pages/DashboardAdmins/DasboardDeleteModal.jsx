import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faWrench } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DashboardDeleteModal({ admin, setFlag }) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteProduct = async () => {
    await axios.delete(
      process.env.REACT_APP_SERVER_URL + `/admins/` + admin._id,
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
      <Button
        className="btn bg-white btn-outline-danger pt-1 pb-1 ms-1"
        onClick={handleShow}
      >
        <DeleteIcon fontSize="medium" />
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{admin.firstName + " " + admin.lastName}</Modal.Title>
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
