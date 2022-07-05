import DashSideBar from "../../Components/Dashboard/DashSideBar/DashSideBar";

import "./Dashboard.css";
import DashNavBar from "../../Components/Dashboard/DashNavBar/DashNavbar";
import DashChart from "../../Components/Dashboard/DashboardChart/DashboardChart";
import DashChart2 from "../../Components/Dashboard/DashboardChart/DashboardChart2";

const Dashboard = () => {
  return (
    <>
      <div className="d-flex">
        <DashSideBar />
        <div className="chart-container"></div>
      </div>
    </>
  );
};
export default Dashboard;
