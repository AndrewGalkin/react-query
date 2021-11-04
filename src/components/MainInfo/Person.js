import React from 'react';
import classes from "./Main.module.scss"

const Person = ({person}) => {
  return (
    <div className={`${classes.planet_person_info} animate__animated animate__backInDown animate__slow`}>
      <span>{person.name}</span>
      <span>{person.gender}</span>
      <span>{person.eye_color}</span>
    </div>
  );
};

export default Person;