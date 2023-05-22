import { createContext, useContext } from "react";

import { TestContext } from './index'


function ChildComp() {
  const { state, dispatch, } = useContext(TestContext)
  const increase = () => {
    dispatch({ type: 'updateInfo', name: 'man', age: ++state.age })
    // decrease()
  }
  const decrease = () => {
    dispatch({ type: 'updateInfo', name: 'man', age: --state.age })
  }
  return (
    <>
      <button onClick={increase}>增加数字</button>
      <button onClick={decrease}>减少数字</button>
      {JSON.stringify(state)}
    </>
  );
}

export default ChildComp
