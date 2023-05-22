import UseImperativeHandleComponent from './components/useImperativeHandle';
import ParentGetchild from './components/parentGetchild.jsx';
import ParentGetchildTwo from './components/parentGetchild2.jsx';
import Key from './components/key';
import UseMemo from './components/useMemo';
import { FunComp, ClassComp } from './components/useState';
import UseLayoutEffect from './components/useLayoutEffect';
import CreatePortal from './components/createPortal';
import SyncUseState from './components/同步useState';
import TestContextComp from "./components/useContext";
import TestContestChild from "./components/useContext/childComp";
const fakeAccounts = [
  {
    id: 1,
    name: 'One',
    email: 'fake.email@example.com',
  },
  {
    id: 2,
    name: 'Two',
    email: 'fake.email@example.com',
  },
];

function App(props) {
  return (
    <div className='App'>
      <h1>当演示17、18不同版本的差异的时候注意查看main.jsx中对不同版本的正确使用</h1>
      <div className='react-version'>当前react渲染模式：{props.reactVersion}</div>
      <UseImperativeHandleComponent />
      <ParentGetchild />
      <ParentGetchildTwo />
      <ParentGetchildTwo />
      <Key accounts={fakeAccounts} />
      <UseMemo />
      <FunComp />
      <ClassComp />
      <UseLayoutEffect />
      <CreatePortal />
      <SyncUseState />
      <TestContextComp >
        <TestContestChild />
      </TestContextComp>
    </div>
  );
}

export default App;
