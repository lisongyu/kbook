import React, { Component } from 'react'
import {Consumer} from '../context'
export default class Child extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(val)=>{
            return <p>
              {val.info}
            </p>
          }}
        </Consumer>
      </div>
    )
  }
}
