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
      width: 150,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className=" d-flex justify-content-center">
            <img className="w-50 " src={params.row.picture[0]} alt="" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      sortable: true,
    },
    {
      field: "categoryName",
      headerName: "Category",
      width: 150,
      sortable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      sortable: true,
    },
    {
      field: "price",
      headerName: "Price",
      sortable: true,
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            $ {params.row. price}
          </div>
        );
      }
    },
    {
      field: "stock",
      headerName: "Stock",
      sortable: true,
      width: 100,
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
      width: 100,
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
    console.log("actualizando admins");
    const handleGetProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + `/products`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      console.log(response.data);
      setProducts(response.data);
    };
    handleGetProducts();
  }, [flag]);

  return (
    <>
      <div>
        <div>
          {products ? (
            <div>
              <Container>
                <div className="d-flex justify-content-between">
                  <h2>Products</h2>
                  <DashboardCreateModal setFlag={setFlag} />
                </div>
                <Box>
                  <DataGrid
                    rows={products}
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

export default DashboardProducts;
