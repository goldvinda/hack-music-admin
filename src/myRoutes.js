import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardAdmin from "./Pages/DashboardAdmins/DashboardAdmins";
import DashboardCategories from "./Pages/DashboardCategories/DashboardCategories";
import DashboardOrders from "./Pages/DashboardOrders/DashboardOrders";
import DashboardProducts from "./Pages/DashboardProducts/DashboardProducts";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import DashboardEntities from "./Pages/DashboardEntities/DashboardEntities";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";
import DashboardSales from "./Pages/DashboardSales/DashboardSales";
import DashboardMarketing from "./Pages/DashboardMarketing/DashboardMarketing";
import Componente from "./Pages/Componente/Componente";
import Box1 from "./Pages/Componente/Box1";
import Box2 from "./Pages/Componente/Box2";
import DashboardAdmins from "./Pages/DashboardAdmins/DashboardAdmins";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/componente" element={<Componente />}>
            <Route index path="box1" element={<Box1 />} />
            <Route path="box2" element={<Box2 />} />
          </Route> */}
          <Route path="/dashboard" element={<Dashboard />}>
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
