import "./DashSideBar.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const DashSideBar = () => {
  return (
    <div className="sideBar">
      <ul className="dash-ul">
        <Link className="dash-link" to="/"></Link>
        <Link className="dash-link" to="/dashboard">
          <li className="dash-li">
            <FaIcons.FaRegChartBar />
            <span className="text-responsive ps-2">Sales</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/admin">
          <li className="dash-li">
            <FaIcons.FaUserFriends />
            <span className="text-responsive ps-2">Admin</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/categories">
          <li className="dash-li">
            <FaIcons.FaThList />
            <span className="text-responsive ps-2">Categories</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/orders">
          <li className="dash-li">
            <FaIcons.FaShopify />
            <span className="text-responsive ps-2">Orders</span>
          </li>
        </Link>
        <Link className="dash-link" to="/dashboard/products">
          <li className="dash-li">
            <FaIcons.FaProductHunt />
            <span className="text-responsive ps-2">Products</span>
          </li>
        </Link>
        <Link className="dash-link" to="/">
          <li className="dash-li">
            <FaIcons.FaHome />
            <span className="text-responsive ps-2">Hack Music</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default DashSideBar;
