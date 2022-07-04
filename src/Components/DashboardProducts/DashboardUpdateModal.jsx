import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

export default function DashboardUpdateModal({ prod }) {
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
      process.env.REACT_APP_SERVER_URL + "/products/" + prod._id,
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
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/products/` + prod._id, {
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
      {/* <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{prod.name}</Modal.Title>
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
                placeholder={prod.name}
              />
              <Form.Text className="text-muted">
              Max. Chars. 30
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                {...register("category", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={prod.categoryName}
              />
              <Form.Text className="text-muted">
              Max. Chars. 30
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...register("description", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder="Enter a description"
              />
              <Form.Text className="text-muted">
                Max. Chars. 500
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                {...register("price", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder={prod.price}
              />
              <Form.Text className="text-muted"></Form.Text>
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
