import { message as Message } from 'antd'

const messageKey = 'onlineCheck'

window.addEventListener('online', () => {
  Message.destroy(messageKey)
})

window.addEventListener('offline', () => {
  Message.error({
    content: '网络连接已断开',
    duration: 0,
    key: messageKey,
  })
})
