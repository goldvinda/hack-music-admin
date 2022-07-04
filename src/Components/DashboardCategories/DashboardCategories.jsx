//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../components/Dashboard/DashSideBar/DashSideBar";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardCreateModal from "./DashboardCreateModal";

function DashboardCategories() {
  //Lista de items de lo que sea
  const [categories, setCategories] = useState(null);

  //Me tengo que traer al user de la store para mandar el JWT.
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetCategories = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/categories`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setCategories(response.data);
      console.log(response.data);
    };

    handleGetCategories();
  }, []);

  const handleDeleteCategory = async (id) => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/categories/` + id, {
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

  const handleUpdateCategory = async (data) => {
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

  return (
    <>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div>
          {categories ? (
            <div>
              <Container>
                <div>
                  <h1>Categories</h1>
                  <DashboardCreateModal></DashboardCreateModal>
                </div>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Products</th>
                      <th>Actions:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => {
                      return (
                        <tr key={cat._id}>
                          <td>{cat._id}</td>
                          <td>{cat.alias}</td>
                          <td>{cat.img}</td>
                          <td>
                            {cat.products.map((prod) => {
                              return (
                                <ul key={prod._id}>
                                  <li>{prod.name}</li>
                                </ul>
                              );
                            })}
                          </td>
                          <td>
                            <DashboardUpdateModal cat={cat} />
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

export default DashboardCategories;
