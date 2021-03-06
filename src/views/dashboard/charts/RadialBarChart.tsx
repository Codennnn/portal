import React from 'react'
import Chart from 'react-apexcharts'

export default function RadialBarChart() {
  const chartOptions = {
    chart: {
      sparkline: { show: true },
    },
    grid: { show: false },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        offsetY: -15,
        hollow: {
          size: '48%',
        },
        track: {
          strokeWidth: '100%',
          background: '#f4f4f4',
        },
        dataLabels: {
          value: {
            offsetY: 20,
            color: '#adb5c3',
            fontSize: '18px',
          },
          name: {
            offsetY: 60,
            fontSize: '14px',
            color: '#adb5c3',
          },
        },
      },
    },
    colors: ['#556ee6'],
    stroke: { dashArray: 4 },
    labels: ['盈利率'],
  }

  return (
    <Chart
      type="radialBar"
      width="100%"
      height="100%"
      series={[67]}
      options={chartOptions}
    />
  )
}
