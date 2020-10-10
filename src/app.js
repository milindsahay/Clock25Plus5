import React, { useState } from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import Clock from "./Clock";
import Buttons from "./Buttons";

const App = () => {
  const [work, setWork] = useState(0.1);
  const [off, setOff] = useState(5);
  const [stop, setStop] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [end, setEnd] = useState(false);
  //To add => refresh
  return (
    <div className="container">
      <Counter
        work={work}
        setWork={setWork}
        off={off}
        setOff={setOff}
        stop={stop}
      />
      <Clock
        value={end ? off * 60 : work * 60}
        stop={stop}
        setStop={setStop}
        end={end}
        setEnd={setEnd}
      />
      <Buttons
        stop={stop}
        setStop={setStop}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
};

render(<App />, document.getElementById("root"));
