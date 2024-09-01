// "use client"
import React from 'react';
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const LineChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Assigned to Me',
        data: [5, 9, 7, 8, 6],
        borderColor: "rgb(67, 24, 255)",
        borderWidth: 3,
        pointBorderColor: "rgb(67, 24, 255)",
        pointBorderWidth: 3,
        // tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(67, 24, 255, 0.7)"); // Adjusted transparency
        gradient.addColorStop(1, "rgba(67, 24, 255, 0)");
          return gradient;
        },
      },
      {
        label: 'Created by Me',
        data: [4, 6, 5, 10, 9],
        borderColor: 'rgb(106, 210, 255)',
        borderWidth: 3,
        pointBorderColor: "rgb(106, 210, 255)",
        pointBorderWidth: 3,
        // tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(106, 210, 255, 0.7)"); // Adjusted transparency
        gradient.addColorStop(1, "rgba(106, 210, 255, 0)");
          return gradient;
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Tasks Completed',
      },
    },
  };

  return (
    <div className="bg-white p-2 px-4 pt-4 rounded-lg shadow-md">
        <h2 className='text-lg font-bold mb-4'>Track of Daily Tasks</h2>
      <div style={{ height:'300px'}}>
      <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
