
import {createStore} from 'redux'

function reducer(state={
  count:1
},action){
  // action.type 代表修改指令，该指令可以自定义
  switch (action.type) {
    case "COUNT_PLUS":
      // 根据action指令,修改state并返回新的state
      return {
       count:state.count +1
      };
      case "COUNT_REDUCE":
        return {
          count:state.count -1
         };
  }
  return state
}
let store =createStore(reducer)

export default store

