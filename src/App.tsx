import { useState } from "react";
import "./index.less";
import logo from "../assets/logo.svg";
import { BackWard } from "./BackWard";
import TaskList from "./List.js";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div id="container">
      <img src={logo} alt="logo" />
      <h1>Mori: Vite - React!</h1>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <BackWard />
      {/* <TaskList/> */}
    </div>
  );
};

export default App;
