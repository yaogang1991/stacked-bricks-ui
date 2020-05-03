import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import Brick from '../view/Brick'

export default class Content extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    addBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired
  }

  render() {
    const { brickTree } = this.props

    return (
      <Layout.Content>
        <Brick brick={brickTree}/>
      </Layout.Content>
    )
  }

}