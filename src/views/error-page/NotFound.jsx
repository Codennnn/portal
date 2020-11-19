import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
import { ReactComponent as NotFoundImg } from '@img/error_404.svg'

function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <NotFoundImg style={{ width: '520px' }} />
      <h2 className="text-3xl font-bold">
        Oops! Why you’re here?
      </h2>
      <p className="my-4 text-center" style={{ width: '520px' }}>
        We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted or never existed.
      </p>
      <Link replace to="/">
        <Button type="primary" size="large">Back To Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
