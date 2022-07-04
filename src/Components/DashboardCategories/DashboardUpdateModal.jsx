import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

export default function DashboardUpdateModal({ cat }) {
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
    const response = await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/categories/" + cat._id,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
    handleClose();
  };

  const handleDeleteProduct = async () => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/categories/` + cat._id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faWrench}
        size="lg"
        onClick={handleShow}
        className="btn btn-secondary"
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{cat.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={cat.name}
              />
              <Form.Text className="text-muted">Max Chars.: 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                {...register("category", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={cat.img}
              />
              <Form.Text className="text-muted">Enter a valid image url</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Slug</Form.Label>
              <Form.Control
                {...register("slug", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={cat.slug}
              />
              <Form.Text className="text-muted">Enter a coherent slug</Form.Text>
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" onClick={handleDeleteProduct}>
                Delete
              </Button>

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
