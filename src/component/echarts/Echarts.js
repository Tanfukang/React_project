import React from 'react';
import axios from 'axios';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Echarts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:[],
      num:[]
    }
  }
    componentDidMount() {
      axios.get('http://120.24.103.165:8088/index')
      .then((res)=> {
        let name =[]
        let num=[]
        for (let i = 0; i < res.data.length; i++) {
          name.push(res.data[i].uname)
          num.push(res.data[i].id)
          this.setState({
            name:name,
            num:num
          })
        }
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            xAxis: {
                data: this.state.name
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.state.num
            }]
        });
      })
      .catch(function (error) {
      })
        // 基于准备好的dom，初始化echarts实例
    }
    render() {
        return (
            <div id="main" style={{ width: 400, height: 600 }}></div>
        );
    }
}

export default Echarts;