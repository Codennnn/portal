import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu } from 'antd'

import { useTypedSelector } from '@/redux'
import { hasRoutePermission } from '@/utils/util'

function subMenuKey(children) {
  return children.map(({ path }) => path).join('')
}

/**
 * 生成单个菜单项
 */
function renderMenuItem(
  { path, title, icon: MenuIcon, hidden, permissions: routePermission },
  permissions
) {
  return hidden || !hasRoutePermission(routePermission, permissions) ? null : (
    <Menu.Item
      key={path}
      icon={
        MenuIcon && <MenuIcon className="anticon" size={22} strokeWidth={3.6} />
      }
    >
      <Link to={path}>
        <span>{title}</span>
      </Link>
    </Menu.Item>
  )
}

renderMenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    $$typeof: PropTypes.symbol,
    displayName: PropTypes.string,
    propTypes: PropTypes.object,
    render: PropTypes.func,
  }),
  hidden: PropTypes.bool,
  permissions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.func,
  ]),
}
renderMenuItem.defaultProps = {
  icon: null,
  hidden: false,
  permissions: undefined,
}

/**
 * 生成嵌套子菜单
 */
function renderSubMenu({ title, children, icon: MenuIcon }, permissions) {
  return (
    <Menu.SubMenu
      key={subMenuKey(children)}
      title={title}
      icon={
        MenuIcon && <MenuIcon className="anticon" size={22} strokeWidth={3.6} />
      }
    >
      {children?.length > 0 &&
        children.map(item =>
          item.children?.length > 0
            ? renderSubMenu(item, permissions)
            : renderMenuItem(item, permissions)
        )}
    </Menu.SubMenu>
  )
}
renderSubMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  icon: PropTypes.shape({
    $$typeof: PropTypes.symbol,
    displayName: PropTypes.string,
    propTypes: PropTypes.object,
    render: PropTypes.func,
  }),
}
renderSubMenu.defaultProps = {
  icon: null,
}

export default function AppSider({ routes, isSiderOpened }) {
  const { pathname } = useLocation()
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const permissions = useTypedSelector(({ user }) => user.info?.permissions)

  useEffect(() => {
    setSelectedKeys([pathname])
  }, [pathname])

  // 初始时设置打开的嵌套菜单，避免页面刷新时嵌套菜单关闭
  // useEffect(
  //   () => {
  //     function findOpenKeys(theRoutes) {
  //       const keys = []
  //       const justFind = r =>
  //         r.some(({ path, children }) => {
  //           let hasFoundPath = path === pathname

  //           if (children?.length > 0) {
  //             hasFoundPath = children.some(
  //               ({ path: routePath, children: childRoutes }) => {
  //                 if (childRoutes?.length > 0) {
  //                   const isFound = justFind(childRoutes)
  //                   if (isFound) {
  //                     keys.push(subMenuKey(childRoutes))
  //                   }
  //                   return isFound
  //                 }
  //                 return routePath === pathname
  //               }
  //             )
  //             if (hasFoundPath) {
  //               keys.push(subMenuKey(children))
  //             }
  //           }

  //           return hasFoundPath
  //         })
  //       justFind(theRoutes)
  //       return keys
  //     }
  //     // FIXME: 此处延迟执行，否则可能由于菜单还没渲染完毕，会出现菜单组无法正常打开的情况，尚未找到解决方法
  //     setTimeout(() => {
  //       if (isSiderOpened) {
  //         setOpenKeys(findOpenKeys(routes))
  //       }
  //     }, 500)
  //   },
  //   /* eslint-disable-next-line */
  //   [isSiderOpened],
  // )

  const onOpenChange = keys => {
    setOpenKeys(keys)
  }

  return (
    <PerfectScrollbar options={{ suppressScrollX: true }}>
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        inlineCollapsed={!isSiderOpened}
        onOpenChange={onOpenChange}
      >
        {routes.length > 0 &&
          routes.map(item => {
            if (item.children?.length > 0) {
              return renderSubMenu(item, permissions)
            }
            return renderMenuItem(item, permissions)
          })}
      </Menu>
    </PerfectScrollbar>
  )
}

AppSider.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isSiderOpened: PropTypes.bool.isRequired,
}
