export const RadarData = (data) => {
  console.log(data);
  return ({
    labels: data.map(stat => stat.stat.name),
    datasets: [
      {
        label: "March",
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        pointBackgroundColor: "rgba(34, 202, 236, 1)",
        poingBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(34, 202, 236, 1)",
        data: data.map(stat => stat.base_stat)
      }
    ]
  })
};

export const RadarOptions = {
  scale: {
    ticks: {
      min: 0,
      max: 120,
      stepSize: 20,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)"
    },
    angleLines: {
      color: "rgba(0, 0, 0, .3)",
      lineWidth: 1
    },
    gridLines: {
      color: "rgba(0, 0, 0, .3)",
      circular: true
    }
  }
};
