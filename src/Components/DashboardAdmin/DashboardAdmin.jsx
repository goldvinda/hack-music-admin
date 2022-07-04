//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavbar";
import DashSideBar from "../../components/Dashboard/DashSideBar/DashSideBar";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardCreateModal from "./DashboardCreateModal";

function DashboardAdmin() {
  //Lista de items de lo que sea
  const [admins, setAdmins] = useState(null);

  //Me tengo que traer al user de la store para mandar el JWT.
  const user = useSelector((state) => state.user);

  //Pido params cada tanto en las llamadas a la API
  const params = useParams();

  //Al primer render
  useEffect(() => {
    const handleGetAdmins = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + `/admins`, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      setAdmins(response.data);
    };

    handleGetAdmins();
  }, []);

  const handleDeleteAdmin = async (id) => {
    await axios.delete(process.env.REACT_APP_SERVER_URL + `/admins/` + id, {
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

  const handleUpdateAdmins = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.patch(
      process.env.REACT_APP_SERVER_URL + `/admins`,
      { data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
  };

  const handleAddAdmin = async (data) => {
    //Quizás un modal para no desarrollar un componente para esto?
    await axios.post(
      process.env.REACT_APP_SERVER_URL + `/admins`,
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
          {admins ? (
            <div>
              <Container>
                <div>
                  <h1>Admins</h1>
                  <DashboardCreateModal></DashboardCreateModal>
                </div>
                <Table striped bordered hover variant="light">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Actions:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {admins.map((adm) => {
                      return (
                        <tr key={adm._id}>
                          <td>{adm._id}</td>
                          <td>{adm.firstName + " " + adm.lastName}</td>
                          <td>{adm.email}</td>
                          <td>{adm.phone}</td>
                          <td>
                            <DashboardUpdateModal admin={adm} />
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

export default DashboardAdmin;
