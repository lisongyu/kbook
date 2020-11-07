import React from 'react'
import { useHistory } from 'react-router-dom'

function HookBack(props) {
  let history = useHistory()
  console.log(history)
  return (
    <button onClick={() => {
      history.goBack()
    }}>
      返回上一页hook
    </button>
  )

}



export default HookBack

