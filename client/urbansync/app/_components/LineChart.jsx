import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Assigned to Me',
        data: [5, 9, 7, 8, 6],
        borderColor: 'rgb(67, 24, 255)',
        backgroundColor: 'rgb(67, 24, 255)',
        fill: true,
      },
      {
        label: 'Created by Me',
        data: [4, 6, 5, 10, 9],
        borderColor: 'rgb(106, 210, 255)',
        backgroundColor: 'rgb(106, 210, 255)',
        fill: true,
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
