import React, { Component } from "react";
import CanvasJSReact from "../../../canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DashChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Monthly Sales",
      },
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: "column", //change type to bar, line, area, pie, etc
          //indexLabel: "{y}", //Shows y value on all Data Points
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: [
            { x: 10, y: 71, indexLabel: "January" },
            { x: 20, y: 55, indexLabel: "February" },
            { x: 30, y: 50, indexLabel: "March" },
            { x: 40, y: 65, indexLabel: "April" },
            { x: 50, y: 71, indexLabel: "May" },
            { x: 60, y: 68, indexLabel: "June" },
            { x: 70, y: 38, indexLabel: "July" },
            { x: 80, y: 92, indexLabel: "August" },
            { x: 90, y: 54, indexLabel: "September" },
            { x: 100, y: 60, indexLabel: "Octuber" },
            { x: 110, y: 21, indexLabel: "November" },
            { x: 120, y: 49, indexLabel: "December" },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default DashChart;
