import { useEffect } from "react";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import chartCardData1 from "./chartCardData1";
import chartCardData2 from "./chartCardData2";
import chartCardData3 from "./chartCardData3";

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const ChartCardArea = () => {
  return (
    <Grid container >
      <Grid item xs={4} className="d-flex">
        <div className="d-flex flex-column">
          <Card className="m-3" >
            <h5 className="ms-3">GMV</h5>
            <Chart {...chartCardData1} />
          </Card>
        </div>
      </Grid>
      <Grid item xs={4} className="d-flex">
        <div className="d-flex flex-column">
          <Card className="m-3">
            <h5 className="ms-3">Sessions</h5>
            <Chart {...chartCardData2} />
          </Card>
        </div>
      </Grid>
      <Grid item xs={4} className="d-flex">
        <div className="d-flex flex-column">
          <Card className="m-3">
            <h5 className="ms-3">Total Users</h5>
            <Chart {...chartCardData3} />
          </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default ChartCardArea;
