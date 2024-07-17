import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const LineChartComponent = ({ data, color }) => {
  if (!data || data.length === 0) {
    return <div>No data provided</div>;
  }

  // Filter out any data points with NaN values
  const validData = data.filter(item => !isNaN(item.x) && !isNaN(item.y));

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <LineChart
        xAxis={[{ data: validData.map(item => item.x) }]}
        series={[
          {
            data: validData.map(item => item.y),
            color: color,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default LineChartComponent;