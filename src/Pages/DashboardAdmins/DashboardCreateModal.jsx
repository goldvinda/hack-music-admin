import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faWrench } from "@fortawesome/free-solid-svg-icons";

export default function DashboardCreateModal({ setFlag }) {
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
    const response = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/admins/",
      data,
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
        icon={faPlus}
        size="lg"
        onClick={handleShow}
        className="btn bg-white btn-outline-secondary"
      />

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{"Create new Admin"}</Modal.Title>
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
                placeholder={"Enter a first name..."}
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
                placeholder={"Enter a last name..."}
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
                placeholder={"Enter a valid email..."}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={"Enter a password name..."}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                {...register("phone", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={"Enter a valid phone number..."}
              />
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
