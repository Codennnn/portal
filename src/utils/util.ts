import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

/**
 * 计算相对时间
 */
export function relativeTime(time) {
  const ONE_MINUTE = 60
  const ONE_HOUR = 60 * 60
  const ONE_DAY = 60 * 60 * 24
  const ONE_MONTH = 60 * 60 * 24 * 30

  let date: Dayjs

  if (typeof time === 'number') {
    if (String(time).length === 13) {
      date = dayjs(time)
    } else {
      date = dayjs.unix(time)
    }
  }
  if (typeof time === 'string') {
    date = dayjs(time)
  }

  const now = dayjs()
  const diff = now.diff(date!, 'second')

  if (diff < ONE_MONTH) {
    if (diff < ONE_HOUR) {
      if (diff < ONE_MINUTE) {
        if (diff < ONE_MINUTE / 2) {
          return '刚刚'
        }
        return `${diff}秒前`
      }
      return `${(diff / 60).toFixed(0)}分钟前`
    }
    if (diff <= ONE_DAY) {
      return `${(diff / 60 / 60).toFixed(0)}小时前`
    }
    return `${(diff / 60 / 60 / 24).toFixed(0)}天前`
  }
  return date!.format('YYYY-MM-DD')
}

/**
 * 是否为数组
 */
export function isArray(value) {
  return Array.isArray(value)
}

/**
 * 是否为函数
 */
export function isFunction(value) {
  return typeof value === 'function'
  // 或者
  // return value && Object.toString.call(value) === '[object Function]'
}

/**
 * 检测是否拥有路由权限
 */
export function hasRoutePermission(
  routePermission,
  permissions: string[] = []
) {
  if (permissions.includes('admin')) {
    return true
  }

  if (isArray(routePermission)) {
    return routePermission.every((el) => permissions.includes(el))
  }

  if (isFunction(routePermission)) {
    return routePermission(permissions)
  }

  // 默认是具有权限的，所以返回 true
  return true
}
