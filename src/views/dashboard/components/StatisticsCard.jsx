import React from 'react'
import PropTypes from 'prop-types'
import { UpOutlined, DownOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import classNames from 'classnames'

const IconStyle = styled.div`
  color: rgba(var(--primary), 1);
  background: rgba(var(--primary), 0.2);
`

export default function StatisticsCard({ data }) {
  return (
    <>
      {
        /* eslint-disable-next-line */
        data.map(({ label, Icon, value, percent }) => (
          <div className="md:w-1/3 lg:w-1/4 lg:pl-6" key={label}>
            <div className="h-full p-4 flex flex-col justify-between bg-white rounded">
              <div className="flex items-center">
                <IconStyle>
                  <Icon strokeWidth={3.5} size={21} />
                </IconStyle>
                <span>{label}</span>
              </div>
              <div>
                <div className="mb-1 flex items-center font-semibold text-xl">
                  ￥{value}
                  {percent > 0 ? (
                    <UpOutlined className="ml-2 success text-xs" />
                  ) : percent < 0 ? (
                    <DownOutlined className="ml-2 danger text-xs" />
                  ) : null}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <div
                    className={classNames(
                      'mr-2 px-2 flex items-center justify-center rounded ',
                      {
                        success: percent > 0,
                        danger: percent < 0,
                        warning: percent === 0,
                      }
                    )}
                    style={{
                      background:
                        percent > 0
                          ? 'rgba(var(--success), .2)'
                          : percent < 0
                            ? 'rgba(var(--danger), .2)'
                            : 'rgba(var(--warning), .2)',
                      fontSize: '12px',
                    }}
                  >
                    {percent > 0 ? '+' : percent < 0 ? '-' : ''}{' '}
                    {Math.abs(percent)}%
                  </div>
                  同比上期
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

StatisticsCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
