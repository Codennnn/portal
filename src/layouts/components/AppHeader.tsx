import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Dropdown, Menu, Input } from 'antd'

import { useTypedDispatch, useTypedSelector } from '@/redux'
import { signOut, openSider, closeSider } from '@/redux/app/app-actions'
import { removeToken } from '@/utils/token'

import {
  ExpandRight,
  ExpandLeft,
  User,
  SettingOne,
  TableReport,
  Logout,
  Search,
  FullScreen,
  OffScreen,
} from '@icon-park/react'
import styled from 'styled-components'

import Logo from '@/assets/logo48.png'
import Application from './app-header/Application'
import Notice from './app-header/Notice'

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  background-color: #f3f3f9;
  border-radius: 9999px;
  & {
    .ant-input-affix-wrapper,
    .ant-input {
      background: transparent;
      border: none;
      box-shadow: none;
    }
  }
`

interface AppHeaderProps {
  isSiderOpened: boolean
  isFullScreen: boolean
  switchFullscreen: () => void
}

export default function AppHeader({
  isSiderOpened,
  isFullScreen,
  switchFullscreen,
}: AppHeaderProps) {
  const dispatch = useTypedDispatch()
  const info = useTypedSelector(({ user }) => user.info)
  const iconGroup = {
    open: ExpandRight,
    close: ExpandLeft,
  }
  const ExpandIcon = iconGroup[isSiderOpened ? 'open' : 'close']
  const ScreenIcon = isFullScreen ? OffScreen : FullScreen

  const history = useHistory()

  const routeTo = (path, clickFunc) => {
    if (path) {
      history.push(path)
    } else {
      clickFunc()
    }
  }

  const onLogout = () => {
    removeToken()
    dispatch(signOut())
    history.replace('/')
  }

  const menuItems: {
    title: string
    icon
    path: string
    clickFunc?: () => void
  }[] = [
    { title: '个人中心', icon: User, path: '/page1' },
    { title: '网站设置', icon: SettingOne, path: '/page2' },
    { title: '登录日志', icon: TableReport, path: '/page2' },
  ]

  const menu = (
    <Menu className="p-0 overflow-hidden header-menu">
      <div
        style={{
          background: 'rgba(var(--primary), .05)',
          borderTop: '3px solid rgba(var(--primary), 1)',
        }}
      >
        <div className="flex items-center px-6 py-4">
          <Avatar
            className="mr-4 cursor-pointer select-none"
            size={45}
            src={info.avatar}
          />
          <div>
            <div className="mt-2 text-lg font-bold">
              {info.nickname || '暂无昵称'}
            </div>
            <div className="text-sm text-gray-500">
              {info.email || '未绑定邮箱'}
            </div>
          </div>
        </div>
      </div>

      {menuItems.map(({ title, icon: Icon, path, clickFunc }) => (
        <Menu.Item
          key={title}
          className="flex items-center px-8 py-3 header-menu__item"
          onClick={() => routeTo(path, clickFunc)}
        >
          <Icon size={18} className="mr-2" />
          {title}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item
        key="退出登录"
        className="flex items-center px-8 py-3 header-menu__item logout-item"
        onClick={onLogout}
      >
        <Logout size={18} className="mr-2" />
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="header">
      {/* LOGO */}
      <div className="brand-box">
        <img className="brand-box__logo" src={Logo} alt="logo" />
        <div className="brand-box__text">React Admin</div>
      </div>

      <div className="header-right">
        <div className="flex items-center">
          <ExpandIcon
            title={isSiderOpened ? '收起' : '展开'}
            className="ml-2 mr-4 cursor-pointer"
            size="22"
            fill="#718096"
            onClick={() => {
              isSiderOpened ? dispatch(closeSider()) : dispatch(openSider())
            }}
          />
          <SearchInput>
            <Input
              style={{ marginRight: '4px', color: '#718096' }}
              prefix={<Search size={16} />}
              placeholder="搜索..."
            />
          </SearchInput>
        </div>

        <div className="flex items-center h-full ml-auto">
          <div className="flex items-center mr-6">
            <Application className="mr-4" />
            <ScreenIcon
              className="mr-4 cursor-pointer"
              size={23}
              onClick={switchFullscreen}
            />
            <Notice />
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="flex items-center h-full cursor-pointer select-none">
              <Avatar size="large" src={info.avatar} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
