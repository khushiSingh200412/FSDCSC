import React, { useState } from "react";

const ReactState = () => {
  const [increasedata, setIncrease] = useState(0);
  const increase = () => {
    setIncrease(increasedata + 1);
  };
  const decrease = () => {
    setIncrease(increasedata - 1);
  };
  const reset = () => {
    setIncrease(0);
  };

  return (
    <>
      <div
        style={{
          height: "400px",
          width: "400px",
          background: "pink",
          margin: "0px auto",
          padding: "50px",
          boxSizing: "border-box",
          border: "2px solid black",
        }}
      >
        <p
          style={{
            height: "40px",
            width: "300px",
            background: "blue",
            color: "white",
            fontSize: "25px",
          }}
        >
          {increasedata}
        </p>
        <br></br>
        <button
          style={{
            height: "40px",
            width: "300px",
            background: "green",
            color: "white",
            border: "1px solid white",
            fontSize: "20px",
          }}
          type="button"
          onClick={increase}
        >
          Increase
        </button>
        <br></br>
        <br></br>
        <button
          style={{
            height: "40px",
            width: "300px",
            background: "green",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
          }}
          type="button"
          onClick={decrease}
        >
          Decrease
        </button>
        <br></br>
        <br></br>
        <button
          style={{
            height: "40px",
            width: "300px",
            background: "green",
            color: "white",
            fontSize: "20px",
            border: "1px solid white",
          }}
          type="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default ReactState;
