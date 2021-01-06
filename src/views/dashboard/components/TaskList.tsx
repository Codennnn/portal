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
          {data.map(({ id, title, content, checked = false }) => (
            <li
              key={id}
              className="flex items-center py-4"
              style={{ borderBottom: '1px solid #f1f1f1' }}
            >
              <div className="px-3">
                <Checkbox defaultChecked={checked} />
              </div>
              <div className="w-3/5 px-3">
                <div className="font-semibold truncate">{title}</div>
                <div className="truncate" style={{ maxWidth: '100%' }}>
                  {content}
                </div>
              </div>
              <div className="flex items-center px-3 ml-auto">
                <Edit size={18} className="mr-2 cursor-pointer success" />
                <DeleteOne size={18} className="cursor-pointer danger" />
              </div>
            </li>
          ))}
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
