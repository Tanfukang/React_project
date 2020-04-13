import React from 'react';
import './Nav.css';
class nav extends React.Component{
  
  render(){
    return <div className="nav">
      <img src={require("../../assets/logo.png")} alt=""/>
      <strong>会员管理系统</strong>
    </div>
  }
}

export default nav;