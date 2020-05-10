import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import { addBrick, delBrick, getBrickTree, submitBrick, editBrick, modifyBrick } from '../redux/actions'
import { TEST_SANDBOX_ID } from '../utils/constant'
import Sider from '../components/layout/Sider'
import Content from '../components/layout/Content'
import './App.css'

// const { Header, Footer } = Layout

class App extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    addBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired,
    getBrickTree: PropTypes.func.isRequired,
    submitBrick: PropTypes.func.isRequired,

    dialog: PropTypes.object.isRequired,

    edit: PropTypes.bool.isRequired,
    editBrick: PropTypes.func.isRequired,
    modifyBrick: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getBrickTree(TEST_SANDBOX_ID)
  }

  handleSumbit = (values) => {
    const { brickTree, submitBrick, dialog } = this.props
    let index = brickTree.childs.indexOf(dialog.id)
    let brick = brickTree.blocks[index]
    brick.content = values.content
    submitBrick(brick)
    getBrickTree(TEST_SANDBOX_ID)
  }

  render() {
    const { brickTree, addBrick, delBrick, dialog, edit, editBrick, getBrickTree, modifyBrick } = this.props

    return (
    <Layout>
      {/* <Header>Header</Header> */}
      <Layout>
        <Sider 
          brickTree={brickTree} 
          dialog={dialog} 
          addBrick={addBrick} 
          getBrickTree={getBrickTree}
          handleSumbit={this.handleSumbit}
          edit={edit}
          editBrick={editBrick} >
            Sider
        </Sider>
        <Content 
          brickTree={brickTree} 
          modifyBrick={modifyBrick} 
          delBrick={delBrick}
          edit={edit} />
      </Layout>
    </Layout>
    )
  }
}

export default connect(
  state => ({ 
    brickTree: state.brickTree,
    dialog: state.dialog,
    edit: state.edit
  }),
  { addBrick, delBrick, getBrickTree, submitBrick, editBrick, modifyBrick }
)(App);