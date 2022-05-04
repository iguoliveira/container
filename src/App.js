import { ClickerContainer } from "./components/clicker-container";
import { UpgradeContainer } from "./components/upgrade-container";
import { Navbar } from "./components/navbar/Navbar";

import { useState } from "react";


export function App() {
  const [ clicks, setClicks ] = useState(0)
  const [ clicksAdd, setClicksAdd ] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-around">
        <ClickerContainer clicks={clicks} setClicks={setClicks} clicksAdd={clicksAdd}/>
        <div>
          <UpgradeContainer clicks={clicks} clicksAdd={clicksAdd} setClicksAdd={setClicksAdd} name={"Moriko-san"}/>
        </div>
      </div>
    </div>
  );
}