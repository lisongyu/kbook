import React, { Component } from 'react'
import { connect } from 'react-redux'

function ReduxDemo(props) {
  let { count, dispatch } = props
  console.log(count)
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(state => state)(ReduxDemo)
