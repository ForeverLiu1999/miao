import Aria2Client from "./aria2-client"

export interface IProps {
  client: Aria2Client
}

export default function NewTask(props: IProps) {
  // var uris = useInput("")

  return (
    <div>
      <div>
        选项
      </div>
      <div>
        <div>
          下载链接,一行一个:
        </div>
        {/* <textarea cols={30} rows={10} {...uris}></textarea> */}
      </div>
    </div>
  )
}