import { combineReducers } from 'redux';
import editorReducer from '../page/editor/store/reducer';

const reducer = combineReducers({
  editor: editorReducer
})
export default reducer;