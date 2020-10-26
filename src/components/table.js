import React from 'react';
import { Button, Table } from 'antd';

class BaseTable extends React.Component {
    render() {
        return (
            <div>
                <div className="tableTool">
                    <Button onClick={()=>this.props.onAdd()} type="primary">新增</Button>
                </div>
                <Table dataSource={this.props.tableList} columns={this.props.tableHead} bordered={true} />
            </div>
        )
    }
}

export default BaseTable;