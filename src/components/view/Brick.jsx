import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd' 
// import { CloseCircleOutlined } from '@ant-design/icons'

export default class Brick extends Component {

  static propTypes = {
    brick: PropTypes.object.isRequired,
    modifyBrick: PropTypes.func.isRequired,
    edit: PropTypes.bool,
  }

  handleClick = (event) => {
    const {edit, modifyBrick} = this.props
    if (edit) {
      let data = {
        id: event.target.id,
        name: event.target.name
      }
      modifyBrick(data)
    }
  }

  render() {
    const { brick, edit, modifyBrick } = this.props
    const layout = brick.blocks.map((brick, index) => <Brick brick={brick} key={index} edit={edit} modifyBrick={modifyBrick} />)
    
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
          <Button name="Button" id={this.props.brick.id} onClick={this.handleClick}>{brick.content}</Button>
        )
      default:
        return <div>Default</div>
    }
  }
}