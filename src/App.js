import "./app.css"
import { ClickerContainer } from "./components/clicker-container";
import { UpgradeContainer } from "./components/upgrade-container";
import { useState } from "react";

function App() {
  const [clicks, setClicks] = useState(0);
  const [preco, setPreco] = useState(10);
  return (
    <div className="main-container">
      <ClickerContainer clicks={clicks} setClicks={setClicks}/>
      <UpgradeContainer preco={preco} setPreco={setPreco} setClicks={setClicks} clicks={clicks}/>
    </div>
  );
}

export default App;
