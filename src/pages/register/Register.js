import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Nav from '../../component/nav/Nav';
import './Register.css';
import axios from 'axios';


class Register extends React.Component{
  
  render(){
    return <div className="register">
      <Nav></Nav>
      <div className="reg-box">
      <Form
      // {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={this.register}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        // label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的用户名!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        // label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit" className="reg-btn">
          注册
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  }
  register=(item)=>{
    axios.get(`http://120.24.103.165:8088/register?uname=${item.username}&password=${item.password}`)
            .then(res => {
              if (res.data == 2) {
                message.warning('注册失败，该用户名已存在')
                return false
              } else if (res.data == 1) {
                message.success('注册成功')
                setTimeout(() => {
                  this.props.history.push('/Login')
                }, 1000)
              } else {
                this.$message.error('提交错误')
                return false
              }
            })
  }
}

export default Register;