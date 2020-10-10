import React, { useState } from "react";
import { render } from "react-dom";
import Counter from "./Counter";
import Clock from "./Clock";

const App = () => {
  const [time, setTime] = useState(25 * 60);
  const [work, setWork] = useState(25);
  const [off, setOff] = useState(5);
  const [stop, setStop] = useState(false);
  return (
    <div className="container">
      <Counter
        work={work}
        setWork={setWork}
        off={off}
        setOff={setOff}
        stop={stop}
      />
      <Clock time={time} setTime={setTime} stop={stop} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
