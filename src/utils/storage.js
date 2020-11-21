class LocalStorage {
  constructor(options) {
    this.options = options

    if (!('localStorage' in window)) {
      console.error('该浏览器不支持本地存储')
    }
  }

  set(name, value, expire) {
    const data = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire : null,
    })
    window.localStorage.setItem(`${this.options.namespace}${name}`, data)
  }

  get(name, defaultValue = null) {
    const item = window.localStorage.getItem(`${this.options.namespace}${name}`)
    if (item) {
      try {
        const data = JSON.parse(item)

        if (data.expire === null || data.expire >= new Date().getTime()) {
          return data.value
        }

        this.remove(name)
      } catch {
        return defaultValue
      }
    }
    return defaultValue
  }

  remove(name) {
    return window.localStorage.removeItem(`${this.options.namespace}${name}`)
  }
}

export default new LocalStorage({
  namespace: 'react_app_',
})
