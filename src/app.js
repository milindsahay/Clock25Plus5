/** @jsx jsx */
import React, { useState } from "react";
import { render } from "react-dom";
import { jsx, css, Global } from "@emotion/core";

import Counter from "./Counter";
import Clock from "./Clock";
import Buttons from "./Buttons";

const App = () => {
  const [work, setWork] = useState(25);
  const [off, setOff] = useState(5);
  const [stop, setStop] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [end, setEnd] = useState(false);
  //To add => refresh
  return (
    <div
      className="container"
      css={css`
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        padding: 2em;
        background-color: white;
        max-width: 600px;
        transition: all 1.5s;
      `}
    >
      <Global
        styles={css`
          body {
            background: cyan;
            margin: 0;
            padding: 0;
            min-height: "100vh";
            max-width: "100vw";
            transition: all 1.5s;
          }
        `}
      />
      <h1 className="text-center">25 + 5 Clock</h1>
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
