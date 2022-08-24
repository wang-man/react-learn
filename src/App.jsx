import { useState } from "react";
import UseImperativeHandleComponent from "./components/useImperativeHandle";
import ParentGetchild from "./components/parentGetchild.jsx";
import ParentGetchildTwo from "./components/parentGetchild2.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <UseImperativeHandleComponent />
      <ParentGetchild />
      <ParentGetchildTwo />
    </div>
  );
}

export default App;
