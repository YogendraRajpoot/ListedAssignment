import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Top Products",
      position: "top",
    },
  },
};
const data = {
  labels: ["Basic Tees 55%", "Custom Shot Pants 31%", "Super Hoodies 14%"],
  datasets: [
    {
      label: "# of Votes",
      data: [55, 31, 14],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        // "rgba(75, 192, 192, 0.2)",
        // "rgba(153, 102, 255, 0.2)",
        // "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        // "rgba(75, 192, 192, 1)",
        // "rgba(153, 102, 255, 1)",
        // "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function ChartPie() {
  return (
    <Pie
      options={options}
      data={data}
      style={{ width: "50%", height: "90%" }}
    />
  );
}
