import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard/DashSideBar";
import DashboardCategories from "./Pages/DashboardCategories/DashboardCategories";
import DashboardOrders from "./Pages/DashboardOrders/DashboardOrders";
import DashboardProducts from "./Pages/DashboardProducts/DashboardProducts";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";
import DashboardSales from "./Pages/DashboardSales/DashboardSales";
import DashboardMarketing from "./Pages/DashboardMarketing/DashboardMarketing";
import DashboardAdmins from "./Pages/DashboardAdmins/DashboardAdmins";
import DashboardHome from "./Pages/DashboardHome/DashboardHome";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />}>
            <Route path="dashboard" element={<DashboardHome />} />
            <Route path="sales" element={<DashboardSales />} />
            <Route path="marketing" element={<DashboardMarketing />} />
            <Route path="products" element={<DashboardProducts />} />
            <Route path="admins" element={<DashboardAdmins />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="categories" element={<DashboardCategories />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
