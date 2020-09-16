import React, { useState, useEffect } from "react";
import Circle from "./Circle";

function List() {
  const [user, setUser] = useState({});
  const [rfid, setRfid] = useState("0260434848");
  const peopleInside = [{
    user: {},
    rfid: ''
  }];

  useEffect(() => {
    fetch(`https://online.ntnu.no/api/v1/users/?rfid=${rfid}`)
      .then((res) => res.json())
      .then((res) => setUser(res.results[0]));
  }, []);

  useEffect(() => {
    fetch(`https://online.ntnu.no/api/v1/users/?rfid=0317066520`)
      .then((res) => res.json())
      .then((res) => setUser(res.results[0]));
  }, []);

  const last_person = peopleInside[peopleInside.length - 1];
  console.log("PeopleInside hook:");
  console.log(peopleInside);
  console.log("last item");
  console.log(last_person);

  return (
    <div>
      {/*<Circle props={user} />*/}
    </div>
  );
}

export default List;
