import React from 'react'
import { withRouter } from 'react-router-dom'
function backBtn(props) {
  let { history } = props
  console.log(history)
  return (
    <button onClick={() => {
      history.goBack()
    }}>
      返回上一页
    </button>
  )
}

let getBack = withRouter(backBtn)
export default getBack

