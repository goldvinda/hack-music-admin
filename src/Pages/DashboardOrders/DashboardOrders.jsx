//Functional methods and frameworks
//Functional methods and frameworks
import { React, useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

//Visual methods and frameworks
import { Container } from "react-bootstrap";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import AddressModal from "./AddressModal";
import BuyerModal from "./BuyerModal";
import ProductsModal from "./ProductsModal";

function DashboardOrders() {
  const columns = [
    {
      field: "buyer",
      headerName: "Buyer",
      width: 150,
      sortable: true,
      renderCell: (params) => {
        return (
          <div>
            {params.row.buyer.firstName + " " +params.row.buyer.lastName }<BuyerModal order={params.row} />
          </div>
        );
      },
    },
    {
      field: "products",
      headerName: "Products",
      width: 150,
      sortable: true,
      renderCell: (params) => {
        return (
          <div>
            Quantity: {params.row.products.length}<ProductsModal order={params.row} />
          </div>
        );
      },
    },
    {
      field: "totalPrice",
      headerName: "Total Price",
      sortable: true,
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            $ {params.row.totalPrice}
          </div>
        );
      }
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      sortable: true,
      width: 200,
    },
    {
      field: "address",
      headerName: "Address",
      sortable: true,
      width: 150,
      renderCell: (params) => {
        return (
          <div>
            {params.row.address.city}<AddressModal order={params.row} />
          </div>
        );
      },
    },
  ];

  const user = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handleGetOrders = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + `/orders`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      setOrders(response.data);
    };
    handleGetOrders();
  }, [flag]);

  return (
    <>
      <div>
        <div>
          {orders ? (
            <div>
              <Container>
                <div className="d-flex justify-content-between">
                  <h2>Orders</h2>
                </div>
                <Box>
                  <DataGrid
                    rows={orders}
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

export default DashboardOrders;
