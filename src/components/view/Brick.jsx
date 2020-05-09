import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd' 
// import { CloseCircleOutlined } from '@ant-design/icons'

export default class Brick extends Component {

  static propTypes = {
    brick: PropTypes.object.isRequired
  }

  render() {
    const { brick } = this.props
    const layout = brick.blocks.map((brick, index) => <Brick brick={brick} key={index} />)
    
    switch (brick.name) {
      case 'div':
        return (
          <div style={brick.style}>
            {/* <CloseCircleOutlined /> */}
            {brick.content}
            {layout}
          </div>
        )
      case 'p':
        return (
          <p  style={brick.style}>
            {/* <CloseCircleOutlined style={{'cursor': 'pointer'}}/> */}
            {brick.content}
            {layout}
          </p>
        )
      case 'Button':
        return (
          <Button>{brick.content}</Button>
        )
      default:
        return <div>Default</div>
    }
  }
}