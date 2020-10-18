import React, { useState } from "react";
import "./Circle.css";
import { width, pathData, number_people } from "../constants/circlePoints";

export default function Circle({ props: peopleInside }) {
  const [click, setClick] = useState(0);
  const [progress, setProgress] = useState(peopleInside);

  return (
    <div className="container">
      <svg height={width} width={width} className="svg">
        <path
          d={pathData.join(" ")}
          fill="transparent"
          stroke="#242b2e"
          strokeWidth="20"
        ></path>
        <path
          className="circle"
          d={pathData.join(" ")}
          fill="transparent"
          stroke="#0D5474"
          strokeWidth="20"
          strokeDasharray={number_people[progress]}
          onClick={() => {
            setClick(1);
            setProgress(progress);
          }}
          onAnimationEnd={() => setClick(0)}
          click={click}
        ></path>
        <text className="text" x="50%" y="50%" fill="white" textAnchor="middle">
          {peopleInside} / 12
        </text>
      </svg>
    </div>
  );
}
