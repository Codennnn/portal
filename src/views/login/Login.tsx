import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setToken } from '@/utils/token'
import { signIn } from '@/redux/app/appActions'
import { setUserInfo } from '@/redux/user/userActions'
import { login, getUserInfo } from '@/api/user'

import { Form, Input, Button, Checkbox } from 'antd'

function Login() {
  const dispatch = useDispatch()
  const [btnLoading, setBtnLoading] = useState(false)
  const history = useHistory()

  const [form] = Form.useForm()
  // MOCK: 自动填入账号和密码
  useEffect(() => {
    form.setFieldsValue({
      username: 'czc12580520@gmail.com',
      password: 'abc123456',
    })
  }, [form])

  const onLogin = async (values: {
    username: string
    password: string
    rememberMe: boolean
  }) => {
    try {
      setBtnLoading(true)
      const { token } = await login(values)
      const { info } = await getUserInfo()

      const tokenExpires = values.rememberMe ? 30 : undefined
      setToken(token, tokenExpires)

      await dispatch(setUserInfo(info))
      await dispatch(signIn())
      history.replace('/')
    } catch {
      setBtnLoading(false)
    }
  }

  return (
    <div className="login-form">
      <div className="form-bar">
        <h2 className="title">登录系统</h2>
        <p className="desc">使用账号和密码登录本系统</p>
      </div>

      <Form
        hideRequiredMark
        layout="vertical"
        size="large"
        form={form}
        onFinish={onLogin}
      >
        <Form.Item
          label={
            <div className="w-full flex items-center justify-between">
              <span>账号</span>
              <span className="primary cursor-pointer">需要帮助？</span>
            </div>
          }
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label={
            <div className="w-full flex items-center justify-between">
              <span>密码</span>
              <span className="primary cursor-pointer">忘记密码？</span>
            </div>
          }
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item className="mb-0" name="rememberMe" valuePropName="checked">
          <Checkbox>记住本账号</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full"
            size="large"
            type="primary"
            htmlType="submit"
            loading={btnLoading}
          >
            立即登录
          </Button>
          <p className="mt-4 text-gray-500">
            还没有账号？
            <Link
              to="/user/register"
              className="primary opacity-75 hover:opacity-100 transition cursor-pointer"
            >
              立即注册
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
