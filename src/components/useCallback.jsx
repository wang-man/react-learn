import { useState, useCallback, memo, useMemo } from "react";

// 使用memo是为了排除子组件在未接受父组件属性而被动跟随render的情况
const Child = memo(function ({ val, onChange }) {
  // console.log("render...");      // 测试的时候打开
  return (
    <>
      <div>这是子组件</div>
      <input value={val} onChange={onChange} />
    </>
  );
});

function Parent() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  // 每次父组件渲染，返回的是不同的函数引用。使用useCallback后能保证对该函数的引用不变，从而避免子组件的无必要渲染
  const onChange1 = useCallback((evt) => {
    setVal1(evt.target.value);
  }, []);
  const onChange2 = useCallback((evt) => {
    setVal2(evt.target.value);
  }, []);

  // 因为useCallback返回的也是函数，因此可以直接作为组件使用标签形式被使用。但是其实这样的组件做不到像memo的效果，没有任何用。
  const Child2 = useCallback((evt) => {
    console.log(11111);
    return (
      <div>
        尝试使用useCallback包裹的第二类组件，但其实这样的组件做不到像memo的效果，没有任何用。
      </div>
    );
  }, []);
  // console.log("Child2", Child2);   // 得到的是一个函数
  return (
    <div className="component">
      <h2>演示useCallback的用法</h2>
      <div>
        每次父组件渲染，造成传给子组件的是不同的函数引用。使用useCallback后能保证对该函数的引用不变，从而避免子组件的无必要渲染
      </div>
      <Child val={val1} onChange={onChange1} />
      <Child val={val2} onChange={onChange2} />
      <Child2 />
    </div>
  );
}

export default Parent;
