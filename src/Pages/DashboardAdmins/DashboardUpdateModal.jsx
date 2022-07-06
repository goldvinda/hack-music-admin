import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import BuildIcon from '@mui/icons-material/Build';

export default function DashboardUpdateModal({ admin, setFlag }) {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/admins/" + admin._id,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    console.log(setFlag);
    setFlag((prev) => !prev);
    handleClose();
  };

  return (
    <>
      <Button className="btn btn-secondary pt-1 pb-1 ms-1" onClick={handleShow}>
        <BuildIcon fontSize="medium" />
      </Button>
      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{admin.firstName + " " + admin.lastName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                {...register("firstName", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={admin.firstName}
              />
              <Form.Text className="text-muted">Max Chars.: 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register("lastName", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={admin.lastName}
              />
              <Form.Text className="text-muted">Max Chars.: 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register("email", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={admin.email}
              />
              <Form.Text className="text-muted">Max chars. 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={admin.password}
              />
              <Form.Text className="text-muted">Max chars. 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register("phone", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={admin.phone}
              />
              <Form.Text className="text-muted">Max chars. 30</Form.Text>
            </Form.Group>

            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
