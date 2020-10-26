import React, { Component } from 'react'
import data from './data'
import Dl from './Dl'
export default class App extends Component {
  state ={
    openName:''
  }
  changeOpen=(name)=>{
    this.setState({openName:name})
  }
  render() {
    let {openName}=this.state
    return (
      <div className="friend-list">
        {/* 注意data是一个对象,而非数组*/}
        {
          Object.keys(data).map(itemName=>{
            {/* key的作用和取值在文中详细介绍*/}
            return <Dl 
              key={itemName}
              dlData={data[itemName]}
              name = {itemName}
              openName = {openName}
              changeOpen = {this.changeOpen}
            
            />
          })
        }
        {/* <Dl /> */}
      </div>
    )
  }
}

