
function todo(todo = [], action) {
  console.log(action)
  switch (action.type) {
    // 创建todo
    case "TODO_ADD":
      return [
        ...todo,
        {
          id: Date.now(),
          title: action.title,
          done: false
        }
      ]
    // 处理toDo
    case "TODO_DONE":
      todo.forEach(item => {
        if (item.id === action.id) {
          item.done = action.done
        }
      })
      return [...todo]
    // 编辑事物
    case "TODO_EDIT":
      todo.forEach(item => {
        if (item.id === action.id) {
          item.title = action.title
        }
      })
      return [...todo]
    // 移除某一项
    case "TODO_REMOVE":
      todo = todo.filter(item => item.id !== action.id)
      return todo;
    // 清除已完成事件
    case "TODO_REMOVE_DONE":
      todo = todo.filter(item => (!item.done))
      return todo;

  }
  return todo
}



export default todo