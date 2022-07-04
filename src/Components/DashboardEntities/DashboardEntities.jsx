import React from "react";
import { useParams } from "react-router-dom";
import DashboardAdmin from "../DashboardAdmin/DashboardAdmin";
import DashboardCategories from "../DashboardCategories/DashboardCategories";
import DashboardOrders from "../DashboardOrders/DashboardOrders";
import DashboardProducts from "../DashboardProducts/DashboardProducts";

function DashboardEntities() {
    
  const entity = useParams();
  return (
    <div>
      {entity === "categories" ? <DashboardCategories />
      :entity === "products" ? <DashboardProducts />
      :entity === "admins" ? <DashboardAdmin />
      :entity === "order" ? <DashboardOrders /> 
      :null}
    </div>
  );
}

export default DashboardEntities;
