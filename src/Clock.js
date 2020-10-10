import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const { value, stop, setStop, end, setEnd } = props;
  const [time, setTime] = useState(value);

  //For updates in Counter while we pause the timer
  useEffect(() => {
    setTime(value);
  }, [value]);

  //To rerender every sec, swapping at timeouts, stopping the clock and clearing the timer on unmount;
  useEffect(() => {
    {
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

  let display = Math.floor(time / 60) + ":" + (time % 60);
  return (
    <div>
      <div className="row">
        <h1 className="col-8 text-center">{display}</h1>
      </div>
    </div>
  );
};

export default Clock;
