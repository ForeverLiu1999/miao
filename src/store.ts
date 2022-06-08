import { Action, AnyAction, applyMiddleware } from 'redux'
import { createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import { produce }  from 'immer'
import { Reducer } from 'redux'


type Actions =
  | 'setActiveTasks'
  | 'setWaitingTasks'
  | 'setStoppedTasks'
  | 'setGlobalStat'
  | 'clearSelectedTasks'
  | 'setServers'




export interface State {
  globalStat: any,
  activeTasks: any[],
  waitingTasks: any[],
  stoppedTasks: any[],
  selectedTaskGids: string[],
  servers: any[],
  selectedServerIndex: number,
}

const initState: State = {
  globalStat: {},
  activeTasks: [],
  waitingTasks: [],
  stoppedTasks: [],
  selectedTaskGids: [],
  servers: [],
  selectedServerIndex: 0,
}

const reducer: Reducer<State, AnyAction> = function(state = initState, action): State {

  switch (action.type) {
    case 'setGlobalStat':
      return produce(state, draft => {
        draft.globalStat = action.globalStat
      })
    case 'setActiveTasks':
      return produce(state, draft => {
        draft.activeTasks = action.tasks
      })
    case 'setWaitingTasks':
      return produce(state, draft => {
        draft.waitingTasks = action.tasks
      })
    case 'setStoppedTasks':
      return produce(state, draft => {
        draft.stoppedTasks = action.tasks
      })
    // case 'setStoppedTasks':
    //   return produce(state, draft => {
    //     draft.stoppedTasks = action.tasks
    //   })
    case 'setServers':
      return produce(state, draft => {
        draft.servers = action.servers
      })
    case 'setSelectedServerIndex':
      return produce(state, draft => {
        draft.selectedServerIndex = action.index
      })
    default:
      return state
  }
}

const store = createStore(reducer, initState, applyMiddleware(reduxThunk))


export default store
