import DashSideBar from "../../components/Dashboard/DashSideBar/DashSideBar";

import "./Dashboard.css";
import DashNavBar from "../../components/Dashboard/DashNavBar/DashNavbar";
import DashChart from "../../components/Dashboard/DashboardChart/DashboardChart";
import DashChart2 from "../../components/Dashboard/DashboardChart/DashboardChart2";

const Dashboard = () => {
  return (
    <>
      <DashNavBar />
      <div className="d-flex">
        <DashSideBar />
        <div classname="chart-container">
          <div className="chart1">
            <DashChart2 />
          </div>
          <div className="chart2">
            <DashChart />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
