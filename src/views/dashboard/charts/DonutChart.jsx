import React from 'react'
import Chart from 'react-apexcharts'

export default function DonutChart() {
  const chartOptions = {
    colors: ['#556ee6', '#34c38f', '#f46a6a'],
    labels: ['数据项一', '数据项二', '数据项三'],
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
  }

  return (
    <Chart
      type="donut"
      width="100%"
      height="240px"
      series={[46.7, 31.6, 21.7]}
      options={chartOptions}
    />
  )
}
