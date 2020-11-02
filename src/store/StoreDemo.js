import React from 'react'
import store from './index'
import ReactDOM from 'react-dom'
function render() {
  let state = store.getState();
  ReactDOM.render(
    <div>
      <button onClick={() => {
        store.dispatch({ type: "COUNT_REDUCE" })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        store.dispatch({ type: "COUNT_PLUS" })
      }}
      >+</button>
    </div>,
    document.getElementById('root')
  )
}

let unSubscribe = store.subscribe(render);
render()

// 10秒后取消对state的变化的监听
setTimeout(() => {
  unSubscribe()
}, 10000)
