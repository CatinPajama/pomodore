import { useState } from "react";

import "./App.css";

import Settings from "./Settings"
import Timer from "./Timer"


function App() {

  const [isSettings, setIsSettings] = useState(false);
  const [workTime, setWorkTime] = useState(1);
  const [paused, setPause] = useState(false);
  const [breakTime, setBreakTime] = useState(1);
  return (
    <div id="App">
      {isSettings ? <Settings setIsSettings={setIsSettings} paused={paused} setPause={setPause}/> : <Timer workTime={workTime} breakTime={breakTime} setIsSettings={setIsSettings} />}
    </div>
  )
}

export default App;
