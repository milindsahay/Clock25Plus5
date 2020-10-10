import React from "react";

const Buttons = ({ stop, setStop, setRefresh }) => {
  const toggle = () => {
    setStop(!stop);
  };
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <span role="button" onClick={toggle}>
            <i className="fa fa-play"></i>
          </span>

          <span className="ml-4" role="button" onClick={toggle}>
            <i className="fa fa-stop"></i>
          </span>

          <span className="ml-4" role="button" onClick={() => setRefresh(true)}>
            <i className="fa fa-refresh"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
