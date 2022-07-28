import { useCallback, useEffect, useState } from "react";
import Aria2Client from "./aria2-client";
// import Aria2Client from "./aria2-client";

export function useInput(init = "") {
  var [value, setValue] = useState(init);

  function onChange(e: any) {
    var target = e.target;

    setValue(target.value);
  }

  function clear() {
    setValue("");
  }

  var ret = {
    value,
    onChange: useCallback(onChange, [])
    // clear: useCallback(clear, []),
  };

  Object.defineProperty(ret, "clear", {
    value: useCallback(clear, []),
  });

  return ret;
}

export function useTasks(client: Aria2Client, interval: number, state: 'Active' | 'Waiting' | 'Stopped') {
  var [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    var id = setInterval(() => {
      client.ready().then(client => {
        // @ts-ignore
        client['tell' + state]().then(tasks => {
          setTasks(tasks)
        })
      })
    }, interval)


    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    // 因为useEffect是同步的,内部不能写异步函数,所以如果一定要用await可以这样写.
    // (async () => {
    //   (await client.ready()).then(client => {
    //     // ts-ignore
    //     client.tellActive().then(tasks => {
    //       setTasks(tasks)
    //       console.log(tasks)
    //     })
    //   })
    // })()

    client.ready().then(client => {
      // @ts-ignore
      client['tell' + states]().then(tasks => {
        setTasks(tasks)
        console.log(tasks)
      })
    })
  }, []) // 加一个空数组,否则useEffect中在组件加载好时获取任务,获取任务后setTasks更新,但更新又会触发useEffect,所以加一个空数组防止无限触发.

  return tasks
}


export function useTasks2(getTasks: () => Promise<any[]>, interval: number) { // 不关心state的情况下,getTasks函数最终返回一个tasks.
  var [tasks, setTasks] = useState<any[]>([])
  useEffect(() => {
    var unmount = false

    getTasks().then(tasks => { // getTasks会有用时比较久的情况,网络正常时也无须担心,但网络质量差时,因为  组件挂载成功才能getTasks,回调还没有运行,可他所在的组件已经销毁.
      if (!unmount) {
        setTasks(tasks)
      }
    })
    var id = setInterval(() => {
      getTasks().then(tasks => {
        setTasks(tasks)
      })
    }, interval)
    return () => {
      clearInterval(id)
      unmount = true
    }
  }, [])
  return tasks
}