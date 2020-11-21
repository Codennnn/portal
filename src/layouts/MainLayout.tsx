import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import classNames from 'classnames'
import _debounce from 'lodash.debounce'
import { openSider, closeSider } from '@/redux/app/appActions'

import AppSider from './components/AppSider'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'
import AppFooter from './components/AppFooter'
export interface MainLayoutProps {}

export default function MainLayout() {
  const routes = useSelector(({ app }: any) => app.routes)
  const isSiderOpened = useSelector(({ app }: any) => app.isSiderOpened)
  const dispatch = useDispatch()
  const handle = useFullScreenHandle()
  const [screen, setScreen] = useState(handle.active)

  useEffect(() => {
    const handleSider = _debounce(() => {
      if (window.innerWidth < 1300) {
        dispatch(closeSider())
      } else {
        dispatch(openSider())
      }
    }, 400)
    window.addEventListener('resize', handleSider)
    return () => {
      window.removeEventListener('resize', handleSider)
    }
  }, [dispatch])

  function switchFullscreen() {
    if (!handle.active) {
      handle.enter()
    } else {
      handle.exit()
    }
  }

  return (
    <FullScreen handle={handle} onChange={setScreen}>
      <aside
        className={classNames('app-aside', { 'menu-close': !isSiderOpened })}
      >
        <AppSider isSiderOpened={isSiderOpened} routes={routes} />
      </aside>

      <main
        className={classNames('app-main', { 'menu-close': !isSiderOpened })}
      >
        <header
          className={classNames('app-header', { 'menu-close': !isSiderOpened })}
        >
          <AppHeader
            isSiderOpened={isSiderOpened}
            dispatch={dispatch}
            isFullScreen={screen}
            switchFullscreen={switchFullscreen}
          />
        </header>

        <section className="app-section">
          <AppContent routes={routes} />
        </section>

        <footer className="app-footer">
          <AppFooter />
        </footer>
      </main>
    </FullScreen>
  )
}
