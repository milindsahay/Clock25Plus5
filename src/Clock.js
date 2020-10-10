/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx, css } from "@emotion/core";

const Clock = (props) => {
  const { value, stop, setStop, refresh, setRefresh, end, setEnd } = props;
  const [time, setTime] = useState(value);

  //For updates in Counter while we pause the timer
  useEffect(() => {
    setTime(value);
  }, [value]);

  //To rerender every sec, swapping at timeouts, stopping the clock and clearing the timer on unmount;
  useEffect(() => {
    {
      if (refresh) {
        setTime(value);
        setRefresh(!refresh);
      }

      if (time == -1) {
        setEnd(!end);
        setTime(value);
      }

      if (!stop) {
        var timer = setTimeout(() => {
          setTime(time - 1);
        }, 1000);
      }
      return () => clearTimeout(timer);
    }
  });
  let Minutes = Math.floor(time / 60);
  let Seconds = time % 60;
  let display =
    (Minutes > 9 ? Minutes : "0" + Minutes) +
    ":" +
    (Seconds > 9 ? Seconds : "0" + Seconds);
  return (
    <div>
      <div className="row">
        <h1
          className="col-12 text-center"
          css={css`
            color: ${time < 60 ? "red" : "black"};
          `}
        >
          {display}
        </h1>
      </div>
    </div>
  );
};

export default Clock;
