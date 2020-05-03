import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CloseCircleOutlined } from '@ant-design/icons'

export default class Brick extends Component {

  static propTypes = {
    brick: PropTypes.object.isRequired
  }

  render() {
    const { brick } = this.props
    const layout = brick.blocks.map((brick, index) => <Brick brick={brick} key={index}/>)
    
    switch (brick.name) {
      case 'div':
        return (
          <div>
            {/* <CloseCircleOutlined /> */}
            {brick.content}
            {layout}
          </div>
        )
      case 'p':
        return (
          <p>
            {/* <CloseCircleOutlined style={{'cursor': 'pointer'}}/> */}
            {brick.content}
            {layout}
          </p>
        )
      default:
        return <div></div>
    }
  }
}