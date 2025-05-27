// 实现一个自动计时器的hook
// 这个hook只是为了回顾hooks的写法，并没有什么难度和意义

import {useState, useEffect} from 'react'

function useTimer(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setCount(prevCount => prevCount + 1);
    }, 1000)

    // 清理定时器
    return ()=>clearInterval(intervalId)
  }, [])

  return {count}
}

export default function TimerCompenent(){
  const {count} = useTimer();

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}