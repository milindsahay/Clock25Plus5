import React, { useState } from "react";
import { render } from "react-dom";

import Counter from "./Counter";
import Clock from "./Clock";
import Buttons from "./Buttons";

const App = () => {
  const [work, setWork] = useState(25);
  const [off, setOff] = useState(5);
  const [stop, setStop] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [end, setEnd] = useState(false);
  return (
    <div className="container my-container">
      <div className="title text-center">Timer</div>
      <Counter
        work={work}
        setWork={setWork}
        off={off}
        setOff={setOff}
        stop={stop}
      />
      <h2 className="text-center">{end ? "Break" : "Session"}</h2>
      <Clock
        value={end ? off * 60 : work * 60}
        stop={stop}
        setStop={setStop}
        refresh={refresh}
        setRefresh={setRefresh}
        end={end}
        setEnd={setEnd}
      />
      <Buttons stop={stop} setStop={setStop} setRefresh={setRefresh} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
