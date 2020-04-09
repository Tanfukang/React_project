import React from 'react';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Nav from '../../component/nav/Nav';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const NormalLoginForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
}
class Login extends React.Component{
  
  render(){
    return <div className="login">
        <Nav></Nav>
        <div className="login-box">
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={this.login}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的用户名!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit"  className="login-form-button" onClick={this.login}>登陆</Button>
        <Button block className="register-form-button"  onClick={this.register}>注册</Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  }
  login=(item)=>{
   if(item.remember==true){
    axios.get(
      `http://120.24.103.165:8088/login?uname=${
        item.username
      }&upass=${item.password}`
    )
    .then(res => {
      if (res.data === 0) {
        message.warning('登陆失败')
        return false
      }else if(res.data === 1) {
        sessionStorage.setItem('username',item.username)
        message.success('登陆成功')
        setTimeout(()=>{
          this.props.history.push('/')
        },1000)
      }else {
        message.error('提交错误')
        return false
      }
    })
    .catch(function(error) {
      console.log(error)
    })
   }
  }
  register=()=>{
    if (sessionStorage.getItem('user') == null) {
      this.props.history.push('/Register')
    }
  }
}

export default Login;