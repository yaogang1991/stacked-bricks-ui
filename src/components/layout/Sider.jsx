import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'

import Dialog from './Dialog'

export default class Sider extends Component {

  static propTypes = {
    dialog: PropTypes.object.isRequired,
    clickMenu: PropTypes.func.isRequired,
    // sumbit: PropTypes.func.isRequired,
    // cancel: PropTypes.func.isRequired
  }

  handleClick = ({ item, key, keyPath, domEvent }) => {
    this.props.clickMenu(key)
  }

  render() {
    const { dialog } = this.props
    return (
    <Layout.Sider>
      <Menu onClick={this.handleClick}>
        <Menu.Item key="button">Button</Menu.Item>
      </Menu>
      <Dialog dialog={dialog}/>
    </Layout.Sider>
    )
  }
  
}