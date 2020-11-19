import React, { useState, useEffect, useCallback } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom'
import { relativeTime } from '@/utils/util'
import { getNoticeList } from '@/api/notice'

export default function Notice() {
  const [noticeList, setNoticeList] = useState([])

  const getNoticies = useCallback(async () => {
    const { data: { list } } = await getNoticeList()
    setNoticeList(list)
  }, [])

  useEffect(() => {
    getNoticies()
  }, [getNoticies])

  return (
    <div className="custom-card" style={{ padding: '0' }}>
      <div className="py-2 px-3 flex justify-between items-center" style={{ borderBottom: '1px solid #f1f1f1' }}>
        <div className="text-lg font-bold">消息通知</div>
      </div>
      <PerfectScrollbar
        options={{ suppressScrollX: true }}
        style={{ height: '300px' }}
      >
        <ul>
          {/* eslint-disable-next-line */
            noticeList.map(({ id, title, content, time }) => (
              <li
                key={id}
                className="py-3 px-3"
                style={{ borderBottom: '1px solid #f2f2f2' }}
              >
                <div className="">
                  <div className="text-base">{title}</div>
                  <div className="break-all text-gray-500">{content}</div>
                  <div>{relativeTime(time)}</div>
                </div>
              </li>
            ))
          }
        </ul>
      </PerfectScrollbar>
      <Link to="/" className="w-full py-2 block text-center primary">
        查看全部
      </Link>
    </div>
  )
}
