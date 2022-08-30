import { useState, useCallback, memo, useMemo } from "react";

function Parent() {
  // 产品名称、价格
  const [price, setPrice] = useState(0);

  // useMemo返回的不是组件，要么是react的element，要么是其他简单数据类型，因此不能直接作为标签使用
  const memo_child = useMemo(function () {
    console.log("render2..."); // 只会打印一次
    return (
      <>
        <div>这是useMemo包装的子组件</div>
      </>
    );
  }, []);
  // 得到的是一个组件
  // console.log("memo_child", memo_child);

  return (
    <div className="component">
      <h2>演示useMemo的用法</h2>
      <button onClick={() => setPrice(price + 1)}>价钱+1： {price}</button>
      <div>
        useMemo返回的不是组件，要么是react的element，要么是其他简单数据类型，因此不能直接作为标签使用
      </div>

      {memo_child}
    </div>
  );
}

export default Parent;
