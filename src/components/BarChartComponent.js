import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin-bottom: 20px;
  background-color: #2c3e50;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NoData = styled.div`
  color: #ffd700;
  text-align: center;
  padding: 20px;
  font-family: 'Star Jedi', sans-serif;
`;

const BarChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <NoData>No data provided</NoData>;
  }

  const validData = data.filter(item => 
    item && typeof item.dataIndex === 'number' && !isNaN(item.dataIndex)
  );

  if (validData.length === 0) {
    return <NoData>No valid data available</NoData>;
  }

  return (
    <ChartContainer>
      <BarChart
        dataset={validData}
        xAxis={[{ scaleType: 'band', dataKey: 'id' }]}
        series={[{ dataKey: 'dataIndex', label: 'Value', color: '#ffd700' }]}
        width={500}
        height={300}
      />
    </ChartContainer>
  );
};

export default BarChartComponent;
