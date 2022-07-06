import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import BuildIcon from '@mui/icons-material/Build';

export default function DashboardUpdateModal({ product, setFlag }) {
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
      process.env.REACT_APP_SERVER_URL + "/products/" + product._id,
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
      <Button className="btn btn-secondary pt-1 pb-1 ms-1" onClick={handleShow}>
        <BuildIcon fontSize="medium" />
      </Button>

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.name}</Modal.Title>
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
                placeholder={product.name}
              />
              <Form.Text className="text-muted">Max. Chars. 30</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                {...register("category", {
                  maxLength: 30,
                })}
                type="text"
                placeholder={product.categoryName}
              />
              <Form.Text className="text-muted">Max. Chars. 30</Form.Text>
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
              <Form.Text className="text-muted">Max. Chars. 500</Form.Text>
            
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                {...register("price", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder={product.price}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                {...register("stock", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder={product.stock}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Premium?</Form.Label>
              <Form.Control
                {...register("outstand", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder={product.outstand}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>slug</Form.Label>
              <Form.Control
                {...register("slug", {
                  maxLength: 30,
                })}
                type="text-area"
                placeholder={product.slug}
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
