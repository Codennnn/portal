import React from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import UserLayout from '@/layouts/UserLayout'
import MainLayout from '@/layouts/MainLayout'
import NotFound from '@/views/error-page/NotFound'
import './App.css'

function AppRouter() {
  const isLogin = useSelector(({ app }) => app.isLogin)
  const routeMode = {
    history: BrowserRouter,
    hash: HashRouter,
  }
  const Router = routeMode[process.env.REACT_APP_ROUTER_MODE]

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

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}

export default App
