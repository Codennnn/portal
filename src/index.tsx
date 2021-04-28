import 'antd/dist/antd.css'
import '@icon-park/react/styles/index.less'
import './mock'
// import reportWebVitals from './reportWebVitals'
import './styles/tailwind.css'
import './styles/app.scss'

import { ConfigProvider, Spin } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'
import { persistor, store } from './redux'

// 修改 Window 系统浏览器的滚动条的默认样式，美化效果
void (function styleTheWindowsScrollbar() {
  const IS_WINDOWS = navigator.platform.indexOf('Win') > -1
  if (IS_WINDOWS) {
    const css = `
      ::-webkit-scrollbar {
        width: 8px !important;
        height: 8px !important;
        background-color: transparent;
      }
      
      ::-webkit-scrollbar-thumb {
        background-color: rgba(116, 120, 141, 0.2) !important;
        border: none !important;
        border-radius: 4px !important;
      }
      
      ::-webkit-scrollbar-track-piece {
        background-color: rgb(246, 248, 251) !important;
      }
    `
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    head.appendChild(style)
    style.innerText = css
  }
})()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense
          fallback={
            <div className="suspense">
              <Spin size="large" tip="页面加载中..." />
            </div>
          }
        >
          <ConfigProvider locale={zhCN}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ConfigProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
