import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { setToken } from '@/utils/token'
import { signIn } from '@/redux/app/appActions'
import { setUserInfo } from '@/redux/user/userActions'
import { register, login, getUserInfo } from '@/api/user'

import { Form, Input, Button, Checkbox } from 'antd'

function Register() {
  const dispatch = useDispatch()
  const [btnLoading, setBtnLoading] = useState(false)
  const history = useHistory()

  const [form] = Form.useForm()

  const onRegister = async values => {
    try {
      setBtnLoading(true)
      await register(values)
      const { token } = await login(values)
      const { info } = await getUserInfo()
      setToken(token)
      await dispatch(signIn())
      await dispatch(setUserInfo(info))
      history.replace('/')
    } catch {
      setBtnLoading(false)
    }
  }

  return (
    <div className="register-form">
      <div className="form-bar">
        <h2 className="title">注册账号</h2>
        <p className="desc">创建一个账号以登录本系统</p>
      </div>

      <Form
        hideRequiredMark
        layout="vertical"
        size="large"
        form={form}
        onFinish={onRegister}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="手机号/邮箱" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="passwordConfirm"
          dependencies={['password']}
          rules={[
            { required: true, message: '请再次确认密码' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次密码输入不一致！'))
              },
            }),
          ]}
        >
          <Input.Password placeholder="请再次确认密码" />
        </Form.Item>

        <Form.Item
          className="mb-0"
          name="remember"
          valuePropName="checked"
          rules={[{ required: true, message: '需要同意协议才能进行注册' }]}
        >
          <Checkbox>
            我同意
            <span className="primary">《用户隐私协议》</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            ghost
            className="w-full"
            size="large"
            type="primary"
            htmlType="submit"
            loading={btnLoading}
          >
            立即注册
          </Button>
          <p className="mt-4 text-gray-500">
            已经有账号了？
            <Link
              to="/user/login"
              className="primary opacity-75 hover:opacity-100 transition cursor-pointer"
            >
              立即登录
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
