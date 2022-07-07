//Functional methods and frameworks
import { React, useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

//Visual methods and frameworks
import { Container } from "react-bootstrap";
import DashboardUpdateModal from "./DashboardUpdateModal";
import DashboardCreateModal from "./DashboardCreateModal";
import DashboardDeleteModal from "./DashboardDeleteModal";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardProducts() {
  const columns = [
    {
      field: "picture",
      headerName: "Image",
      width: 100,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className=" d-flex justify-content-center">
            <img
              style={{
                maxWidth: "4rem",
                alignSelf: "center",
                justifySelf: "center",
              }}
              src={params.row.picture[0]}
              alt={params.row.name}
            />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      sortable: true,
    },
    {
      field: "categoryName",
      headerName: "Category",
      flex: 1,
      sortable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 350,
      sortable: true,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      maxWidth: 75,
      renderCell: (params) => {
        return <div>$ {params.row.price}</div>;
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      sortable: true,
      maxWidth: 75,
    },
    {
      field: "premium",
      headerName: "Premium",
      sortable: true,
      renderCell: (params) => {
        return (
          <div>
            {params.row.premium ? (
              <FontAwesomeIcon icon={faStar} className="me-2" />
            ) : (
              ""
            )}
          </div>
        );
      },
      maxWidth: 85,
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            <DashboardUpdateModal setFlag={setFlag} product={params.row} />{" "}
            <DashboardDeleteModal setFlag={setFlag} product={params.row} />
          </div>
        );
      },
    },
  ];

  const user = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleGetProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + `/products`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      setProducts(response.data);
    };
    handleGetProducts();
  }, [flag]);

  return (
    <>
      {products ? (
        <Container fluid className="me-3 ps-4">
          <div className="d-flex justify-content-between">
            <h2>Products</h2>
            <DashboardCreateModal setFlag={setFlag} />
          </div>
          <Box>
            <DataGrid
              rows={products}
              getRowId={(row) => row._id}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              autoHeight
              width={100}
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

export default DashboardProducts;
