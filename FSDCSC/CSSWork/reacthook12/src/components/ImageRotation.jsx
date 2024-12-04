import React, { useState } from "react";
import img1 from "./apj.jpeg";
const ImageRotation = () => {
  const [width, setWidth] = useState(100);
  const [height, setheight] = useState(100);
  const [rotatedata, setRotate] = useState(0);

  const widthImg = () => {
    setWidth(width + 10);
  };
  const widthdecrease = () => {
    setWidth(width - 10);
  };
  const heightImg = () => {
    setheight(height + 10);
  };
  const heightdecrease = () => {
    setheight(height - 10);
  };
  const clockwise = () => {
    setRotate(rotatedata + 10);
  };
  const anticlockwise = () => {
    setRotate(rotatedata - 10);
  };

  return (
    <>
      <img
        src={img1}
        style={{
          width: width,
          height: height,
          transform: `rotate(${rotatedata}deg)`,
        }}
      />
      <br></br>
      <button onClick={widthImg}>Increase Width</button>
      <br></br>
      <button onClick={widthdecrease}>Decrease Width</button>
      <br></br>
      <button onClick={heightImg}>Increase height</button>
      <br></br>
      <button onClick={heightdecrease}>Decrease height</button>
      <br></br>
      <button onClick={clockwise}>Rotate Clockwise</button>
      <br></br>
      <button onClick={anticlockwise}>Rotate Anticlockwise</button>
    </>
  );
};

export default ImageRotation;
