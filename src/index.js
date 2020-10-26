import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
import SearchInput from './components/Search';
import "antd/dist/antd.css";
import BaseTable from './components/table';
import NewDrawer from './components/NewDrawer';
import Btns from './components/Btns';
import './index.css';
//  声明按钮类
const btns = new Btns();
let {Delete,Edit} = btns;

//!import 必须在const 这些js上面
const {Header,Footer,Content} = Layout;

//  页面布局组件
class NewApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTableList:[],  //  源数据表格
      tableList:[], //  列表数据
      tableHead:[
        {title:'姓名',dataIndex:'name',key:'name'},
        {title:'key',dataIndex:'age',key:'age'},
        {title:'住址',dataIndex:'address',key:'address'},
        {
          title: '操作',
          dataIndex: '',
          key: 'action',
          render:(text,record)=>this.NewDelete(record)
        },
      ], //  表头
      visible:false,  //  侧滑开关
      deleteKey:0,  //  删除key
      editForm:{},  //  修改表单
      editId:0, //  修改id
      searchKey:0,  //  搜索缓存
      addForm:{}, //  新增表单
      addVisible:false, //  新增侧滑开关
    }
  }
  //  新删除按钮方法组件
  NewDelete(row) {
    let {key} = row;
    return (
      <div>
        <Delete onClick={()=>this.onDelete(key)}></Delete>
        <Edit onEdit={()=>this.onEdit(row)}></Edit>
      </div>
    )
  }
  //  关闭侧滑的方法
  onClose() {
    this.setState({
      visible:false,
      addVisible:false
    })
  }
  //  删除方法
  onDelete(key){
    let {allTableList,searchKey} = this.state;
    let newArr = allTableList.filter(el=>{
      if(el.key!==key) return el;
    });
    //  表数据与源数据一起删除
    this.setState({
      allTableList:newArr,
      tableList:newArr
    })
    this.onSearch(searchKey)
  }
  //  修改按钮点击
  onEdit(row) {
    let {key} = row;
    this.setState({
      editForm:row,
      visible:true,
      editId:key
    });
  }
  //  搜索方法
  onSearch(val) {
    //  空项搜索源数据
    if(!val) return this.pushAllList();
    //  判断搜索内容是否为key
    let {allTableList} = this.state;
    let newArr = allTableList.filter(el=>{
      let tempStr = el.age.toString();
      if(tempStr.indexOf(val)!==-1) return el;
    });
    this.setState({
      tableList:newArr,
      searchKey:val
    })
  }
  //  输入框内容变化
  onchange() {
  }
  //  源数据复制
  pushAllList() {
    let {allTableList} = this.state;
    this.setState({
      tableList:allTableList
    })
  }
  //  提交表单(改)
  onFinish(e) {
    let {address,name,age} = e;
    let {allTableList,editId} = this.state;
    let newArr = allTableList.map(el=>{
      if(el.key===editId) {
        Object.assign(el,{address,name,age});
      }
      return el;
    });
    this.setState({
      allTableList:newArr,
      visible:false,
    });
    this.onSearch(editId);
  }
  //  遍历生成元数据
  getTableList() {
    let num = 100;
    let data = {
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    };
    let arr = [];
    for(let i=0;i<num;i++) {
      let newData = JSON.parse(JSON.stringify(data));
      newData['age'] = newData['key'] = i+1;
      arr.push(newData);
    }
    this.setState({
      allTableList:arr
    })
  }
  //  新增提交
  onAdd(e) {
    let {address,name,age} = e;
    let {allTableList} = this.state;
    let obj = {
      name,
      age,
      address,
      key:allTableList.length+1
    };
    allTableList.unshift(obj);
    let newArr = JSON.parse(JSON.stringify(allTableList));
    this.setState({
      allTableList:newArr,
      tableList:newArr,
      addVisible:false
    });
  }
  //  点击新增按钮
  onAddBtns() {
    this.setState({
      addVisible:true
    })
  }
  //  生命周期组件渲染后
  async componentDidMount() {
    await this.getTableList();
    await this.pushAllList();
  }
  render() {
    return (
      <Layout>
        <Header><SearchInput onSearch={(val)=>this.onSearch(val)} /></Header>
        <Content><BaseTable tableList={this.state.tableList} onAdd={()=>this.onAddBtns()} tableHead={this.state.tableHead}></BaseTable></Content>
        <Footer>
          <NewDrawer onClose={()=>this.onClose()} onFinish={(val)=>this.onFinish(val)} visible={this.state.visible} editForm={this.state.editForm} onchange={()=>this.onchange}></NewDrawer>
          <NewDrawer onClose={()=>this.onClose()} onFinish={(val)=>this.onAdd(val)} visible={this.state.addVisible} editForm={this.state.addForm} onchange={()=>this.onchange}></NewDrawer>
        </Footer>
      </Layout>
    )
  }
}

ReactDOM.render(
  <NewApp />,
  document.getElementById('root')
);