import React, { Component } from 'react'
import { Layout, Menu } from 'antd'

export default class Sider extends Component {

  render() {
    return (
    <Layout.Sider>
      <Menu>
        <Menu.Item>111</Menu.Item>
        <Menu.Item>222</Menu.Item>
      </Menu>
    </Layout.Sider>
    )
  }
  
}