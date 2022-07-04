import "./DashNavBar.css";
import * as FaIcons from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const DashNavBar = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="nav-container">
      <Link to={"/"}>
        <div className="dash-navbar">
          <span className="nav-title">Hack Music </span>
          <FaIcons.FaHeadphonesAlt className="nav-logo" />
        </div>
      </Link>
      <div className="dash-navbar">Admin-Dashboard</div>
      <div className="dash-navbar">
        {user && <span className="tx-size-lg">{"Hello, " + user.firstName + "!"}</span>}
      </div>
    </div>
  );
};
export default DashNavBar;
