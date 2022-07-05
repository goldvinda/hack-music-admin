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
      process.env.REACT_APP_SERVER_URL + "/categories/",
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
        className="btn btn-secondary"
      />

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{"Create new product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("alias", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={"Enter category name..."}
              />
              <Form.Text className="text-muted">Max char: 30.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                {...register("img", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={"Enter a valid image url..."}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Slug</Form.Label>
              <Form.Control
                {...register("slug", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={"Enter a coherent slug..."}
              />
              <Form.Text className="text-muted"></Form.Text>
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
