import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'

export default class DialogForm extends Component {

    static propTypes = {
        dialog: PropTypes.object.isRequired,
        handleSumbit: PropTypes.func.isRequired,
        delBrick: PropTypes.func.isRequired,
        edit: PropTypes.bool
    }

    handleDel = () => {
        const { dialog, delBrick } = this.props
        delBrick(dialog.id)
    }

    render() {
        const { dialog, edit, handleSumbit } = this.props
        console.log('dialog: ' + JSON.stringify(dialog))
        switch (dialog.type) {
            case 'Button':
                return (
                    <div>
                        <Form layout="vertical" onFinish={handleSumbit}>
                            {/* <Form.Item label="Id" name="id" >
                                <label value={dialog.id}>{dialog.id}</label>
                            </Form.Item> */}
                            <Form.Item
                                label="Content"
                                name="content"
                                rules={[{ required: true, message: 'Please input text!' }]} >
                                    <Input />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Form>
                        <Button type="danger" style={{display: edit ? 'inline' : 'none'}} onClick={this.handleDel} >Delete</Button>
                    </div>
                )
            default:
                return (<p>default</p>)
        }
    }
}