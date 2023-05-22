import { createContext, useState } from "react";
import useStore from './useStore';

export const TestContext = createContext({});


function TestContextComp(props) {
  const { children } = props;
  const { state, dispatch } = useStore();
  const context = { state, dispatch }
  return (
    <div className="component">
      <TestContext.Provider value={context}>
        {children}
      </TestContext.Provider>
    </div>
  );
}

export default TestContextComp
