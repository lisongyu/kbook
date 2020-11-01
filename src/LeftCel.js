import React, { Component } from 'react'

export default class LeftCel extends Component {
  constructor(props) {
    super(props)
    console.log("1-组件初始化")
    this.state = {

    }
  }



  componentWillMount() {
    console.log('组件即将进行挂载')
  }
  componentDidMount() {
    console.log('组件已经挂载完毕')
  }

  render() {
    console.log("4-根据return生成虚拟dom")
    return (
      <div>
        hello react
      </div>
    )
  }
}
