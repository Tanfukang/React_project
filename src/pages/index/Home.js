import React from 'react';
import './Home.css';
import { Layout, Menu, Dropdown } from 'antd';
import {Switch,Route,Redirect} from "react-router-dom"
import { Children } from "../../router/router"
import {
  AppstoreOutlined,
  DownOutlined
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="../../component/userinfo/Userinfo.js">个人信息</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="../../component/changePwd/ChangePwd.js">修改密码</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="../login/Login.js">退出登录</a>
    </Menu.Item>
  </Menu>
);

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      NavList:['全部成员','个人信息','修改密码'],
      user:''
    }
  }
  componentDidMount() {
   let username =  sessionStorage.getItem('username')
   console.log(username)
   this.setState({
      user:username
   })
  }
  render(){
    return <div className="index">
    <Layout>
      <Header>
        <div className="header-left" onClick={this.index.bind(this)}>
          <img src={require("../../assets/logo.png")} alt="" className="logo"/>
          <strong className="title">会员管理系统</strong>
        </div>
        <div className="header-right">
        <img src={require("../../assets/user-ico.png")} alt=""/>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>{this.state.user}<DownOutlined /> </a>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider className="sider">
        <Menu>
          {this.state.NavList.map((item,index)=><Menu.Item key ={index} onClick={this.nav.bind(this)}><AppstoreOutlined />{item}</Menu.Item>)}
        </Menu>
        </Sider>
        <Content>
          <Switch>
            {
              Children.map(router=>
                <Route key={router.pathname} path={router.pathname} component={router.component} />
                )
            }
            <Redirect to="/Home/Echarts" from="/Home" />
          </Switch>
          {/* <Members></Members> */}
          {/* <Userinfo></Userinfo> */}
          {/* <ChangePwd></ChangePwd> */}

        </Content>
      </Layout>
    </Layout>
    </div>
  }
  index(){
    this.props.history.push('/')
  }
  nav(item){
    if(item.key==0){
      this.props.history.push('/Home/Members')
    }
    if(item.key==1){
      this.props.history.push('/Home/Userinfo')
    }
    if(item.key==2){
      this.props.history.push('/Home/ChangePwd')
    }
  }
}

export default Home;