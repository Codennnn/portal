import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider, Spin } from 'antd'
import { HelmetProvider } from 'react-helmet-async'
import zhCN from 'antd/es/locale/zh_CN'
import { store, persistor } from '@/redux/createStore'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css'
import './index.css'
import App from './App'

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
reportWebVitals()
