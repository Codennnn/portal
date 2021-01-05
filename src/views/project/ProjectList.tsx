import React, { useEffect, useState } from 'react'
import { Table, Avatar, Tooltip, Image, Menu, Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import { More } from '@icon-park/react'
import { getProjectList } from '@/api/project'

export default function ProjectList() {
  const [tableList, setTableList] = useState([])
  const [tableLoading, setTableLoading] = useState(false)
  const [pagination] = useState({
    pageSize: 5,
  })

  useEffect(() => {
    async function getProjects() {
      try {
        setTableLoading(true)
        const {
          data: { list },
        } = await getProjectList()
        setTableList(list)
      } finally {
        setTableLoading(false)
      }
    }
    getProjects()
  }, [])

  const dropdownMenu = rowData => (
    <Menu>
      <Menu.Item>查看</Menu.Item>
      <Menu.Item>编辑</Menu.Item>
      <Menu.Item>删除</Menu.Item>
    </Menu>
  )

  const pg = {
    0: { color: 'info', text: '规划中' },
    1: { color: 'primary', text: '实施中' },
    2: { color: 'warning', text: '交付测试' },
    3: { color: 'secondary', text: '已完成' },
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'icon',
      render: icon => (
        <Image
          src={icon}
          width={100}
          height={100}
          fallback="https://gitee.com/chinesee/images/raw/master/magic-ui/img_001.png"
        />
      ),
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      render: name => (
        <Link to="/page1" className="primary">
          {name}
        </Link>
      ),
    },
    {
      title: '周期',
      dataIndex: 'date',
    },
    {
      title: '进度',
      dataIndex: 'progress',
      render: progress => (
        <span
          className={`${pg[progress].color} px-2 py-1 rounded`}
          style={{ background: `rgba(var(--${pg[progress].color}-light))` }}
        >
          {pg[progress].text}
        </span>
      ),
    },
    {
      title: '成员',
      dataIndex: 'team',
      render: team => (
        <Avatar.Group maxCount={3}>
          {team.map(({ id, name, avatar }) => (
            <Tooltip key={id} title={name}>
              <Avatar src={avatar} />
            </Tooltip>
          ))}
        </Avatar.Group>
      ),
    },
    {
      title: '操作',
      key: 'id',
      render: row => (
        <Dropdown overlay={dropdownMenu(row)} trigger={['click']}>
          <More className="text-gray-600 cursor-pointer" size="24" />
        </Dropdown>
      ),
    },
  ]

  return (
    <>
      <Table
        rowKey="id"
        loading={tableLoading}
        dataSource={tableList}
        columns={columns}
        pagination={pagination}
      />
    </>
  )
}
