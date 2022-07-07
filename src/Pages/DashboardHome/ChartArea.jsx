import { useEffect } from "react";
import { useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Card, Grid, Typography } from "@mui/material";

// third-party
import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";

// project imports
import chartData from "./chartData";

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const ChartArea = () => {
  return (
    <Card sx={{ m: 2, bgcolor: "white" }}>
      <Grid container sx={{ p: 2, pb: 0 }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
             
          </Grid>
        </Grid>
      </Grid> 
      <Chart {...chartData} />
    </Card>
  );
};

export default ChartArea;
