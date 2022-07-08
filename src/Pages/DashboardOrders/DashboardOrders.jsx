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
      field: "totalPrice",
      headerName: "Total Price",
      sortable: true,
      flex: 1,
      renderCell: (params) => {
        return <div> USD $ {params.row.totalPrice}</div>;
      },
    },
    {
      field: "paymentMethod",
      headerName: "Payment Method",
      sortable: true,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Order Status",
      sortable: true,
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      width: 160,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <p className="mb-0">
              {params.row.buyer.firstName + " " + params.row.buyer.lastName}
            </p>
            <div>
              <BuyerModal order={params.row} />
            </div>
          </div>
        );
      },
    },
    {
      field: "products",
      headerName: "Products",
      width: 160,
      sortable: true,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <p className="mb-0">Quantity: {params.row.products.length}</p>
            <div>
              <ProductsModal order={params.row} />
            </div>
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      sortable: true,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between w-100 align-items-center">
            <p className="mb-0">
              {params.row.address ? params.row.address.city : "No address"}
            </p>
            <div>
              <AddressModal order={params.row} />
            </div>
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
      {orders ? (
        <Container fluid className="me-3 ps-4">
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
      ) : (
        <Container fluid className="me-3 ps-4">
          <h1>Sin elementos</h1>
        </Container>
      )}
    </>
  );
}

export default DashboardOrders;
