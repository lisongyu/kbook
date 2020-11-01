import React, { Component } from 'react'

export default class InputContent extends Component {
  state={
    val:"",
    checked:true
  }
  render() {
    let {val,checked}=this.state;
    return (
      <div>
        <input type="text" defaultValue={val} />
        <input type="checkbox" defaultValue={checked} />
      </div>
    )
  }
}
