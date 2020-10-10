import React from "react";

const Buttons = ({ stop, setStop, refresh, setRefresh }) => {
  const toggle = () => {
    setStop(!stop);
  };
  return (
    <div>
      <div className="row">
        <div className="col-1">
          <span role="button" onClick={toggle}>
            <i className="fa fa-play"></i>
          </span>
        </div>
        <div className="col-1">
          <span role="button" onClick={toggle}>
            <i className="fa fa-stop"></i>
          </span>
        </div>
        <div className="col-1">
          <span role="button" onClick={() => setRefresh(true)}>
            <i className="fa fa-refresh"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
