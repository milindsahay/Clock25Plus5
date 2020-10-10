import React, { useState, useEffect } from "react";

const Clock = (props) => {
  const { time, setTime, stop } = props;

  useEffect(() => {
    {
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
