//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Visual methods and frameworks
import { Container } from "react-bootstrap";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardCreateModal from "./DashboardCreateModal";
import DashboardDeleteModal from "./DashboardDeleteModal";
import ProductsModal from "./ProductsModal";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

function DashboardCategories() {
  const columns = [
    {
      field: "img",
      headerName: "Image",
      flex: 1,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className=" d-flex justify-content-center">
            <img className="w-50 " src={params.row.img} alt="" />
          </div>
        );
      },
    },
    {
      field: "alias",
      headerName: "Name",
      flex: 1,
      sortable: true,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 1,
      sortable: true,
    },
    {
      field: "Products",
      headerName: "Products",
      sortable: true,
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            <ProductsModal categorie={params.row} />{" "}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <DashboardUpdateModal setFlag={setFlag} categorie={params.row} />{" "}
            <DashboardDeleteModal setFlag={setFlag} categorie={params.row} />
          </div>
        );
      },
    },
  ];

  const user = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("actualizando admins");
    const handleGetAdmins = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + `/categories`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      setCategories(response.data);
    };
    handleGetAdmins();
  }, [flag]);

  return (
    <>
      {categories ? (
        <Container fluid className="me-3 ps-4">
          <div className="d-flex justify-content-between">
            <h2>Categories</h2>
            <DashboardCreateModal setFlag={setFlag} />
          </div>
          {console.log(categories)}
          <Box>
            <DataGrid
              rows={categories}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              autoHeight
            />
          </Box>
        </Container>
      ) : (
        <Container fluid className="me-3 ps-4">
          <h1>Sin elementos</h1>
        </Container>
      )}
    </>
  );
}

export default DashboardCategories;
