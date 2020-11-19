import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  Avatar, Dropdown, Menu, Input,
} from 'antd'
import { signOut, openSider, closeSider } from '@/redux/app/appActions'
import { removeToken } from '@/utils/token'

import {
  ExpandRight, ExpandLeft, User, SettingOne, TableReport, Logout, Search, FullScreen, OffScreen,
} from '@icon-park/react'
import styled from 'styled-components'
import tw from 'twin.macro'

import logo from '@img/logo.png'
import Application from './app-header/Application'
import Notice from './app-header/Notice'

const SearchInputStyle = styled.div`
  ${tw`flex items-center rounded-full`}
  height: 38px;
  background-color: #f3f3f9;
  & {
    .ant-input-affix-wrapper,
    .ant-input {
      ${tw`bg-transparent border-none shadow-none`}
    }
  }
`

export default function AppHeader({
  isSiderOpened, dispatch, isFullScreen, switchFullscreen,
}) {
  const info = useSelector(({ user }) => user.info)
  const SignOut = useCallback(() => dispatch(signOut()), [dispatch])
  const OpenSider = useCallback(() => dispatch(openSider()), [dispatch])
  const CloseSider = useCallback(() => dispatch(closeSider()), [dispatch])
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
    SignOut()
    history.replace('/')
  }

  const menuItems = [
    { title: '个人中心', icon: User, path: '/page1' },
    { title: '网站设置', icon: SettingOne, path: '/page2' },
    { title: '登录日志', icon: TableReport, path: '/page2' },
  ]

  const menu = (
    <Menu className="header-menu p-0 overflow-hidden">
      <div style={{ background: 'rgba(var(--primary), .05)', borderTop: '3px solid rgba(var(--primary), 1)' }}>
        <div className="py-4 px-6 flex items-center">
          <Avatar
            className="mr-4 cursor-pointer select-none"
            size={45}
            src={info.avatar}
          />
          <div>
            <div className="mt-2 text-lg font-bold">{info.nickname || '暂无昵称'}</div>
            <div className="text-gray-500 text-sm">{info.email || '未绑定邮箱'}</div>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line */}
      {menuItems.map(({ title, icon: Icon, path, clickFunc }) => (
        <Menu.Item
          key={title}
          className="header-menu__item px-8 py-3 flex items-center"
          onClick={() => routeTo(path, clickFunc)}
        >
          <Icon size={18} className="mr-2" />
          {title}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item
        key="退出登录"
        className="header-menu__item logout-item px-8 py-3 flex items-center"
        onClick={onLogout}
      >
        <Logout size={18} className="mr-2" />
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="h-full flex items-center">
      {/* LOGO */}
      <div className="brand-box">
        <img className="w-6" src={logo} alt="logo" />
        <div className="brand-box__text mx-2 text-lg font-bold whitespace-no-wrap">React Admin</div>
      </div>

      <div className="flex-1 h-full flex items-center">
        <div className="flex items-center">
          <ExpandIcon
            title={isSiderOpened ? '收起' : '展开'}
            className="ml-2 mr-4 cursor-pointer"
            size="22"
            fill="#718096"
            onClick={() => (isSiderOpened ? CloseSider() : OpenSider())}
          />
          <SearchInputStyle>
            <Input prefix={<Search size={16} className="mr-2 text-gray-600" />} placeholder="搜索..." />
          </SearchInputStyle>
        </div>

        <div className="ml-auto h-full flex items-center">
          <div className="mr-6 flex items-center">
            <Application className="mr-4" />
            <ScreenIcon
              className="mr-4 cursor-pointer"
              size={23}
              onClick={switchFullscreen}
            />
            <Notice />
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="h-full flex items-center cursor-pointer select-none">
              <Avatar size="large" src={info.avatar} title={info.nickname} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  isSiderOpened: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  switchFullscreen: PropTypes.func.isRequired,
}
