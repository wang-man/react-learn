import * as types from './actionTypes';

const editorReducer = (state = {
  isLoading: false,
}, action) => {
  switch (action.type) {
    case types.GET_HOME_DATA:
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default editorReducer;
