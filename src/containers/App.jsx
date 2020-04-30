import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import { addBrick, delBrick } from '../redux/actions'
import Sider from '../components/layout/Sider'
import './App.css'

const { Header, Content, Footer } = Layout

class App extends Component {

  static propTypes = {
    bricks: PropTypes.array.isRequired,
    addBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired
  }

  render() {
    return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
    )
  }
}

export default connect(
  state => ({bricks: state}),
  {addBrick, delBrick}
)(App);