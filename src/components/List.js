import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import writeUserData from './Firebase';

function List() {
  const [rfid, setRfid] = useState("0260434848");
  const [peopleInside, setPeopleInside] = useState([]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1
  const day = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  useEffect(() => {
    fetch(`https://online.ntnu.no/api/v1/users/?rfid=${rfid}`)
      .then((res) => res.json())
      .then((res) =>
        setPeopleInside((peopleInside) => [...peopleInside, res.results[0]])
      );
    fetch(`https://online.ntnu.no/api/v1/users/?rfid=0317066520`)
      .then((res) => res.json())
      .then((res) => {
        setPeopleInside((peopleInside) => [...peopleInside, res.results[0]]);
      writeUserData(`${day}-${month}-${year}`, `${hour}:${min}:${sec}`, res.results[0].id, res.results[0].first_name, res.results[0].last_name)});
  }, []);

  console.log("PeopleInside hook:");
  console.log(`${day}-${month}-${year}  ${hour}:${min}:${sec}`)

  return <div>{peopleInside.length >= 1 ? <Circle props={peopleInside[peopleInside.length -1]} /> : null}</div>;
}

export default List;
