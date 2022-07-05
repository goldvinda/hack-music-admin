//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

function DashboardOrders() {
  //Lista de items de lo que sea
  const [orders, setOrders] = useState(null);

  //Me tengo que traer al user de la store para mandar el JWT.
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetOrders = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/orders`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setOrders(response.data);
    };

    handleGetOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/orders/` + id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  };

  /* const handleDeleteItems = async () => {
    //Faltaría esta llamada explosiva! Pongo en duda si es realmente necesaria
    await axios.delete(process.env.REACT_APP_SERVER_URL + "/categories/" + params.id, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
    setItems([]);
  }; */

  const handleUpdateOrder = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + `/orders`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  const handleAddOrder = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.post(
      process.env.REACT_APP_SERVER_URL + `/order`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  return (
    <>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>
          {orders ? (
            <div>
              <Container>
                <div>
                  <h1>Orders</h1>
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => handleAddOrder()}
                    className="me-2"
                  />
                </div>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Products</th>
                      <th>Total Price</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                      <th>Address</th>
                      <th>Actions:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((ord) => {
                      return (
                        <tr key={ord._id}>
                          <td>{ord._id}</td>
                          <td>{ord.buyer.firstName + " " + ord.buyer.lastName}</td>
                          <td>{ord.buyer.email}</td>
                          <td>
                            {ord.products.map((prod) => {
                              return (
                                <ul>
                                  <li>
                                    <p>
                                      {prod.name + " - (" + prod.quantity + ")"}
                                      {" Subtotal: " + prod.price}
                                    </p>
                                  </li>
                                </ul>
                              );
                            })}
                          </td>
                          <td>{ord.paymentMethod}</td>
                          <td>{ord.status}</td>
                          <td>{ord.address && ord.address.streetAddress}</td>
                          <td>
                            <FontAwesomeIcon
                              icon={faSearch}
                              onClick={() => handleUpdateOrder()}
                              className="me-2"
                            />
                            <FontAwesomeIcon
                              icon={faMinus}
                              onClick={(err) => {
                                handleDeleteOrder(ord._id);
                              }}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Container>
            </div>
          ) : (
            <div>
              <Container>
                <h1>Sin elementos</h1>
              </Container>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardOrders;
