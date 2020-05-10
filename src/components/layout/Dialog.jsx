import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd'

import DialogForm from '../view/DialogForm'

export default class Dialog extends Component {

  static propTypes = {
    dialog: PropTypes.object.isRequired,
    handleSumbit: PropTypes.func.isRequired,
    delBrick: PropTypes.func.isRequired,
    edit: PropTypes.bool
  }

  render() {
    const { dialog, edit, handleSumbit, delBrick } = this.props
    return (
      <Drawer
        title={dialog.type}
        placement="right"
        closable={false}
        visible={dialog.visible}>
          <DialogForm dialog={dialog} edit={edit} handleSumbit={handleSumbit} delBrick={delBrick} />
      </Drawer>
    )
  }
}