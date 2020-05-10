import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import Brick from '../view/Brick'

export default class Content extends Component {

  static propTypes = {
    brickTree: PropTypes.object.isRequired,
    modifyBrick: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired,
    edit: PropTypes.bool
  }

  render() {
    const { brickTree, edit, modifyBrick } = this.props

    return (
      <Layout.Content>
        <Brick brick={brickTree} edit={edit} modifyBrick={modifyBrick} />
      </Layout.Content>
    )
  }

}