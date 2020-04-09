import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages//index/Home';
import Members from '../component/members/Members';
import Userinfo from '../component/userinfo/Userinfo';
import ChangePwd from '../component/changePwd/ChangePwd';
import Echarts from '../component/echarts/Echarts';

export const router = [
  {
   pathname:'/Login' ,
   component: Login
  },
  {
    pathname:'/Register' ,
    component: Register
  },
  {
    pathname:'/Home' ,
    component: Home
  }
]
export const Children = [
  {
   pathname:'/Home/Members' ,
   component: Members
  },
  {
    pathname:'/Home/Userinfo' ,
    component: Userinfo
  },
  {
    pathname:'/Home/ChangePwd' ,
    component: ChangePwd
  },
  {
    pathname:'/Home/Echarts' ,
    component: Echarts
  }
]