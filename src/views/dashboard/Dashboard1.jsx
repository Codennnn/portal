import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, Button, Timeline, Progress, Table } from 'antd'
import {
  Html5TwoTone,
  CrownTwoTone,
  AlipayOutlined,
  ZhihuOutlined,
} from '@ant-design/icons'
import {
  RightSmall,
  AdProduct,
  StereoNesting,
  ApiApp,
  Help,
  Wechat,
  Tiktok,
  Xigua,
} from '@icon-park/react'
import classNames from 'classnames'

import profileImg from '@img/profile_img.png'
import styled from 'styled-components'
import { getDashboardTableData } from '@/api/common'
import RadislBarChart from './charts/RadialBarChart'
import StackedColumnChart from './charts/StackedColumnChart'

const Row = styled.div``
const IconStyle = styled.div`
  &::after {
    content: '';
    left: 50%;
    transform: translateX(-50%) rotate(30deg);
    background: rgba(255, 255, 255, 0.1);
  }
`

function DashboardDefault() {
  const nickname = useSelector(({ user }) => user.info.nickname)
  const avatar = useSelector(({ user }) => user.info.avatar)
  const tableColumn = [
    {
      title: '订单 ID',
      dataIndex: 'id',
      render: id => <span className="font-semibold">#{id}</span>,
    },
    {
      title: '支付日期',
      dataIndex: 'date',
    },
    {
      title: '顾客名称',
      dataIndex: 'name',
    },
    {
      title: '总额',
      dataIndex: 'total',
      render: total => <span>￥{total}</span>,
    },
    {
      title: '支付状态',
      dataIndex: 'status',
      render: status => {
        let statusClass
        if (status === 1) {
          statusClass = 'success bg-success-light'
        } else if (status === 0) {
          statusClass = 'danger bg-danger-light'
        } else {
          statusClass = 'warning bg-warning-light'
        }
        return (
          <span className={`px-2 py-1 rounded-lg ${statusClass}`}>
            {status === 1 ? '支付完成' : '支付失败'}
          </span>
        )
      },
    },
    {
      title: '支付方式',
      dataIndex: 'payment',
      render: payment => {
        const Icon = payment === '微信支付' ? ZhihuOutlined : AlipayOutlined
        return (
          <div className="flex items-center">
            <Icon className="mr-1" />
            {payment}
          </div>
        )
      },
    },
    {
      title: '操作',
      render: () => <Button type="primary">查看详情</Button>,
    },
  ]
  const [tableLoading, setTableLoading] = useState(false)
  const [tableData, setTableData] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  useEffect(() => {
    async function getTableData() {
      try {
        setTableLoading(true)
        const {
          data: { list },
        } = await getDashboardTableData()
        setTableData(list)
      } finally {
        setTableLoading(false)
      }
    }
    getTableData()
  }, [])

  return (
    <>
      <Row>
        <div className="w-1/3 pr-3 flex flex-col">
          <div className="mb-6 bg-white rounded-md overflow-hidden">
            <div
              style={{ background: 'rgba(var(--primary), .25)' }}
              className="relative p-4 primary"
            >
              <p className="mb-2 font-bold">{`欢迎回来，${nickname}`}</p>
              <p className="mb-6 text-xs">MagicUI 数据分析</p>
              <img
                className="absolute right-0 bottom-0 w-2/5"
                src={profileImg}
                alt="profile"
              />
            </div>
            <div className="flex">
              <div className="relative px-4">
                <Avatar
                  src={avatar}
                  size={62}
                  className="relative"
                  style={{ bottom: '25px', boxShadow: '0 0 0 5px #fff' }}
                />
                <div className="truncate">令狐少侠</div>
                <div className="mt-2 secondary truncate text-sm">
                  前端开发工程师
                </div>
              </div>
              <div className="w-2/3 ml-auto p-5">
                <div className="mb-6 flex">
                  <div className="flex-1">
                    <div className="mb-2 font-semibold">125</div>
                    <div className="text-xs secondary">项 目</div>
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 font-semibold">￥1245</div>
                    <div className="text-xs secondary">收 入</div>
                  </div>
                </div>
                <Button type="primary">个人中心</Button>
              </div>
            </div>
          </div>
          <div className="custom-card">
            <h4 className="custom-card__title">每月收入</h4>
            <div className="flex items-center">
              <div>
                <div className="text-gray-500 text-sm">本月累计</div>
                <div className="mt-3 mb-1 text-xl font-bold">￥34,252</div>
                <p className="mb-5 text-sm">
                  较上期&nbsp;
                  <span className="success">增长 12%</span>
                </p>
                <Button type="primary">
                  <div className="flex items-center">
                    查看更多
                    <RightSmall size={18} style={{ margin: '0 0 2px 4px' }} />
                  </div>
                </Button>
              </div>
              <div className="ml-auto" style={{ height: '180px' }}>
                <RadislBarChart />
              </div>
            </div>
            <div className="mt-3 flex items-center text-gray-500 text-sm">
              <Help size={18} className="mr-1" />
              盈利率通过特定方法计算，具体计算方法请查看...
            </div>
          </div>
        </div>

        <div className="w-2/3 pl-3">
          <div className="mb-6 flex">
            {[
              { label: '订单数', value: '1,235', icon: AdProduct },
              { label: '净收入', value: '￥1,235', icon: StereoNesting },
              { label: '平均收入', value: '￥23.5', icon: ApiApp },
            ].map(({ label, value, icon: Icon }, i) => (
              <div
                key={label}
                className={classNames(
                  'custom-card w-1/3 flex justify-between items-center',
                  { 'ml-6': i >= 1 }
                )}
              >
                <div>
                  <div className="mb-3 secondary">{label}</div>
                  <div className="font-semibold text-xl">{value}</div>
                </div>
                <IconStyle className="bg-primary">
                  <Icon size={22} />
                </IconStyle>
              </div>
            ))}
          </div>
          <div className="custom-card">
            <div className="flex justify-between items-center">
              <h4 className="custom-card__title">销售统计数据</h4>
              <div className="flex items-center text-sm">
                <div className="cursor-pointer">按周</div>
                <div className="mx-6 cursor-pointer">按月</div>
                <div className="bg-primary text-white px-3 py-1 rounded cursor-pointer">
                  按年
                </div>
              </div>
            </div>
            <StackedColumnChart />
          </div>
        </div>
      </Row>

      <Row>
        <div className="w-1/3 pr-3">
          <div className="custom-card">
            <h4 className="custom-card__title">公共资源</h4>
            <div className="mb-6 text-center">
              <Html5TwoTone className="mt-6 text-4xl" twoToneColor="#556ee6" />
              <h3 className="my-3">互联网 - 总流量 625</h3>
              <p className="text-gray-500 text-sm">
                antd 是基于 Ant Design 设计体系的 React UI
                组件库，主要用于研发企业级中后台产品
              </p>
              <div className="mt-3 primary text-sm cursor-pointer">
                了解更多 &gt;
              </div>
            </div>
            <div className="flex justify-around">
              {[
                { label: '微信', icon: Wechat, count: 124 },
                { label: '抖音', icon: Tiktok, count: 124 },
                { label: '西瓜视频', icon: Xigua, count: 124 },
              ].map(({ label, icon: Icon, count }) => (
                <div key={label} className="text-center">
                  <Icon size={22} />
                  <div className="my-1">{label}</div>
                  <div className="text-gray-500 text-sm">售出 {count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-1/3 px-3">
          <div className="custom-card">
            <h4 className="custom-card__title">活动面板</h4>
            <Timeline className="mt-12" pending="正在记录中...">
              <Timeline.Item>
                <span className="mr-3 font-semibold">2020-06-01</span>
                创建了一个活动任务
              </Timeline.Item>
              <Timeline.Item>
                <span className="mr-3 font-semibold">2020-06-04</span>
                解决了一个项目难题
              </Timeline.Item>
              <Timeline.Item>
                <span className="mr-3 font-semibold">2020-06-05</span>
                优化了网站性能
              </Timeline.Item>
              <Timeline.Item>
                <span className="mr-3 font-semibold">2020-09-01</span>
                开始进行项目测试
              </Timeline.Item>
            </Timeline>
          </div>
        </div>

        <div className="w-1/3 pl-3">
          <div className="custom-card">
            <h4 className="custom-card__title">热销产品城市分布</h4>
            <div className="mb-8 text-center">
              <CrownTwoTone
                className="mt-6 mb-4 text-4xl"
                twoToneColor="#556ee6"
              />
              <p className="text-2xl font-semibold">1,696</p>
              <div className="mt-1 secondary text-sm">广东省东莞市</div>
            </div>
            <div>
              {[
                { city: '广东省东莞市', value: 1696, color: 'primary' },
                { city: '江苏省上海市', value: 1599, color: 'success' },
                { city: '江西省南宁市', value: 1298, color: 'warning' },
              ].map(({ city, value, color }) => (
                <div
                  key={city}
                  className="py-3 flex justify-between items-center"
                  style={{ borderTop: '1px solid #eff2f7' }}
                >
                  <div className="w-1/3 truncate">{city}</div>
                  <div>{value.toLocaleString()}</div>
                  <Progress
                    className="w-1/3"
                    percent={(value / 2000) * 100}
                    strokeWidth={5}
                    strokeColor={`rgba(var(--${color}, 1)`}
                    showInfo={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Row>

      <Row>
        <div className="custom-card w-full">
          <h4 className="custom-card__title">最新交易记录</h4>
          <Table
            rowKey="id"
            loading={tableLoading}
            columns={tableColumn}
            dataSource={tableData}
            rowSelection={{
              selectedRowKeys,
              onChange: keys => {
                setSelectedRowKeys(keys)
              },
            }}
          />
        </div>
      </Row>
    </>
  )
}

export default DashboardDefault
