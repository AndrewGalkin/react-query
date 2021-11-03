import React from 'react';
import classes from "./Main.module.scss";

const Person = ({person}) => {
  return (
    <div className={classes.planet_person_info}>
      <h3>{person.name}</h3>
      <span>{person.gender}</span>
      <p>{person.eye_color}</p>
    </div>
  );
};

export default Person;