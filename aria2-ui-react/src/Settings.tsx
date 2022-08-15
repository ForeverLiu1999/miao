import { memo, useCallback, useEffect, useState } from "react"
import { IProps } from "./NewTask"

var aria2OptionNameMap: any = {
  'always-resume': '始终恢复',
  'max-download-limit': '最大下载速度',

}

function Settings({ client }: IProps) {
  console.log('settings render')
  var [option, setOption] = useState<any>(null)


  // var { pending, value: options } = useAsync(useCallback(async () => {
  //   await client.ready()
  //   // @ts-ignore
  //   var options = await client.getGlobalOption()

  //   setOption(options)

  //   return options
  // }, []))

  useEffect(() => {
    // @ts-ignore
    client.getGlobalOption().then(options => {
      setOption(options)
    })
  }, [])

  async function saveOption () {
    // @ts-ignore
    client.changeGlobalOption(option)
  }

  function setOneOption (e: React.ChangeEvent<HTMLInputElement>, key: string) {
    setOption({
      ...option,
      [key]: e.target.type == 'text' ? e.target.value : e.target.checked ? 'true' : 'false'
    })
  }

  if (option) {
    return (
      <div>
        <h2>设置</h2>
        {
          Object.entries(option).map(
            ([key, val]: [string, any]) => {
              return (
                <div>
                  {/* 如果取到undefined就直接取key自己 */}
                  <span>{aria2OptionNameMap[key] ?? key}</span>
                  {val == 'true' || val == 'false'
                    ? <input type="checkbox" checked={val == 'true'} onChange={(e) => setOneOption(e, key)}/> // 选项卡的类型,onChange修改时拿到事件对象e和当前的key,还要调用setOneOption
                    : <input type="text" value={val} onChange={(e) => setOneOption(e, key)}/> // 拿到事件对象e和当前的key,还要调用setOneOption
                  }
                </div>
              )
            }
          )
        }
        <button onClick={saveOption}>保存</button>
      </div>
    )
  }

  return <div>loading options...</div>
}

export default memo(Settings)