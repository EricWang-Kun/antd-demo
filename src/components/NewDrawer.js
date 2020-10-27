import React from 'react';
import { Drawer,Input,Form,Button } from 'antd';

class NewDrawer extends React.Component {
    render() {
        return (
            <div>
                <Drawer title="Basic Drawer"
                        placement="right"
                        closable={false}
                        width={500} 
                        destroyOnClose={true}
                        onClose={this.props.onClose}
                        visible={this.props.visible}>
                    <Form   initialValues={this.props.editForm}
                            scrollToFirstError={true}
                            onFinish={this.props.onFinish}>
                        <Form.Item
                            label="name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input value={this.props.editForm.name} />
                        </Form.Item>
                        <Form.Item
                            label="age"
                            name="age"
                            rules={[{ required: true, message: 'Please input your age!' }]}
                        >
                            <Input value={this.props.editForm.age} />
                        </Form.Item>
                        <Form.Item
                            label="address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your address!' }]}
                        >
                            <Input value={this.props.editForm.address} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" >提交</Button>
                            <Button onClick={this.props.onClose}>取消</Button>
                        </Form.Item>
                    </Form>
                </Drawer>
            </div>
        )
    }
}

export default NewDrawer;