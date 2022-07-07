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
    const formData = new FormData();
    formData.append("picture", data.picture[0]);
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("premium", data.premium);
    formData.append("stock", data.stock);

    await axios.post(
      process.env.REACT_APP_SERVER_URL + "/products/",
      formData,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "multipart/form-data",
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
      {/* <Button variant="primary" onClick={handleShow}>
        Edit
      </Button> */}

      <Modal className="mt-5" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{"Create new product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register("name", {
                  maxLength: 30,
                  required: true,
                })}
                type="text"
                placeholder={"Enter product name..."}
              />
              <Form.Text className="text-muted">Max char: 30.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Group
                className="form-control"
                as="select"
                {...register("category", { required: true })}
              >
                <option value="guitar-and-bass">Guitar & Bass</option>
                <option value="drums-and-percussion">Drums & Percussion</option>
                <option value="wind-instruments">Wind Instruments</option>
                <option value="keyboards-and-pianos">Keyboards & Pianos</option>
                <option value="accessories">Accessories</option>
              </Form.Group>
              <Form.Text className="text-muted">Choose a category.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                {...register("picture", { required: true })}
                type="file"
                placeholder="Upload a picture..."
              />
              <Form.Text className="text-muted">Max size: ....</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...register("description", {
                  maxLength: 250,
                  required: true,
                })}
                type="text-area"
                placeholder="Enter a description..."
              />
              <Form.Text className="text-muted">Max Char: 500.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                {...register("price", {
                  maxLength: 30,
                  required: true,
                })}
                type="text-area"
                placeholder={"Enter a price..."}
              />
              <Form.Text className="text-muted">In US dollars.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                {...register("stock", {
                  maxLength: 10,
                  required: true,
                })}
                type="text-area"
                placeholder={"Enter stock quantity..."}
              />
              <Form.Text className="text-muted">
                Enter stock quantity.
              </Form.Text>
            </Form.Group>
            <Form.Label>Premium</Form.Label>
            <Form.Group
              className="form-control"
              as="select"
              {...register("premium", { required: true })}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Group>
            <Form.Text className="text-muted">
              Display as premium product on the Homepage.
            </Form.Text>

            <Modal.Footer>
              <Button variant="secondary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
