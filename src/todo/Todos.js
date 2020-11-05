import React from 'react'
import Li from './Li'
import { useSelector } from 'react-redux';
export default function Todos() {
  let data = useSelector(state => state).todo
  return (
    <div>
      <ul id="todo-list">
        {data.map((item) => {
          return <Li key={item.id}{...item} />
        })}
      </ul>
    </div>
  )
}
