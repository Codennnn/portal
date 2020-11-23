import React, { useState, useEffect, useCallback } from 'react'
import { Menu, Dropdown, Badge } from 'antd'
import { useHistory } from 'react-router-dom'
import { getNoticeCount } from '@/api/notice'

import { Remind } from '@icon-park/react'

export default function Notice() {
  const history = useHistory()

  const [noticeItems, setNoticeItems] = useState([
    { label: '回复我的', count: 0, key: 'reply' },
    { label: '系统通知', count: 0, key: 'notice' },
    { label: '我的消息', count: 0, key: 'message' },
  ])

  const getNoticies = useCallback(async () => {
    const { data } = await getNoticeCount()
    setNoticeItems(
      noticeItems.map(({ label, key }) => ({ label, key, count: data[key] }))
    )
  }, [noticeItems])

  useEffect(() => {
    getNoticies()
  }, [getNoticies])

  const routeToNotice = () => {
    history.push('/notice')
  }

  const notice = () => (
    <Menu>
      {noticeItems.map(({ label, count }) => (
        <Menu.Item
          key={label}
          className="py-2 flex items-center cursor-pointer"
          onClick={routeToNotice}
        >
          <div className="mr-4">{label}</div>
          <Badge className="ml-auto" count={count} />
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Badge dot>
      <Dropdown overlay={notice}>
        <Remind className="cursor-pointer" size={23} onClick={routeToNotice} />
      </Dropdown>
    </Badge>
  )
}
