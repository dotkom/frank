import React, { useEffect, useState } from "react";
import "./Circle.css";
import {width, pathData, number_people} from '../constants/circlePoints'

export default function Circle() {
  const [user, setUser] = useState([]);
  const [click, setClick] = useState(0);
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    fetch("https://online.ntnu.no/api/v1/users/?rfid=0260434848")
      .then((res) => res.json())
      .then((res) => setUser(res.results[0]));
  }, []);


  console.log(click);

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
          onClick={() => {setClick(1); setProgress(progress +1);}}
          onAnimationEnd={() => setClick(0)}
          click={click}
        ></path>
        <text
          className="text"
          x="50%"
          y="50%"
          fill="white"
          textAnchor="middle"
        >
          {user.first_name} {user.last_name}
        </text>
      </svg>
    </div>
  );
}
