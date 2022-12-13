import { Component, useState } from "react";
import useSyncCallback from '../hooks/useSyncCallbback';
function SyncUseState() {
  // 产品名称、价格
  const [price, setPrice] = useState(0);

  // 原始样子。会发现打印的price始终比render出来的晚一步
  const increase1 = () => {
    setPrice(price + 1);
    func1();
  };
  // 使用同步hook的样子。打印出来的price跟render出来的同步
  const increase2 = () => {
    setPrice(price + 1);
    func2();
  };

  const func1 = () => {
    console.log(price)
  }
  const func2 = useSyncCallback(() => {
    console.log(price)
  })

  return (
    <div className="component">
      <h2>演示useState异步问题的解决方法</h2>
      <button onClick={increase1}>原始：价钱+1： {price}</button>
      <button onClick={increase2}>同步：价钱+1： {price}</button>
      <div>演示useState异步的问题及其解决方法</div>
      <div>
        useState因为异步的原因，当改变state后立马获取则得到的是上次的值。要解决这个问题，可以这样做。实现了一个名为useSyncCallback的自定义hooks来解决这个问题。
      </div>
      <div>
        进入useSyncCallback发现，其实就是将callback包裹到一个新组件中的useEffect，利用组件完整的生命周期，延后执行callback而已，并不是真正的同步。useEffect会在每次函数式组件render之后执行，所以这个时候执行的callBack周期在render后执行的，这个时候已经拿到了新的状态。
      </div>
    </div>
  );
}

export default SyncUseState
