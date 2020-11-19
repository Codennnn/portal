import React from 'react'
import Chart from 'react-apexcharts'
import PropTypes from 'prop-types'

export default function CardAreaChart({ color, seriesName, seriesData }) {
  const chartOptions = {
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors: [color],
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 80, 100],
      },
    },
    tooltip: {
      x: { show: false },
    },
  }

  return (
    <Chart
      type="area"
      width="100%"
      height="100%"
      series={[{
        name: seriesName,
        data: seriesData,
      }]}
      options={chartOptions}
    />
  )
}

CardAreaChart.propTypes = {
  color: PropTypes.string,
  seriesName: PropTypes.string.isRequired,
  seriesData: PropTypes.arrayOf(PropTypes.number).isRequired,
}

CardAreaChart.defaultProps = {
  color: '#556ee6',
}
