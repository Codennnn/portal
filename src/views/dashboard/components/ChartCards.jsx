import React from 'react'
import PropTypes from 'prop-types'

import CardAreaChart from '../charts/CardAreaChart'

function ChartCard({
  Icon,
  name,
  seriesName,
  seriesData,
  color,
  count,
  value,
}) {
  return (
    <div className="custom-card">
      <div className="mb-8 flex items-center">
        <Icon className="w-8 mr-6" />
        <div className="text-lg font-bold">{name}</div>
      </div>
      <div className="h-12 flex items-center justify-between">
        <div className="mr-6 whitespace-no-wrap">
          <div className="mb-2 text-lg font-semibold">{count}</div>
          <div className="text-sm text-gray-600 truncate">{value}</div>
        </div>
        <CardAreaChart
          seriesName={seriesName}
          seriesData={seriesData}
          color={color}
        />
      </div>
    </div>
  )
}

ChartCard.propTypes = {
  Icon: PropTypes.shape({
    $$typeof: PropTypes.symbol,
    render: PropTypes.func,
  }).isRequired,
  name: PropTypes.string.isRequired,
  seriesName: PropTypes.string.isRequired,
  seriesData: PropTypes.arrayOf(Number).isRequired,
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
}

export default function ChartCards({ data }) {
  return (
    <>
      {
        /* eslint-disable-next-line */
        data.map(({ icon, name, seriesName, seriesData, color, count, value }) => (
            <div key={name} className="w-1/3 px-3">
              <ChartCard
                Icon={icon}
                name={name}
                seriesName={seriesName}
                seriesData={seriesData}
                color={color}
                count={count}
                value={value}
              />
            </div>
          )
        )
      }
    </>
  )
}

ChartCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
