// 这个组件练习forwardRef的用法
import React, { useRef, forwardRef } from 'react';
const FocusInput = forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref} />
  </div>
));

const ForwardRef = () => {
  const inputRef = useRef();
  const onButtonClick = () => {
    console.log(inputRef.current)
    // inputRef.current.focus();
  };

  return (
    <div>
      <h2>这是forwarRef组件：</h2>
      <button onClick={onButtonClick}>Focus the input</button>
      <FocusInput ref={inputRef} />
    </div>
  );
}

export default ForwardRef;
