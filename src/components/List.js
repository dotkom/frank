import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import writeUserData from "./Firebase";
import "./List.css";
import { TextField } from "@dotkomonline/design-system";

function List() {
  const [component, setComponent] = useState(true);
  const [rfid, setRfid] = useState("0260434848");
  const [peopleInside, setPeopleInside] = useState([]);
  const [person, setPerson] = useState({
    first_name: "",
    last_name: "",
    phonenumber: "",
    email: "",
  });

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
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
        writeUserData(
          `${day}-${month}-${year}`,
          `${hour}:${min}:${sec}`,
          res.results[0].id,
          res.results[0].first_name,
          res.results[0].last_name
        );
      });
  }, [rfid]);

  const updatePerson = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <div className="main">
      {component ? (
        <div className="circle">
          {peopleInside.length > 0 ? (
            <div>
              <Circle props={peopleInside.length} />
            </div>
          ) : null}
          <div className="list-of-people">
            {peopleInside.map((index, person) => (
              <div key={person + index}>
                {peopleInside[person].first_name}{" "}
                {peopleInside[person].last_name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="form">
          <form>
            <label>Navn</label>
            <TextField type="text"></TextField>
            <label>Etternavn</label>
            <TextField type="text"></TextField>
            <label>Telefonnummer</label>
            <TextField
              onChange={updatePerson}
              name="phonenumber"
              value={person.phonenumber}
              type="number"
            ></TextField>
            <label>E-post</label>
            <TextField
              onChange={updatePerson}
              name="email"
              value={person.email}
              type="email"
              pattern=".+@.+"
              errorMEssage="Not and email"
            ></TextField>
          </form>
        </div>
      )}
      <div
        className={`arrow ${component}`}
        onClick={() => setComponent(!component)}
      />
    </div>
  );
}

export default List;
