import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import { addBrick, delBrick } from '../redux/actions'
import Sider from '../components/layout/Sider'
import Content from '../components/layout/Content'
import './App.css'

// const { Header, Footer } = Layout

class App extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    addBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired
  }

  render() {
    const { brickTree, addBrick, delBrick } = this.props

    return (
    <Layout>
      {/* <Header>Header</Header> */}
      <Layout>
        <Sider>Sider</Sider>
        <Content brickTree={brickTree} addBrick={addBrick} delBrick={delBrick} />
      </Layout>
    </Layout>
    )
  }
}

export default connect(
  state => ({ brickTree: state }),
  {addBrick, delBrick}
)(App);