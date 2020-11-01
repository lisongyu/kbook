import React, { Component } from 'react'

export default class Popup extends Component {
  render() {
    let {title,children}=this.props;
    return (
      <div className="popup">
        <h2>{title}</h2>
    <div>{children}</div>
      </div>
    )
  }
}
