import React, { useState, useEffect } from "react";
import Circle from "./Circle";

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
      });
  }, []);

  console.log("PeopleInside hook:");
  console.log(peopleInside);

  return <div>{peopleInside.length >= 1 ? <Circle props={peopleInside[peopleInside.length -1]} />: null}</div>;
}

export default List;
