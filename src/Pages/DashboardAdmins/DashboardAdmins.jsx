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
      width: 150,
      sortable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      sortable: true,
    },
    {
      field: "email",
      headerName: "Email",
      sortable: true,
      width: 200,
    },
    {
      field: "password",
      headerName: "Password",
      sortable: true,
      width: 150,
    },
    {
      field: "phone",
      headerName: "Phone number",
      sortable: true,
      width: 150,
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
    console.log("actualizando admins");
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
      <div>
        <div>
          {admins ? (
            <div>
              <Container>
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

export default DashboardAdmins;
