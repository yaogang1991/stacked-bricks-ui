import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import { addBrick, delBrick, getBrickTree, modifyBrick } from '../redux/actions'
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
    modifyBrick: PropTypes.func.isRequired,

    dialog: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.getBrickTree(TEST_SANDBOX_ID)
  }

  handleSumbit = (values) => {
    console.log('handleSumbit v:' + JSON.stringify(values))
    const {brickTree, modifyBrick} = this.props
    let brick = brickTree.blocks.pop()
    brick.content = values.content
    modifyBrick(brick)
    getBrickTree(TEST_SANDBOX_ID)
  }

  render() {
    const { brickTree, addBrick, delBrick, dialog } = this.props

    return (
    <Layout>
      {/* <Header>Header</Header> */}
      <Layout>
        <Sider brickTree={brickTree} dialog={dialog} addBrick={addBrick} handleSumbit={this.handleSumbit}>Sider</Sider>
        <Content brickTree={brickTree} addBrick={addBrick} delBrick={delBrick} />
      </Layout>
    </Layout>
    )
  }
}

export default connect(
  state => ({ 
    brickTree: state.brickTree,
    dialog: state.dialog
  }),
  {addBrick, delBrick, getBrickTree, modifyBrick }
)(App);