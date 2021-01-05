import React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { useTypedSelector } from '@/redux'
import UserLayout from '@/layouts/UserLayout'
import MainLayout from '@/layouts/MainLayout'
import NotFound from '@/views/error-page/NotFound'

function AppRouter() {
  const isLogin = useTypedSelector(({ app }) => app.isLogin)
  const routeMode = {
    history: BrowserRouter,
    hash: HashRouter,
  }
  const Router: React.ElementType = routeMode[process.env.REACT_APP_ROUTER_MODE]

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={isLogin ? '/index' : '/user/login'} />
        {isLogin ? (
          <Redirect from="/user" to="/" />
        ) : (
          <Route path="/user" component={UserLayout} />
        )}

        <Route path="/404" component={NotFound} />

        {isLogin ? (
          <Route component={MainLayout} />
        ) : (
          <Redirect to="/user/login" />
        )}
      </Switch>
    </Router>
  )
}

export default function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}
