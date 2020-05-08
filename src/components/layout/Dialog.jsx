import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

export default class Dialog extends Component {

  static propTypes = {
    dialog: PropTypes.object.isRequired
    // sumbit: PropTypes.func.isRequired,
    // cancel: PropTypes.func.isRequired
  }

  render() {
    return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        visible={this.props.dialog.visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    )
  }
}