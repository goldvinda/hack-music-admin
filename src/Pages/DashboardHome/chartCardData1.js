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
      data: [235, 156, 106, 150, 190, 286, 354],
      color: "#F66B0E",
    },
  ],
};

export default chartData;
