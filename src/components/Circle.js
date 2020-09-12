import React, { useEffect, useState } from "react";
import "./Circle.css";

export default function Circle() {
  const [user, setUser] = useState([]);
  const [click, setClick] = useState(0);
  useEffect(() => {
    fetch("https://online.ntnu.no/api/v1/users/?rfid=0260434848")
      .then((res) => res.json())
      .then((res) => setUser(res.results[0]));
  }, []);
  const width = 500;
  const r = 700 / (Math.PI * 2);
  const d = r * 2;
  const y = (width - d) / 2;
  const pathData = [
    "M",
    width / 2,
    y,
    "a",
    r,
    r,
    0,
    0,
    1,
    0,
    d,
    "a",
    r,
    r,
    0,
    0,
    1,
    0,
    -d,
  ];

  const number_people = [
    [700 / 12, 700],
    [(700 / 12) * 2, 700],
    [(700 / 12) * 3, 700],
    [(700 / 12) * 4, 700],
    [(700 / 12) * 5, 700],
    [(700 / 12) * 6, 700],
    [(700 / 12) * 7, 700],
    [(700 / 12) * 8, 700],
    [(700 / 12) * 9, 700],
    [(700 / 12) * 10, 700],
    [(700 / 12) * 11, 700],
    [(700 / 12) * 12, 700]
  ];
  console.log(click);

  return (
    <div className="container">
      <svg height={width} width={width} className="svg">
        <path
          className="circle"
          d={pathData.join(" ")}
          fill="transparent"
          stroke="#0D5474"
          strokeWidth="20"
          strokeDasharray={number_people[click]}

        ></path>
        <text
          className="text"
          x="50%"
          y="50%"
          fill="white"
          textAnchor="middle"
          onClick={() => setClick(click + 1)}
        >
          {user.first_name} {user.last_name}
        </text>
      </svg>
    </div>
  );
}
