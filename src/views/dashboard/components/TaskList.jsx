import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Checkbox, Empty } from 'antd'
import { Edit, DeleteOne } from '@icon-park/react'

const { TabPane } = Tabs

export default function TaskList({ data }) {
  return (
    <Tabs>
      <TabPane tab="进行中" key="1">
        <ul className="overflow-auto" style={{ maxHeight: '300px' }}>
          { /* eslint-disable-next-line */
            data.map(({ id, title, content, checked = false }) => (
              <li
                key={id}
                className="py-4 flex items-center"
                style={{ borderBottom: '1px solid #f1f1f1' }}
              >
                <div className="px-3">
                  <Checkbox defaultChecked={checked} />
                </div>
                <div className="px-3 w-3/5">
                  <div className="truncate font-semibold">{title}</div>
                  <div className="truncate" style={{ maxWidth: '100%' }}>{content}</div>
                </div>
                <div className="px-3 ml-auto flex items-center">
                  <Edit size={18} className="success mr-2 cursor-pointer" />
                  <DeleteOne size={18} className="danger cursor-pointer" />
                </div>
              </li>
            ))
          }
        </ul>
      </TabPane>
      <TabPane tab="待完成" key="2">
        <Empty />
      </TabPane>
    </Tabs>
  )
}

TaskList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
