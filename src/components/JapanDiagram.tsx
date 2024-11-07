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

export default function JapanDiagram() {
  const years = ['2006', '2008', '2009', '2011', '2012', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'];
  
  const japanData = [8.2, 8.3, 8.1, 8.1, 8.1, 8.1, 8.0, 8.0, 7.9, 8.0, 8.0, 8.1, 8.2, 8.3, 8.4];

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Japan',
        data: japanData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        min: 4,
        max: 9,
        ticks: {
          stepSize: 0.1
        }
      }
    }
  };

  return (
    <div className="w-full max-h-1/2 flex justify-start mb-4">
      <Line options={options} data={data} />
    </div>
  );
}
