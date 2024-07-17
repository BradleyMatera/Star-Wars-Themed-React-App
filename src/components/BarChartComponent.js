import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const BarChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data provided</div>;
  }

  const validData = data.filter(item => 
    item && typeof item.dataIndex === 'number' && !isNaN(item.dataIndex)
  );

  if (validData.length === 0) {
    return <div>No valid data available</div>;
  }

  return (
    <ChartContainer>
      <BarChart
        dataset={validData}
        xAxis={[{ scaleType: 'band', dataKey: 'id' }]}
        series={[{ dataKey: 'dataIndex', label: 'Value' }]}
        width={500}
        height={300}
      />
    </ChartContainer>
  );
};

export default BarChartComponent;