import React, { Component } from 'react'
import Popup from './Popup';
export default class ChildPop extends Component {
  render() {
    return (
      <Popup title="自定义弹框">
        <div>弹框内容</div>
      </Popup>
    )
  }
}
