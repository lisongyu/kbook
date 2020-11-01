import React, { Component } from 'react'
import Child from './Child';
import {Provider} from '../context'
export default class ContextDemo extends Component {
  render() {
    return (
      <Provider value={{
        info:"要传递给子级23的数据"
      }}>
        <Child />
      </Provider>
    )
  }
}
