import { useState } from "react";
import UseImperativeHandleComponent from "./components/useImperativeHandle";
import ParentGetchild from "./components/parentGetchild.jsx";
import ParentGetchildTwo from "./components/parentGetchild2.jsx";
import Key from "./components/key";
import UseMemo from "./components/useMemo";
import { FunComp, ClassComp } from "./components/useState";

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
  return (
    <div className="App">
      <UseImperativeHandleComponent />
      <ParentGetchild />
      <ParentGetchildTwo />
      <ParentGetchildTwo />
      <Key accounts={fakeAccounts} />
      <UseMemo />
      <FunComp />
      <ClassComp />
    </div>
  );
}

export default App;
