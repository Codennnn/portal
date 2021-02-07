import React, { useEffect, useState } from 'react'
import {
  Spin,
  Row,
  Col,
  Pagination,
  Avatar,
  Tooltip,
  Image,
  Divider,
  Tag,
} from 'antd'
import { CalendarDot, Comment } from '@icon-park/react'
import { getProjectList } from '@/api/project'

export default function ProjectGrid() {
  // eslint-disable-next-line
  const [tableList, setTableList] = useState<any[]>([])
  const [gridLoading, setGridLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 9,
    total: 0,
  })

  useEffect(() => {
    async function getProjects(
      page = pagination.current,
      pageSize = pagination.pageSize
    ) {
      try {
        setGridLoading(true)
        const { data, pagination: p } = await getProjectList({
          page,
          pageSize,
        })
        setPagination(p)
        setTableList(data)
      } finally {
        setGridLoading(false)
      }
    }
    getProjects()
  }, [pagination])

  const pg = {
    0: { color: 'info', text: '规划中' },
    1: { color: 'primary', text: '实施中' },
    2: { color: 'warning', text: '交付测试' },
    3: { color: 'secondary', text: '已完成' },
  }

  return (
    <>
      <Spin spinning={gridLoading}>
        <Row gutter={[24, 24]}>
          {tableList
            .slice(0, 9)
            .map(({ id, icon, name, team, date, progress }) => (
              <Col key={id} md={12} lg={8}>
                <div className="bg-white rounded-lg">
                  <div className="flex px-6 py-4">
                    <Image
                      src={icon}
                      width={100}
                      height={100}
                      fallback="https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png"
                    />
                    <div className="pl-6">
                      <h2 className="font-bold">{name}</h2>
                      <p className="mt-2 mb-6 text-sm text-gray-600">{name}</p>
                      <Avatar.Group maxCount={3}>
                        {team.map(({ id: userId, name: userName, avatar }) => (
                          <Tooltip key={userId} title={userName}>
                            <Avatar src={avatar} />
                          </Tooltip>
                        ))}
                      </Avatar.Group>
                    </div>
                  </div>
                  <Divider className="m-0" />
                  <div className="px-6 py-4">
                    <ul className="flex items-center text-sm">
                      <li className="flex items-center mr-4">
                        <Tag color={`rgba(var(--${pg[progress].color}), 1)`}>
                          {pg[progress].text}
                        </Tag>
                      </li>
                      <li className="flex items-center mr-4">
                        <CalendarDot size={18} className="mr-1" />
                        <span>{date}</span>
                      </li>
                      <li className="flex items-center mr-4">
                        <Comment size={18} className="mr-1" />
                        <span>229</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Spin>

      <div className="mt-10 text-center">
        <Pagination {...pagination} onChange={getProjectList} />
      </div>
    </>
  )
}
