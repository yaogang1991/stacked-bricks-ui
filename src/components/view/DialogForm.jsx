import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'antd'

export default class DialogForm extends Component {

    static propTypes = {
        type: PropTypes.string.isRequired,
        handleSumbit: PropTypes.func.isRequired
    }

    render() {
        const { type, handleSumbit } = this.props
        switch (type) {
            case 'Button':
                return (
                    <Form layout="vertical" onFinish={handleSumbit}>
                        <Form.Item
                        label="Content"
                        name="content"
                        rules={[{ required: true, message: 'Please input text!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                )
            default:
                return (<p>default</p>)
        }
    }
}