
import { useReducer, useState } from 'react';


export interface TestState {
  [key: string]: string | number
}

interface TestAction {
  type: 'updateInfo' | 'updateValue' | 'updateValidateResult';
  name: string;
  age: number;
}

function reducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case 'updateInfo':
      return {
        ...state,
        name: action.name,
        age: action.age,
      }
    default:
      return state
  }
}

function useStore() {
  const [state, dispatch] = useReducer(reducer, { name: 'man', age: 20 })
  return {
    state,
    dispatch
  }
}

export default useStore
