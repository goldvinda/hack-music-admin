//Functional methods and frameworks
import { React, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

//Visual methods and frameworks
import { Container } from "react-bootstrap";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardDeleteModal from "./DasboardDeleteModal";
import DashboardCreateModal from "./DashboardCreateModal";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function DashboardAdmins() {
  const columns = [
    {
      field: "firstName",
      headerName: "First name",
      flex: 1,
      sortable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      flex: 1,
      sortable: true,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      flex: 1,
    },
    {
      field: "password",
      headerName: "Password",
      sortable: true,
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone number",
      sortable: true,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <DashboardUpdateModal setFlag={setFlag} admin={params.row} />{" "}
            <DashboardDeleteModal setFlag={setFlag} admin={params.row} />
          </div>
        );
      },
    },
  ];

  const user = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const handleGetAdmins = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + `/admins`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      setAdmins(response.data);
    };
    handleGetAdmins();
  }, [flag]);

  return (
    <>
      {admins ? (
        <Container fluid className="me-3 ps-4">
          <div className="d-flex justify-content-between">
            <h2>Admins</h2>
            <DashboardCreateModal setFlag={setFlag} />
          </div>
          <Box>
            <DataGrid
              rows={admins}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              autoHeight
            />
          </Box>
        </Container>
      ) : (
        <div>
          <Container fluid className="me-3 ps-4">
            <h1>Sin elementos</h1>
          </Container>
        </div>
      )}
    </>
  );
}

export default DashboardAdmins;
