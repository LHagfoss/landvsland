"use client"

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Diagram() {
  const years = ['2006','2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2023'];
  
  const japanData = [8.2, 8.3, 8.1, 8.1, 8.1, 8.1, 8.0, 8.0, 7.9, 8.0, 8.0, 8.1, 8.2, 8.3, 8.4];
  const thailandData = [5.7, 6.8, 6.5, 6.5, 6.5, 6.3, 5.4, 5.1, 4.9, 4.6, 4.6, 6.3, 6.0, 6.0, 6.7, 6.3];

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Japan',
        data: japanData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Thailand',
        data: thailandData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Demokrati-indeks over tid',
      },
    },
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <div className="w-full h-full flex justify-end">
      <Line options={options} data={data} />
    </div>
  );
}
