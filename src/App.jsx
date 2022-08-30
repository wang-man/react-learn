import { useState } from "react";
import UseImperativeHandleComponent from "./components/useImperativeHandle";
import ParentGetchild from "./components/parentGetchild.jsx";
import ParentGetchildTwo from "./components/parentGetchild2.jsx";
import Key from "./components/key";

const fakeAccounts = [
  {
    id: 1,
    name: "One",
    email: "fake.email@example.com",
  },
  {
    id: 2,
    name: "Two",
    email: "fake.email@example.com",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseImperativeHandleComponent />
      <ParentGetchild />
      <ParentGetchildTwo />
      <Key accounts={fakeAccounts} />
    </div>
  );
}

export default App;
