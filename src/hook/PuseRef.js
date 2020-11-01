import React, { useRef } from 'react'

export default function PuseRef() {
  let elP = useRef()
  return (
    <div>
      <p ref={elP}> 欢迎学习开课吧WEB课程</p>
      <button onClick={() => {
        console.log(elP.current)
      }}>显示全程</button>
    </div>
  )
}
