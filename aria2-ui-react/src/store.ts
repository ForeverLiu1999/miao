import { Action, AnyAction, createStore, Reducer } from 'redux';
import { produce } from 'immer'

// action type的类型.
type ActionTypes =
| 'updateActiveTasks'
| 'updateWaitingTasks'
| 'updateStoppedTasks'
| 'updateServers'
| 'updateSelectedServerIndex'
| 'updateSelectedTasksGid'

type MyActions = Action<ActionTypes>

// // Reducer<State, AnyAction> reducer函数的泛型类型,State是状态的类型,AnyAction是action的类型
// const reducer: Reducer<State, AnyAction> = (state: State = initState, action: AnyAction ): State => {

//   switch(action.type) {
//     case 'updateActiveTasks':
//       return produce(state, draft => {
//         draft.activeTasks = action.tasks
//       })
//   }
//   return state
// }

export interface State { // 为状态声明类型.
  activeTasks: any[],
  waitingTasks: any[],
  stoppedTasks: any[],
  servers: any[],
  selectedServerIndex: number,
  selectedTasksGid: string[],
}

const initState: State = {
  activeTasks: [],
  waitingTasks: [],
  stoppedTasks: [],
  servers: [],
  selectedServerIndex: 0,
  selectedTasksGid: [],
}

// Reducer<State, AnyAction>    reducer函数的泛型类型，State是状态的类型，AnyAction是action的类型
const reducer: Reducer<State, AnyAction> = (state: State = initState, action: AnyAction): State => {

  switch (action.type) {
    case 'updateActiveTasks':
      return produce(state, draft => {
        draft.activeTasks = action.tasks
      })
  }
  return state
}

const store = createStore(reducer, initState)

export default store