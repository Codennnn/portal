import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import { ReactComponent as NotFoundImg } from '@/assets/error_404.svg'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <NotFoundImg style={{ width: '520px' }} />

      <h2 className="text-3xl font-bold">哎呀</h2>
      <p className="my-4 text-center" style={{ width: '520px' }}>
        你要前往的页面未找到
      </p>

      <Link replace to="/">
        <Button type="primary" size="large">
          回到首页
        </Button>
      </Link>
    </div>
  )
}
