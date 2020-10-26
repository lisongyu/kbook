import React, { Component } from 'react'

export default class AppState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '开课吧',
      age: 9,
      off: true
    }
  }
  render() {
    let { name, age, off } = this.state
    console.log('渲染')
    return (

      <div>
        <p>姓名:{name}</p>
        <p>年龄:{age}</p>
        <button onClick={() => {
          this.setState(() => {
            return (
              {
                age: ++age
              }
            )
          })
          console.log(age)
        }}>过了一年</button>
        <button onClick={() => {
          if (off) {
            this.setState({
              name: '北京开课吧科技有限公司'
            })
          } else {
            this.setState({
              name: '开课吧'
            })
          }
          console.log(off)
          this.setState({
            off: !off
          })

        }}>
          {off ? "显示全称" : "显示简称"}
        </button>
      </div>
    )
  }
}
