import { useLayoutEffect, useEffect, useState } from "react";

function UseLayoutEffect() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);
  // console.log("render", value);

  return (
    <div className="component">
      <h2>演示useLayoutEffect的用法</h2>
      <button onClick={() => setValue(0)}>value: {value}</button>
    </div>
  );
}

export default UseLayoutEffect;
