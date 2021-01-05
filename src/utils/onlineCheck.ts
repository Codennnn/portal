import { message } from 'antd'

const messageKey = 'onlineCheck'

window.addEventListener('online', () => {
  message.destroy(messageKey)
})

window.addEventListener('offline', () => {
  message.error({
    content: '网络连接已断开',
    duration: 0,
    key: messageKey,
  })
})
