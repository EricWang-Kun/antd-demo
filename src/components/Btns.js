import React from 'react';
import { Button } from 'antd';

class Btns extends React.Component {
    Delete(props) {
        return (
            <Button onClick={props.onClick} className="deleteBtns" danger>删除</Button>
        );
      }
      //  修改按钮基础函数组件
    Edit(props) {
        return (
            <Button onClick={props.onEdit} className="editBtns" >修改</Button>
        )
      }
}

export default Btns;