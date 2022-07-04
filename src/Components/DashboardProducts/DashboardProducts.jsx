//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../components/Dashboard/DashSideBar/DashSideBar";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardCreateModal from "./DashboardCreateModal";

function DashboardProducts() {
  //Lista de items de lo que sea
  const [products, setProducts] = useState(null);

  //Me tengo que traer al user de la store para mandar el JWT.
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetProducts = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/products`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setProducts(response.data);
    };

    handleGetProducts();
  }, []);

  const handleUpdateProducts = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + `/categories`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  const handleAddProduct = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.post(
      process.env.REACT_APP_SERVER_URL + `/products`,
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
          {products ? (
            <div>
              <Container>
                <div>
                  <h1>Products</h1>
                  <DashboardCreateModal></DashboardCreateModal>
                </div>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Stock</th>
                      <th>Premium?</th>
                      <th>Actions:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((prod) => {
                      return (
                        <tr key={prod._id}>
                          <td>{prod._id}</td>
                          <td>{prod.name}</td>
                          <td>{prod.categoryName}</td>
                          <td>{prod.description && prod.description.substring(0, 100)}</td>
                          <td>{prod.price}</td>
                          <td>{prod.stock}</td>
                          <td>
                            {prod.premium ? <FontAwesomeIcon icon={faStar} className="me-2" /> : ""}
                          </td>
                          <td>
                            <DashboardUpdateModal prod={prod} />
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

export default DashboardProducts;
