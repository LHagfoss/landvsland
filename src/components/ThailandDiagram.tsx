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

export default function ThailandDiagram() {
  const years = ['2006','2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2023'];
  
  const thailandData = [5.7, 6.8, 6.5, 6.5, 6.5, 6.3, 5.4, 5.1, 4.9, 4.6, 4.6, 6.3, 6.0, 6.0, 6.7, 6.3];

  const data = {
    labels: years,
    datasets: [
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
