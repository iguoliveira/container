// Components
import { ClickerContainer } from "./components/clicker-container/clicker";
import { PassiveUpgrade } from "./components/passive-upgrade/passiveUpgrade";
import { Navbar } from "./components/navbar/navbar";

import { useState } from "react";


export function App() {
  const [ clicks, setClicks ] = useState(0)
  const [ clicksAdd, setClicksAdd ] = useState(0)
  const [ income, setIncoming ] = useState(0)

  return (
    <div>
      <Navbar />
      <div className="mt-20 flex justify-around">
        <ClickerContainer clicks={clicks} setClicks={setClicks} clicksAdd={clicksAdd} income={income} />
        <div>
          <PassiveUpgrade clicks={clicks} clicksAdd={clicksAdd} setClicksAdd={setClicksAdd} name={"Moriko-san"} setIncoming={setIncoming} />
        </div>
      </div>
    </div>
  );
}