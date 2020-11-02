import React, { useState } from 'react'
import style from './index.module.scss'
import { ajax, fet} from './http'
enum creatorTypes {
  netError = 'netError',
  httpRequest = 'httpRequest',
  jsError = 'jsError',
  asyncError = 'asyncError',
}
const Creator = () => {
  const [creatorType, setCreatorType] = useState<null | creatorTypes>(null)
  const [reqType, setReqType] = useState('ajax')
  const handleJsError = () => {
    throw new TypeError('error,this is a type error')
  }
  const handleAsyncError = () => {
    Promise.reject("this is reject reason")
  }
  const renderBody = () => {
    if (creatorType) {
      switch (creatorType) {
        case creatorTypes.netError:
          return <>
          <div className={style.item}>
            <input type="radio" name="ajax_type" id="ajax" checked={reqType === 'ajax'} onChange={() => {
              setReqType('ajax')
            }}/>
            <label htmlFor="">ajax方式</label>
          </div>
          <div className={style.item}>
            <input type="radio" name="ajax_type" id="fetch" checked={reqType === 'fetch'} onChange={() => {
              setReqType('fetch')
            }}/>
            <label htmlFor="">fetch方式</label>
          </div>
          <div className={style.item}>
            {/* TODO: 添加报错方法 */}
            <button>跨域报错</button>
            <button>400、500报错</button>
          </div>
          </>
        case creatorTypes.httpRequest:
          return <>
          <div className={style.item}>
            <input type="radio" name="ajax_type" id="ajax" checked={reqType === 'ajax'} onChange={(e) => {
              setReqType('ajax')
            }}/>
            <label htmlFor="">ajax方式</label>
          </div>
          <div className={style.item}>
            <input type="radio" name="ajax_type" id="fetch" checked={reqType === 'fetch'} onChange={() => {
              setReqType('fetch')
            }}/>
            <label htmlFor="">fetch方式</label>
          </div>
          <div className={style.item}>
            {/* TODO: 添加请求方法 */}
            <button>发送请求</button>
          </div>
          </>
        case creatorTypes.jsError:
          return <>
          <div className={style.item}>
            <button onClick={handleJsError}>产生一个js错误</button>
          </div>
          </>
        case creatorTypes.asyncError:
          return <>
          <div className={style.item}>
            <button onClick={handleAsyncError}>产生一个异步错误</button>
          </div>
          </>
        default:
          return null
      }

    }
    return null
  }

  return <div className={style.container}>
    <header className={style.header}>
      <button onClick={()=>setCreatorType(creatorTypes.netError)}>网络错误</button>
      <button onClick={()=>setCreatorType(creatorTypes.httpRequest)}>网络请求</button>
      <button onClick={()=>setCreatorType(creatorTypes.jsError)}>js运行错误</button>
      <button onClick={()=>setCreatorType(creatorTypes.asyncError)}>异步错误</button>
    </header>
    <div className={style.body}>
      {
        renderBody()
      }
    </div>
  </div>
}

export default Creator