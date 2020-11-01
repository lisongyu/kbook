import React, { useState, useEffect, useRef } from 'react'

function Course() {
  const [course, setCourse] = useState("web 高级工程师")
  const [num, setNum] = useState(1)
  let prevCourse = useRef(course)
  let prevNum = useRef(num)

  useEffect(() => {
    console.log('组件挂载或者更新')
    return () => {
      console.log("清理更新前的一些全局内容，或检测组件即将卸载")
    }
  }, [])

  useEffect(() => {
    if (course !== prevCourse.current || num !== prevNum.current) {
      // 如果当前值与上一次值不想等则代表有更新
      console.log('组件更新')
      // 这里注意。ref不会自动更新，需要手动进行更新
      prevCourse.current = course
      prevNum.current = num
    }

  }, [course, num])
  return (
    <div>
      <section>


        选择课程
      <select
          value={course}
          onChange={((target) => {
            setCourse(target.value)
          })}
        >
          <option value="web 全栈工程师">
            web 全栈工程师
        </option>
          <option value="web 高级工程师">
            web 高级工程师
        </option>
        </select>
      </section>
      <div>
        购买数量:
        <input
          type="number" value={num} min={1}
          onChange={({ target }) => {
            setNum(target.value)
          }}
        />
      </div>

    </div>
  )
}



export default function PuseEffect() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show ? <Course /> : ''}
      <button onClick={() => {
        setShow(!show)
      }}>
        {show ? '隐藏课程' : '显示课程'}
      </button>
    </div>
  )
}

