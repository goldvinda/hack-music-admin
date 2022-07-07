const chartData = {
  type: "area",
  height: 150,
  options: {
    chart: {
      id: "support-chart",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: "Ticket ",
      },
      marker: {
        show: false,
      },
    },
  },
  series: [
    {
      data: [30000, 32520, 33254, 30001, 32450, 36521, 40001],
      color: "#919090",
    },
  ],
};

export default chartData;
