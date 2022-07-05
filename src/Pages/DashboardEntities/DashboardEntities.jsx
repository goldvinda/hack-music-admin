import React from "react";
import { useParams } from "react-router-dom";
import DashboardAdmins from "../DashboardAdmins/DashboardAdmins";
import DashboardCategories from "../DashboardCategories/DashboardCategories";
import DashboardOrders from "../DashboardOrders/DashboardOrders";
import DashboardProducts from "../DashboardProducts/DashboardProducts"; 
function DashboardEntities() {
  const params = useParams();
  return (
    <div>
      {params.entity === "categories" ? (
        <DashboardCategories />
      ) : params.entity === "products" ? (
        <DashboardProducts />
      ) : params.entity === "admins" ? (
        <DashboardAdmins />
      ) : params.entity === "orders" ? (
        <DashboardOrders />
      ) : null}
    </div>
  );
}

export default DashboardEntities;
