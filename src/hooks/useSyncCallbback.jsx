/*
 * @lastTime: 2021-03-05 15:29:11
 * @Description: 同步hooks
 */

import { useEffect, useState, useCallback } from 'react'

const useSyncCallback = callback => {
  const [proxyState, setProxyState] = useState({ current: false })

  const Func = useCallback(() => {
    setProxyState({ current: true })
  }, [proxyState])

  // 这个钩子仅仅是为了让
  useEffect(() => {
    if (proxyState.current === true) setProxyState({ current: false })
  }, [proxyState])

  useEffect(() => {
    console.log('testttttt')  // 会执行两次，首次执行，Func执行后，current改变
    proxyState.current && callback()
  })

  return Func
}

export default useSyncCallback
/*
 * @lastTime: 2021-02-26 15:29:11
 * @param: callback为回调函数
 * @Description: 用法 const newFunc = useSyncCallback(yourCallback)
 */