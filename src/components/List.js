import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import writeUserData from './Firebase';

function List() {
  const [rfid, setRfid] = useState("0260434848");
  const [peopleInside, setPeopleInside] = useState([]);

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
      writeUserData(res.results[0].id, res.results[0].first_name, res.results[0].last_name,)});
  }, []);

  console.log("PeopleInside hook:");
  console.log(peopleInside);

  return <div>{peopleInside.length >= 1 ? <Circle props={peopleInside[peopleInside.length -1]} />: null}</div>;
}

export default List;
