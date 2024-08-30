import React from 'react';
import {HeaderSection, MainTitle, SubTitle, ChartSection, ChartCard, StatCard, StatTitle, StatValue, StatIcon} from "../styles/DashboardStyledComponents";
import "../tailwind.css";
import "../styles/DashboardStyledComponents";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = ({ data }) => {
  // Ensure data is defined and is an array
  if (!data || !Array.isArray(data.datasets)) {
    console.error("Data is undefined or not an array");
    return null;
  }

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      // Your dataset mapping logic here
    })),
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <Line data={chartData} />
    </div>
  );
};

export default Dashboard;
       // <SubTitle>Character and planet data visualization</SubTitle>