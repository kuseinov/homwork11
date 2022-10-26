import React, { useEffect, useRef } from "react";
import { CardStyle } from "../styles/Style";

const Card = () => {
  const ref = useRef();

  const colorArray = [
    "aliceblue",
    "antiquewhite",
    "aqua",
   
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      ref.current.style.background =
        colorArray[Math.round(Math.random() * colorArray.length)];
    }, 2000);
  }, [ref, colorArray]);

  return <CardStyle ref={ref}></CardStyle>;
};

export default Card;
