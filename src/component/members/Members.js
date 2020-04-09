import React from 'react';
import './Members.css';
import { Table } from 'antd';
import { Button } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: '编号',
    dataIndex: 'this.state.uname',
  },
  {
    title: '姓名',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: '密码',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: '操作',
    dataIndex: 'btn',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    btn:<div>
      <Button>编辑</Button> <Button type="primary" danger>删除</Button>
    </div>
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    btn:<div>
    <Button>编辑</Button> <Button type="primary" danger>删除</Button>
  </div>
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    btn:<div>
    <Button>编辑</Button> <Button type="primary" danger>删除</Button>
  </div>
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    btn:<div>
    <Button>编辑</Button> <Button type="primary" danger>删除</Button>
  </div>
  },
];
let list = [
  {
    key:'',
    id:'',
    name:'',
    pwd:'',
    btn:<div>
      <Button>编辑</Button> <Button type="primary" danger>删除</Button>
    </div>

  }
]
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

class Members extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      info:[],
      tablelist:'',
      List : [
        {
          title: '编号',
          dataIndex: 'id',
        },
        {
          title: '姓名',
          dataIndex: 'uname',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
          title: '密码',
          dataIndex: 'password',
          sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: '操作',
          dataIndex: 'btn',
        },
      ]
    }
  }
  componentDidMount(){ 
    axios.get('http://120.24.103.165:8088/index')
    .then((res)=> {
      for (let i = 0; i< res.data.length; i++) {
        res.data[i].key =res.data[i].id
        res.data[i].btn =<div><Button>编辑</Button>  <Button type="primary" danger>
        删除
      </Button></div>
      }
      this.setState({
        tablelist:res.data
      });
    })
    .catch(function (error) {
    })
  }
  render(){
    return <div className="members">
      <div className="mem-header">
        <strong>首页</strong><span> > 全部成员</span>
      </div>
      <Table columns={this.state.List} dataSource={this.state.tablelist} onChange={onChange} pagination={ false }  className="table"/>
      <div className="add-btn">
      <Button type="primary" className="add">
       新增
      </Button>
      </div>
    </div>
  }
}

export default Members;