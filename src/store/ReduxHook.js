import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

function ReduxDemo(props) {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => {
        dispatch({ type: "COUNT_REDUCE" })
      }}>-</button>
      {count}
      <button onClick={() => {
        dispatch({ type: "COUNT_PLUS" })
      }}
      >+</button>
    </div>
  )
}



export default ReduxDemo
