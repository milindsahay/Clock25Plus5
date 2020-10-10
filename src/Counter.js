import React from "react";

const Counter = (props) => {
  const { work, setWork, off, setOff, stop } = props;

  const increaseWork = () => {
    setWork(work + 1);
  };

  const decreaseWork = () => {
    if (work > 0) {
      setWork(work - 1);
    }
  };

  const increaseOff = () => {
    setOff(off + 1);
  };

  const decreaseOff = () => {
    if (off > 0) {
      setOff(off - 1);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-3 text-center offset-3">Session length</div>
        <div className="col-3 text-left offset-1">Break length</div>
      </div>
      <div className="row">
        <div className="col-1 offset-3">
          <div role="button" onClick={stop ? increaseWork : undefined}>
            <i className="fa fa-angle-up"></i>
          </div>
          <div role="button" onClick={stop ? decreaseWork : undefined}>
            <i className="fa fa-angle-down"></i>
          </div>
        </div>

        <div className="col-2 align-self-center">{work}</div>

        <div className="col-1 offset-1">
          <div role="button" onClick={stop ? increaseOff : undefined}>
            <i className="fa fa-angle-up"></i>
          </div>
          <div role="button" onClick={stop ? decreaseOff : undefined}>
            <i className="fa fa-angle-down"></i>
          </div>
        </div>

        <div className="col-2 align-self-center ">{off}</div>
      </div>
    </div>
  );
};

export default Counter;
