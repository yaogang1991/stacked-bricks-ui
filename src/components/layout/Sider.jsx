import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'

import Dialog from './Dialog'
import { TEST_SANDBOX_ID } from '../../utils/constant'

export default class Sider extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    dialog: PropTypes.object.isRequired,
    addBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired,
    getBrickTree: PropTypes.func.isRequired,
    handleSumbit: PropTypes.func.isRequired,
    
    edit: PropTypes.bool,
    editBrick: PropTypes.func
  }

  handleClick = ({key}) => {
    const { brickTree, addBrick, editBrick, getBrickTree } = this.props
    switch (key) {
      case 'Edit':
        editBrick()
        break
      default:
        const newBlock = {
          name: key,
          page: brickTree.page,
          parentId: brickTree.id,
          leaderId: brickTree.childs.pop()
        }
        addBrick(newBlock)
        getBrickTree(TEST_SANDBOX_ID)
        break
    }
  }

  render() {
    const { dialog, handleSumbit, edit, delBrick } = this.props
    return (
    <Layout.Sider>
      <Menu onClick={this.handleClick}>
        <Menu.Item key="Button" disabled={edit}>Button</Menu.Item>
        <Menu.Divider/>
        <Menu.Item key="Edit">Edit</Menu.Item>
      </Menu>
      <Dialog dialog={dialog} edit={edit} handleSumbit={handleSumbit} delBrick={delBrick} />
    </Layout.Sider>
    )
  }
  
}