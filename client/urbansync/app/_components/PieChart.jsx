import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Not Started', 'In Progress', 'Completed'],
    datasets: [
      {
        label: '# of Tasks',
        data: [12, 19, 7],
        backgroundColor: ['rgb(67, 24, 255)', 'rgb(106, 210, 255)', 'rgb(239, 244, 251)'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className='text-lg font-bold mb-4'>Workload status</h2>
        <div className=' flex items-center justify-center'>
      <div style={{ maxWidth: '250px'}}>
      <Pie data={data} />
      </div>
    </div>
    </div>
  );
};

export default PieChart;
