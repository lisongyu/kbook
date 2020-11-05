import React, { Fragment } from 'react'

import Title from './todo/Title';
import Create from './todo/Create';
import Todos from './todo/Todos';
import State from './todo/State';
import { useSelector } from 'react-redux';
function App() {
  let data = useSelector(state => state).todo
  console.log('我是值')
  console.log(data)
  return (
    <div id="todoapp">
      <Title />
      <div className="content">
        <Create />
        {
          data.length > 0 ? <Fragment><Todos />
            <State /></Fragment > : ""
        }
      </div>
    </div>
  )
}

export default App
