import React from 'react'
import PropTypes from 'prop-types'
import { Empty } from 'antd'
import dayjs from 'dayjs'
import { ArrowCircleUp, ArrowCircleDown } from '@icon-park/react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import styled from 'styled-components'
import tw from 'twin.macro'

const Title = styled.div`
  ${tw`relative`}
  height: 25px;
  &>.title-text {
    ${tw`absolute top-0 left-0 w-full px-2 -mx-2 truncate font-semibold rounded`}
    &:hover {
      z-index: 10;
      width: auto;
      background: white;
      box-shadow: 0 0 6px 2px #dedede;
    }
  }
`

export default function TaskList({ data }) {
  return (
    <PerfectScrollbar style={{ maxHeight: '300px' }}>
      <ul>
        {
          data.length > 0
            /* eslint-disable-next-line */
            ? data.map(({ id, type, title, time, value, count }) => (
              <li
                key={id}
                className="py-4 flex items-center"
                style={{ borderBottom: '1px solid #f1f1f1' }}
              >
                <div className="px-3">
                  {
                    type === 1
                      ? <ArrowCircleUp size={20} className="danger" />
                      : <ArrowCircleDown size={20} className="primary" />
                  }
                </div>
                <div className="w-2/5 px-3">
                  <Title><div className="title-text">{title}</div></Title>
                  <div className="text-xs text-gray-600" style={{ maxWidth: '100%' }}>
                    {dayjs(time).format('YYYY-MM-DD')}
                  </div>
                </div>
                <div className="px-3 ml-auto flex items-center">
                  {value}
                </div>
                <div className="px-3 flex items-center">
                  ￥
                  {count}
                </div>
              </li>
            ))
            : <Empty />
        }
      </ul>
    </PerfectScrollbar>
  )
}

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
