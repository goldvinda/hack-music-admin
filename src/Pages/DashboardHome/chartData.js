const chartData = {
  type: "bar",
  height: 350,
  options: {
    chart: {
      type: "bar",
      height: 450,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    stroke: {
      width: 0,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + "K";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      fontSize: "15rem",
    },
  },
  series: [
    {
      name: "Percussion",
      data: [44, 55, 41, 37, 22, 43, 21],
      color: "#F66B0E",
    },
    {
      name: "Strings",
      data: [53, 32, 33, 52, 13, 43, 32],
      color: "#ff8330",
    },
    {
      name: "Keyboards",
      data: [12, 17, 11, 9, 15, 11, 20],
      color: "#ff9a3b",
    },
    {
      name: "Accesories",
      data: [9, 7, 5, 8, 6, 9, 4],
      color: "#adadad",
    },
    {
      name: "Wind",
      data: [25, 12, 19, 32, 25, 24, 10],
      color:"#919090"
    },
  ],
};

export default chartData;
