import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '@/redux'
import { signOut } from '@/redux/app/app-actions'
import { getToken } from '@/utils/token'
import { hasRoutePermission } from '@/utils/util'

function createRoutes(routes, permissions?: string[]) {
  return routes.map(
    ({
      path,
      title,
      exact,
      children,
      component: Component,
      permissions: routePermission,
    }) => {
      if (!hasRoutePermission(routePermission, permissions)) {
        return null
      }
      if (children?.length > 0) {
        return createRoutes(children)
      }
      return (
        <Route key={path} exact={exact || false} path={path}>
          <Helmet>
            <title>
              {title
                ? `${title} - ${process.env.REACT_APP_PAGE_TITLE}`
                : process.env.REACT_APP_PAGE_TITLE}
            </title>
          </Helmet>
          <Component />
        </Route>
      )
    }
  )
}

function AppContent({ routes }) {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const permissions = useTypedSelector(({ user }) => user.info?.permissions)

  useEffect(() => {
    if (!getToken()) {
      dispatch(signOut())
      history.replace('/')
    }
  }, [location, dispatch, history])

  return (
    <Switch>
      {createRoutes(routes, permissions)}
      <Redirect to="/404" />
    </Switch>
  )
}

AppContent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default AppContent
