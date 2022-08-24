import React, { useRef, useImperativeHandle, useState } from "react";
import "./index.scss";

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    data: { name: "man" },
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return <input ref={inputRef} type="text" />;
});

const Parent = (props) => {
  const [name, setName] = useState("");
  const fancyInputRef = useRef();

  const clickHandle = () => {
    console.log(fancyInputRef.current);
    setName(fancyInputRef.current.data?.name);
    fancyInputRef.current.focus();
  };
  return (
    <div className="useImperativeHandle-component component">
      <h2>
        函数组件，父组件获取子组件状态、调用子组件方法：useImperativeHandle钩子
      </h2>
      <button
        onClick={clickHandle} // 调用子组件的方法
      >
        点击我获取子组件传给的数据和方法
      </button>
      <div>子组件的name是：{name}</div>
      <FancyInput ref={fancyInputRef} />
    </div>
  );
};

export default Parent;
