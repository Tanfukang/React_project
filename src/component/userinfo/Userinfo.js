import React from 'react';
import './Userinfo.css';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import axios from 'axios';

class Userinfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      id:'',
      users:'',
      pwd:'',
    }
  }
  componentDidMount(){ 
   let name = sessionStorage.getItem('username')
   console.log(name)
    axios.get(`http://120.24.103.165:8088/info?uname=${name}`)
    .then((res)=> {
      console.log(res.data)
      this.setState({
        id:res.data[0].id,
        users:res.data[0].uname,
        pwd:res.data[0].password
      })
    })
    .catch(function (error) {
    })
  }

  render(){
    return <div className="userinfo">
      <div className="user-header">
        <strong>首页</strong> > <span>个人信息</span>
      </div>
      <div className="user-text">
        <div className="user-id">
          <Row>
            <Col span={3} className="text-right">编号</Col>
            <Col span={21}><Input placeholder="Basic usage" value={this.state.id} disabled/></Col>
          </Row>
        </div>
        <div className="user-name">
          <Row>
            <Col span={3} className="text-right">账户</Col>
            <Col span={21}><Input placeholder="Basic usage"  value={this.state.users} disabled/></Col>
          </Row>
        </div>
        <div className="user-pwd">
          <Row>
            <Col span={3} className="text-right">密码</Col>
            <Col span={21}><Input placeholder="Basic usage"  value={this.state.pwd} disabled/></Col>
          </Row>
        </div>
      </div>
    </div>
  }
  
}

export default Userinfo;