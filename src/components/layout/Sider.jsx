import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'

import Dialog from './Dialog'

export default class Sider extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    dialog: PropTypes.object.isRequired,
    addBrick: PropTypes.func.isRequired,
    handleSumbit: PropTypes.func.isRequired,
    // cancel: PropTypes.func.isRequired
  }

  handleClick = ({key}) => {
    const {brickTree, addBrick} = this.props
    const newBlock = {
      name: key,
      page: brickTree.page,
      parentId: brickTree.id,
      leaderId: brickTree.childs.pop()
    }
    addBrick(newBlock)
  }

  render() {
    const { dialog, handleSumbit } = this.props
    return (
    <Layout.Sider>
      <Menu onClick={this.handleClick}>
        <Menu.Item key="Button">Button</Menu.Item>
        <Menu.Item key="Other">Other</Menu.Item>
      </Menu>
      <Dialog dialog={dialog} handleSumbit={handleSumbit}/>
    </Layout.Sider>
    )
  }
  
}